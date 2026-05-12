<template>
  <section id="portfolio" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-red-600 font-bold text-sm uppercase tracking-widest">Portfolio</span>
        <h2 class="text-4xl sm:text-5xl font-black text-gray-900 mt-2">Công Trình Tiêu Biểu</h2>
        <p class="text-gray-500 mt-4 max-w-xl mx-auto">
          Một số dự án tiêu biểu chúng tôi đã thi công cho khách hàng trên toàn quốc.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in portfolio" :key="item.title"
          :class="['rounded-2xl overflow-hidden relative group cursor-pointer', item.span]">
          <div :class="['w-full flex items-end p-4', item.bg, item.span ? 'h-56' : 'h-48']">
            <div
              class="bg-black/50 backdrop-blur-sm rounded-xl p-3 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white font-bold text-sm">{{ item.title }}</p>
              <p class="text-gray-300 text-xs mt-0.5">{{ item.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const portfolio = [
  {
    title: 'Biển LED Cửa Hàng Thời Trang',
    category: 'Biển LED',
    bg: 'bg-gradient-to-br from-red-500 to-orange-400',
    span: 'col-span-2',
  },
  {
    title: 'Backdrop Sự Kiện Ra Mắt Sản Phẩm',
    category: 'Backdrop',
    bg: 'bg-gradient-to-br from-blue-500 to-purple-600',
    span: '',
  },
  {
    title: 'Hộp Đèn Nhà Hàng',
    category: 'Hộp Đèn',
    bg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    span: '',
  },
  {
    title: 'Decal Dán Xe Tải Thương Hiệu',
    category: 'In Decal',
    bg: 'bg-gradient-to-br from-green-400 to-teal-500',
    span: '',
  },
  {
    title: 'Bảng Alu Siêu Thị Mini',
    category: 'Bảng Alu',
    bg: 'bg-gradient-to-br from-pink-500 to-red-400',
    span: '',
  },
  {
    title: 'Banner Khổ Lớn Ngoài Trời',
    category: 'In Banner & Hiflex',
    bg: 'bg-gradient-to-br from-indigo-500 to-blue-400',
    span: 'col-span-2',
  },
]
</script>
