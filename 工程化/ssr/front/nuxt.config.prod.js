export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: '小开社区',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      'element-ui/lib/theme-chalk/index.css'
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '@/plugins/element-ui',
      "@/plugins/axios"
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      "@nuxtjs/axios",
      "@nuxtjs/proxy"
    ],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      transpile: [/^element-ui/],
    },
    proxy:{
      "/api/":{
        target:"http://server:8080",
        secure:false,
        pathRewrite:{
          '^/api':""
        }
      }
    }
  }
  