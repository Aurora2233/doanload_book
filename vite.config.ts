import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import Compression from 'vite-compression-plugin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
    Compression({ threshold: 512 }),
    visualizer({
      open: true,
      brotliSize: true,
      filename: './analyze/index.html',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
