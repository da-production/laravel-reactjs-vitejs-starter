import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from "url";

export default defineConfig({
    server:{
        proxy: {
            "localhost": "http://127.0.0.1:8000"
        }
    },
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: [
          { find: '@', replacement: fileURLToPath(new URL('./resources', import.meta.url)) },
        ],
      },
    build: {

        /** If you set esmExternals to true, this plugins assumes that 
          all external dependencies are ES modules */
     
        commonjsOptions: {
           esmExternals: true 
        },
     }
});