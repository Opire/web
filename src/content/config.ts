import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) =>
                new Date(val).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }),
            ),
        author: z.object({
            name: z.string(),
            imageUrl: z.string(),
            profileLink: z.string(),
        }),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()).optional(),
        canonicalUrl: z.string().optional(),
    }),
});

export const collections = {
    blog
};