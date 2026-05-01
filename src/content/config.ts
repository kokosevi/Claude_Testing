import { defineCollection, z } from 'astro:content';

// ─── Anwendungsfelder ───────────────────────────────────────
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

// ─── Artikel (Säulen I–IV) ──────────────────────────────────
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

// ─── Aktuell (News/Events) ──────────────────────────────────
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

export const collections = { anwendungsfelder, artikel, aktuell };
