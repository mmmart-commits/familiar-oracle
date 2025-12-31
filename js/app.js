/**
 * MAIN APPLICATION
 * Session flow, UI management, storage
 */

// ============================================
// STATE
// ============================================

const AppState = {
    currentSession: null,
    sessions: [],
    currentView: 'view-welcome'
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    loadSessions();
    await SupabaseSync.init(); // Initialize Supabase
    showView('view-welcome');
});

// ============================================
// VIEW MANAGEMENT
// ============================================

function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show requested view
    const view = document.getElementById(viewId);
    if (view) {
        view.classList.add('active');
        AppState.currentView = viewId;
    }
    
    // Special handling for archive view
    if (viewId === 'view-archive') {
        renderArchive();
    }
    
    // Reset draw view when returning to welcome
    if (viewId === 'view-welcome') {
        resetDrawView();
    }
}

function resetDrawView() {
    // Reset the draw view for next session
    const drawView = document.getElementById('view-draw');
    
    // Find and show the execute draw button
    const buttons = drawView.querySelectorAll('.btn-primary');
    buttons.forEach(btn => {
        if (btn.textContent.includes('EXECUTE') || btn.onclick.toString().includes('executeDraw')) {
            btn.style.display = 'block';
        }
    });
    
    // Clear draw display
    document.getElementById('draw-display').innerHTML = '';
}

// ============================================
// SESSION FLOW
// ============================================

function selectMethod(method) {
    AppState.currentSession = {
        id: generateId(),
        timestamp: new Date().toISOString(),
        method: method,
        matter: '',
        coordinates: '',
        draw: null,
        weights: null,
        polarity: null,
        familiar: null,
        cycle: null,
        ritual: null,
        observations: '',
        residue: ''
    };
    
    // Clear input fields
    document.getElementById('matter').value = '';
    document.getElementById('coordinates').value = '';
    
    showView('view-orientation');
}

function proceedToDraw() {
    const matter = document.getElementById('matter').value.trim();
    const coordinates = document.getElementById('coordinates').value.trim();
    
    if (!matter) {
        alert('Please describe what the matter is today.');
        return;
    }
    
    AppState.currentSession.matter = matter;
    AppState.currentSession.coordinates = coordinates;
    
    showView('view-draw');
    renderDrawButton(); // Reset the draw interface
}

function executeDraw() {
    const session = AppState.currentSession;
    
    if (session.method === 'tarot') {
        // Draw 7 cards (but don't reveal yet)
        const cards = TAROT.draw();
        const weights = TAROT.calculateWeights(cards);
        
        session.draw = cards;
        session.weights = weights;
        
        // Calculate polarity
        session.polarity = Oracle.calculatePolarity(weights);
        
        // Render card backs
        renderCardBacks(cards);
        
        // Hide draw button, show instruction
        document.querySelector('#view-draw .btn-primary').style.display = 'none';
    } else {
        alert('I Ching not yet implemented');
    }
}

function flipCard(index) {
    const session = AppState.currentSession;
    const card = session.draw[index];
    
    // Mark card as revealed
    card.revealed = true;
    
    // Update the card display
    const cardEl = document.querySelector(`[data-card-index="${index}"]`);
    cardEl.classList.add('flipped');
    
    // Show card face after flip animation
    setTimeout(() => {
        const reversedLabel = card.reversed ? ' (R)' : '';
        cardEl.innerHTML = `
            <div class="card-number">${String(card.position).padStart(2, '0')}</div>
            <div class="card-name">${card.name_en}${reversedLabel}</div>
        `;
    }, 150);
    
    // Check if all cards revealed
    const allRevealed = session.draw.every(c => c.revealed);
    if (allRevealed) {
        // Show proceed button
        setTimeout(() => {
            const proceedBtn = document.createElement('button');
            proceedBtn.className = 'btn-primary';
            proceedBtn.textContent = 'PROCEED TO TRANSMUTATION';
            proceedBtn.onclick = () => {
                showView('view-transmutation');
                renderTransmutation();
            };
            document.getElementById('draw-display').appendChild(proceedBtn);
        }, 500);
    }
}

function proceedToOracle() {
    const session = AppState.currentSession;
    const polarity = session.polarity;
    
    // Assign familiar
    session.familiar = Oracle.getFamiliar(polarity.vector, polarity.polarity);
    
    // Get cycle suggestions
    session.cycleSuggestions = Oracle.getCycleSuggestions(polarity.vector, polarity.polarity);
    
    // Get tonal signature (if applicable)
    session.tonalSignature = Oracle.getTonalSignature(
        polarity.poleA, 
        polarity.poleB, 
        polarity.polarity
    );
    
    showView('view-oracle');
    renderOracle();
}

