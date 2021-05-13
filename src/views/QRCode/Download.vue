<template>
  <div class="download pages pa-5">
    <ShopInfo class="_section" />

    <section class="_section">
      <p class="_section-sub-title">步驟一</p>
      <div>點擊下載文宣PDF或產生ibon列印條碼，將製作好的文宣列印出來</div>
    </section>
    
    <hr>

    <section class="_section">
      <p class="_section-sub-title">步驟二</p>
      <div>宣導來店民眾掃描QR code填寫<span class="highlight">加密型實名制登記</span>，配合政府政策，一起落實防疫工作</div>
    </section>

    <el-button 
      plain 
      class="_update-btn" 
      @click="updateUserData"
    >
      下載文宣PDF
    </el-button>

    <el-button 
      plain 
      class="_next-btn"
      @click="send"
    >
      產生ibon列印條碼
    </el-button>

  </div>
</template>

<script>
import ShopInfo from "@/components/ShopInfo"
// import VueQrcode from 'vue-qrcode'
export default {
  name: 'Download',
  components: { ShopInfo },
}
</script>

<style scoped lang="scss">
.qrcode-container {
  background: $tertiary-grey;
  border-radius: $primary-radius;
  text-align: center;
}

.highlight {
  color: $primary-green;
}
</style>