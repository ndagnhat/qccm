export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      // Paste Google Sheet ID here (or set env var NUXT_PUBLIC_SHEET_ID)
      // Sheet must be public: Share → Anyone with the link → Viewer
      sheetId: '',
    },
  },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/qccm/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'QCCM – In Ấn & Thi Công Biển Quảng Cáo',
      meta: [
        {
          name: 'description',
          content:
            'QCCM chuyên in ấn, thi công biển quảng cáo LED, hộp đèn, decal, banner, backdrop – chất lượng cao, giao hàng nhanh, bảo hành 12 tháng.'
        }
      ]
    }
  }
})
