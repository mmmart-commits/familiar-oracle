/**

- ORACLE MODULE
- Polarity calculation, familiar assignment, cycle suggestions, ritual retrieval
  */

// Will be loaded from rituals.json
let RITUALS_DATA = null;

// Load rituals from JSON file
async function loadRituals() {
if (RITUALS_DATA) return RITUALS_DATA;

```
try {
    const response = await fetch('data/rituals.json');
    RITUALS_DATA = await response.json();
    return RITUALS_DATA;
} catch (error) {
    console.error('Error loading rituals:', error);
    return null;
}
```

}

const Oracle = {

```
/**
 * Calculate polarity from operation weights
 */
calculatePolarity(weights) {
    // Find two highest-weighted operations
    const entries = Object.entries(weights);
    entries.sort((a, b) => b[1] - a[1]);
    
    const poleA = entries[0][0];
    const poleB = entries[1][0];
    const weightA = entries[0][1];
    const weightB = entries[1][1];
    const delta = Math.abs(weightA - weightB);
    
    // Determine polarity mode based on delta
    let polarity;
    if (delta < 0.05) {
        // Poles are very close
        polarity = "ENTANGLED";
    } else if (delta > 0.35) {
        // Dominant pole is very strong
        polarity = "STANDARD";
    } else if (weightA < weightB) {
        // Reversal (lower-weighted pole listed first)
        polarity = "RETROGRADE";
    } else {
        // Near-equal but distinct
        polarity = "REFLEXIVE";
    }
    
    return {
        poleA,
        poleB,
        weightA,
        weightB,
        delta,
        polarity,
        vector: `${poleA}-${poleB}`
    };
},

/**
 * Get polarity mode description
 */
getPolarityDescription(polarity, delta) {
    const descriptions = {
        "STANDARD": {
            label: "STANDARD",
            description: `clear hierarchy (Δ = ${delta.toFixed(2)})`
        },
        "ENTANGLED": {
            label: "ENTANGLED",
            description: `near-equilibrium (Δ = ${delta.toFixed(2)})`
        },
        "RETROGRADE": {
            label: "RETROGRADE",
            description: `inversion detected (Δ = ${delta.toFixed(2)})`
        },
        "REFLEXIVE": {
            label: "REFLEXIVE",
            description: `mirrored tension (Δ = ${delta.toFixed(2)})`
        }
    };
    
    return descriptions[polarity] || descriptions["STANDARD"];
},

/**
 * Get tonal signature for complex polarity modes
 */
getTonalSignature(poleA, poleB, polarity) {
    // Only for non-standard modes
    if (polarity === "STANDARD") return null;
    
    const signatures = {
        "ENTANGLED": [
            {
                descriptor: "reciprocal interference",
                gloss: "neither pole leads; both modulate simultaneously"
            },
            {
                descriptor: "phase-locked oscillation",
                gloss: "the system breathes at two frequencies that refuse separation"
            },
            {
                descriptor: "sympathetic resonance",
                gloss: "touching one string vibrates the other"
            }
        ],
        "RETROGRADE": [
            {
                descriptor: "reversed causality",
                gloss: "the effect precedes the cause; listen backward"
            },
            {
                descriptor: "temporal inversion",
                gloss: "memory of the future shapes the present"
            },
            {
                descriptor: "echo before sound",
                gloss: "the reverb tail plays first"
            }
        ],
        "REFLEXIVE": [
            {
                descriptor: "mirror delay",
                gloss: "the original and reflection arrive almost together"
            },
            {
                descriptor: "self-questioning signal",
                gloss: "the waveform interrogates itself"
            },
            {
                descriptor: "doubled consciousness",
                gloss: "awareness splits into observer and observed"
            }
        ]
    };
    
    const options = signatures[polarity] || signatures["STANDARD"];
    const chosen = options[Math.floor(Math.random() * options.length)];
    
    return chosen;
},

/**
 * Get random meta-line for tonal signature
 */
getRandomMetaLine() {
    const lines = [
        "The system is teaching itself to listen.",
        "Interference is information refusing compression.",
        "Every delay contains a question.",
        "Polarity is just patience at the molecular level.",
        "The mix remembers what you tried to erase.",
        "Symmetry is broken the moment you measure it.",
        "The space between the poles is where the work lives.",
        "Contradiction sustains; resolution ends."
    ];
    
    return lines[Math.floor(Math.random() * lines.length)];
},

/**
 * Map polarity vector to familiar
 */
getFamiliar(vector, polarity) {
    // Mapping of vector-polarity combinations to familiars
    const mapping = {
        // CALCINATION vectors
        "CALCINATION-DISSOLUTION": { 
            STANDARD: "ARCHIVIST", 
            ENTANGLED: "MIRROR",
            RETROGRADE: "THERAPIST",
            REFLEXIVE: "TRICKSTER"
        },
        "CALCINATION-SEPARATION": {
            STANDARD: "ORACLE",
            ENTANGLED: "CUSTODIAN", 
            RETROGRADE: "MIRROR",
            REFLEXIVE: "ARCHIVIST"
        },
        "CALCINATION-CONJUNCTION": {
            STANDARD: "ENGINEER",
            ENTANGLED: "TRANSLATOR",
            RETROGRADE: "ORACLE",
            REFLEXIVE: "CUSTODIAN"
        },
        
        // DISSOLUTION vectors
        "DISSOLUTION-CALCINATION": {
            STANDARD: "MIRROR",
            ENTANGLED: "ARCHIVIST",
            RETROGRADE: "TRICKSTER", 
            REFLEXIVE: "THERAPIST"
        },
        "DISSOLUTION-SEPARATION": {
            STANDARD: "THERAPIST",
            ENTANGLED: "ORACLE",
            RETROGRADE: "CUSTODIAN",
            REFLEXIVE: "MIRROR"
        },
        "DISSOLUTION-CONJUNCTION": {
            STANDARD: "TRANSLATOR",
            ENTANGLED: "ENGINEER",
            RETROGRADE: "MIRROR",
            REFLEXIVE: "ORACLE"
        },
        
        // Add more vectors... (this is a sample)
        // You'll need to complete the full mapping
    };
    
    // Get familiar for this vector-polarity combo
    const vectorMap = mapping[vector];
    if (vectorMap && vectorMap[polarity]) {
        return vectorMap[polarity];
    }
    
    // Fallback: choose based on polarity alone
    const polarityDefaults = {
        STANDARD: "ARCHIVIST",
        ENTANGLED: "ORACLE",
        RETROGRADE: "TRICKSTER",
        REFLEXIVE: "MIRROR"
    };
    
    return polarityDefaults[polarity] || "ARCHIVIST";
},

/**
 * Get polarity trigger for a familiar
 */
getPolarityTrigger(familiar) {
    const triggers = {
        "ARCHIVIST": "Equal Weight ≤ 0.02",
        "MIRROR": "Emotional Entanglement",
        "THERAPIST": "Anxiety Saturation",
        "TRICKSTER": "Over-determinacy",
        "ORACLE": "Ritual Ambiguity",
        "CUSTODIAN": "Entropic Drift",
        "ENGINEER": "Structural Excess",
        "TRANSLATOR": "Semantic Suspension",
        "PILGRIM": "Balance Drift",
        "SEER": "Over-vision",
        "CARETAKER": "Thermal Fatigue",
        "CARTOGRAPHER": "Spatial Asymmetry",
        "GHOST": "Excessive Presence"
    };
    
    return triggers[familiar] || "Unknown Trigger";
},

/**
 * Get cycle suggestions for a vector-polarity combination
 */
getCycleSuggestions(vector, polarity) {
    // Map operations to cycle ranges
    const cycleRanges = {
        "CALCINATION": ["I", "II"],
        "DISSOLUTION": ["III", "IV", "V"],
        "SEPARATION": ["VI", "VII", "VIII"],
        "CONJUNCTION": ["IX", "X", "XI"],
        "FERMENTATION": ["XII", "XIII"],
        "DISTILLATION": ["XIV", "XV", "XVI"],
        "COAGULATION": ["XVII", "XVIII"]
    };
    
    // Extract pole A operation
    const poleA = vector.split('-')[0];
    const cycles = cycleRanges[poleA] || ["I"];
    
    // Generate suggestions based on cycle range
    const suggestions = cycles.map(cycle => ({
        cycle: cycle,
        name: this.getCycleName(cycle),
        reason: this.getCycleReason(cycle, polarity)
    }));
    
    return suggestions;
},

/**
 * Get cycle name
 */
getCycleName(cycleId) {
    const names = {
        "I": "Ignition",
        "II": "Ascent of Heat",
        "III": "Soften",
        "IV": "Absorb",
        "V": "Liquefy",
        "VI": "Filter",
        "VII": "Distinguish",
        "VIII": "Isolate",
        "IX": "Bind",
        "X": "Synthesize",
        "XI": "Tension of Opposites",
        "XII": "Putrefaction",
        "XIII": "Bloom",
        "XIV": "Rise",
        "XV": "Sublimate",
        "XVI": "Returning Vapors",
        "XVII": "Solidify",
        "XVIII": "Fix"
    };
    
    return names[cycleId] || "Unknown";
},

/**
 * Get cycle selection reason
 */
getCycleReason(cycleId, polarity) {
    // Sample reasons - expand as needed
    const reasons = {
        "I": {
            STANDARD: "you need to begin with clear foundations",
            ENTANGLED: "simultaneous initiation feels right",
            RETROGRADE: "you're restarting something old",
            REFLEXIVE: "preparation requires self-examination"
        },
        "II": {
            STANDARD: "heat is building steadily",
            ENTANGLED: "multiple processes are rising together",
            RETROGRADE: "cooling down before the next ascent",
            REFLEXIVE: "watching the temperature climb"
        }
        // Add more cycles...
    };
    
    return reasons[cycleId]?.[polarity] || "this cycle calls to the current work";
},

/**
 * Get ritual for a cycle-familiar combination
 */
async getRitual(cycleId, familiar) {
    // Load rituals if not already loaded
    await loadRituals();
    
    if (!RITUALS_DATA || !RITUALS_DATA[cycleId] || !RITUALS_DATA[cycleId][familiar]) {
        // Return placeholder if ritual not found
        return {
            function: "[Ritual not yet documented]",
            setup: "[To be revealed]",
            action: "[Listen]",
            prompt: "[What does this moment ask of you?]",
            note: "[The work continues]"
        };
    }
    
    return RITUALS_DATA[cycleId][familiar];
}
```

};

// Export for use in other modules
if (typeof module !== ‘undefined’ && module.exports) {
module.exports = Oracle;
}