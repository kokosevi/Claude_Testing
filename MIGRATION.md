# Migration — vom Mockup zum Astro-Projekt

Dieses Dokument zeigt, wie die Komponenten aus dem ursprünglichen Mockup-Projekt (`index.html` + `app.jsx` + `styles.css`) in dieses Astro-Projekt überführt werden.

## Was schon da ist

- ✅ Astro-Konfiguration (`astro.config.mjs`)
- ✅ Content Collections für Anwendungsfelder, Artikel, Aktuell (`src/content/config.ts`)
- ✅ BaseLayout mit SEO-Tags
- ✅ TopBar als erste Komponente migriert
- ✅ Detailseiten-Routing für Anwendungsfelder (`/anwendung/[slug]`)
- ✅ 4 Beispiel-Markdown-Inhalte
- ✅ Design-Tokens in `global.css`

## Was noch zu tun ist

Aus der ursprünglichen `app.jsx` müssen folgende React-Komponenten als `.astro`-Komponenten umgeschrieben werden — das ist meist einfache Übersetzung, weil die meisten Komponenten kein State haben:

| React (app.jsx) | Astro-Datei |
|---|---|
| `Hero` | `src/components/Hero.astro` |
| `Pathways` | `src/components/Pathways.astro` |
| `WhatIs` | `src/components/WhatIs.astro` |
| `Pillars` | `src/components/Pillars.astro` *(Mode-Switch via JS oder URL-Param)* |
| `Fields` | `src/components/Fields.astro` *(Daten aus Collection statt hardcoded)* |
| `Practice` | `src/components/Practice.astro` |
| `Trust` | `src/components/Trust.astro` |
| `Current` | `src/components/Current.astro` *(Daten aus `aktuell` Collection)* |
| `Newsletter` | `src/components/Newsletter.astro` *(POST an Brevo-API)* |
| `Footer` | `src/components/Footer.astro` |

### Beispiel — eine Komponente migrieren

**Vorher (React):**
```jsx
function WhatIs() {
  return (
    <section className="what">
      <h2 className="section-title">Eine Haltung …</h2>
    </section>
  );
}
```

**Nachher (Astro):**
```astro
---
// (Frontmatter — hier bei einfachen Komponenten leer)
---
<section class="what">
  <h2 class="section-title">Eine Haltung …</h2>
</section>

<style>
  .what { padding: 96px 0; }
</style>
```

Wichtigste Unterschiede:
- `className` → `class`
- Kein `import React`
- CSS kann direkt im `<style>`-Block stehen (scoped per default)
- Daten kommen aus dem Frontmatter-Block (`---`)

### Interaktive Bits

Astro rendert standardmäßig statisches HTML. Für die wenigen interaktiven Stellen:

- **Animierte Suche** → kleine Vanilla-JS-Datei in `<script>`-Block
- **Säulen-Mode-Switch** → entweder URL-Param + Server-Side-Rendering ODER Vanilla JS
- **Anwendungsfeld-Filter** → Vanilla JS oder Astro Islands mit Preact

Falls du React-Inseln brauchst:
```bash
npx astro add react
```

## Reihenfolge

1. CSS aus `styles.css` komplett in `src/styles/global.css` kopieren *(bis auf die `.detail-*` und `.related` Klassen, die in eigene Komponenten gehören)*
2. Eine Komponente nach der anderen anlegen, in `index.astro` einbinden
3. Daten in den Komponenten durch `await getCollection("…")` ersetzen, wo Inhalte aus Markdown kommen sollen
4. Lokal testen mit `npm run dev`
