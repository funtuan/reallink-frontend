<template>
  <div class="i-bon pages pa-5">
    <p class="main-title">ibon列印條碼</p>

    <section class="_section qrcode-section">
      <div class="qrcode-container">
        <QrcodeVue class="qrcode" :value="$route.params.code" size="200" />
      </div>
    </section>

    <section class="_section">
      <div class="i-bon-title">取件編號</div>
      <div class="content code-num">{{$route.params.code}}</div>
      <DashedLine />
    </section>
    <section class="_section">
      <div class="i-bon-title">注意事項</div>
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
import QrcodeVue from 'qrcode.vue'
export default {
  name: "Ibon",
  components: { QrcodeVue, DashedLine }
};
</script>
<style lang="scss">
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
    padding-top: 30px;
    padding-bottom: 30px;
    margin: auto;
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
  font-size: 12px;
}

.i-bon-title{
  color: $secondary-grey;
  font-weight: 500;
  font-size: 12px;
}

.code-num {
  color: red;
  font-weight: 500;
  font-size: 16px;
}
</style>
