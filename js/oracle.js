/**
 * ORACLE ENGINE
 * Core logic for transforming weights into familiar/cycle assignments
 */

const Oracle = {
    
    /**
     * Calculate poles (top 2 operations), delta, and polarity mode
     */
    calculatePolarity(weights) {
        // Sort operations by weight
        const sorted = Object.entries(weights)
            .sort((a, b) => b[1] - a[1]);
        
        const poleA = sorted[0][0];
        const poleB = sorted[1][0];
        const weightA = sorted[0][1];
        const weightB = sorted[1][1];
        
        // Calculate delta (difference between top two)
        const delta = Math.abs(weightA - weightB);
        
        // Determine polarity mode
        let polarity;
        if (delta <= 0.02) {
            polarity = "ENTANGLED";
        } else if (delta <= 0.15) {
            polarity = "REFLEXIVE";
        } else if (delta <= 0.30) {
            polarity = "STANDARD";
        } else {
            polarity = "RETROGRADE";
        }
        
        return {
            poleA,
            poleB,
            weightA,
            weightB,
            delta,
            polarity,
            vector: `${poleA}_${poleB}`,
            allWeights: weights
        };
    },
    
    /**
     * Get familiar for given vector + polarity
     */
    getFamiliar(vector, polarity) {
        const key = `${vector}_${polarity}`;
        const familiar = ORACLE_DATA.familiar_assignments[key];
        
        if (!familiar) {
            console.error(`No familiar found for ${key}`);
            return "ARCHIVIST"; // Fallback
        }
        
        return familiar;
    },
    
    /**
     * Get cycle suggestions for given vector + polarity
     */
    getCycleSuggestions(vector, polarity) {
        const key = `${vector}_${polarity}`;
        const suggestions = ORACLE_DATA.cycle_suggestions[key];
        
        if (!suggestions) {
            console.error(`No cycle suggestions found for ${key}`);
            return [
                { cycle: "I", name: "Ritual Preparation", reason: "beginning the work" }
            ];
        }
        
        return suggestions;
    },
    
    /**
     * Get tonal signature for vector (if not STANDARD mode)
     */
    getTonalSignature(poleA, poleB, polarity) {
        if (polarity === "STANDARD") {
            return null; // No weather for STANDARD
        }
        
        // Tonal signatures are symmetric (CALC_DISS = DISS_CALC)
        const key1 = `${poleA}_${poleB}`;
        const key2 = `${poleB}_${poleA}`;
        
        const signature = ORACLE_DATA.tonal_signatures[key1] || 
                         ORACLE_DATA.tonal_signatures[key2];
        
        if (!signature) {
            console.error(`No tonal signature found for ${poleA}/${poleB}`);
            return {
                descriptor: "undefined drift",
                gloss: "atmosphere undefined"
            };
        }
        
        return signature;
    },
    
    /**
     * Get random meta-line
     */
    getRandomMetaLine() {
        const lines = ORACLE_DATA.meta_lines;
        return lines[Math.floor(Math.random() * lines.length)];
    },
    
    /**
     * Get polarity trigger for familiar
     */
    getPolarityTrigger(familiar) {
        return ORACLE_DATA.polarity_triggers[familiar] || "Undefined trigger";
    },
    
    /**
     * Get ritual prompt for cycle + familiar
     */
    getRitual(cycle, familiar) {
        const prompts = ORACLE_DATA.prompts;
        
        if (!prompts[cycle] || !prompts[cycle][familiar]) {
            console.error(`No ritual found for ${cycle} / ${familiar}`);
            return {
                function: "placeholder function",
                setup: "placeholder setup",
                action: "placeholder action",
                prompt: "placeholder prompt",
                note: "placeholder note"
            };
        }
        
        return prompts[cycle][familiar];
    },
    
    /**
     * Format polarity mode description
     */
    getPolarityDescription(polarity, delta) {
        const descriptions = {
            "STANDARD": {
                label: "STANDARD MODE",
                description: `Δ = ${delta.toFixed(2)} (moderate drift)`,
                explanation: "Dominant flow: clear directional transformation"
            },
            "ENTANGLED": {
                label: "ENTANGLED MODE",
                description: `Δ = ${delta.toFixed(2)} (near-equal)`,
                explanation: "Simultaneous processes: operations coexist in paradox"
            },
            "RETROGRADE": {
                label: "RETROGRADE MODE",
                description: `Δ = ${delta.toFixed(2)} (large separation)`,
                explanation: "Inversion active: secondary pole challenges primary"
            },
            "REFLEXIVE": {
                label: "REFLEXIVE MODE",
                description: `Δ = ${delta.toFixed(2)} (small drift)`,
                explanation: "Self-observation: operations reflect each other"
            }
        };
        
        return descriptions[polarity] || descriptions.STANDARD;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Oracle;
}
