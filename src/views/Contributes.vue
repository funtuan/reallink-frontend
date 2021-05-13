<template>
  <div class="contributes pages pa-5">
    <p class="main-title ">貢獻者</p>

    <section class="_section">
      <div class="work-type">FrontEnd Developer</div>
      <div>Proladon</div>
      <div>https://github.com/Proladon</div>
    </section>

    <section class="_section">
      <div class="work-type">FrontEnd Developer</div>
      <div>Proladon</div>
      <div>https://github.com/Proladon</div>
    </section>

    <section class="_section">
      <div class="work-type">FrontEnd Developer</div>
      <div>Proladon</div>
      <div>https://github.com/Proladon</div>
    </section>

    <p class="main-title ">贊助公司</p>
    <section class="_section">
      <div>思言科技股份有限公司</div>
      <img src="/img/ohbot.svg" alt="">
    </section>

  </div>
</template>

<script>
export default {
  name: "Contributes",
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
.test {
  display: flex;
  justify-content: center;
}

.work-type {
    color: $primary-grey;
}
</style>
