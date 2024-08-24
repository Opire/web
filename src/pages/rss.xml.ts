import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
    const posts = await getCollection("blog");
    return rss({
        title: "Opire - the reward platform for software developers",
        description: "With Opire, anyone can create rewards for open source projects and grow their community, while developers can solve issues and earn the associated rewards.",
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            pubDate: new Date(post.data.pubDate),
            link: `/blog/${post.slug}/`,
        })),
    });
}
