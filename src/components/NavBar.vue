<template>
  <div class="nav-bar">
    <div class="nav-btn-container">
      <span class="nav-btn" :class="{active: isRoute('about')}">關於</span>
      <span class="nav-btn" :class="{active: isRoute('contact')}">疫調聯絡</span>
      <span class="nav-btn" :class="{active: isRoute('developers')}">貢獻者介紹</span>
    </div>

    <el-button class="_primary-btn register-btn">
      店家申請
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    isRoute(name) {
      const curRoute = this.$route.name
      if(curRoute === name) return true
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.1);
}

.nav-btn {
  cursor: pointer;
  color: $primary-grey;
  padding-bottom: 20px;
  
}

.nav-btn-container {
  display: flex;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 15px;
}

.register-btn {
  padding-right: 15px;
  padding-left: 15px;
}

.active {
  border-bottom: $primary-green solid 2px;
}
</style>