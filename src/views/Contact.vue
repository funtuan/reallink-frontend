<template>
  <div class="contact pages pa-5">
    <p class="main-title ">衛生主管機關進行疫調聯絡</p>

    <section class="_section">
      <div class="contact-title">聯絡說明</div>
      <div class="contact-content">
       疫調資料存取採用高規格安全憑證，確保傳輸過程中不會被竊取、竄改、毀損、滅失或洩漏，以最高安全等級保護店家與顧客資料。衛生福利部機關如要求店家提供在感染風險期間蒞臨的客人名單，方便追蹤疫調使用，本網站有責任協助衛生主管機關防堵疫情蔓延。如果您為機關人員，請以下列方式聯絡。
      </div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="contact-title">聯絡人</div>
      <div class="contact-content">陳柏翰</div>
      <DashedLine />
    </section>

    <!-- <section class="_section">
      <div class="contact-title">連絡電話</div>
      <div class="contact-content">02-2222222</div>
      <DashedLine />
    </section> -->

    <section class="_section">
      <div class="contact-title">連絡信箱</div>
      <div class="contact-content">hank85627@gmail.com</div>
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
    font-size: 14px;
}
</style>
