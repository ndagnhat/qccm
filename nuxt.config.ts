export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
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
