<template>
  <div class="Shopcode pages pa-5">
    <p class="main-title">1922簡訊實聯制場所代碼查詢</p>
   
      
          <p class="_section-title">你的店家編號</p>
         <el-input v-model="shopNum" placeholder="你的店家編號"></el-input>
     <br>
      <div class="button">
        <el-button plain class="_normal-btn" :class="{active : !agree}" @click="agree = false">查詢</el-button>
      </div>

     <div class="shop-content">
       
    </div>
  </div>
</template>

<script>
import ls from 'local-storage'

export default {
  name: "About",
  data: () => ({
    shopNum:"",
    placeNum:"",
  }),

  methods: {
      changeSection(index) {
          this.page = index
      }
  },
  created () {
    this.uuid = ls.get('uuid')
  },
};
</script>

<style scoped lang="scss">
.button {
        padding-top: 10px;

}
</style>
