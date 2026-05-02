import { defineCollection, z } from 'astro:content';

const anwendungsfelder = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cat: z.enum(['Klinisch', 'Coaching', 'Beziehung', 'Organisation']),
    lede: z.string(),
    order: z.number().default(99),
    relatedFields: z.array(z.string()).default([]),
    typischeDauer: z.string().optional(),
    beitragCount: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const artikel = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    saeule: z.enum(['Grundlagen', 'Modelle', 'Handwerk', 'Anwendungsfelder']),
    kind: z.enum(['Artikel', 'Methode', 'Modell', 'Anwendung', 'Webinar', 'Podcast', 'Falldokumentation']),
    excerpt: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const aktuell = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Artikel', 'Webinar', 'Podcast']),
    date: z.coerce.date(),
    excerpt: z.string(),
    author: z.string(),
    draft: z.boolean().default(false),
  }),
});

// ─── Konzepte (Lego-Bausteine) ──────────────────────────────
// Jedes Konzept hat ein einheitliches Schema, sodass alle Konzept-Seiten
// gleich aufgebaut sind: Titel · Kurzdefinition · Infografik · Hauptteil · Beispiel · Verwandte · Videos · Literatur
const konzepte = defineCollection({
  type: 'content',
  schema: z.object({
    // Pflichtfelder
    title: z.string(),                             // z.B. "Pacing"
    kurzdefinition: z.string(),                    // 1–2 Sätze, prominent oben
    saeule: z.enum(['Grundlagen', 'Modelle', 'Handwerk', 'Anwendungsfelder']),

    // Optionale Anreicherung
    untertitel: z.string().optional(),             // z.B. "Im Tempo der Klient:in mitgehen"
    auchBekanntAls: z.array(z.string()).default([]), // Synonyme, EN-Begriffe
    schwierigkeit: z.enum(['Einsteiger', 'Mittel', 'Fortgeschritten']).default('Einsteiger'),
    lesedauer: z.number().optional(),

    // Infografik (zentral)
    infografik: z.object({
      src: z.string(),                             // /infografiken/pacing.svg
      alt: z.string(),
      caption: z.string().optional(),
    }).optional(),

    // Konkretes Beispiel aus der Praxis
    beispiel: z.object({
      titel: z.string(),
      text: z.string(),
    }).optional(),

    // Verlinkung zu anderen Konzepten (slug-basiert)
    verwandteKonzepte: z.array(z.string()).default([]),

    // Videos (unten am Ende)
    videos: z.array(z.object({
      titel: z.string(),
      url: z.string(),                             // YouTube/Vimeo/eigen
      dauer: z.string().optional(),                // z.B. "12:34"
      sprecher: z.string().optional(),
    })).default([]),

    // Literatur
    literatur: z.array(z.object({
      autor: z.string(),
      titel: z.string(),
      jahr: z.number().optional(),
      verlag: z.string().optional(),
      seite: z.string().optional(),                // z.B. "S. 142–158"
    })).default([]),

    // Meta
    autor: z.string().optional(),
    aktualisiert: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { anwendungsfelder, artikel, aktuell, konzepte };
