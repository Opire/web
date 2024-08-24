import { getCollection, type CollectionEntry } from "astro:content";

export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
    const posts = await getCollection("blog")

    return posts.sort((a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) =>
        new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
    );
}
