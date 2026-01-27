import { defineConfig } from 'vite'

export default defineConfig({
    // Base path must match the repository name for GitHub Pages to load assets correctly
    base: '/eie/',
    server: {
        host: true, // Needed for Docker
        port: 5173
    }
})
