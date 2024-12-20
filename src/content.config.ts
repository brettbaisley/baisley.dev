import { z, defineCollection, reference } from "astro:content";
import { glob } from 'astro/loaders';

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      pubDate: z.date(),
      description: z.string(),
      author: reference('authors'),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      // tags: z.array(z.string())
    })
});

const authors = defineCollection({ 
  loader: glob({pattern: '**/*.json', base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    bio: z.string()
    })
 });


// Export a single `collections` object to register your collection(s)
export const collections = { blog, authors };