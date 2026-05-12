<template>
  <section id="about" class="py-24 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-red-500 font-bold text-sm uppercase tracking-widest">Về Chúng Tôi</span>
          <h2 class="text-4xl sm:text-5xl font-black text-white mt-2 mb-6 leading-tight">
            Đơn Vị Thi Công<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
              Uy Tín Hàng Đầu
            </span>
          </h2>
          <p class="text-gray-400 leading-relaxed mb-4">
            QCCM là đơn vị chuyên nghiệp trong lĩnh vực in ấn và thi công biển quảng cáo với hơn 10 năm kinh nghiệm.
            Chúng tôi cung cấp giải pháp toàn diện từ thiết kế đến lắp đặt, đảm bảo chất lượng và tiến độ.
          </p>
          <p class="text-gray-400 leading-relaxed mb-8">
            Với đội ngũ kỹ thuật viên lành nghề và trang thiết bị hiện đại, QCCM cam kết mang lại sản phẩm
            đẹp, bền, đúng hạn với chi phí hợp lý nhất thị trường.
          </p>
          <a href="#contact"
            class="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Nhận Báo Giá Ngay
          </a>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div v-for="stat in stats" :key="stat.label"
            class="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <p class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
              {{ stat.value }}
            </p>
            <p class="text-white font-semibold mt-1">{{ stat.label }}</p>
            <p class="text-gray-400 text-sm mt-1">{{ stat.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '10+', label: 'Năm Kinh Nghiệm', desc: 'Trong ngành in ấn & biển quảng cáo' },
  { value: '500+', label: 'Công Trình', desc: 'Đã thi công trên toàn quốc' },
  { value: '200+', label: 'Khách Hàng', desc: 'Tin tưởng và hợp tác lâu dài' },
  { value: '12', label: 'Tháng Bảo Hành', desc: 'Cho tất cả công trình thi công' },
]
</script>
