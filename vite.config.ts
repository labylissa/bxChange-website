import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  ssr: {
    // Le paquet de prérendu est chargé par Node en module ES. Vite laisse par
    // défaut les dépendances hors du paquet, or `react-helmet-async` est publié
    // en CommonJS : Node refuse alors ses exports nommés et le prérendu s'arrête
    // net. L'inclure dans le paquet supprime la question de l'interopérabilité,
    // et ne coûte rien — ce fichier ne sert qu'à la construction, il n'est
    // jamais livré au visiteur.
    noExternal: ['react-helmet-async'],
  },
});
