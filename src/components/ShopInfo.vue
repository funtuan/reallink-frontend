<template>
  <div class="shop-info _flex-col pa-5" v-if="shop">
    <div class="title-container _flex-between mb-2">
      <span class="shop-code">編號{{shop.code}}</span>
      <img src="@/assets/icon/shop.svg" alt="shop-icon">
    </div>
    <div class="info-container _flex-col justify-center">
      <span class="shop-name">{{shop.name}}</span>
      <span class="shop-address">{{shop.address}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShopInfo',
  props: {
    shop: Object,
  },
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
    font-size: 12px;
    color: $secondary-grey;
  }
}

.info-container {
  .shop-name {
    font-size: 14px;
    color: $primary-green;
  }

  .shop-address {
    font-size: 12px;
    color: $primary-grey;
  }
}
</style>