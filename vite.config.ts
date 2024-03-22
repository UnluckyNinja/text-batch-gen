import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dirs: [
        './src/composables',
        './src/components'
      ]
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
        IconsResolver(),
      ],
      dirs: [
        './src/components'
      ]
    }),
    Icons({

    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  }
})
