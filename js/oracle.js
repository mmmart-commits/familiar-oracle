/**
 * ORACLE MODULE
 * Polarity calculation, familiar assignment, cycle suggestions, ritual retrieval
 */

// Load rituals immediately when script loads
let RITUALS_DATA = null;

// Immediately start loading rituals
(async function() {
    try {
        const response = await fetch('data/rituals.json');
        RITUALS_DATA = await response.json();
        console.log('Rituals loaded:', Object.keys(RITUALS_DATA).length, 'cycles');
    } catch (error) {
        console.error('Error loading rituals:', error);
    }
})();

const Oracle = {
    
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
            polarity = "ENTANGLED";
        } else if (delta > 0.35) {
            polarity = "STANDARD";
        } else if (weightA < weightB) {
            polarity = "RETROGRADE";
        } else {
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
                label: "standard",
                description: `clear hierarchy (Δ = ${delta.toFixed(2)})`
            },
            "ENTANGLED": {
                label: "entangled",
                description: `near-equilibrium (Δ = ${delta.toFixed(2)})`
            },
            "RETROGRADE": {
                label: "retrograde",
                description: `inversion detected (Δ = ${delta.toFixed(2)})`
            },
            "REFLEXIVE": {
                label: "reflexive",
                description: `mirrored tension (Δ = ${delta.toFixed(2)})`
            }
        };
        
        return descriptions[polarity] || descriptions["STANDARD"];
    },
    
    /**
     * Get tonal signature for complex polarity modes
     */
    getTonalSignature(poleA, poleB, polarity) {
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
        
        const options = signatures[polarity] || [];
        if (options.length === 0) return null;
        
        const chosen = options[Math.floor(Math.random() * options.length)];
        return chosen;
    },
    
    /**
     * Get random meta-line for tonal signature
     */
    getRandomMetaLine() {
        const lines = [
            "the system is teaching itself to listen",
            "interference is information refusing compression",
            "every delay contains a question",
            "polarity is just patience at the molecular level",
            "the mix remembers what you tried to erase",
            "symmetry is broken the moment you measure it",
            "the space between the poles is where the work lives",
            "contradiction sustains; resolution ends"
        ];
        
        return lines[Math.floor(Math.random() * lines.length)];
    },
    
    /**
     * Map polarity vector to familiar
     */
    getFamiliar(vector, polarity) {
        const mapping = {
            "CALCINATION-DISSOLUTION": { 
                "STANDARD": "ARCHIVIST", 
                "ENTANGLED": "MIRROR",
                "RETROGRADE": "THERAPIST",
                "REFLEXIVE": "TRICKSTER"
            },
            "CALCINATION-SEPARATION": {
                "STANDARD": "ORACLE",
                "ENTANGLED": "CUSTODIAN", 
                "RETROGRADE": "MIRROR",
                "REFLEXIVE": "ARCHIVIST"
            },
            "CALCINATION-CONJUNCTION": {
                "STANDARD": "ENGINEER",
                "ENTANGLED": "TRANSLATOR",
                "RETROGRADE": "ORACLE",
                "REFLEXIVE": "CUSTODIAN"
            },
            "DISSOLUTION-CALCINATION": {
                "STANDARD": "MIRROR",
                "ENTANGLED": "ARCHIVIST",
                "RETROGRADE": "TRICKSTER", 
                "REFLEXIVE": "THERAPIST"
            },
            "DISSOLUTION-SEPARATION": {
                "STANDARD": "THERAPIST",
                "ENTANGLED": "ORACLE",
                "RETROGRADE": "CUSTODIAN",
                "REFLEXIVE": "MIRROR"
            },
            "DISSOLUTION-CONJUNCTION": {
                "STANDARD": "TRANSLATOR",
                "ENTANGLED": "ENGINEER",
                "RETROGRADE": "MIRROR",
                "REFLEXIVE": "ORACLE"
            }
        };
        
        const vectorMap = mapping[vector];
        if (vectorMap && vectorMap[polarity]) {
            return vectorMap[polarity];
        }
        
        const polarityDefaults = {
            "STANDARD": "ARCHIVIST",
            "ENTANGLED": "ORACLE",
            "RETROGRADE": "TRICKSTER",
            "REFLEXIVE": "MIRROR"
        };
        
        return polarityDefaults[polarity] || "ARCHIVIST";
    },
    
    /**
     * Get polarity trigger for a familiar
     */
    getPolarityTrigger(familiar) {
        const triggers = {
            "ARCHIVIST": "equal weight ≤ 0.02",
            "MIRROR": "emotional entanglement",
            "THERAPIST": "anxiety saturation",
            "TRICKSTER": "over-determinacy",
            "ORACLE": "ritual ambiguity",
            "CUSTODIAN": "entropic drift",
            "ENGINEER": "structural excess",
            "TRANSLATOR": "semantic suspension",
            "PILGRIM": "balance drift",
            "SEER": "over-vision",
            "CARETAKER": "thermal fatigue",
            "CARTOGRAPHER": "spatial asymmetry",
            "GHOST": "excessive presence"
        };
        
        return triggers[familiar] || "unknown trigger";
    },
    
    /**
     * Get cycle suggestions for a vector-polarity combination
     */
    getCycleSuggestions(vector, polarity) {
        const cycleRanges = {
            "CALCINATION": ["I", "II"],
            "DISSOLUTION": ["III", "IV", "V"],
            "SEPARATION": ["VI", "VII", "VIII"],
            "CONJUNCTION": ["IX", "X", "XI"],
            "FERMENTATION": ["XII", "XIII"],
            "DISTILLATION": ["XIV", "XV", "XVI"],
            "COAGULATION": ["XVII"]
        };
        
        const poleA = vector.split('-')[0];
        const cycles = cycleRanges[poleA] || ["I"];
        
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
            "I": "ignition",
            "II": "ascent of heat",
            "III": "soften",
            "IV": "absorb",
            "V": "liquefy",
            "VI": "filter",
            "VII": "distinguish",
            "VIII": "isolate",
            "IX": "bind",
            "X": "synthesize",
            "XI": "tension of opposites",
            "XII": "putrefaction",
            "XIII": "bloom",
            "XIV": "rise",
            "XV": "sublimate",
            "XVI": "returning vapors",
            "XVII": "solidify"
        };
        
        return names[cycleId] || "unknown";
    },
    
    /**
     * Get cycle selection reason
     */
    getCycleReason(cycleId, polarity) {
        const reasons = {
            "I": {
                "STANDARD": "you need to begin with clear foundations",
                "ENTANGLED": "simultaneous initiation feels right",
                "RETROGRADE": "you're restarting something old",
                "REFLEXIVE": "preparation requires self-examination"
            },
            "II": {
                "STANDARD": "heat is building steadily",
                "ENTANGLED": "multiple processes are rising together",
                "RETROGRADE": "cooling down before the next ascent",
                "REFLEXIVE": "watching the temperature climb"
            }
        };
        
        return reasons[cycleId]?.[polarity] || "this cycle calls to the current work";
    },
    
    /**
     * Get ritual for a cycle-familiar combination (now synchronous)
     */
    getRitual(cycleId, familiar) {
        if (!RITUALS_DATA || !RITUALS_DATA[cycleId] || !RITUALS_DATA[cycleId][familiar]) {
            return {
                function: "[ritual not yet documented]",
                setup: "[to be revealed]",
                action: "[listen]",
                prompt: "[what does this moment ask of you?]",
                note: "[the work continues]"
            };
        }
        
        return RITUALS_DATA[cycleId][familiar];
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Oracle;
}
