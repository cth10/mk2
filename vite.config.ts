import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
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
      }
    };
});
