import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    problem: z.string(),
    whyItMatters: z.string(),
    cta: z.string(),
    order: z.number(),
    hero: z.boolean().default(false),
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    town: z.string(),
    slug: z.string(),
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    intro: z.string(),
    localNote: z.string(),
    nearby: z.array(z.string()),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    date: z.string(),
    rating: z.number(),
    quote: z.string(),
    draft: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = {
  services,
  areas,
  testimonials,
};
