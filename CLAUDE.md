# CLAUDE.md — Briefing für Claude Code

Diese Datei orientiert Claude Code beim Einstieg ins Projekt. Bitte zuerst lesen.

---

## 1. Über das Projekt

**sinnorientiert.de** — eine Website für hypnosystemische Therapie & Beratung. Sie soll als **lebendiges Wissensportal** dienen: Konzepte, Modelle, Methoden, Anwendungsfelder, Falldokumentationen, Webinare.

- **Hosting:** Netlify (auto-deploy bei `git push` auf `main`)
- **Repo lokal:** `~/Homepages/Claude-Testing`
- **Domain:** sinnorientiert.de
- **Betreiber:** Severin (Endnutzer-Sicht), nicht-technischer Hintergrund — bitte erklär klar, was du tust und warum.

## 2. Tech-Stack

- **Astro** (Static Site Generation, Content Collections)
- **Vanilla CSS** in `src/styles/global.css` — keine Tailwind, kein CSS-in-JS
- **Markdown** für alle Inhalte (Content Collections mit Zod-Schema in `src/content/config.ts`)
- **Keine Datenbank**, keine API, kein Auth — bewusst statisch
- Build: `npm run build` · Dev: `npm run dev`

## 3. Verzeichnisstruktur

```
astro-site/
├── src/
│   ├── components/         # Astro-Komponenten (Hero, Pillars, Footer, ...)
│   ├── content/
│   │   ├── config.ts       # Zod-Schemas für alle Content-Collections
│   │   ├── konzepte/       # ⭐ Lego-Bausteine: ein .md pro Konzept
│   │   ├── anwendungsfelder/
│   │   ├── artikel/
│   │   └── aktuell/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── konzept/[slug].astro    # ⭐ Universelles Konzept-Template
│   │   └── anwendung/[slug].astro
│   └── styles/
│       └── global.css
├── public/
│   └── infografiken/       # SVG/PNG für Konzept-Infografiken
└── KONZEPT-VORLAGE.md      # Anleitung für neue Konzepte
```

## 4. Inhaltsarchitektur — die vier Säulen

Alle Inhalte sind einer von vier Säulen zugeordnet:

| Säule | Was rein gehört |
|---|---|
| **Grundlagen** | Haltung, Menschenbild, Geschichte |
| **Modelle** | Theoretische Modelle (z.B. Steuerposition, Teile-Arbeit) |
| **Handwerk** | Konkrete Methoden (z.B. Pacing, Utilisation, Trance-Induktion) |
| **Anwendungsfelder** | Klinisch, Coaching, Beziehung, Organisation |

## 5. Das Lego-Prinzip — Konzept-Subpages

**Jedes Konzept** (Pacing, Utilisation, Steuerposition, …) ist ein eigener Lego-Baustein und liegt als einzelne Markdown-Datei in `src/content/konzepte/`.

Alle Konzept-Seiten haben **denselben Aufbau** — das Template ist `src/pages/konzept/[slug].astro`. Niemals Konzept-spezifische Layout-Abweichungen einbauen; wenn etwas fehlt, das alle brauchen, ins Schema und ins Template.

**Layout (von oben nach unten):**

1. Breadcrumb · Säule · Schwierigkeit · Lesedauer
2. Großer Titel + Untertitel
3. **Zweispaltig** (Desktop): Abstract links · Infografik rechts. Mobile: Infografik **oben**, dann Abstract.
4. Hauptteil (Markdown)
5. Beispiel-Box (Akzent-Linie)
6. Verwandte Konzepte (3-Spalten-Grid → Lego-Verbindungen)
7. Videos (2-Spalten YouTube/Vimeo-Embeds)
8. Literatur
9. Footer-Meta (Autor, aktualisiert)

**Schema** liegt in `src/content/config.ts`, Collection `konzepte`. Pflichtfelder: `title`, `kurzdefinition`, `saeule`. Alles andere optional.

**Anleitung für neue Konzepte:** siehe `KONZEPT-VORLAGE.md` im Repo-Root. **Beispiel:** `src/content/konzepte/pacing.md` ist die Referenzimplementierung — am einfachsten kopieren, umbenennen, Inhalt austauschen.

**Verwandte Konzepte** referenzieren sich über Slugs. Wenn ein referenzierter Slug nicht existiert, wird er stillschweigend ausgeblendet (kein Fehler).

## 6. Designsprache

