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
        attachFilterListeners(); // Attach listeners when archive is shown
    }
    
    // Reset draw view when returning to welcome
    if (viewId === 'view-welcome') {
        resetDrawView();
    }
}

function attachFilterListeners() {
    const filterIds = ['archive-search', 'filter-familiar', 'filter-cycle', 'filter-polarity', 'filter-date-from', 'filter-date-to'];
    
    filterIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Remove old listeners to avoid duplicates
            el.replaceWith(el.cloneNode(true));
            const newEl = document.getElementById(id);
            
            // Add both input and change listeners
            newEl.addEventListener('input', () => {
                console.log('Filter changed:', id);
                renderArchive();
            });
            newEl.addEventListener('change', () => {
                console.log('Filter changed:', id);
                renderArchive();
            });
        }
    });
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
        alert('please describe what the matter is today.');
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
    const cardImage = TAROT.getCardImage(card);
    cardEl.innerHTML = `
        <img src="${cardImage}" alt="${card.name_en}" class="card-image">
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
            press the button below to draw seven cards from the tarot de marseille.
            <br>each card will map to one alchemical operation.
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
                <img src="assets/cardback.jpg" alt="Card back" class="card-image">
            </div>
        `;
    });
    
    html += '</div>';
    html += '<p class="field-help" style="text-align: center; margin-top: var(--space-md);">click each card to reveal</p>';
    
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
    
    // Apply filters
    const filteredSessions = filterSessions();
    const sessions = [...filteredSessions].reverse(); // Newest first
    
    // Update stats
    updateArchiveStats(sessions.length, AppState.sessions.length);
    
    if (sessions.length === 0) {
        const message = AppState.sessions.length === 0 ? 
            'no sessions yet. begin a new session to start building your archive.' :
            'no sessions match your filters.';
        archiveList.innerHTML = `<div class="archive-empty">${message}</div>`;
        return;
    }
    
    let html = '';
    
    sessions.forEach((session, index) => {
        // Format date/time in local timezone
        const date = new Date(session.timestamp);
        const dateStr = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit' 
        }).replace(/\//g, '-'); // Convert to YYYY-MM-DD format
        const timeStr = date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
        });
        
        const vector = session.polarity ? `${session.polarity.poleA} → ${session.polarity.poleB}` : '—';
        const mode = session.polarity ? session.polarity.polarity.substring(0, 3) : '—';
        const cycle = session.cycle || '—';
        const familiar = session.familiar || '—';
        const firstLine = session.observations ? session.observations.split('\n')[0].substring(0, 60) + '...' : '';
        
        html += `
            <div class="archive-entry" id="session-${session.id}">
                <div class="archive-header" onclick="toggleSession('${session.id}')">
                    <div class="archive-date">${dateStr} / ${timeStr}</div>
                    <div class="archive-matter">${session.matter}</div>
                    <div class="archive-data">${familiar}</div>
                    <div class="archive-data">${vector}</div>
                    <div class="archive-data">${mode}</div>
                    <div class="archive-data">${cycle}</div>
                </div>
                <div class="archive-notes" onclick="toggleSession('${session.id}')">${firstLine}</div>
                
                <div class="archive-expanded" id="expanded-${session.id}" style="display: none;">
                    ${renderExpandedSession(session)}
                </div>
            </div>
        `;
    });
    
    archiveList.innerHTML = html;
}

