# Sinnorientiert — Der Hypnosystemik-Hub

Astro-Projekt für die Live-Site. Inhalte als Markdown in `src/content/`, Hosting auf Netlify, Versionierung über GitHub.

---

## Setup-Checkliste (einmalig — ca. 1 Stunde)

### A — Tools installieren

- [ ] **Node.js** (LTS-Version) von <https://nodejs.org> herunterladen + installieren
- [ ] **Git** von <https://git-scm.com> installieren *(macOS: oft schon dabei)*
- [ ] **VS Code** von <https://code.visualstudio.com> installieren
- [ ] *(Optional in VS Code:)* Astro-Extension installieren — bessere Syntax-Hilfe

Test im Terminal: `node -v` und `git -v` müssen Versionen ausgeben.

### B — Accounts anlegen

- [ ] **GitHub-Account** auf <https://github.com> erstellen
- [ ] **Netlify-Account** auf <https://app.netlify.com/signup> — am besten **mit GitHub einloggen**, dann ist alles verbunden
- [ ] **Domain kaufen** bei [INWX](https://www.inwx.de) oder [united-domains.de](https://www.united-domains.de) (~10 €/Jahr)

### C — Projekt lokal einrichten

1. **Diesen Ordner** (`astro-site/`) auf deinen Mac kopieren — z.B. nach `~/Projekte/sinnorientiert/`
   *(NICHT in Google Drive — siehe Hinweis unten.)*

2. Terminal öffnen, in den Ordner wechseln:
   ```bash
   cd ~/Projekte/sinnorientiert
   ```

3. Abhängigkeiten installieren *(dauert 1–2 Min)*:
   ```bash
   npm install
   ```

4. Lokale Vorschau starten:
   ```bash
   npm run dev
   ```
   Im Browser <http://localhost:4321> öffnen → Site läuft lokal.

### D — Auf GitHub schieben

1. Auf <https://github.com> ein neues Repository „sinnorientiert" anlegen *(privat)*
2. Im Projekt-Terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEINNAME/sinnorientiert.git
   git push -u origin main
   ```

### E — Bei Netlify deployen

1. Netlify-Dashboard → **„Add new site" → „Import from GitHub"**
2. Repository „sinnorientiert" auswählen
3. Build-Befehl: `npm run build` *(wird automatisch erkannt)*
4. Publish-Verzeichnis: `dist`
5. **„Deploy site"** klicken → ~90 Sek warten → Live unter `xyz.netlify.app`

### F — Eigene Domain verbinden

1. Netlify → Domain Settings → **„Add custom domain"** → `sinnorientiert.de` eingeben
2. Netlify zeigt dir DNS-Einträge → **bei deinem Registrar** (INWX) eintragen
3. ~30 Min warten — HTTPS wird automatisch eingerichtet

**Fertig: <https://sinnorientiert.de> ist live.**

---

## Alltag — Inhalte pflegen

### Neuen Artikel oder Anwendungsfeld schreiben

1. In `src/content/anwendungsfelder/` (oder `artikel/`, `aktuell/`) eine neue `.md`-Datei anlegen
2. Frontmatter ausfüllen *(siehe `src/content/config.ts` für Pflichtfelder)*
3. Markdown-Text schreiben
4. Lokal testen: `npm run dev`
5. Live veröffentlichen:
   ```bash
   git add .
   git commit -m "Neuer Artikel: Titel"
   git push
   ```
6. Netlify deployt automatisch in ~90 Sek.

### Markdown-Cheatsheet

```markdown
## Überschrift Ebene 2
### Überschrift Ebene 3

**Fett**, *kursiv*, `code`

> Zitat-Block

- Liste
- Punkt 2

[Link-Text](https://beispiel.de)

![Bildbeschreibung](/bilder/foto.jpg)
```

---

## Ordnerstruktur

```
astro-site/
├── public/                  # Statische Assets (Bilder, Favicon)
├── src/
│   ├── components/          # Wiederverwendbare UI-Bausteine (.astro)
│   ├── content/             # ← HIER DIE INHALTE PFLEGEN
│   │   ├── anwendungsfelder/
│   │   ├── artikel/
│   │   ├── aktuell/
│   │   └── config.ts        # Schema (Pflichtfelder)
│   ├── layouts/             # Seitenrahmen
│   ├── pages/               # Routen → URLs
│   └── styles/              # CSS
├── astro.config.mjs
├── package.json
└── README.md                # ← du bist hier
```

---

## ⚠️ Wichtig: NICHT in Google Drive ablegen

`node_modules` enthält zehntausende kleiner Dateien. Drive synct die alle und führt zu Sync-Konflikten und Build-Fehlern.

**Code → lokal in `~/Projekte/`, Backup über GitHub.**
**Inhalte/Assets (Texte-Drafts, Bilder-Originale) → gerne in Google Drive.**

---

## Was noch fehlt (next steps)

- [ ] Komponenten aus dem Mockup vollständig nach `src/components/` migrieren *(Hero, Pathways, WhatIs, Pillars, Fields, …)*
- [ ] Komplettes CSS aus `styles.css` in `src/styles/global.css` übernehmen
- [ ] Newsletter-Anbindung an Brevo *(API-Key in `.env`)*
- [ ] Impressum + Datenschutz-Seite *(Pflicht in DE!)*
- [ ] Optional: Decap CMS unter `/admin` einrichten

---

## Hilfe

- Astro-Doku: <https://docs.astro.build>
- Markdown lernen: <https://www.markdownguide.org/basic-syntax/>
- Netlify-Doku: <https://docs.netlify.com>