function selectCycle(cycleId) {
    const session = AppState.currentSession;
    session.cycle = cycleId;
    
    // Get ritual
    session.ritual = Oracle.getRitual(cycleId, session.familiar);
    
    // Update UI
    document.querySelectorAll('.cycle-option').forEach(el => {
        el.classList.remove('selected');
    });
    event.target.closest('.cycle-option').classList.add('selected');
    
    // Show proceed button
    showView('view-ritual');
    renderRitual();
}

function proceedToReflection() {
    showView('view-reflection');
}

function saveSession() {
    const session = AppState.currentSession;
    
    // Get observations and residue
    session.observations = document.getElementById('observations').value;
    session.residue = document.getElementById('residue').value;
    
    // Add completed timestamp
    session.completedAt = new Date().toISOString();
    
    // Save to sessions array
    AppState.sessions.push(session);
    saveSessions();
    
    // Save to Supabase if logged in
    SupabaseSync.saveSession(session);
    
    // Show confirmation
    alert('Session sealed ✶');
    
    // Reset and return to welcome
    AppState.currentSession = null;
    showView('view-welcome');
}

// ============================================
// RENDERING
// ============================================

function renderDrawButton() {
    const drawDisplay = document.getElementById('draw-display');
    drawDisplay.innerHTML = `
        <p class="field-help" style="text-align: center; margin: var(--space-lg) 0;">
            Press the button below to draw seven cards from the Tarot de Marseille.
            <br>Each card will map to one alchemical operation.
        </p>
    `;
}

