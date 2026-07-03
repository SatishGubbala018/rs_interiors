import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = 'https://rsinteriordesigns.in'

// Sitemap routes - update this list when adding new public routes
// The sitemap.xml in public/ will be automatically copied to dist/ during build
export const sitemapRoutes = [
  `${BASE_URL}/`,
  `${BASE_URL}/products`,
  `${BASE_URL}/projects`,
  `${BASE_URL}/additional-services`,
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,
]

export default defineConfig({
  plugins: [
    react(),
  ],
})

