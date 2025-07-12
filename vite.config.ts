import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { copyFile } from 'fs/promises';
import { existsSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: mode === 'production' ? '/' : '/',
      server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: [
          'localhost',
          '.replit.dev',
          '.repl.co',
          'ed2ba2f3-c7d3-46be-aa8f-531d5c6f2fba-00-1uab3acm7es9g.worf.replit.dev'
        ],
        hmr: {
          clientPort: 443
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      plugins: [
        {
          name: 'copy-static-files',
          closeBundle: async () => {
            // Copy robots.txt and sitemap.xml to dist folder
            const files = ['robots.txt', 'sitemap.xml'];
            for (const file of files) {
              const src = path.resolve(__dirname, 'public', file);
              const dest = path.resolve(__dirname, 'dist', file);
              if (existsSync(src)) {
                await copyFile(src, dest);
                console.log(`Copied ${file} to dist folder`);
              }
            }
          }
        }
      ]
    };
});
