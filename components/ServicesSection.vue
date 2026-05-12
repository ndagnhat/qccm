<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-red-600 font-bold text-sm uppercase tracking-widest">Dịch Vụ</span>
        <h2 class="text-4xl sm:text-5xl font-black text-gray-900 mt-2">Chúng Tôi Cung Cấp</h2>
        <p class="text-gray-500 mt-4 max-w-xl mx-auto">
          Đa dạng dịch vụ in ấn và thi công biển hiệu, đáp ứng mọi nhu cầu quảng cáo của doanh nghiệp.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
          class="group p-8 rounded-2xl border-2 border-gray-100 hover:border-red-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-gray-500 leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const defaultServices = [
  { icon: '💡', title: 'Biển LED & Hộp Đèn', desc: 'Thi công biển LED nội sáng, hộp đèn mica cao cấp, nổi bật ngày và đêm. Tiết kiệm điện, bền bỉ theo thời gian.' },
  { icon: '🖨️', title: 'In Banner & Hiflex', desc: 'In banner khổ lớn, hiflex ngoài trời chất lượng cao. Màu sắc tươi sáng, chịu mưa nắng, không bạc màu.' },
  { icon: '🏪', title: 'Bảng Alu & Alu Composite', desc: 'Gia công bảng hiệu alu, alu composite dày dặn, chống cong vênh, phù hợp làm biển cửa hàng, văn phòng.' },
  { icon: '🎨', title: 'In Decal & Sticker', desc: 'In decal trong, đục, phản quang, dán kính, dán xe. Kích thước tùy chọn, cắt theo hình dạng yêu cầu.' },
  { icon: '🖼️', title: 'Backdrop & Standee', desc: 'In backdrop sự kiện, standee X-banner chất lượng cao. Giao hàng nhanh trong ngày khi cần gấp.' },
  { icon: '🔧', title: 'Thi Công Trọn Gói', desc: 'Lắp đặt biển hiệu tận nơi toàn quốc. Đội thợ chuyên nghiệp, bảo hành 12 tháng sau lắp đặt.' },
]

const config = useRuntimeConfig()
const services = ref(defaultServices)

onMounted(async () => {
  const sheetId = config.public.sheetId as string
  if (!sheetId) return
  try {
    const rows = await fetchSheetTab(sheetId, 'services')
    if (rows.length) {
      services.value = rows.map(r => ({
        icon: r.icon || '🔧',
        title: r.title || '',
        desc: r.description || '',
      })).filter(s => s.title)
    }
  } catch (e) {
    console.warn('[QCCM] Could not load services from sheet, using defaults.', e)
  }
})
</script>
