<template>
  <div class="about pages pa-5">
    <el-carousel indicator-position="outside" height="240px" :interval="6000" @change="changeSection">
      <el-carousel-item v-for="img in imgName" :key="img">
        <div class="test">
          <img :src="`./img/${img}.svg`" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>

    <section v-if="page === 0">
      <p class="main-title ">時機</p>
      <div class="content">
        疫情爆發，政府強制餐廳店家採實聯制（線上實名制），許多店家都自行使用google表單、線上問卷工具自行建立實聯機制，衍生出以下問題...
      </div>
    </section>

    <section v-if="page === 1">
      <p class="main-title ">衍生問題</p>
      <div class="content">
        各店家實聯制填寫欄位不統一，資訊過多或缺少，甚至有需填寫生日、身份證的問卷
個人資料揭露給小店家，被明碼儲存不安全，不確定有定期刪除機制
消費者前往每間店都要重新填寫實聯制資料，非常不方便
      </div>
    </section>

    <section v-if="page === 2">
      <p class="main-title ">解決方案</p>
      <div class="content">
        快速產生實聯制表單 <br>
        店家可快速生成標準的實聯制填寫表單格式，不用額外設置
        <br><br>
        個資加密保存<br>
        個資使用RSA 2048bit公鑰加密後存入資料庫，私鑰嚴格保存於離線環境，嚴格限制疫調需求才揭露
        <br><br>
        自動刪除<br>
        加密後的個資只保留 28 天，將定期刪除
        <br><br>
        快速填寫<br>
        可選擇自動記錄填寫諮詢於個人瀏覽器中，方便下次填寫
        <br><br>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    page: 0,
    imgName: ["virus", "shield", "solution"]
  }),
  methods: {
      changeSection(index) {
          this.page = index
      }
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>
<style scoped lang="scss">
.test {
  display: flex;
  justify-content: center;
}

.content {
    color: $primary-grey;
}
</style>
