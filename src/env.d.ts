/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly UMAMI_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}