import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true,
    },
    integrations: [
        mdx({
            syntaxHighlight: "shiki",
            shikiConfig: {
                theme: "slack-dark",
            },
        }),
        sitemap(),
        setPrerender(),
    ],
    output: 'server',
    adapter: vercel({
        imageService: true,
    }),
});

function setPrerender() {
    return {
        name: 'set-prerender',
        hooks: {
            'astro:route:setup': ({ route }) => {
                if (route.component.endsWith('/blog/[slug].astro')) {
                    route.prerender = true;
                }
            },
        },
    };
}