function filterSessions() {
    const searchTerm = document.getElementById('archive-search')?.value.toLowerCase() || '';
    const familiarFilter = document.getElementById('filter-familiar')?.value || '';
    const cycleFilter = document.getElementById('filter-cycle')?.value || '';
    const polarityFilter = document.getElementById('filter-polarity')?.value || '';
    const dateFrom = document.getElementById('filter-date-from')?.value || '';
    const dateTo = document.getElementById('filter-date-to')?.value || '';
    
    console.log('Filtering with:', { searchTerm, familiarFilter, cycleFilter, polarityFilter, dateFrom, dateTo });
    
    return AppState.sessions.filter(session => {
        // Search filter
        if (searchTerm) {
            const searchableText = [
                session.matter,
                session.observations,
                session.residue,
                session.coordinates
            ].join(' ').toLowerCase();
            
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        // Familiar filter
        if (familiarFilter && session.familiar !== familiarFilter) {
            return false;
        }
        
        // Cycle filter
        if (cycleFilter && session.cycle !== cycleFilter) {
            return false;
        }
        
        // Polarity filter
        if (polarityFilter && session.polarity?.polarity !== polarityFilter) {
            return false;
        }
        
        // Date range filter
        const sessionDate = new Date(session.timestamp).toISOString().split('T')[0];
        
        if (dateFrom && sessionDate < dateFrom) {
            return false;
        }
        
        if (dateTo && sessionDate > dateTo) {
            return false;
        }
        
        return true;
    });
}

function updateArchiveStats(showing, total) {
    const statsEl = document.getElementById('archive-stats');
    if (!statsEl) return;
    
    if (showing === total) {
        statsEl.innerHTML = `<p class="stats-text">showing all ${total} session${total !== 1 ? 's' : ''}</p>`;
    } else {
        statsEl.innerHTML = `<p class="stats-text">showing ${showing} of ${total} session${total !== 1 ? 's' : ''}</p>`;
    }
}

function clearFilters() {
    document.getElementById('archive-search').value = '';
    document.getElementById('filter-familiar').value = '';
    document.getElementById('filter-cycle').value = '';
    document.getElementById('filter-polarity').value = '';
    document.getElementById('filter-date-from').value = '';
    document.getElementById('filter-date-to').value = '';
    renderArchive();
}

function deleteSession(sessionId) {
    if (!confirm('delete this session? this cannot be undone...')) {
        return;
    }
    
    // Remove from AppState
    AppState.sessions = AppState.sessions.filter(s => s.id !== sessionId);
    
    // Save to localStorage
    saveSessions();
    
    // Delete from Supabase if logged in
    SupabaseSync.deleteSession(sessionId);
    
    // Re-render archive
    renderArchive();
}

function toggleSession(sessionId) {
    const expanded = document.getElementById(`expanded-${sessionId}`);
    const entry = document.getElementById(`session-${sessionId}`);
    
    if (expanded.style.display === 'none') {
        // Close all other expanded sessions
        document.querySelectorAll('.archive-expanded').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.archive-entry').forEach(el => {
            el.classList.remove('expanded');
        });
        
        // Open this one
        expanded.style.display = 'block';
        entry.classList.add('expanded');
    } else {
        // Close this one
        expanded.style.display = 'none';
        entry.classList.remove('expanded');
    }
}

