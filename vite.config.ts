import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [{
    //     libraryName: 'element-plus',
    //     esModule: true,
    //     ensureStyleFile: true,
    //     resolveStyle: (name) => `element-plus/packages/theme-chalk/src/${name.slice(3)}.scss`,
    //     resolveComponent: (name) => `element-plus/lib/${name}`,
    //   }],
    // }),
  ],
  build: {
    target: 'modules', // 默认值
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
      '/api-stage/': {
        target: 'https://service-hc4kiz1c-1256505457.gz.apigw.tencentcs.com/release/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-stage/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
