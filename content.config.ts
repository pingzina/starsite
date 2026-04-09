import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const mediaSchema = z.object({
  type: z.enum(['image', 'audio', 'demo']),
  src: z.string(),
  alt: z.string().optional(),
  title: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        cover: z.string().optional(),
        publishAt: z.string(),
        updatedAt: z.string(),
        readingTime: z.string(),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
        media: z.array(mediaSchema).default([]),
      }),
    }),
  },
})
