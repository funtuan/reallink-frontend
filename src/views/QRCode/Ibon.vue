<template>
  <div class="i-bon pages pa-5">
    <p class="main-title">ibon列印條碼</p>

    <section class="_section">
      <div class="qrcode-container">
        <VueQrcode class="qrcode" value="https://www.1stg.me" />
      </div>
    </section>

    <section class="_section">
      <p class="_section-title info-title">取件編號</p>
      <p class="info-content code-num">2173117710</p>
      <hr class="dash-divde">
    </section>

    <section class="_section">
      <p class="_section-title info-title">文件上傳日期</p>
      <p class="info-content">2021/05/12 17:31:17</p>
      <hr class="dash-divde">
    </section>

    <section class="_section">
      <p class="_section-title info-title">文件列印期限</p>
      <p class="info-content">2021/05/15 17:31:17</p>
      <hr class="dash-divde">
    </section>

    <section class="_section">
      <p class="_section-title notice-title">注意事項</p>
      <div class="notice-content">
        ※ 請記下您的文件列印期限及「取件編號」或是「取件QR
        Code」，於有效期間內至全台7-ELEVEN門市 ibon進行文件下載及櫃檯繳費。
        超過列印期限，文件將會自動刪除！ ※
        檔案搬移需要5分鐘作業時間，可於取件前先以取件編號查詢，確認檔案是否上傳成功！
      </div>
    </section>

    <el-button plain class="_next-btn" @click="send">
      下載文宣PDF
    </el-button>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
export default {
  name: "Ibon",
  components: { VueQrcode }
};
</script>
<style lang="scss">
@import url("/assets/scss/global.scss");
</style>

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
  border-bottom-left-radius: $primary-radius;
  background: $primary-green;
}

.code-num {
  color: red;
}

.info-content {
  font-size: 18px;
}

.info-title, .notice-title, .notice-content {
  color: $secondary-grey;
}
</style>
