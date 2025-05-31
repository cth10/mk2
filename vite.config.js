
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      '.replit.dev',
      'localhost',
      'ed2ba2f3-c7d3-46be-aa8f-531d5c6f2fba-00-1uab3acm7es9g.worf.replit.dev'
    ]
  }
})