Die Site hat einen bewusst **redaktionellen, ruhigen, nicht-trendigen** Charakter — eher wie ein Fachbuch oder eine kuratierte Zeitschrift, nicht wie ein SaaS-Landingpage.

**CSS-Variablen** (in `global.css` — niemals hartcodierte Farben verwenden):

- `--paper`, `--paper-2` — Hintergrund (warmweiß, leicht abgesetzt)
- `--ink`, `--ink-2`, `--ink-3` — Textfarben (dunkel → mittel → hell)
- `--accent`, `--accent-ink` — Akzentfarbe (sparsam einsetzen!)
- `--rule` — Linien/Borders

**Typografie** (drei Familien, in `global.css` definiert):

- `var(--serif)` — für lange Lesetexte, Überschriften, Kurzdefinitionen
- `var(--sans)` — für UI, Eyebrows, Labels
- `var(--mono)` — für Meta, Captions, Codes (FIG. 01, Lesedauer, etc.)

**Hierarchie-Patterns:**

- `.eyebrow` mit `.dot` davor — kleine Smallcaps-Säulen-Marker
- `.section-label` — 11.5px uppercase, 0.10em letter-spacing
- `.mono` Klasse für alle Meta-Infos (Datum, Dauer, Sprecher)

**Verboten:** Aggressive Gradients, Emoji im UI, Tailwind-Style-Utility-Klassen, neue Farben außerhalb der CSS-Variablen, Inter/Roboto.

## 7. Workflow-Konventionen

**Git:**
- Direkt auf `main` arbeiten ist okay (Solo-Projekt, kleines Risiko)
- Commits auf Deutsch ODER Englisch — egal, aber konsistent in einer Session
- Format: kurze imperative Beschreibung, z.B. `Konzept-Template: Infografik neben Abstract`

**Wenn ein neues Konzept-Markdown angelegt wird:**
1. Frontmatter vollständig ausfüllen (mind. `title`, `kurzdefinition`, `saeule`)
2. Wenn `infografik:` gesetzt → SVG/PNG in `public/infografiken/<slug>.svg` ablegen, sonst Feld weglassen
3. Lokal mit `npm run dev` checken: `http://localhost:4321/konzept/<slug>`
4. Commit + Push

**Wenn der Build bricht:**
- Häufigster Fehler: ungültiges Frontmatter (Zod-Schema). Fehler­meldung lesen, Feld korrigieren.
- Zweithäufigster: Unicode in CSS (z.B. „"). Immer als CSS-Escape schreiben: `content: "\201C"` statt `content: """`.

**Wenn der Nutzer um eine größere Änderung bittet** (neuer Seitentyp, neue Komponente, größerer Refactor):
- Erst kurz erklären, was du planst
- Dann umsetzen
- Am Ende kurz sagen, was zu testen ist

## 8. Zusammenarbeit Claude Design ↔ Claude Code

Der Nutzer arbeitet mit **zwei Claude-Instanzen**:

- **Claude Design** (im Browser, Cloud-Sandbox) — für visuelle Exploration, Mockups, SVG-Infografiken, Layout-Varianten. Schreibt **nicht** ins lokale Repo.
- **Claude Code** (lokal) — für die echte Code-Arbeit am Repo. Das bist du.

Wenn der Nutzer mit Mockups oder SVG-Schnipseln aus Claude Design ankommt: einbauen, an Stil/CSS-Variablen anpassen, ggf. zurückfragen, wenn etwas vom Designsystem abweicht.

## 9. Inhaltliche Tonalität

Die Texte sind:
- **fachlich präzise**, aber nicht akademisch-trocken
- **gendern** mit Doppelpunkt: „Klient:in", „Therapeut:in"
- **deutsch** als Standard
- **knapp und gehaltvoll** — keine Füllwörter, keine Phrasen wie „in der heutigen Zeit"
- **respektvoll gegenüber Klient:innen** — nie objektivierend („der Patient hat …"), eher partizipativ

Bei Texterstellung lieber **fragen, statt erfinden**. Severin liefert die Inhalte; du strukturierst.

## 10. Was NICHT tun

- ❌ Keine externen JS-Frameworks dazuholen (React, Vue, Svelte) — Astro bleibt schlank
- ❌ Keine Tracker, Analytics, Cookie-Banner ohne Auftrag
- ❌ Keine KI-generierten Stockbilder ohne Rückfrage
- ❌ Keine Lorem-Ipsum-Platzhalter committen
- ❌ Keine `console.log`-Reste committen
- ❌ Keine Konzept-Layout-Abweichungen pro Konzept (Lego-Prinzip!)
