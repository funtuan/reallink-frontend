<template>
  <div class="download pages pa-5">
    <ShopInfo class="_section" />

    <div class="qrcode-container">
      <VueQrcode class="qrcode" value="https://www.1stg.me"/>
      <div class="qrcode-link">實名制問卷連結</div>
    </div>

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
      下載文宣PDF
    </el-button>

  </div>
</template>

<script>
import ShopInfo from "@/components/ShopInfo"
import VueQrcode from 'vue-qrcode'
export default {
  name: 'Download',
  components: { ShopInfo, VueQrcode },
}
</script>

<style scoped lang="scss">
.qrcode-container {
  background: $tertiary-grey;
  border-radius: $primary-radius;
  text-align: center;
}

.qrcode {
  // max-width: 50%;
  width: 50%;
  margin: 20px; 
}

.qrcode-link {
  cursor: pointer;
  color: white;
  padding: 20px;
  border-bottom-right-radius: $primary-radius;
  border-bottom-left-radius:  $primary-radius;
  background: $primary-green;
}
</style>