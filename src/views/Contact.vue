<template>
  <div class="contact pages pa-5">
    <p class="main-title ">衛生主管機關進行疫調聯絡</p>

    <section class="_section">
      <div class="title">時機</div>
      <div class="content">
        說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字
      </div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">聯絡人</div>
      <div class="content">空條承太郎</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">連絡電話</div>
      <div class="content">02-2222222</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="title">連絡信箱</div>
      <div class="content">service@ohbottech.com</div>
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
.title {
  color: $secondary-grey;
}

.content {
    color: $primary-grey;
    padding: 10px 0;
}
</style>