function renderCardBacks(cards) {
    const drawDisplay = document.getElementById('draw-display');
    
    let html = '<div class="card-grid">';
    
    cards.forEach((card, index) => {
        const reversedClass = card.reversed ? 'reversed' : '';
        
        html += `
            <div class="tarot-card card-back ${reversedClass}" 
                 data-card-index="${index}"
                 onclick="flipCard(${index})">
                <div class="card-back-design">
                    <div class="card-number">${String(card.position).padStart(2, '0')}</div>
                    <div class="card-back-symbol">✶</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    html += '<p class="field-help" style="text-align: center; margin-top: var(--space-md);">Click each card to reveal</p>';
    
    drawDisplay.innerHTML = html;
}

function renderCards(cards) {
    const drawDisplay = document.getElementById('draw-display');
    
    let html = '<div class="card-grid">';
    
    cards.forEach(card => {
        const reversedClass = card.reversed ? 'reversed' : '';
        const reversedLabel = card.reversed ? ' (R)' : '';
        
        html += `
            <div class="tarot-card ${reversedClass}">
                <div class="card-number">${String(card.position).padStart(2, '0')}</div>
                <div class="card-name">${card.name_en}${reversedLabel}</div>
            </div>
        `;
    });
    
    html += '</div>';
    
    drawDisplay.innerHTML = html;
}

function renderTransmutation() {
    const session = AppState.currentSession;
    const weights = session.weights;
    const polarity = session.polarity;
    
    // Render heat map
    let heatHtml = '';
    const operations = TAROT.operations;
    
    operations.forEach(op => {
        const weight = weights[op];
        const barWidth = Math.round(weight * 100);
        
        heatHtml += `
            <div class="heat-row">
                <div class="heat-label">${op}</div>
                <div class="heat-value">${weight.toFixed(2)}</div>
                <div class="heat-bar" style="width: ${barWidth}%"></div>
            </div>
        `;
    });
    
    document.getElementById('heat-map').innerHTML = heatHtml;
    
    // Render polarity
    const polarityDesc = Oracle.getPolarityDescription(polarity.polarity, polarity.delta);
    
    const polarityHtml = `
        <div class="polarity-box">
            <div class="polarity-mode">${polarityDesc.label}</div>
            <div class="polarity-delta">${polarityDesc.description}</div>
            <div class="polarity-vector">Dominant flow: ${polarity.poleA} → ${polarity.poleB}</div>
        </div>
    `;
    
    document.getElementById('polarity-display').innerHTML = polarityHtml;
}

function renderOracle() {
    const session = AppState.currentSession;
    
    // Render tonal signature (if applicable)
    const tonalDiv = document.getElementById('tonal-signature');
    if (session.tonalSignature) {
        const metaLine = Oracle.getRandomMetaLine();
        
        tonalDiv.innerHTML = `
            <div class="tonal-label">TONAL SIGNATURE</div>
            <div class="tonal-descriptor">${session.tonalSignature.descriptor}</div>
            <div class="tonal-gloss">${session.tonalSignature.gloss}</div>
            <div class="divider-light"></div>
            <div class="tonal-meta">${metaLine}</div>
        `;
        tonalDiv.style.display = 'block';
    } else {
        tonalDiv.style.display = 'none';
    }
    
    // Render familiar announcement
    const trigger = Oracle.getPolarityTrigger(session.familiar);
    document.getElementById('familiar-announcement').textContent = `${session.familiar} HAS APPEARED`;
    document.getElementById('polarity-trigger').textContent = `[Polarity Trigger: ${trigger}]`;
    
    // Render cycle suggestions
    let cycleHtml = '';
    
    session.cycleSuggestions.forEach(suggestion => {
        cycleHtml += `
            <div class="cycle-option" onclick="selectCycle('${suggestion.cycle}')">
                <div class="cycle-title">CYCLE ${suggestion.cycle} — ${suggestion.name}</div>
                <div class="cycle-desc">"${suggestion.reason}"</div>
                <div class="cycle-reason">→ Choose this if: ${suggestion.reason}</div>
            </div>
        `;
    });
    
    document.getElementById('cycle-suggestions').innerHTML = cycleHtml;
}

function renderRitual() {
    const session = AppState.currentSession;
    const ritual = session.ritual;
    
    document.getElementById('ritual-header').textContent = 
        `CYCLE ${session.cycle} — ${session.familiar}`;
    
    const ritualHtml = `
        <div class="ritual-section">
            <div class="ritual-section-label">FUNCTION</div>
            <div class="ritual-section-content">${ritual.function}</div>
        </div>
        
        <div class="ritual-section">
            <div class="ritual-section-label">SETUP</div>
            <div class="ritual-section-content">${ritual.setup}</div>
        </div>
        
        <div class="ritual-section">
            <div class="ritual-section-label">ACTION</div>
            <div class="ritual-section-content">${ritual.action}</div>
        </div>
        
        <div class="ritual-section">
            <div class="ritual-section-label">PROMPT</div>
            <div class="ritual-section-content">${ritual.prompt}</div>
        </div>
        
        <div class="ritual-section">
            <div class="ritual-section-label">NOTE</div>
            <div class="ritual-section-content">${ritual.note}</div>
        </div>
    `;
    
    document.getElementById('ritual-content').innerHTML = ritualHtml;
}

function renderArchive() {
    const archiveList = document.getElementById('archive-list');
    const sessions = [...AppState.sessions].reverse(); // Newest first
    
    if (sessions.length === 0) {
        archiveList.innerHTML = '<div class="archive-empty">No sessions yet. Begin a new session to start building your archive.</div>';
        return;
    }
    
    let html = '';
    
    sessions.forEach(session => {
        const date = new Date(session.timestamp).toISOString().split('T')[0];
        const time = new Date(session.timestamp).toISOString().split('T')[1].substring(0, 5);
        const vector = session.polarity ? `${session.polarity.poleA}→${session.polarity.poleB}` : '—';
        const mode = session.polarity ? session.polarity.polarity.substring(0, 3) : '—';
        const cycle = session.cycle || '—';
        const firstLine = session.observations ? session.observations.split('\n')[0].substring(0, 60) + '...' : '';
        
        html += `
            <div class="archive-entry">
                <div class="archive-header">
                    <div class="archive-date">${date} / ${time}</div>
                    <div class="archive-matter">${session.matter}</div>
                    <div class="archive-data">${vector}</div>
                    <div class="archive-data">${mode}</div>
                    <div class="archive-data">${cycle}</div>
                </div>
                <div class="archive-notes">${firstLine}</div>
            </div>
        `;
    });
    
    archiveList.innerHTML = html;
}

// ============================================
// STORAGE
// ============================================

function loadSessions() {
    const stored = localStorage.getItem('oracle_sessions');
    if (stored) {
        try {
            AppState.sessions = JSON.parse(stored);
        } catch (e) {
            console.error('Error loading sessions:', e);
            AppState.sessions = [];
        }
    }
}

function saveSessions() {
    try {
        localStorage.setItem('oracle_sessions', JSON.stringify(AppState.sessions));
    } catch (e) {
        console.error('Error saving sessions:', e);
        alert('Error saving session. Your browser storage may be full.');
    }
}

function exportData() {
    const data = {
        sessions: AppState.sessions,
        exported: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `oracle-sessions-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
}

// ============================================
// UTILITIES
// ============================================

function generateId() {
    // Generate proper UUID v4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
