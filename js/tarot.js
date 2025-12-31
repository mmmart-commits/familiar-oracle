/**
 * TAROT MODULE
 * Tarot de Marseille major arcana definitions and draw logic
 */

const TAROT = {
    // Major Arcana definitions
    cards: [
        { id: 1, name: "LE BATELEUR", name_en: "THE MAGICIAN", potency: 0.95 },
        { id: 2, name: "LA PAPESSE", name_en: "THE HIGH PRIESTESS", potency: 0.88 },
        { id: 3, name: "L'IMPÉRATRICE", name_en: "THE EMPRESS", potency: 0.85 },
        { id: 4, name: "L'EMPEREUR", name_en: "THE EMPEROR", potency: 0.90 },
        { id: 5, name: "LE PAPE", name_en: "THE HIEROPHANT", potency: 0.82 },
        { id: 6, name: "L'AMOUREUX", name_en: "THE LOVERS", potency: 0.87 },
        { id: 7, name: "LE CHARIOT", name_en: "THE CHARIOT", potency: 0.92 },
        { id: 8, name: "LA JUSTICE", name_en: "JUSTICE", potency: 0.80 },
        { id: 9, name: "L'HERMITE", name_en: "THE HERMIT", potency: 0.78 },
        { id: 10, name: "LA ROUE DE FORTUNE", name_en: "WHEEL OF FORTUNE", potency: 0.88 },
        { id: 11, name: "LA FORCE", name_en: "STRENGTH", potency: 0.90 },
        { id: 12, name: "LE PENDU", name_en: "THE HANGED MAN", potency: 0.83 },
        { id: 13, name: "L'ARCANE SANS NOM", name_en: "DEATH", potency: 1.00 },
        { id: 14, name: "TEMPÉRANCE", name_en: "TEMPERANCE", potency: 0.75 },
        { id: 15, name: "LE DIABLE", name_en: "THE DEVIL", potency: 0.95 },
        { id: 16, name: "LA MAISON DIEU", name_en: "THE TOWER", potency: 1.00 },
        { id: 17, name: "L'ÉTOILE", name_en: "THE STAR", potency: 0.85 },
        { id: 18, name: "LA LUNE", name_en: "THE MOON", potency: 0.90 },
        { id: 19, name: "LE SOLEIL", name_en: "THE SUN", potency: 0.93 },
        { id: 20, name: "LE JUGEMENT", name_en: "JUDGEMENT", potency: 0.88 },
        { id: 21, name: "LE MONDE", name_en: "THE WORLD", potency: 0.92 },
        { id: 0, name: "LE MAT", name_en: "THE FOOL", potency: 0.97 }
    ],
    
    // Operation assignments (position 1-7 maps to operations)
    operations: [
        "CALCINATION",
        "DISSOLUTION", 
        "SEPARATION",
        "CONJUNCTION",
        "FERMENTATION",
        "DISTILLATION",
        "COAGULATION"
    ],
    
    /**
     * Draw 7 cards from the deck
     */
    draw() {
        const deck = [...this.cards];
        const drawn = [];
        
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * deck.length);
            const card = deck.splice(randomIndex, 1)[0];
            
            // Determine if reversed (33% chance)
            const reversed = Math.random() < 0.33;
            
            drawn.push({
                ...card,
                reversed,
                position: i + 1,
                operation: this.operations[i]
            });
        }
        
        return drawn;
    },
    
    /**
     * Convert 7-card draw to operation weights
     */
    calculateWeights(cards) {
        const weights = {};
        
        // Calculate raw weights for each position
        cards.forEach(card => {
            let weight = card.potency;
            
            // Reversal reduces potency by 30-50%
            if (card.reversed) {
                weight *= (0.5 + Math.random() * 0.2); // 50-70% of original
            }
            
            // Add small random variance (±5%)
            weight *= (0.95 + Math.random() * 0.1);
            
            weights[card.operation] = weight;
        });
        
        // Normalize to 0-1 range with floor/ceiling to avoid extremes
        const values = Object.values(weights);
        const max = Math.max(...values);
        const min = Math.min(...values);
        const range = max - min;
        
        // Prevent degenerate case where all cards are similar
        if (range < 0.1) {
            // Add small variance to prevent all weights being 0.5
            Object.keys(weights).forEach(op => {
                weights[op] = 0.3 + Math.random() * 0.4; // Range: 0.3-0.7
            });
        } else {
            // Normal case: normalize but compress range to avoid 0.0 and 1.0
            Object.keys(weights).forEach(op => {
                const normalized = (weights[op] - min) / range;
                // Compress to 0.15 - 0.85 range (no extremes)
                weights[op] = 0.15 + (normalized * 0.70);
            });
        }
        
        return weights;
    },
    
    /**
     * Get card image path
     */
    getCardImage(card) {
        // Format: assets/tarot/01_magician.jpg (or .svg)
        const id = String(card.id).padStart(2, '0');
        const name = card.name_en.toLowerCase().replace(/\s+/g, '_');
        
        // Try SVG first, fall back to JPG, fall back to placeholder
        return `assets/tarot/${id}_${name}.svg`;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TAROT;
}
