/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID?: string;
  readonly VITE_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
