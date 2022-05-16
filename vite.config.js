import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "SRC/scss/app.scss";`
            }
        }
    },
    plugins: [
        vue(),        
    ],
    resolve: {
        extensions: ['.less', '.sass', '.scss', '.css', '.js', '.vue','.gif', '.png', '.svg', '.mp4', '.jpg', '.mov'],
        alias: {
            'SRC': path.resolve(__dirname, '/src'),
            'ASSETS': path.resolve(__dirname, '/src/assets'),
            'COMPONENTS': path.resolve(__dirname, '/src/components'),
            'VIEWS': path.resolve(__dirname, '/src/views'),
        },
    }
})
