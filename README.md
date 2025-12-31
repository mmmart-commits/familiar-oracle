# THE FAMILIAR'S ORACLE

An alchemical divination system for studio practice.

## Quick Start (Local Testing)

1. **Save all files to a folder** on your computer

2. **Open `index.html`** in your browser
   - Just double-click the file
   - Or right-click → Open With → Your Browser

3. **Start a session**
   - Select Tarot method
   - Enter your matter
   - Execute draw
   - Follow the oracle's guidance

## File Structure

```
familiar-oracle/
├── index.html          # Main application
├── css/
│   └── main.css        # Swiss grid styling
├── js/
│   ├── app.js          # Main application logic
│   ├── oracle.js       # Oracle engine
│   ├── tarot.js        # Tarot draw logic
│   └── data.js         # All matrices and prompts
├── assets/
│   └── tarot/          # Card images (add yours here)
└── README.md           # This file
```

## Adding Tarot Images

Place your card images in `assets/tarot/` with this naming format:
```
00_fool.svg (or .jpg)
01_magician.svg
02_high_priestess.svg
...
21_world.svg
```

The app will automatically use them if they exist, otherwise shows text placeholders.

## Data Files to Complete

**Currently the app has placeholder data.** You need to add the complete matrices:

### 1. `js/data.js` → `familiar_assignments`
Add all 168 combinations from `VECTOR_POLARITY_FAMILIAR_MATRIX.md`

### 2. `js/data.js` → `cycle_suggestions`
Add all 168 combinations from `COMPLETE_CYCLE_SUGGESTIONS_MATRIX.md`

### 3. `js/data.js` → `prompts`
Add all 234 ritual prompts (18 Cycles × 13 Familiars)

## Browser Compatibility

Tested on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)

Requires modern browser with ES6 support.

## Local Storage

Sessions are saved to your browser's localStorage automatically.

To export your data:
- Click "EXPORT DATA" button
- Saves JSON file with all sessions
- Import not yet implemented (coming soon)

## Running with Local Server (Optional)

For better testing, run a local server:

**With Python:**
```bash
cd /path/to/familiar-oracle
python3 -m http.server 8000
# Open: http://localhost:8000
```

**With Node.js:**
```bash
npx serve
# Opens automatically
```

## Next Steps (Deployment)

When ready to deploy:

1. **Complete the data files** (matrices + prompts)
2. **Add your tarot images**
3. **Create GitHub repository**
4. **Enable GitHub Pages**
5. **Set up Supabase** for cross-device sync

See `DEPLOYMENT.md` (coming soon) for detailed instructions.

## Customization

### Fonts
Edit `css/main.css` → `:root` variables:
```css
--font-sans: "Your Font", Helvetica, sans-serif;
```

### Colors
Edit `css/main.css` → `:root` variables:
```css
--color-bg: #ffffff;
--color-text: #000000;
--color-accent: #ff0000;
```

### Dot Grid
Adjust opacity in `css/main.css` → `body`:
```css
background-image: radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px);
```

### Spacing
Edit `css/main.css` → `:root` spacing variables:
```css
--space-xs: 8px;
--space-sm: 16px;
/* etc. */
```

## Known Limitations (Current Version)

- ⚠️ I Ching not yet implemented (coming soon)
- ⚠️ Archive entries not clickable/expandable yet
- ⚠️ No import functionality (export only)
- ⚠️ No Supabase sync (local storage only)
- ⚠️ Placeholder data needs completion

## Philosophy

This is not a productivity tool. It's a companion for attention.

The slowness is intentional.  
The typing is intentional.  
The reflection is the point.

"What is produced is not music but a document of attention passing through matter — the sound of transformation itself thinking."

## License

TBD

## Credits

- Tarot de Marseille traditional imagery
- Swiss grid design principles (Müller-Brockmann)
- Field recording log aesthetic
