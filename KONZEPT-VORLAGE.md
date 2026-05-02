# Konzept-Vorlage — der „Lego-Baustein"

Jedes Konzept (Pacing, Utilisation, Steuerposition, Symptom-als-Botschafter, …) bekommt eine eigene Markdown-Datei in `src/content/konzepte/`. Alle Konzept-Seiten sind **gleich aufgebaut** — das ist das Lego-Prinzip.

## Erstellen eines neuen Konzepts

1. Datei anlegen: `src/content/konzepte/dein-slug.md` *(Slug = URL, also kleinbuchstaben, Bindestrich)*
2. Frontmatter ausfüllen (siehe Pflichtfelder unten)
3. Markdown-Text schreiben
4. Speichern, lokal mit `npm run dev` testen
5. Push → live

URL wird automatisch: `https://sinnorientiert.de/konzept/dein-slug`

## Frontmatter — was muss rein

### Pflicht
```yaml
title: "Pacing"                        # Anzeige-Titel
kurzdefinition: "1–2 Sätze, prominent oben."
saeule: "Handwerk"                     # eine von: Grundlagen, Modelle, Handwerk, Anwendungsfelder
```

### Empfohlen
```yaml
untertitel: "Im Tempo der Klient:in mitgehen."
schwierigkeit: "Einsteiger"            # Einsteiger / Mittel / Fortgeschritten
lesedauer: 8                           # Minuten

auchBekanntAls: ["Mitgehen", "Tempo halten"]

infografik:                            # Bild im Ordner public/infografiken/
  src: "/infografiken/pacing.svg"
  alt: "Schaubild Pacing → Leading"
  caption: "FIG. 01 — kurze Bildunterschrift"

beispiel:
  titel: "Eine Klientin in akuter Anspannung"
  text: "Konkretes Praxisbeispiel, 3–5 Sätze."

verwandteKonzepte:                     # Slugs anderer Konzept-MDs
  - "leading"
  - "rapport"
  - "utilisation"

videos:
  - titel: "Pacing & Leading — Grundlagen"
    url: "https://www.youtube.com/watch?v=XXXX"
    dauer: "12:34"
    sprecher: "Tobias Eisele"

literatur:
  - autor: "Schmidt, Gunther"
    titel: "Liebesaffären zwischen Problem und Lösung"
    jahr: 2004
    verlag: "Carl-Auer"
    seite: "S. 142–158"

autor: "Maren Krüger"
aktualisiert: 2026-04-22
draft: false                           # auf true = nicht öffentlich
```

## Layout der Konzept-Seite — von oben nach unten

1. **Breadcrumb + Säule + Schwierigkeit + Lesedauer**
2. **Großer Titel** + Untertitel
3. **Kurzdefinition** prominent (~22pt)
4. **Synonyme** als Tag-Chips
5. **Infografik** zentral (auf grauem Hintergrund, hervorgehoben)
6. **Hauptteil** (dein Markdown — h2, h3, p, blockquote, listen)
7. **Beispiel-Box** (Akzent-Linie links, hervorgehoben)
8. **Verwandte Konzepte** (3-Spalten-Grid, Lego-Verbindungen)
9. **Videos** (eingebettete YouTube/Vimeo-Player, 2-Spalten)
10. **Literatur** (durchnummeriert, klassische Zitierform)
11. **Footer-Meta** (Autor, letzte Aktualisierung)

## Markdown-Hauptteil — Konventionen

```markdown
## Hauptabschnitt

Fließtext mit **fett**, *kursiv*, `code`.

### Unterabschnitt
Wird automatisch als Smallcaps-Label gerendert.

> Zitat oder Pull-Quote — bekommt automatisch Akzent-Linie.

- Aufzählung
- Punkt 2
```

## Tipps

- **Kurzdefinition kurz halten** — sie ist die Tagline
- **Infografik:** SVG bevorzugt (skaliert sauber). Dateien in `public/infografiken/` ablegen
- **Videos:** YouTube oder Vimeo URL reicht — Embed wird automatisch erzeugt
- **Verwandte Konzepte:** Slugs müssen existieren, sonst werden sie ausgeblendet
- **3 verwandte Konzepte ist die Regel** — das hält die Lego-Verbindungen sauber

## Beispielhaft umgesetzt

`src/content/konzepte/pacing.md` ist als Referenzimplementierung da. Schau dort rein, wenn du ein neues Konzept anlegen willst — am einfachsten kopieren, umbenennen, Inhalt austauschen.
