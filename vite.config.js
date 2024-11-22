
import { defineConfig } from 'vite'

export default defineConfig({

    entry: './src/app.js',
    resolve: {
        extensions: ['.mjs', '.js', '.json'],
    }
    
})