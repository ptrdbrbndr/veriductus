# Veriductus – Instructies voor Claude Code

## Doel

De uitkomst van een ontwerpsessie in claude.ai doorvoeren in de GitHub repo `ptrdbrbndr/veriductus`, zodat de website live gaat via Vercel.

---

## Wat er al staat in de repo

- `index.html` – een eerdere versie van de website
- `images/image (1).jpg` – het logo (JPG, witte achtergrond)

---

## Wat er moet gebeuren

### Stap 1 – Vervang `index.html`

Kopieer het bestand `veriductus-preview.html` (zit naast dit bestand) naar `index.html` in de repo root.

> Het logo is in dit bestand al als base64 ingebakken — geen losse afbeeldingsbestanden nodig.

```bash
cp veriductus-preview.html index.html
```

---

### Stap 2 – Verwijder het oude logobestand (optioneel, netjes)

```bash
git rm "images/image (1).jpg"
rmdir images 2>/dev/null || true
```

---

### Stap 3 – Commit & push

```bash
git add .
git commit -m "feat: nieuwe Veriductus website met geïntegreerd logo"
git push origin master
```

---

### Stap 4 – Vercel koppelen (indien nog niet gedaan)

Als de site nog niet automatisch deployt:

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Importeer repo: `ptrdbrbndr/veriductus`
3. Framework: **Other**
4. Root directory: `/` (standaard)
5. Klik **Deploy**

Na eenmalige koppeling deployt elke push naar `master` automatisch.

---

## Designreferentie

| Token | Waarde |
|---|---|
| Primary Blue | `#4776A8` |
| Primary Green | `#5FC38E` |
| Midnight Navy | `#1D1E4B` |
| Gradient | `linear-gradient(135deg, #4776A8, #5FC38E)` |
| Font | Inter (Bold merknaam, Italic tagline) |
| Logo nav | hoogte 49px |
| Logo footer | hoogte 42px |

---

## Wat de website bevat

- Sticky navigatie met logo en CTA-knop
- Hero sectie met animated gradient blob en subtiel grid
- Stats bar: 4 metrics (500+ projecten, 99.2% kwaliteitscore, etc.)
- 6 dienst-cards (Testautomatisering, Security Testing, etc.)
- 4-staps proces sectie
- Gradient CTA sectie ("Klaar voor foutloze software?")
- Footer met logo, navigatie en contactgegevens

---

## Checklist

- [ ] `index.html` vervangen door `veriductus-preview.html`
- [ ] Oude `images/image (1).jpg` verwijderd
- [ ] Lokaal gecheckt in browser (`open index.html`)
- [ ] Gepusht naar `master` branch
- [ ] Vercel deployment succesvol ✅
