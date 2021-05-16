<template>
  <div class="contributes pages pa-5">
    <p class="main-title ">貢獻者</p>

    <section class="_section">
      <div class="work-type">Designer</div>
      <div class="contributor">Grace</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="work-type">FrontEnd Developer</div>
      <div class="contributor">Proladon</div>
      <a href="https://github.com/Proladon">github.com/Proladon</a>
      <DashedLine />
    </section>
    
    <section class="_section">
      <div class="work-type">SRE</div>
      <div class="contributor">Mino</div>
      <a href="https://github.com/Sean2525">github.com/Sean2525</a>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="work-type">Technical Writer</div>
      <div class="contributor">MuMu Lin</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="work-type">Marketing Writer</div>
      <div class="contributor">Elaine</div>
      <DashedLine />
    </section>

    <section class="_section">
      <div class="work-type">PM & Developer</div>
      <div class="contributor">FunTuan</div>
      <a href="https://github.com/funtuan">github.com/FunTuan</a>
      <DashedLine />
    </section>

    <p class="main-title ">贊助</p>
    <section class="_section">
      <div class="contributor">思言科技股份有限公司</div>
      <img src="/img/ohbot.svg" alt="">
    </section>

  </div>
</template>

<script>
import DashedLine from '@/components/DashedLine'
export default {
  name: "Contributes",
  components: {DashedLine},
}
</script>

<style scoped lang="scss">
.test {
  display: flex;
  justify-content: center;
}

.work-type {
  color: $primary-grey;
  font-size: 14px;
  line-height: 20px;
}

.contributor {
  font-weight: 500;
  font-size: 16px;
}

img {
  padding-top: 10px;
}
a {
  font-size: 12px;
}
</style>
