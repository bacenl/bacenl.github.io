import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['software', 'design', 'games']),
    coverImage: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    highlight: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    description: z.string(),
  }),
});

export const collections = { projects, blog };
