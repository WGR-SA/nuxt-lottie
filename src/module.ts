import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@wgr-sa/nuxt-lottie',
    configKey: 'lottie'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup () {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = resolve('./runtime')

    addComponent({
      name: 'LottiePlayer',
      global: true,
      filePath: resolve(runtimeDir, 'components', 'LottiePlayer'),
    })
  }
})