function renderExpandedSession(session) {
    let html = '<div class="session-details">';
    
    // Metadata
    html += '<div class="divider-light"></div>';
    html += '<div class="detail-section">';
    html += `<div class="detail-label">SESSION METADATA</div>`;
    
    // Format date in local timezone
    const date = new Date(session.timestamp);
    const localDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    });
    const localTime = date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    });
    
    html += `<div class="detail-row"><span class="detail-key">Date:</span> ${localDate} ${localTime}</div>`;
    html += `<div class="detail-row"><span class="detail-key">Matter:</span> ${session.matter}</div>`;
    if (session.coordinates) {
        html += `<div class="detail-row"><span class="detail-key">Coordinates:</span> ${session.coordinates}</div>`;
    }
    html += `<div class="detail-row"><span class="detail-key">Method:</span> ${session.method === 'tarot' ? 'Tarot — Sulphuric Ignition' : 'I Ching — Mercurial Circulation'}</div>`;
    html += '</div>';
    
    // Draw
    if (session.draw && session.draw.length > 0) {
        html += '<div class="divider-light"></div>';
        html += '<div class="detail-section">';
        html += `<div class="detail-label">THE DRAW</div>`;
        html += '<div class="detail-cards">';
        session.draw.forEach(card => {
            const reversedLabel = card.reversed ? ' (R)' : '';
            html += `<div class="detail-card">${card.position}. ${card.name_en}${reversedLabel}</div>`;
        });
        html += '</div>';
        html += '</div>';
    }
    
    // Transmutation
    if (session.polarity) {
        html += '<div class="divider-light"></div>';
        html += '<div class="detail-section">';
        html += `<div class="detail-label">TRANSMUTATION</div>`;
        html += `<div class="detail-row"><span class="detail-key">Pole A:</span> ${session.polarity.poleA} (${session.polarity.weightA.toFixed(2)})</div>`;
        html += `<div class="detail-row"><span class="detail-key">Pole B:</span> ${session.polarity.poleB} (${session.polarity.weightB.toFixed(2)})</div>`;
        html += `<div class="detail-row"><span class="detail-key">Delta:</span> ${session.polarity.delta.toFixed(2)}</div>`;
        html += `<div class="detail-row"><span class="detail-key">Polarity Mode:</span> ${session.polarity.polarity}</div>`;
        html += '</div>';
    }
    
    // Tonal Signature
    if (session.tonalSignature) {
        html += '<div class="divider-light"></div>';
        html += '<div class="detail-section">';
        html += `<div class="detail-label">TONAL SIGNATURE</div>`;
        html += `<div class="detail-tonal">${session.tonalSignature.descriptor}</div>`;
        html += `<div class="detail-text">${session.tonalSignature.gloss}</div>`;
        html += '</div>';
    }
    
    // Oracle Response
    html += '<div class="divider-light"></div>';
    html += '<div class="detail-section">';
    html += `<div class="detail-label">ORACLE RESPONSE</div>`;
    html += `<div class="detail-row"><span class="detail-key">Familiar:</span> ${session.familiar}</div>`;
    html += `<div class="detail-row"><span class="detail-key">Cycle:</span> ${session.cycle}</div>`;
    html += '</div>';
    
    // Ritual
    if (session.ritual) {
        html += '<div class="divider-light"></div>';
        html += '<div class="detail-section">';
        html += `<div class="detail-label">RITUAL</div>`;
        html += `<div class="ritual-subsection"><span class="ritual-label">Function:</span> ${session.ritual.function}</div>`;
        html += `<div class="ritual-subsection"><span class="ritual-label">Setup:</span> ${session.ritual.setup}</div>`;
        html += `<div class="ritual-subsection"><span class="ritual-label">Action:</span> ${session.ritual.action}</div>`;
        html += `<div class="ritual-subsection"><span class="ritual-label">Prompt:</span> ${session.ritual.prompt}</div>`;
        html += `<div class="ritual-subsection"><span class="ritual-label">Note:</span> ${session.ritual.note}</div>`;
        html += '</div>';
    }
    
    // Observations
    if (session.observations) {
        html += '<div class="divider-light"></div>';
        html += '<div class="detail-section">';
        html += `<div class="detail-label">OBSERVATIONS</div>`;
        html += `<div class="detail-text">${session.observations.replace(/\n/g, '<br>')}</div>`;
        html += '</div>';
    }
    
    // Residue
    if (session.residue) {
        html += '<div class="divider-light"></div>';
        html += '<div class="detail-section">';
        html += `<div class="detail-label">RESIDUE</div>`;
        html += `<div class="detail-text">${session.residue.replace(/\n/g, '<br>')}</div>`;
        html += '</div>';
    }
    
    html += '</div>';
    
    // Delete button
    html += '<div class="divider-light"></div>';
    html += `<div class="session-actions">
        <button class="btn-delete" onclick="deleteSession('${session.id}')">DELETE SESSION</button>
    </div>`;
    
    html += '</div>';
    return html;
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
        alert('error saving session. your browser storage may be full.');
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

// Make functions globally accessible
window.toggleSession = toggleSession;
window.renderExpandedSession = renderExpandedSession;
window.deleteSession = deleteSession;
window.clearFilters = clearFilters;
