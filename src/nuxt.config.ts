// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: true,
    app: {
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kolker+Brush&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' },
            ],
            noscript: [
                { children: 'JavaScript is required' }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        '@/styles/variables.scss',
        '@/styles/reset.scss',
        '@/styles/styles.scss',
        '@/styles/layout.scss',
        '@/styles/controls.scss',
    ],
    runtimeConfig: {
        public: {
            apiUrl: 'https://api.mangabox.app',
            prod: process.env.NODE_ENV === 'production',
            proxyUrl: 'https://cba-proxy.index-0.com',
        }
    },
    modules:[
        '@nuxt/image',
    ],
    imports: {
        dirs: ['composables/**']
    },
    components: [
        '~/components/general',
        '~/components/general/tabs',
        '~/components/buttons',
        '~/components/reader',
        '~/components/manga',
        '~/components/manga/readers',
        '~/components/manga/volumes',
        '~/components/manga/cards',
        '~/components'
    ]
})
