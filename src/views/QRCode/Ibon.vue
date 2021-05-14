<template>
  <div class="i-bon pages pa-5">
    <p class="main-title">ibon列印條碼</p>

    <section class="_section qrcode-section">
      <div class="qrcode-container">
        <VueQrcode class="qrcode" value="https://www.1stg.me" />
      </div>
    </section>

    <section class="_section">
      <div class="title">取件編號</div>
      <div class="content code-num">2173117710</div>
      <DashedLine />
    </section>
    <section class="_section">
      <div class="title">注意事項</div>
      <div class="notice-content">
        ※ 請記下您的「取件編號」或是「取件QR
        Code」，請於三天內至全台7-ELEVEN門市 ibon進行文件下載及櫃檯繳費。
        超過列印期限，文件將會自動刪除！ ※
        檔案搬移需要5分鐘作業時間，可於取件前先以取件編號查詢，確認檔案是否上傳成功！
      </div>
    </section>
  </div>
</template>

<script>
import DashedLine from '@/components/DashedLine'
import VueQrcode from "vue-qrcode";
export default {
  name: "Ibon",
  components: { VueQrcode, DashedLine }
};
</script>
<style lang="scss">
@import url("/assets/scss/global.scss");
</style>

<style scoped lang="scss">

.qrcode-section {
  padding-bottom: 20px;
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
}



.content {
  font-size: 18px;
}

.notice-content {
  color: $secondary-grey;
  margin-bottom: 10px;
}



.code-num {
  color: red;
}
</style>
