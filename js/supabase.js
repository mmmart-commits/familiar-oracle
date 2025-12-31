/**
 * SUPABASE INTEGRATION
 * Cross-device session sync
 */

// Replace these with your actual values
const SUPABASE_URL = 'https://qrgibphjzvpkaojyaiei.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyZ2licGhqenZwa2FvanlhaWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNTE4NDcsImV4cCI6MjA4MjcyNzg0N30.fSk73B0GIoYBXJkZ6mmBOgIBkq-p-3bNkrEuLzMQTlQ';

// Initialize Supabase client (will be set when library loads)
let supabaseClient = null;
let supabaseReady = false;

const SupabaseSync = {
    currentUser: null,
    
    /**
     * Wait for Supabase to be ready
     */
    async waitForSupabase() {
        if (supabaseReady) return true;
        
        return new Promise((resolve) => {
            const checkSupabase = () => {
                if (typeof window.supabase !== 'undefined' && !supabaseClient) {
                    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                    supabaseReady = true;
                    console.log('Supabase initialized');
                    
                    // Set up auth listener
                    supabaseClient.auth.onAuthStateChange((event, session) => {
                        if (event === 'SIGNED_IN') {
                            SupabaseSync.currentUser = session.user;
                            SupabaseSync.syncSessions();
                            updateAuthUI();
                        } else if (event === 'SIGNED_OUT') {
                            SupabaseSync.currentUser = null;
                            updateAuthUI();
                        }
                    });
                    
                    resolve(true);
                } else if (supabaseReady) {
                    resolve(true);
                } else {
                    setTimeout(checkSupabase, 100);
                }
            };
            checkSupabase();
        });
    },
    
    /**
     * Initialize - check if user is logged in
     */
    async init() {
        await this.waitForSupabase();
        
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            this.currentUser = session.user;
            console.log('User logged in:', this.currentUser.id);
            await this.loadSessionsFromCloud();
        }
        
        updateAuthUI();
    },
    
    /**
     * Sign in with magic link (passwordless email)
     */
async signIn(email) {
    await this.waitForSupabase();
    
    const { data, error } = await supabaseClient.auth.signInWithOtp({
        email: email,
        options: {
            emailRedirectTo: 'https://mmmart-commits.github.io/familiar-oracle/'
        }
    });        
        if (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
        
        return { success: true, message: 'Check your email for the login link!' };
    },
    
    /**
     * Sign out
     */
    async signOut() {
        await this.waitForSupabase();
        
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            console.error('Sign out error:', error);
        }
        this.currentUser = null;
        updateAuthUI();
    },
    
    /**
     * Save session to Supabase
     */
    async saveSession(session) {
        if (!supabaseReady || !this.currentUser) {
            console.log('Not logged in - saving locally only');
            return;
        }
        
        const { data, error } = await supabaseClient
            .from('sessions')
            .upsert({
                id: session.id,
                user_id: this.currentUser.id,
                updated_at: new Date().toISOString(),
                session_data: session
            });
        
        if (error) {
            console.error('Error saving to Supabase:', error);
        } else {
            console.log('Session saved to cloud');
        }
    },
    
    /**
     * Load all sessions from Supabase
     */
    async loadSessionsFromCloud() {
        if (!supabaseReady || !this.currentUser) return [];
        
        const { data, error } = await supabaseClient
            .from('sessions')
            .select('session_data')
            .eq('user_id', this.currentUser.id)
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading from Supabase:', error);
            return [];
        }
        
        // Extract session_data from each row
        return data.map(row => row.session_data);
    },
    
    /**
     * Merge cloud sessions with local sessions
     */
    async syncSessions() {
        if (!supabaseReady || !this.currentUser) return;
        
        const cloudSessions = await this.loadSessionsFromCloud();
        const localSessions = AppState.sessions || [];
        
        // Merge by ID, preferring most recent updated_at
        const merged = {};
        
        [...localSessions, ...cloudSessions].forEach(session => {
            if (!merged[session.id] || 
                new Date(session.completedAt || session.timestamp) > 
                new Date(merged[session.id].completedAt || merged[session.id].timestamp)) {
                merged[session.id] = session;
            }
        });
        
        AppState.sessions = Object.values(merged);
        saveSessions(); // Save merged sessions locally
        
        console.log(`Synced ${AppState.sessions.length} sessions`);
        
        // Refresh archive if currently viewing it
        if (AppState.currentView === 'view-archive') {
            renderArchive();
        }
    },
    
    /**
     * Delete session from Supabase
     */
    async deleteSession(sessionId) {
        if (!supabaseReady || !this.currentUser) return;
        
        const { error } = await supabaseClient
            .from('sessions')
            .delete()
            .eq('id', sessionId)
            .eq('user_id', this.currentUser.id);
        
        if (error) {
            console.error('Error deleting from Supabase:', error);
        }
    }
};

function updateAuthUI() {
    const authStatus = document.getElementById('auth-status');
    if (!authStatus) return;
    
    if (SupabaseSync.currentUser) {
        authStatus.innerHTML = `
            <span style="color: var(--color-muted); font-size: var(--text-sm);">
                Synced: ${SupabaseSync.currentUser.email}
            </span>
            <button onclick="handleSignOut()" style="margin-left: var(--space-sm); padding: var(--space-xs) var(--space-sm); font-size: var(--text-xs);">
                Sign Out
            </button>
        `;
    } else {
        authStatus.innerHTML = `
            <button onclick="showSignIn()" class="btn-primary" style="max-width: 300px; margin: 0 auto;">
                ENABLE CLOUD SYNC
            </button>
        `;
    }
}

function showSignIn() {
    const email = prompt('Enter your email for cloud sync:');
    if (email && email.includes('@')) {
        SupabaseSync.signIn(email).then(result => {
            if (result.success) {
                alert(result.message);
            } else {
                alert('Error: ' + result.error);
            }
        });
    } else if (email) {
        alert('Please enter a valid email address');
    }
}

function handleSignOut() {
    if (confirm('Sign out of cloud sync? (Local sessions will remain)')) {
        SupabaseSync.signOut();
    }
}

// Make functions globally accessible
window.SupabaseSync = SupabaseSync;
window.showSignIn = showSignIn;
window.updateAuthUI = updateAuthUI;
window.handleSignOut = handleSignOut;
