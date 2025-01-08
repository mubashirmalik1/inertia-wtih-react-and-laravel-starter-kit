# Project Setup

## Steps to Setup the Project

1. **Install React and React DOM**
    ```bash
    npm install react react-dom
    ```

2. **Install Vite for React**
    ```bash
    npm install --save-dev vite @vitejs/plugin-react
    ```

3. **Install Inertia Server and Client**
    ```bash
    composer require inertiajs/inertia-laravel
    npm install @inertiajs/inertia @inertiajs/inertia-react
    ```

4. **Create `app.blade.php` File and Add Code with Inertia Directives**
    ```php
    <!DOCTYPE html>
    <html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Inertia App</title>
         @viteReactRefresh
         @vite('resources/js/app.jsx')
    </head>
    <body>
         @inertia
    </body>
    </html>
    ```

5. **Add React and Inertia Code in `app.js` File and Change Extension from `.js` to `.jsx`**
    ```jsx
    import { createInertiaApp } from '@inertiajs/inertia-react';
    import React from 'react';
    import { render } from 'react-dom';

    createInertiaApp({
         resolve: name => require(`./Pages/${name}`),
         setup({ el, App, props }) {
              render(<App {...props} />, el);
         },
    });
    ```

6. **In Vite Config File Add `react()`**
    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
        plugins: [
            laravel({
                input:  'resources/js/app.jsx',
                refresh: true,
            }),
            react(),
        ],
    });
    ```

7. **Add Alias for Repetitive Folder**
    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import path from 'path';

    export default defineConfig({
         plugins: [
            laravel({
                input:  'resources/js/app.jsx',
                refresh: true,
            }),
            react(),
        ],
        resolve: {
            alias: {
                '@': '/resources/js',
            },
        },
    });
    ```

8. **Install Tailwind CSS**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
