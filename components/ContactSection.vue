<template>
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-red-600 font-bold text-sm uppercase tracking-widest">Liên Hệ</span>
        <h2 class="text-4xl sm:text-5xl font-black text-gray-900 mt-2">Liên Hệ Với Chúng Tôi</h2>
        <p class="text-gray-500 mt-4">Báo giá miễn phí – Tư vấn 24/7 – Phản hồi trong vòng 30 phút.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div class="space-y-4">
          <div v-for="info in contactInfo" :key="info.label"
            class="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-red-50 transition-colors">
            <div class="text-3xl flex-shrink-0">{{ info.icon }}</div>
            <div>
              <p class="text-xs font-bold text-red-600 uppercase tracking-widest">{{ info.label }}</p>
              <p class="text-gray-900 font-semibold mt-0.5">{{ info.value }}</p>
              <p v-if="info.sub" class="text-gray-500 text-sm mt-0.5">{{ info.sub }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl p-8 lg:p-10 flex flex-col justify-center">
          <h3 class="text-3xl font-black text-white mb-3 leading-tight">
            Nhận Báo Giá<br>Miễn Phí Ngay!
          </h3>
          <p class="text-red-100 mb-8 leading-relaxed">
            Gửi yêu cầu và nhận báo giá chi tiết trong vòng 30 phút làm việc. Không phát sinh phí tư vấn.
          </p>
          <div class="flex flex-col gap-3">
            <a href="tel:0900000000"
              class="bg-white text-red-600 font-bold px-6 py-3.5 rounded-xl text-center hover:bg-red-50 transition-colors text-lg">
              📞 Gọi Ngay: 0900 000 000
            </a>
            <a href="https://zalo.me/0900000000" target="_blank" rel="noopener"
              class="bg-red-700/50 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-center hover:bg-red-700 transition-colors text-lg">
              💬 Nhắn Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactInfo = [
  {
    icon: '📞',
    label: 'Hotline',
    value: '0900 000 000',
    sub: 'Hỗ trợ 8:00 – 21:00 mỗi ngày',
  },
  {
    icon: '📍',
    label: 'Địa Chỉ',
    value: '123 Đường ABC, Quận XYZ',
    sub: 'TP. Hồ Chí Minh, Việt Nam',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'contact@qccm.vn',
    sub: 'Phản hồi trong vòng 24 giờ',
  },
  {
    icon: '🕐',
    label: 'Giờ Làm Việc',
    value: 'Thứ 2 – Thứ 7: 8:00 – 18:00',
    sub: 'Chủ Nhật: 8:00 – 12:00',
  },
]
</script>
