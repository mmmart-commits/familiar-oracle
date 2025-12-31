/**
 * ORACLE DATA
 * All matrices, prompts, and content for the oracle system
 * COMPLETE VERSION - All 168 combinations
 */

const ORACLE_DATA = {
    
    /**
     * FAMILIAR ASSIGNMENTS
     * Maps Vector+Polarity → Familiar
     * Format: "POLE_A_POLE_B_POLARITY": "FAMILIAR_NAME"
     */
    familiar_assignments: {
        "CALCINATION_COAGULATION_ENTANGLED": "SEER",
        "CALCINATION_COAGULATION_REFLEXIVE": "CARTOGRAPHER",
        "CALCINATION_COAGULATION_RETROGRADE": "CUSTODIAN",
        "CALCINATION_COAGULATION_STANDARD": "ARCHIVIST",
        "CALCINATION_CONJUNCTION_ENTANGLED": "ORACLE",
        "CALCINATION_CONJUNCTION_REFLEXIVE": "MIRROR",
        "CALCINATION_CONJUNCTION_RETROGRADE": "TRICKSTER",
        "CALCINATION_CONJUNCTION_STANDARD": "PILGRIM",
        "CALCINATION_DISSOLUTION_ENTANGLED": "MIRROR",
        "CALCINATION_DISSOLUTION_REFLEXIVE": "THERAPIST",
        "CALCINATION_DISSOLUTION_RETROGRADE": "TRANSLATOR",
        "CALCINATION_DISSOLUTION_STANDARD": "THERAPIST",
        "CALCINATION_DISTILLATION_ENTANGLED": "SEER",
        "CALCINATION_DISTILLATION_REFLEXIVE": "ORACLE",
        "CALCINATION_DISTILLATION_RETROGRADE": "TRANSLATOR",
        "CALCINATION_DISTILLATION_STANDARD": "ENGINEER",
        "CALCINATION_FERMENTATION_ENTANGLED": "SEER",
        "CALCINATION_FERMENTATION_REFLEXIVE": "THERAPIST",
        "CALCINATION_FERMENTATION_RETROGRADE": "GHOST",
        "CALCINATION_FERMENTATION_STANDARD": "CARETAKER",
        "CALCINATION_SEPARATION_ENTANGLED": "TRICKSTER",
        "CALCINATION_SEPARATION_REFLEXIVE": "ARCHIVIST",
        "CALCINATION_SEPARATION_RETROGRADE": "GHOST",
        "CALCINATION_SEPARATION_STANDARD": "ENGINEER",
        "COAGULATION_CALCINATION_ENTANGLED": "ENGINEER",
        "COAGULATION_CALCINATION_REFLEXIVE": "ARCHIVIST",
        "COAGULATION_CALCINATION_RETROGRADE": "CUSTODIAN",
        "COAGULATION_CALCINATION_STANDARD": "TRICKSTER",
        "COAGULATION_CONJUNCTION_ENTANGLED": "SEER",
        "COAGULATION_CONJUNCTION_REFLEXIVE": "ARCHIVIST",
        "COAGULATION_CONJUNCTION_RETROGRADE": "TRICKSTER",
        "COAGULATION_CONJUNCTION_STANDARD": "CUSTODIAN",
        "COAGULATION_DISSOLUTION_ENTANGLED": "ORACLE",
        "COAGULATION_DISSOLUTION_REFLEXIVE": "MIRROR",
        "COAGULATION_DISSOLUTION_RETROGRADE": "CARTOGRAPHER",
        "COAGULATION_DISSOLUTION_STANDARD": "THERAPIST",
        "COAGULATION_DISTILLATION_ENTANGLED": "SEER",
        "COAGULATION_DISTILLATION_REFLEXIVE": "ORACLE",
        "COAGULATION_DISTILLATION_RETROGRADE": "TRANSLATOR",
        "COAGULATION_DISTILLATION_STANDARD": "ENGINEER",
        "COAGULATION_FERMENTATION_ENTANGLED": "GHOST",
        "COAGULATION_FERMENTATION_REFLEXIVE": "THERAPIST",
        "COAGULATION_FERMENTATION_RETROGRADE": "PILGRIM",
        "COAGULATION_FERMENTATION_STANDARD": "CARETAKER",
        "COAGULATION_SEPARATION_ENTANGLED": "CARTOGRAPHER",
        "COAGULATION_SEPARATION_REFLEXIVE": "CARTOGRAPHER",
        "COAGULATION_SEPARATION_RETROGRADE": "ENGINEER",
        "COAGULATION_SEPARATION_STANDARD": "ARCHIVIST",
        "CONJUNCTION_CALCINATION_ENTANGLED": "TRICKSTER",
        "CONJUNCTION_CALCINATION_REFLEXIVE": "ORACLE",
        "CONJUNCTION_CALCINATION_RETROGRADE": "GHOST",
        "CONJUNCTION_CALCINATION_STANDARD": "ENGINEER",
        "CONJUNCTION_COAGULATION_ENTANGLED": "SEER",
        "CONJUNCTION_COAGULATION_REFLEXIVE": "ARCHIVIST",
        "CONJUNCTION_COAGULATION_RETROGRADE": "ENGINEER",
        "CONJUNCTION_COAGULATION_STANDARD": "CUSTODIAN",
        "CONJUNCTION_DISSOLUTION_ENTANGLED": "MIRROR",
        "CONJUNCTION_DISSOLUTION_REFLEXIVE": "MIRROR",
        "CONJUNCTION_DISSOLUTION_RETROGRADE": "TRANSLATOR",
        "CONJUNCTION_DISSOLUTION_STANDARD": "THERAPIST",
        "CONJUNCTION_DISTILLATION_ENTANGLED": "SEER",
        "CONJUNCTION_DISTILLATION_REFLEXIVE": "ORACLE",
        "CONJUNCTION_DISTILLATION_RETROGRADE": "TRANSLATOR",
        "CONJUNCTION_DISTILLATION_STANDARD": "ENGINEER",
        "CONJUNCTION_FERMENTATION_ENTANGLED": "ORACLE",
        "CONJUNCTION_FERMENTATION_REFLEXIVE": "THERAPIST",
        "CONJUNCTION_FERMENTATION_RETROGRADE": "CARETAKER",
        "CONJUNCTION_FERMENTATION_STANDARD": "PILGRIM",
        "CONJUNCTION_SEPARATION_ENTANGLED": "SEER",
        "CONJUNCTION_SEPARATION_REFLEXIVE": "CARTOGRAPHER",
        "CONJUNCTION_SEPARATION_RETROGRADE": "TRICKSTER",
        "CONJUNCTION_SEPARATION_STANDARD": "ARCHIVIST",
        "DISSOLUTION_CALCINATION_ENTANGLED": "MIRROR",
        "DISSOLUTION_CALCINATION_REFLEXIVE": "ORACLE",
        "DISSOLUTION_CALCINATION_RETROGRADE": "ENGINEER",
        "DISSOLUTION_CALCINATION_STANDARD": "TRICKSTER",
        "DISSOLUTION_COAGULATION_ENTANGLED": "ORACLE",
        "DISSOLUTION_COAGULATION_REFLEXIVE": "CARTOGRAPHER",
        "DISSOLUTION_COAGULATION_RETROGRADE": "TRICKSTER",
        "DISSOLUTION_COAGULATION_STANDARD": "CUSTODIAN",
        "DISSOLUTION_CONJUNCTION_ENTANGLED": "MIRROR",
        "DISSOLUTION_CONJUNCTION_REFLEXIVE": "THERAPIST",
        "DISSOLUTION_CONJUNCTION_RETROGRADE": "GHOST",
        "DISSOLUTION_CONJUNCTION_STANDARD": "THERAPIST",
        "DISSOLUTION_DISTILLATION_ENTANGLED": "SEER",
        "DISSOLUTION_DISTILLATION_REFLEXIVE": "ORACLE",
        "DISSOLUTION_DISTILLATION_RETROGRADE": "TRANSLATOR",
        "DISSOLUTION_DISTILLATION_STANDARD": "ENGINEER",
        "DISSOLUTION_FERMENTATION_ENTANGLED": "SEER",
        "DISSOLUTION_FERMENTATION_REFLEXIVE": "THERAPIST",
        "DISSOLUTION_FERMENTATION_RETROGRADE": "CARETAKER",
        "DISSOLUTION_FERMENTATION_STANDARD": "PILGRIM",
        "DISSOLUTION_SEPARATION_ENTANGLED": "CARTOGRAPHER",
        "DISSOLUTION_SEPARATION_REFLEXIVE": "MIRROR",
        "DISSOLUTION_SEPARATION_RETROGRADE": "TRANSLATOR",
        "DISSOLUTION_SEPARATION_STANDARD": "ARCHIVIST",
        "DISTILLATION_CALCINATION_ENTANGLED": "TRICKSTER",
        "DISTILLATION_CALCINATION_REFLEXIVE": "ORACLE",
        "DISTILLATION_CALCINATION_RETROGRADE": "TRANSLATOR",
        "DISTILLATION_CALCINATION_STANDARD": "ENGINEER",
        "DISTILLATION_COAGULATION_ENTANGLED": "SEER",
        "DISTILLATION_COAGULATION_REFLEXIVE": "ARCHIVIST",
        "DISTILLATION_COAGULATION_RETROGRADE": "ENGINEER",
        "DISTILLATION_COAGULATION_STANDARD": "CUSTODIAN",
        "DISTILLATION_CONJUNCTION_ENTANGLED": "ORACLE",
        "DISTILLATION_CONJUNCTION_REFLEXIVE": "ORACLE",
        "DISTILLATION_CONJUNCTION_RETROGRADE": "TRICKSTER",
        "DISTILLATION_CONJUNCTION_STANDARD": "ENGINEER",
        "DISTILLATION_DISSOLUTION_ENTANGLED": "MIRROR",
        "DISTILLATION_DISSOLUTION_REFLEXIVE": "MIRROR",
        "DISTILLATION_DISSOLUTION_RETROGRADE": "CARTOGRAPHER",
        "DISTILLATION_DISSOLUTION_STANDARD": "THERAPIST",
        "DISTILLATION_FERMENTATION_ENTANGLED": "GHOST",
        "DISTILLATION_FERMENTATION_REFLEXIVE": "THERAPIST",
        "DISTILLATION_FERMENTATION_RETROGRADE": "PILGRIM",
        "DISTILLATION_FERMENTATION_STANDARD": "CARETAKER",
        "DISTILLATION_SEPARATION_ENTANGLED": "SEER",
        "DISTILLATION_SEPARATION_REFLEXIVE": "CARTOGRAPHER",
        "DISTILLATION_SEPARATION_RETROGRADE": "TRANSLATOR",
        "DISTILLATION_SEPARATION_STANDARD": "ARCHIVIST",
        "FERMENTATION_CALCINATION_ENTANGLED": "GHOST",
        "FERMENTATION_CALCINATION_REFLEXIVE": "THERAPIST",
        "FERMENTATION_CALCINATION_RETROGRADE": "CARETAKER",
        "FERMENTATION_CALCINATION_STANDARD": "TRICKSTER",
        "FERMENTATION_COAGULATION_ENTANGLED": "SEER",
        "FERMENTATION_COAGULATION_REFLEXIVE": "ARCHIVIST",
        "FERMENTATION_COAGULATION_RETROGRADE": "GHOST",
        "FERMENTATION_COAGULATION_STANDARD": "CUSTODIAN",
        "FERMENTATION_CONJUNCTION_ENTANGLED": "ORACLE",
        "FERMENTATION_CONJUNCTION_REFLEXIVE": "ORACLE",
        "FERMENTATION_CONJUNCTION_RETROGRADE": "TRANSLATOR",
        "FERMENTATION_CONJUNCTION_STANDARD": "PILGRIM",
        "FERMENTATION_DISSOLUTION_ENTANGLED": "MIRROR",
        "FERMENTATION_DISSOLUTION_REFLEXIVE": "THERAPIST",
        "FERMENTATION_DISSOLUTION_RETROGRADE": "PILGRIM",
        "FERMENTATION_DISSOLUTION_STANDARD": "THERAPIST",
        "FERMENTATION_DISTILLATION_ENTANGLED": "SEER",
        "FERMENTATION_DISTILLATION_REFLEXIVE": "CARTOGRAPHER",
        "FERMENTATION_DISTILLATION_RETROGRADE": "TRANSLATOR",
        "FERMENTATION_DISTILLATION_STANDARD": "ENGINEER",
        "FERMENTATION_SEPARATION_ENTANGLED": "CARTOGRAPHER",
        "FERMENTATION_SEPARATION_REFLEXIVE": "MIRROR",
        "FERMENTATION_SEPARATION_RETROGRADE": "GHOST",
        "FERMENTATION_SEPARATION_STANDARD": "ARCHIVIST",
        "SEPARATION_CALCINATION_ENTANGLED": "ENGINEER",
        "SEPARATION_CALCINATION_REFLEXIVE": "ARCHIVIST",
        "SEPARATION_CALCINATION_RETROGRADE": "GHOST",
        "SEPARATION_CALCINATION_STANDARD": "TRICKSTER",
        "SEPARATION_COAGULATION_ENTANGLED": "ORACLE",
        "SEPARATION_COAGULATION_REFLEXIVE": "ARCHIVIST",
        "SEPARATION_COAGULATION_RETROGRADE": "ENGINEER",
        "SEPARATION_COAGULATION_STANDARD": "CUSTODIAN",
        "SEPARATION_CONJUNCTION_ENTANGLED": "SEER",
        "SEPARATION_CONJUNCTION_REFLEXIVE": "ORACLE",
        "SEPARATION_CONJUNCTION_RETROGRADE": "TRANSLATOR",
        "SEPARATION_CONJUNCTION_STANDARD": "ENGINEER",
        "SEPARATION_DISSOLUTION_ENTANGLED": "MIRROR",
        "SEPARATION_DISSOLUTION_REFLEXIVE": "MIRROR",
        "SEPARATION_DISSOLUTION_RETROGRADE": "CARTOGRAPHER",
        "SEPARATION_DISSOLUTION_STANDARD": "THERAPIST",
        "SEPARATION_DISTILLATION_ENTANGLED": "SEER",
        "SEPARATION_DISTILLATION_REFLEXIVE": "CARTOGRAPHER",
        "SEPARATION_DISTILLATION_RETROGRADE": "TRANSLATOR",
        "SEPARATION_DISTILLATION_STANDARD": "ARCHIVIST",
        "SEPARATION_FERMENTATION_ENTANGLED": "GHOST",
        "SEPARATION_FERMENTATION_REFLEXIVE": "THERAPIST",
        "SEPARATION_FERMENTATION_RETROGRADE": "PILGRIM",
        "SEPARATION_FERMENTATION_STANDARD": "CARETAKER",
    },
    
    /**
     * CYCLE SUGGESTIONS  
     * Maps Vector+Polarity → Array of 2-3 suggested cycles
     */
    cycle_suggestions: {
        "CALCINATION_COAGULATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "beginning and end united"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "alpha and omega paradox"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "fire-earth coexistence"
            },
        ],
        "CALCINATION_COAGULATION_REFLEXIVE": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "mapping the complete territory"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "self-documenting journey"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "charting burn-to-solid"
            },
        ],
        "CALCINATION_COAGULATION_RETROGRADE": [
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "undoing the fix back to burn"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "unbuilding solid"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde pressure"
            },
        ],
        "CALCINATION_COAGULATION_STANDARD": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "full arc - burning to fixing"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "complete journey to solid"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "burn to gravity"
            },
        ],
        "CALCINATION_CONJUNCTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "fire and binding as one"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "destruction and union paradox"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "burning union"
            },
        ],
        "CALCINATION_CONJUNCTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "burning reflects union"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "self-binding through fire"
            },
        ],
        "CALCINATION_CONJUNCTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "joining what was meant to burn"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "inverted union"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "backwards construction"
            },
        ],
        "CALCINATION_CONJUNCTION_STANDARD": [
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "long walk from burning to union"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "patient binding after burn"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "slow union maturation"
            },
        ],
        "CALCINATION_DISSOLUTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "fire and water coexist"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "elemental opposites tested"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "paradox shimmer"
            },
        ],
        "CALCINATION_DISSOLUTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-cooling recursion"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "self-soothing paradox"
            },
        ],
        "CALCINATION_DISSOLUTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "dissolving backwards into burning"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "retrograde cooling"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "inversion testing"
            },
        ],
        "CALCINATION_DISSOLUTION_STANDARD": [
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "burn meets dissolving echo"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "cooling after intensity"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "burn and dissolve merge"
            },
        ],
        "CALCINATION_DISTILLATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "fire and essence as one vision"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "burn-refine paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "gross and subtle united"
            },
        ],
        "CALCINATION_DISTILLATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "burning becomes its own refinement"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-distilling fire"
            },
        ],
        "CALCINATION_DISTILLATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "refining backwards into fire"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "retrograde purification"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "essence devolves to fire"
            },
        ],
        "CALCINATION_DISTILLATION_STANDARD": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "burning then refining technically"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "precision after burn"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "technical progression to essence"
            },
        ],
        "CALCINATION_FERMENTATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "burn and grow simultaneously"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "fire and decay paradox"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "burning patina"
            },
        ],
        "CALCINATION_FERMENTATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-composting burn"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "watching self-age"
            },
        ],
        "CALCINATION_FERMENTATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "fermentation eating the burned"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde aging"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "backwards devotion"
            },
        ],
        "CALCINATION_FERMENTATION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "tending decay after burning"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "burn then age"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "gentle composting after heat"
            },
        ],
        "CALCINATION_SEPARATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "burn and analyze together"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "fire and earth paradox"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "controlled chaos shimmer"
            },
        ],
        "CALCINATION_SEPARATION_REFLEXIVE": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "documenting own burning"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "archiving self-purification"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "self-forensics"
            },
        ],
        "CALCINATION_SEPARATION_RETROGRADE": [
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "separating what was calcined - forensics"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "ghostly archaeology"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "backwards erosion"
            },
        ],
        "CALCINATION_SEPARATION_STANDARD": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "controlled burn then sort"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "burning creates strata"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "burn to reveal layers"
            },
        ],
        "COAGULATION_CALCINATION_ENTANGLED": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "solid and fire coexist"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "fix-burn paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "earth-fire unity"
            },
        ],
        "COAGULATION_CALCINATION_REFLEXIVE": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "documenting own burning"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "solid burns itself"
            },
        ],
        "COAGULATION_CALCINATION_RETROGRADE": [
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "burning backwards into fixing"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde pressure burn"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards purification"
            },
        ],
        "COAGULATION_CALCINATION_STANDARD": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "burning the solid"
            },
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "purifying fixed matter"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "fire after pressure"
            },
        ],
        "COAGULATION_CONJUNCTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "solid and binding as one"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "fix-bind paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "coagulate-conjoin unity"
            },
        ],
        "COAGULATION_CONJUNCTION_REFLEXIVE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "solid documents its binding"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-binding solid"
            },
        ],
        "COAGULATION_CONJUNCTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "unbinding the solid"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde union"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "backwards binding"
            },
        ],
        "COAGULATION_CONJUNCTION_STANDARD": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "maintaining fixed union"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "solid binding"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "gravity union"
            },
        ],
        "COAGULATION_DISSOLUTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "solid becomes liquid - paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "fix-dissolve unity"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "solid-liquid paradox"
            },
        ],
        "COAGULATION_DISSOLUTION_REFLEXIVE": [
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "solid reflects its dissolving"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-liquefying solid"
            },
        ],
        "COAGULATION_DISSOLUTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "mapping backwards dissolution"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "retrograde liquefaction"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "backwards pressure release"
            },
        ],
        "COAGULATION_DISSOLUTION_STANDARD": [
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "dissolving the fixed"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "gentle solid dissolution"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "mature releasing"
            },
        ],
        "COAGULATION_DISTILLATION_ENTANGLED": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "solid and essence united"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "fix-refine paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "earth-air unity"
            },
        ],
        "COAGULATION_DISTILLATION_REFLEXIVE": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "solid refines itself"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-distilling solid"
            },
        ],
        "COAGULATION_DISTILLATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "refining backwards into coagulation"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "retrograde essence extraction"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "backwards distillation"
            },
        ],
        "COAGULATION_DISTILLATION_STANDARD": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "refining the solid"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "solid to essence"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "technical refinement under pressure"
            },
        ],
        "COAGULATION_FERMENTATION_ENTANGLED": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "fixed and rotting together"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "solid-decay paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "coagulate-ferment unity"
            },
        ],
        "COAGULATION_FERMENTATION_REFLEXIVE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "solid composts itself"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "watching self-decay"
            },
        ],
        "COAGULATION_FERMENTATION_RETROGRADE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "walking backwards into decay"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "retrograde aging"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards fermentation"
            },
        ],
        "COAGULATION_FERMENTATION_STANDARD": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "tending decay of solid"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "solid gently decaying"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "fixed matter aging"
            },
        ],
        "COAGULATION_SEPARATION_ENTANGLED": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "mapping solid territories"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "fix-separate paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "solid-division unity"
            },
        ],
        "COAGULATION_SEPARATION_REFLEXIVE": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "solid maps itself"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "self-analyzing solid"
            },
        ],
        "COAGULATION_SEPARATION_RETROGRADE": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "unbuilding through separation"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "backwards forensics"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "retrograde analysis"
            },
        ],
        "COAGULATION_SEPARATION_STANDARD": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "sorting the solid"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "forensic solid analysis"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "fixed stratification"
            },
        ],
        "CONJUNCTION_CALCINATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "binding and burning together"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "union-destruction paradox"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "chaotic fire-binding"
            },
        ],
        "CONJUNCTION_CALCINATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "union burns itself"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "self-purifying bond"
            },
        ],
        "CONJUNCTION_CALCINATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "calcining backwards through union"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "ghostly unbinding burn"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde union burn"
            },
        ],
        "CONJUNCTION_CALCINATION_STANDARD": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "burning the union technically"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "union into fire"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "burning bound elements"
            },
        ],
        "CONJUNCTION_COAGULATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "union and solidity as one"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "bind-coagulate paradox"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "union-weight unity"
            },
        ],
        "CONJUNCTION_COAGULATION_REFLEXIVE": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "documenting union's fixing"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "archiving self-solidification"
            },
        ],
        "CONJUNCTION_COAGULATION_RETROGRADE": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "unbuilding solid union"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards coagulation"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "retrograde gravity"
            },
        ],
        "CONJUNCTION_COAGULATION_STANDARD": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "fixing the bound"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "union solidifying"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "bound to gravity"
            },
        ],
        "CONJUNCTION_DISSOLUTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "union IS dissolution"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "bind-dissolve paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "conjunction-dissolution unity"
            },
        ],
        "CONJUNCTION_DISSOLUTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "union reflects its own dissolving"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "self-dissolving bond"
            },
        ],
        "CONJUNCTION_DISSOLUTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "merging backwards into binding"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "backwards union-dissolve"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "retrograde echo"
            },
        ],
        "CONJUNCTION_DISSOLUTION_STANDARD": [
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "dissolving union gently"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "union into echo"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "intimate dissolution"
            },
        ],
        "CONJUNCTION_DISTILLATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "binding and essence together"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "union-essence paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "bind-refine unity"
            },
        ],
        "CONJUNCTION_DISTILLATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "union refines itself"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-distilling bond"
            },
        ],
        "CONJUNCTION_DISTILLATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "essence unmakes union"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "retrograde refinement"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "backwards distillation"
            },
        ],
        "CONJUNCTION_DISTILLATION_STANDARD": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "refining the union"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "union to essence"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "technical union refinement"
            },
        ],
        "CONJUNCTION_FERMENTATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "binding becomes rotting"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "union-decay paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "bind-ferment unity"
            },
        ],
        "CONJUNCTION_FERMENTATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "union composts itself"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "self-fermenting bond"
            },
        ],
        "CONJUNCTION_FERMENTATION_RETROGRADE": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "tending backwards fermentation"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde aging"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "backwards organic decay"
            },
        ],
        "CONJUNCTION_FERMENTATION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "patient decay of union"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "union aging"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "bound elements decaying"
            },
        ],
        "CONJUNCTION_SEPARATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "binding and separating coexist"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "union-division paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "bind-separate unity"
            },
        ],
        "CONJUNCTION_SEPARATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "mapping union's territories"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "charting self-division"
            },
        ],
        "CONJUNCTION_SEPARATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "inverting union into division"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "backwards unbinding"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "retrograde stratification"
            },
        ],
        "CONJUNCTION_SEPARATION_STANDARD": [
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "documenting division of union"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "union into layers"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "separating bound elements"
            },
        ],
        "DISSOLUTION_CALCINATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "water and fire meeting"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "elemental opposites"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "liquid fire paradox"
            },
        ],
        "DISSOLUTION_CALCINATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "dissolution questions itself with fire"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "self-volatilizing"
            },
        ],
        "DISSOLUTION_CALCINATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "burning liquid retrograde"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "controlled backwards burning"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "inverted volatilization"
            },
        ],
        "DISSOLUTION_CALCINATION_STANDARD": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "volatilizing the dissolved"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "water into fire"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "burning away excess water"
            },
        ],
        "DISSOLUTION_COAGULATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "water becomes stone - paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "liquid-solid unity"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "dissolve-coagulate paradox"
            },
        ],
        "DISSOLUTION_COAGULATION_REFLEXIVE": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "mapping water's solidification"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "watching self-coagulate"
            },
        ],
        "DISSOLUTION_COAGULATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "solidifying backwards into liquid"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "unmaking the solid"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde pressure"
            },
        ],
        "DISSOLUTION_COAGULATION_STANDARD": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "fixing the dissolved"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "water becoming solid"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "liquid to gravity"
            },
        ],
        "DISSOLUTION_CONJUNCTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "dissolution IS conjunction"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "total water union"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "dissolve-bind paradox"
            },
        ],
        "DISSOLUTION_CONJUNCTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-merging in water"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "water binding to itself"
            },
        ],
        "DISSOLUTION_CONJUNCTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "undoing union into water"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "backwards binding"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "dissolving bonds"
            },
        ],
        "DISSOLUTION_CONJUNCTION_STANDARD": [
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "gentle merging after dissolving"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "liquid union"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "patient water-binding"
            },
        ],
        "DISSOLUTION_DISTILLATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "liquid and vapor coexist"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "water-vapor unity"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "gross liquid, subtle vapor"
            },
        ],
        "DISSOLUTION_DISTILLATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "water distills itself"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-refining liquid"
            },
        ],
        "DISSOLUTION_DISTILLATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "vapor condensing back"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "retrograde refinement"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "essence returning to water"
            },
        ],
        "DISSOLUTION_DISTILLATION_STANDARD": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "technical refinement of dissolved"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "liquid to vapor"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "water becoming essence"
            },
        ],
        "DISSOLUTION_FERMENTATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "water and decay as one"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "dissolve-ferment paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "liquid rot unity"
            },
        ],
        "DISSOLUTION_FERMENTATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-composting in solution"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "watching self-decay"
            },
        ],
        "DISSOLUTION_FERMENTATION_RETROGRADE": [
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "tending backwards fermentation"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde aging"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "backwards devotion"
            },
        ],
        "DISSOLUTION_FERMENTATION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "patient rotting of liquid"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "liquid decay"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "water aging slowly"
            },
        ],
        "DISSOLUTION_SEPARATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "liquid geography"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "water-earth paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "fluid boundaries"
            },
        ],
        "DISSOLUTION_SEPARATION_REFLEXIVE": [
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "liquid reflecting its own divisions"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-separating water"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "watching self-erode"
            },
        ],
        "DISSOLUTION_SEPARATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "separating backwards into merging"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "retrograde stratification"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "backwards archaeology"
            },
        ],
        "DISSOLUTION_SEPARATION_STANDARD": [
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "documenting what separates from solution"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "liquid sorting"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "water reveals layers"
            },
        ],
        "DISTILLATION_CALCINATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "essence and fire together"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "refine-burn paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "air-fire unity"
            },
        ],
        "DISTILLATION_CALCINATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "essence burns itself"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-purifying essence"
            },
        ],
        "DISTILLATION_CALCINATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "burning backwards into refinement"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "retrograde essence burn"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "backwards purification"
            },
        ],
        "DISTILLATION_CALCINATION_STANDARD": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "burning the refined"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "technical burn of essence"
            },
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "purifying purity"
            },
        ],
        "DISTILLATION_COAGULATION_ENTANGLED": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "essence and solid as one"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "refine-fix paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "vapor-earth unity"
            },
        ],
        "DISTILLATION_COAGULATION_REFLEXIVE": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "documenting essence's fixing"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "archiving self-solidification"
            },
        ],
        "DISTILLATION_COAGULATION_RETROGRADE": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "unbuilding solid essence"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "technical deconstruction"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "retrograde fixing"
            },
        ],
        "DISTILLATION_COAGULATION_STANDARD": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "fixing the refined"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "essence solidifying"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "vapor to gravity"
            },
        ],
        "DISTILLATION_CONJUNCTION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "refinement IS union"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "essence-bind paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "distill-conjoin unity"
            },
        ],
        "DISTILLATION_CONJUNCTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "essence binds itself"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-uniting vapor"
            },
        ],
        "DISTILLATION_CONJUNCTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "unbinding the essential"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "retrograde essence union"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "backwards binding"
            },
        ],
        "DISTILLATION_CONJUNCTION_STANDARD": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "binding essence technically"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "refined union"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "technical essence binding"
            },
        ],
        "DISTILLATION_DISSOLUTION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "refinement and water as one"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "essence-water paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "vapor-liquid unity"
            },
        ],
        "DISTILLATION_DISSOLUTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "essence dissolves into itself"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-condensing vapor"
            },
        ],
        "DISTILLATION_DISSOLUTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "mapping dissolution of essence"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "retrograde condensation"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "backwards liquefaction"
            },
        ],
        "DISTILLATION_DISSOLUTION_STANDARD": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "dissolving essence gently"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "vapor to water"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "essence relaxing"
            },
        ],
        "DISTILLATION_FERMENTATION_ENTANGLED": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "refinement and rot together"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "essence-decay paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "distill-ferment unity"
            },
        ],
        "DISTILLATION_FERMENTATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "essence composts itself"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "watching self-decay"
            },
        ],
        "DISTILLATION_FERMENTATION_RETROGRADE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "walking backwards through fermentation"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "retrograde essence decay"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards aging"
            },
        ],
        "DISTILLATION_FERMENTATION_STANDARD": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "tending decay of essence"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "refined aging"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "essence composting"
            },
        ],
        "DISTILLATION_SEPARATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "essence and division united"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "refine-separate paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "vapor-earth unity"
            },
        ],
        "DISTILLATION_SEPARATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "mapping essence territories"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "essence charts itself"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "self-documenting refinement"
            },
        ],
        "DISTILLATION_SEPARATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "separating backwards into essence"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "retrograde essence sorting"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "backwards refinement analysis"
            },
        ],
        "DISTILLATION_SEPARATION_STANDARD": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "sorting the refined"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "essence stratification"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "refined analysis"
            },
        ],
        "FERMENTATION_CALCINATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "decay and fire coexist"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "rot-burn paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "organic-fire unity"
            },
        ],
        "FERMENTATION_CALCINATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-burning compost"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "ferment purifies itself"
            },
        ],
        "FERMENTATION_CALCINATION_RETROGRADE": [
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "tending backwards burning"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde burn-age"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "backwards purification"
            },
        ],
        "FERMENTATION_CALCINATION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "burning the rotted"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "decay into fire"
            },
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "purifying ferment"
            },
        ],
        "FERMENTATION_COAGULATION_ENTANGLED": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "decay becomes solid"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "rot-fix paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "ferment-coagulate unity"
            },
        ],
        "FERMENTATION_COAGULATION_REFLEXIVE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "archiving compost's fixing"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "documenting self-solidification"
            },
        ],
        "FERMENTATION_COAGULATION_RETROGRADE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "solidifying backwards into decay"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "ghostly backwards fixing"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde ferment pressure"
            },
        ],
        "FERMENTATION_COAGULATION_STANDARD": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "fixing the rotted"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "decay solidifying"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "ferment to gravity"
            },
        ],
        "FERMENTATION_CONJUNCTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "rot and binding as paradox"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "decay-bind unity"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "ferment-conjoin paradox"
            },
        ],
        "FERMENTATION_CONJUNCTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "decay binds itself"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "self-uniting ferment"
            },
        ],
        "FERMENTATION_CONJUNCTION_RETROGRADE": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "unbinding the fermented"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde union of decay"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards binding"
            },
        ],
        "FERMENTATION_CONJUNCTION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "patient union of decay"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "decaying into binding"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "ferment rejoining"
            },
        ],
        "FERMENTATION_DISSOLUTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "rot and water together"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "decay-dissolve paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "ferment-water unity"
            },
        ],
        "FERMENTATION_DISSOLUTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "decay dissolves itself"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "self-dissolving ferment"
            },
        ],
        "FERMENTATION_DISSOLUTION_RETROGRADE": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "walking backwards through dissolution"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde liquid decay"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards dissolution"
            },
        ],
        "FERMENTATION_DISSOLUTION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "dissolving decay"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "gentle liquid rot"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "soothing fermentation"
            },
        ],
        "FERMENTATION_DISTILLATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "rot and essence united"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "decay-refine paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "ferment-distill unity"
            },
        ],
        "FERMENTATION_DISTILLATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "mapping decay's refinement"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "charting self-distillation"
            },
        ],
        "FERMENTATION_DISTILLATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "essence unmakes fermentation"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde refinement of decay"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "backwards purification"
            },
        ],
        "FERMENTATION_DISTILLATION_STANDARD": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "refining decay technically"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "rot to essence"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "aging into purity"
            },
        ],
        "FERMENTATION_SEPARATION_ENTANGLED": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "mapping decay's territories"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "rot-sort paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "ferment-analyze unity"
            },
        ],
        "FERMENTATION_SEPARATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "decay reflects its divisions"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "watching self-stratify"
            },
        ],
        "FERMENTATION_SEPARATION_RETROGRADE": [
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "separating backwards into rot"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "ghostly decay analysis"
            },
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "backwards sorting"
            },
        ],
        "FERMENTATION_SEPARATION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "sorting the fermented"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "decay stratification"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "organic sorting"
            },
        ],
        "SEPARATION_CALCINATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "analysis and fire together"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "earth-fire paradox"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "precise burning"
            },
        ],
        "SEPARATION_CALCINATION_REFLEXIVE": [
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "cataloging own burning"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-purification analysis"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "documenting self-burn"
            },
        ],
        "SEPARATION_CALCINATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "calcining backwards into sorting"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "ghostly burn analysis"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "retrograde fire excavation"
            },
        ],
        "SEPARATION_CALCINATION_STANDARD": [
            {
                cycle: "I",
                name: "Ritual Preparation and Clearing",
                reason: "burning what was sorted"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "fire reveals sorted layers"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "burn after separation"
            },
        ],
        "SEPARATION_COAGULATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "division becomes solidity"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "separate-coagulate paradox"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "analysis-weight unity"
            },
        ],
        "SEPARATION_COAGULATION_REFLEXIVE": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "archiving own solidification"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "documenting self-coagulation"
            },
        ],
        "SEPARATION_COAGULATION_RETROGRADE": [
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "unbuilding the coagulated"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "technical deconstruction"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "backwards compression"
            },
        ],
        "SEPARATION_COAGULATION_STANDARD": [
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "fixing sorted elements"
            },
            {
                cycle: "XI",
                name: "Excavation and Compression",
                reason: "pressure fixing layers"
            },
            {
                cycle: "XVI",
                name: "Bass Polarity Cycle",
                reason: "sorted to gravity"
            },
        ],
        "SEPARATION_CONJUNCTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "division is union"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "paradox construction"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "separate-join unity"
            },
        ],
        "SEPARATION_CONJUNCTION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "separation questions its own joining"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "self-binding analysis"
            },
        ],
        "SEPARATION_CONJUNCTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "unbinding what was separated"
            },
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "backwards reconstruction"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "retrograde union"
            },
        ],
        "SEPARATION_CONJUNCTION_STANDARD": [
            {
                cycle: "IV",
                name: "Reassembly from Debris",
                reason: "sorted elements recombined technically"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "precise reassembly"
            },
            {
                cycle: "X",
                name: "Intimacy",
                reason: "technical union"
            },
        ],
        "SEPARATION_DISSOLUTION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "separating and merging as one"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "earth-water paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "division-union unity"
            },
        ],
        "SEPARATION_DISSOLUTION_REFLEXIVE": [
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "seeing self dissolve"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "boundaries dissolving inward"
            },
        ],
        "SEPARATION_DISSOLUTION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "mapping dissolution of boundaries"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "backwards erosion mapping"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "retrograde merging"
            },
        ],
        "SEPARATION_DISSOLUTION_STANDARD": [
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "dissolving after analysis"
            },
            {
                cycle: "II",
                name: "Return and Interference",
                reason: "sorted then merged"
            },
            {
                cycle: "XII",
                name: "Recovery Phase",
                reason: "gentle dissolution of boundaries"
            },
        ],
        "SEPARATION_DISTILLATION_ENTANGLED": [
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "analysis and essence as one"
            },
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "sort-refine paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "earth-air unity"
            },
        ],
        "SEPARATION_DISTILLATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "mapping own distillation"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "self-refining analysis"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "charting essence extraction"
            },
        ],
        "SEPARATION_DISTILLATION_RETROGRADE": [
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "refining backwards into separation"
            },
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "retrograde purification"
            },
            {
                cycle: "XVII",
                name: "Final Excavation",
                reason: "backwards essence extraction"
            },
        ],
        "SEPARATION_DISTILLATION_STANDARD": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "documenting refinement of separated"
            },
            {
                cycle: "VII",
                name: "Calibration Becomes Trance",
                reason: "sorted to essence"
            },
            {
                cycle: "VIII",
                name: "Mature Perception",
                reason: "analysis to purity"
            },
        ],
        "SEPARATION_FERMENTATION_ENTANGLED": [
            {
                cycle: "XIII",
                name: "Dissolution/Reconstruction Indistinguishable",
                reason: "separation and rot intertwined"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "sort-decay paradox"
            },
            {
                cycle: "XV",
                name: "Grand Polarity Cycle",
                reason: "analysis-ferment unity"
            },
        ],
        "SEPARATION_FERMENTATION_REFLEXIVE": [
            {
                cycle: "VI",
                name: "Self-Observation and Repair",
                reason: "self-composting of divisions"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "watching sorted self-decay"
            },
        ],
        "SEPARATION_FERMENTATION_RETROGRADE": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "walking backwards through decay"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "retrograde aging"
            },
            {
                cycle: "XIV",
                name: "Recursion and Data Degradation",
                reason: "backwards fermentation"
            },
        ],
        "SEPARATION_FERMENTATION_STANDARD": [
            {
                cycle: "V",
                name: "Repetition as Ceremony",
                reason: "tending decay of separated elements"
            },
            {
                cycle: "IX",
                name: "Oxidation and Patina",
                reason: "sorted then aged"
            },
            {
                cycle: "III",
                name: "Erosion and Sediment",
                reason: "separation into organic decay"
            },
        ],
    },
    
    /**
     * TONAL SIGNATURES (Pairing Lexicon)
     * Weather descriptors for operation pairings
     */
    tonal_signatures: {
        "CALCINATION_DISSOLUTION": {
            descriptor: "volatile inception",
            gloss: "ignition meets melt; beginnings that consume themselves"
        },
        "CALCINATION_SEPARATION": {
            descriptor: "surgical heat",
            gloss: "clarity through precise burning; dissection by flame"
        },
        "CALCINATION_CONJUNCTION": {
            descriptor: "fused ascent",
            gloss: "union struck in fire; combustion becomes bonding"
        },
        "CALCINATION_FERMENTATION": {
            descriptor: "entangled turbulence",
            gloss: "burning life; reaction that will not settle"
        },
        "CALCINATION_DISTILLATION": {
            descriptor: "dry lightning",
            gloss: "thought crystallising in heat; the mind as kiln"
        },
        "CALCINATION_COAGULATION": {
            descriptor: "ash architecture",
            gloss: "ruin taking shape; residue becomes structure"
        },
        "DISSOLUTION_SEPARATION": {
            descriptor: "gentle erosion",
            gloss: "form learning to forget itself; slow subtraction"
        },
        "DISSOLUTION_CONJUNCTION": {
            descriptor: "humid union",
            gloss: "boundaries dissolve; a meeting within mist"
        },
        "DISSOLUTION_FERMENTATION": {
            descriptor: "organic drift",
            gloss: "growth without control; seepage as genesis"
        },
        "DISSOLUTION_DISTILLATION": {
            descriptor: "mist logic",
            gloss: "reason made vaporous; cool clarity after confusion"
        },
        "DISSOLUTION_COAGULATION": {
            descriptor: "mineral rain",
            gloss: "condensation of what has vanished; solidity returning"
        },
        "SEPARATION_CONJUNCTION": {
            descriptor: "oscillating braid",
            gloss: "analysis and synthesis alternating in rhythm"
        },
        "SEPARATION_FERMENTATION": {
            descriptor: "seed sorting",
            gloss: "refinement that prepares the living matter"
        },
        "SEPARATION_DISTILLATION": {
            descriptor: "sifting air",
            gloss: "intellect filtering itself; discernment through breath"
        },
        "SEPARATION_COAGULATION": {
            descriptor: "diagrammatic fix",
            gloss: "abstract order made tangible; concept hardens"
        },
        "CONJUNCTION_FERMENTATION": {
            descriptor: "living alloy",
            gloss: "vitality fused; spirit finding new vessel"
        },
        "CONJUNCTION_DISTILLATION": {
            descriptor: "rising weave",
            gloss: "elevation through combination; vaporous union"
        },
        "CONJUNCTION_COAGULATION": {
            descriptor: "embodied harmony",
            gloss: "reconciliation taking physical form"
        },
        "FERMENTATION_DISTILLATION": {
            descriptor: "aromatic fever",
            gloss: "spirit refining itself; ecstatic purification"
        },
        "FERMENTATION_COAGULATION": {
            descriptor: "fruiting stone",
            gloss: "living form solidified; incarnation complete"
        },
        "DISTILLATION_COAGULATION": {
            descriptor: "crystal resolve",
            gloss: "pure form congealed; lucidity embodied"
        }
    },
    
    /**
     * META-LINES  
     * Rotating reminders about tonal signatures
     */
    meta_lines: [
        "This reading describes the climate of the Work, not its steps.",
        "Weather, not instruction; temperature, not task.",
        "Attend to the field of force, then act within it.",
        "The vessel reacts; you interpret.",
        "Treat this as atmosphere — something to breathe, not follow.",
        "The tone precedes the gesture; form responds to it.",
        "Orientation before intention.",
        "Listen for pressure and drift; action will emerge.",
        "Interpretation completes the circuit.",
        "The signature names the mood of matter, not your obligation to it.",
        "Guidance without command; gravity without path.",
        "To obey the tone is to misunderstand it; to hear it is enough."
    ],
    
    /**
     * POLARITY TRIGGERS
     * Why each Familiar appears (from PDF table)
     */
    polarity_triggers: {
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
    },
    
    /**
     * RITUAL PROMPTS
     * All 234 Cycle × Familiar combinations
     * Format: prompts[cycle][familiar] = { function, setup, action, prompt, note }
     * 
     * NOTE: This is placeholder structure - you'll need to add all 234 prompts
     * from your anthology. For now I'm adding a few examples.
     */
    prompts: {
        "I": {
            "THERAPIST": {
                function: "grounding after initial burn, somatic recalibration",
                setup: "sit with the mix until you feel the room's temperature, not the screen's",
                action: "lower the overall volume until it nearly disappears",
                prompt: "If the track could rest, what would that rest sound like?",
                note: "when the breath returns, the work remembers how to begin again"
            },
            "ARCHIVIST": {
                function: "documenting the zero state, cataloging potential",
                setup: "open a blank session, note the silence",
                action: "create seven empty tracks, name each after one operation",
                prompt: "What does preparation sound like before sound exists?",
                note: "the empty track is already a record"
            },
            "ENGINEER": {
                function: "controlled preparation, technical foundation",
                setup: "set all faders to unity, bypass all processing",
                action: "route one tone through the complete signal chain",
                prompt: "Where does accuracy become belief?",
                note: "the test tone is the first truth"
            },
            "MIRROR": {
                function: "reflection before action, doubling the zero",
                setup: "duplicate the session, work in the copy",
                action: "name the original 'mirror' and never open it again",
                prompt: "What does the work see when it looks at itself?",
                note: "the duplicate is more honest than the original"
            },
            "THERAPIST": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "ORACLE": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "CUSTODIAN": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "TRICKSTER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "TRANSLATOR": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "PILGRIM": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "SEER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "CARETAKER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "CARTOGRAPHER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "GHOST": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" }
        },
        "II": {
            "THERAPIST": {
                function: "soothing interference patterns, managing feedback",
                setup: "return to your two-element dialogue",
                action: "listen until only interference remains",
                prompt: "Whose absence hums here?",
                note: "catalogue interference by temperature — warm, neutral, cold"
            },
            "ARCHIVIST": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "ENGINEER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "MIRROR": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "ORACLE": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "CUSTODIAN": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "TRICKSTER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "TRANSLATOR": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "PILGRIM": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "SEER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "CARETAKER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "CARTOGRAPHER": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" },
            "GHOST": { function: "placeholder", setup: "placeholder", action: "placeholder", prompt: "placeholder", note: "placeholder" }
        }
        // TODO: Add remaining Cycles III-XVIII with all 13 Familiars each
        // (16 more cycles × 13 familiars = 208 more prompt sets needed)
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ORACLE_DATA;
}
