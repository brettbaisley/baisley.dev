import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**\/[^_]*.md', base: "./src/content/posts" }),
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      // tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };