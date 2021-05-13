<template>
  <div class="shop-info _flex-col pa-5">
    <div class="title-container _flex-between mb-2">
      <span class="shop-code">編號AAAAAAAA</span>
      <img src="@/assets/icon/shop.svg" alt="shop-icon">
    </div>
    <div class="info-container _flex-col justify-center">
      <span class="shop-name">八八家常菜 ＠8_8tsai.tsai</span>
      <span class="shop-address">台北市松山區復興北路231巷17號</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo'
}
</script>

<style scoped lang="scss">
.shop-info {
  // height: 60px;
  border-radius: $section-radius;
  background: $tertiary-grey;
}

.title-container {
  .shop-code {
    color: $secondary-grey;
  }
}

.info-container {
  .shop-name {
    color: $primary-green;
  }

  .shop-address {
    color: $primary-grey;
  }
}
</style>