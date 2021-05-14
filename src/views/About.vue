<template>
  <div class="about pages pa-5">
    <el-carousel indicator-position="outside" height="240px" :interval="5000" @change="changeSection">
      <el-carousel-item v-for="img in imgName" :key="img">
        <div class="test">
          <img :src="`./img/${img}.svg`" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>

    <section v-if="page === 0">
      <p class="main-title ">疫情爆發！實聯制真的安全嗎？</p>
      <div class="content">
        本土疫情爆發，疫調需求上升<br>
        中央流行疫情指揮中心建議店家實聯制（線上實名制），能有效協助追蹤確診者足跡<br><br>
        連鎖店家成為領頭羊開始實施實聯制，但讓許多問題浮上檯面
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
