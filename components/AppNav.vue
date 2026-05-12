<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#hero" class="flex items-center gap-2.5">
          <span class="text-2xl font-black text-red-500 tracking-tight">QCCM</span>
          <span class="hidden sm:block text-xs text-gray-400 leading-tight">In Ấn & Biển Quảng Cáo</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in links" :key="link.href" :href="link.href"
            class="text-gray-300 hover:text-red-400 font-medium transition-colors">
            {{ link.label }}
          </a>
          <a href="#contact"
            class="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
            Liên Hệ
          </a>
        </div>

        <button @click="open = !open" class="md:hidden text-gray-300 hover:text-white">
          <svg v-if="!open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="open" class="md:hidden bg-gray-800 border-t border-gray-700">
      <div class="px-4 py-3 flex flex-col gap-2">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="open = false"
          class="text-gray-300 hover:text-red-400 font-medium py-2 transition-colors">
          {{ link.label }}
        </a>
        <a href="#contact" @click="open = false"
          class="bg-red-600 text-white text-center px-5 py-2.5 rounded-lg font-semibold mt-1">
          Liên Hệ
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const open = ref(false)
const links = [
  { href: '#services', label: 'Dịch Vụ' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'Giới Thiệu' },
]
</script>
