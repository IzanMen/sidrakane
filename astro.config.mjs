import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { sites } from '@openai/sites-vite-plugin';
export default defineConfig({
  site: process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sidrakane.com'),
  output: 'static',
  outDir: './dist/client',
  trailingSlash: 'always',
  redirects: {'/visita-sidra-kane/':'/visita/','/quienes-somos/':'/historia/','/la-coleccion-kane/':'/coleccion/','/english/':'/en/'},
  integrations: [react()],
  vite: { plugins: [tailwindcss(), sites()] },
  devToolbar: { enabled: false },
});
