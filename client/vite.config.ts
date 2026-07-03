import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const BASE_URL = 'https://rsinteriordesigns.in'

// Keep this list as the source of truth for sitemap URLs.
// Add new public routes here to have sitemap regenerate automatically on build.
const sitemapRoutes = [
  { url: `${BASE_URL}/`, changefreq: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/products`, changefreq: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/projects`, changefreq: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/additional-services`, changefreq: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/about`, changefreq: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/contact`, changefreq: 'weekly', priority: 0.7 },
]

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      // Generates: dist/sitemap.xml
      hostname: BASE_URL,
      include: sitemapRoutes.map((r) => r.url.replace(BASE_URL, '')),
      // Ensure the sitemap is generated even for SPAs.
      // vite-plugin-sitemap will create valid XML.
      defaults: {
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString().slice(0, 10),
      },
      // If the plugin version you have supports custom urls, this will be used.
      urls: sitemapRoutes,
    }) as any,
  ],
})

