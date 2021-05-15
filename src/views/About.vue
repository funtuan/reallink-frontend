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
      <p class="main-title ">疫情爆發！需要一個快速安全的實聯制</p>
      <div class="about-content">
        依據第三級警戒區域九大防疫指引，餐飲場所、婚、喪禮應遵守實聯制<br><br>
        連鎖店家先開始實施實聯制，各小店家也陸續跟上，許多衍生問題開始浮上檯面
      </div>
    </section>

    <section v-if="page === 1">
      <p class="main-title ">實聯制衍生的問題</p>
      <div class="about-content">
        <div class="sub-title">
          ．網路資安風險
        </div>
        <div class="sub-content">
          店家自行產生的紙本或線上表單工具，有蒐集個資的疑慮
        </div>
        <div class="sub-title">
          ．個資疑慮
        </div>
        <div class="sub-content">
          各店家實聯制填寫資訊不統一，甚至有需填寫與生日、身份證
        </div>
        <div class="sub-title">
          ．資料有無自動銷毀
        </div>
        <div class="sub-content">
          依中央疫情指揮中心「防疫新生活運動：實聯制措施指引」自蒐集日起 28 日內需定期銷毀
        </div>
        <div class="sub-title">
          ．實聯制不便性
        </div>
        <div class="sub-content">
          前往各店家都重新填寫資料，非常不方便
        </div>
      </div>
    </section>

    <section v-if="page === 2">
      <p class="main-title ">加密型實聯制誕生</p>
      <div class="about-content">
        <div class="sub-title">
          ．快速建立實聯制表單
        </div>
        <div class="sub-content">
          店家可快速建立標準的實聯制填寫表單格式，不用額外設置
        </div>
        <div class="sub-title">
          ．個資加密保存
        </div>
        <div class="sub-content">
          使用 RSA 2048bit 公鑰加密後存入資料庫，私鑰嚴格保存於離線環境，嚴格限制有疫調需求才揭露
        </div>
        <div class="sub-title">
          ．資料定期刪除
        </div>
        <div class="sub-content">
          所蒐集之資料僅保存 28 日，屆期自動銷毀
        </div>
        <div class="sub-title">
          ．快速填寫
        </div>
        <div class="sub-content">
          可選擇是否將填寫資訊紀錄於個人裝置中，方便下次自動代入填寫
        </div>
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

.about-content {
  color: $primary-grey;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;
  font-weight: normal;
  .sub-title {
    margin-top: 10px;
    font-weight: 500;
  }
  .sub-content {
    margin-left: 16px;
  }
}
</style>
