/**
 * SUPABASE INTEGRATION
 * Cross-device session sync
 */

// Replace these with your actual values
const SUPABASE_URL = 'https://qrgibphjzvpkaojyaiei.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyZ2licGhqenZwa2FvanlhaWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNTE4NDcsImV4cCI6MjA4MjcyNzg0N30.fSk73B0GIoYBXJkZ6mmBOgIBkq-p-3bNkrEuLzMQTlQ';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const SupabaseSync = {
    currentUser: null,
    
    /**
     * Initialize - check if user is logged in
     */
    async init() {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            this.currentUser = session.user;
            console.log('User logged in:', this.currentUser.id);
            await this.loadSessionsFromCloud();
        }
    },
    
    /**
     * Sign in with magic link (passwordless email)
     */
    async signIn(email) {
        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.origin
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
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Sign out error:', error);
        }
        this.currentUser = null;
    },
    
    /**
     * Save session to Supabase
     */
    async saveSession(session) {
        if (!this.currentUser) {
            console.log('Not logged in - saving locally only');
            return;
        }
        
        const { data, error } = await supabase
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
        if (!this.currentUser) return [];
        
        const { data, error } = await supabase
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
        if (!this.currentUser) return;
        
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
    },
    
    /**
     * Delete session from Supabase
     */
    async deleteSession(sessionId) {
        if (!this.currentUser) return;
        
        const { error } = await supabase
            .from('sessions')
            .delete()
            .eq('id', sessionId)
            .eq('user_id', this.currentUser.id);
        
        if (error) {
            console.error('Error deleting from Supabase:', error);
        }
    }
};

// Listen for auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        SupabaseSync.currentUser = session.user;
        SupabaseSync.syncSessions();
        updateAuthUI();
    } else if (event === 'SIGNED_OUT') {
        SupabaseSync.currentUser = null;
        updateAuthUI();
    }
});

function updateAuthUI() {
    const authStatus = document.getElementById('auth-status');
    if (authStatus) {
        if (SupabaseSync.currentUser) {
            authStatus.innerHTML = `
                <span>Synced: ${SupabaseSync.currentUser.email}</span>
                <button onclick="SupabaseSync.signOut()">Sign Out</button>
            `;
        } else {
            authStatus.innerHTML = `
                <button onclick="showSignIn()">Enable Cloud Sync</button>
            `;
        }
    }
}

function showSignIn() {
    const email = prompt('Enter your email for cloud sync:');
    if (email) {
        SupabaseSync.signIn(email).then(result => {
            alert(result.message || result.error);
        });
    }
}
