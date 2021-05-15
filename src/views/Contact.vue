<template>
  <div class="contact pages pa-5">

    <p class="main-title ">相關問題 Q&A</p>

    <section class="_section">
      <div class="contact-title">店家接收到中央有疫調需求時該如何處理？</div>
      <div class="contact-content">
       請採取以下任一種做法<br>
<br>
一、告知衛生主管機關使用本平台實施實聯制<br><br>
<div>可以直接向負責疫調的衛生主管機關告知貴店使用 twlink.com 加密型實聯制功能，並提供平台上店家編號及名稱，由衛生主管機關向平台聯絡提供疫調資訊。</div>

<br>
二、要求本平台提供資料，交付衛生主管機關<br><br>
<div>
需要由當初的註冊店家填寫的負責人信箱來信至 service@twlink.com，要求本平台提供特定時間段的資料後，本平台將會提供未解密之原始資料（只會包含各筆的新增時間、來訪時間、加密內容）
</div>
<div>
如需解密查看，需由衛生主管機關聯絡本平台給予原始資料，確認資料使用目的為疫調後，才會協助將原始資料進行解密。
</div>
      </div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="contact-title">我是疫調人員，該如何聯絡？</div>
      <div class="contact-content">
        <div>
          疫調資料存取採用高規格安全憑證，確保傳輸過程中不會被竊取、竄改、毀損、滅失或洩漏，以最高安全等級保護店家與顧客資料。衛生福利部機關如要求店家提供在感染風險期間蒞臨的客人名單，方便追蹤疫調使用，本網站有責任協助衛生主管機關防堵疫情蔓延。
        </div>
        <div>
          如果您為衛生機關疫調人員，有任何需求請來信 service@twlink.com
        </div>
</div>
      <DashedLine />
    </section>


  </div>
</template>

<script>
import DashedLine from '@/components/DashedLine'
export default {
  name: "Contact",
  components: {DashedLine},
  data: () => ({
  }),
  methods: {

  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>
<style scoped lang="scss">
.contact-title {
  color: $secondary-grey;
  font-weight: 500;
  font-size: 12px;
}

.contact-content {
    color: $primary-grey;
    padding: 10px 0;
    font-size: 12px;
  text-indent: 28px;
  text-align: justify;
}
</style>
