<template>
  <div class="download pages pa-5" v-if="shop">
    <ShopInfo class="_section" :shop="shop" />

    <section class="_section">
      <p class="_section-sub-title">步驟一</p>
      <div>點擊<span class="highlight"> 下載 PDF</span> 或 <span class="highlight">7-11 ibon列印</span>，將 <span class="highlight">台灣加密型實名制登記</span> QRcode 列印出來</div>
    </section>
    
    <hr>

    <section class="_section">
      <p class="_section-sub-title">步驟二</p>
      <div>來店民眾掃描 QRcode 填寫 <span class="highlight">台灣加密型實名制登記</span>，配合政府政策，一起落實防疫工作</div>
    </section>

    <div class="_bottom-box-two">
    <el-button 
      plain 
      class="_update-btn" 
      @click="updateUserData"
    >
      下載 PDF
    </el-button><br>
    <el-button 
      plain 
      class="_next-btn"
      @click="goibon"
    >
      7-11 ibon列印
    </el-button>
    </div>
    <ShopPostPdf ref="showShopPostPdf" :link="link" :code="shop.code" :name="shop.name" :address="shop.address" :uploadMod="false"/>
    <ShopPostPdf ref="shopPostPdf" :link="link" :code="shop.code" :name="shop.name" :address="shop.address" :uploadMod="true" @uploadResponse="uploadResponse"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ShopInfo from "@/components/ShopInfo"
import ShopPostPdf from "@/components/ShopPostPdf"
import configuration from '@/configuration';

// import VueQrcode from 'vue-qrcode'
export default {
  name: 'Download',
  components: { ShopInfo, ShopPostPdf },
  computed: {
    ...mapState([
      'shop',
      'info',
    ]),
    link () {
      return `${configuration('frontendHost')}/t/${this.shop}`
    }
  },
  data() {
    return {
      run: false,
    }
  },
  methods: {
    configuration,
    ...mapActions([
      'CheckShop',
      'SetInfo',
    ]),
    uploadResponse({ code }) {
      this.$router.push(`/ibon/${code}`)
    },
    goibon () {
      if (!this.run) {
        this.$refs.shopPostPdf.generateReport()
        this.run = true
      }
    },
    updateUserData() {
      this.$refs.showShopPostPdf.generateReport()
    },
  },

  mounted () {
    this.CheckShop(this.$route.params.code)
  }
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