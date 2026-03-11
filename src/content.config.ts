import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const contentSchema = z.object({
  title: z.string(),
  lang: z.enum(['ja', 'en']),
  category: z.enum(['workshop', 'self-study']),
  module: z.string(),
  contentType: z.string(),
  order: z.number(),
});

const jaWorkshop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './ja/workshop' }),
  schema: contentSchema,
});

const jaStudy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './ja/self-study' }),
  schema: contentSchema,
});

const enWorkshop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './en/workshop' }),
  schema: contentSchema,
});

const enStudy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './en/self-study' }),
  schema: contentSchema,
});

export const collections = {
  'ja-workshop': jaWorkshop,
  'ja-study': jaStudy,
  'en-workshop': enWorkshop,
  'en-study': enStudy,
};
