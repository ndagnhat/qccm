<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-25"></div>
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-25"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
    </div>

    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
      <span class="inline-block bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
        ✦ Uy Tín – Chất Lượng – Nhanh Chóng
      </span>

      <h1 class="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-none tracking-tight mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
          QCCM
        </span>
      </h1>
      <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200 mb-4">
        In Ấn – Thi Công Biển Quảng Cáo
      </p>
      <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
        Chuyên thi công biển LED, hộp đèn, in banner, decal, backdrop và mọi loại biển hiệu quảng cáo.
        Phục vụ nhanh – Giá cạnh tranh – Bảo hành dài hạn.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#services"
          class="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-red-900/40 transition-all">
          Xem Dịch Vụ
        </a>
        <a href="#contact"
          class="border-2 border-gray-600 hover:border-red-500 text-gray-200 hover:text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
          Liên Hệ Ngay
        </a>
      </div>

      <div class="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
            {{ stat.value }}
          </p>
          <p class="text-sm text-gray-400 mt-0.5">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '10+', label: 'Năm KN' },
  { value: '500+', label: 'Công Trình' },
  { value: '200+', label: 'Khách Hàng' },
]
</script>
