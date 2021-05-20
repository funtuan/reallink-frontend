<template>
  <div class="Shopcode pages pa-5">
    <p class="main-title">1922簡訊實聯制場所代碼查詢</p>
   
      
          <p class="_section-title">你的店家編號</p>
         <el-input v-model="shopNum" placeholder="你的店家編號"></el-input>
     <br>
      <div class="button">
        <el-button plain class="_normal-btn"  @click="find">查詢</el-button>
      </div>

      <div class="message">
        <div class="error-message" v-if="isError">
          店家編號輸入錯誤
        </div>
        <div class="shop-content" v-if="placeNum">
          場地編號：{{placeNum}}
        </div>
      </div>
  </div>
</template>

<script>
import md5 from 'md5'
import converter from 'hex2dec'
import {
  findOne,
} from '@/api/shop';
import {
  baseId,
} from '@/config/sms';

export default {
  name: "Shopcode",
  data: () => ({
    shopNum: "",
    placeNum: null,
    isError: false,
  }),

  methods: {
    changeSection(index) {
      this.page = index
    },
    async find() {
      this.placeNum = null
      this.isError = false
      try {
        const shop = await findOne(this.shopNum)
        const id = converter.hexToDec(md5(shop.code).slice(0, 10))%10000000000
        this.placeNum = `${baseId}${id}`
      } catch (error) {
        this.isError = true
      }
    },
  },
  created () {
  },
};
</script>

<style scoped lang="scss">
.button {
  padding-top: 10px;
}
.message {
  margin-top: 20px;
}
.error-message {
  color: $activity;
}
.shop-content {
  color: $primary-green;
}
</style>
