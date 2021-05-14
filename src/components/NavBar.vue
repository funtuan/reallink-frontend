<template>
  <div class="nav-bar">
    <div class="nav-title">
      台灣加密型實名制
    </div>
    <div class="nav-btn-container">
      <span class="nav-btn" @click="routeTo('/')" :class="{'active-border': routeName === 'About'}">關於</span>
      <span class="nav-btn" @click="routeTo('/contact')" :class="{'active-border': routeName === 'Contact'}">疫調聯絡</span>
      <span class="nav-btn" @click="routeTo('/contributes')" :class="{'active-border': routeName === 'Contributes'}">貢獻者介紹</span>
    </div>

    <el-button class="_primary-btn register-btn" @click="register">
      店家申請
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    routeTo(name) {
      this.$router.push(name)
    },

    register() {
      this.$router.push('/shopTerm')
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 64px;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  padding: 10px 13px 10px 13px;
  box-sizing: border-box;
  justify-content: space-between;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.1);
  z-index: 99;
}

.nav-btn {
  cursor: pointer;
  color: $primary-grey;
  padding-bottom: 20px;
  font-size: 14px;
  height: 10px;
}

.nav-btn-container {
  display: flex;
  height: 100%;
  padding-top: 22px;
  padding-bottom: 10px;
  gap: 15px;
}

.register-btn {
  padding-right: 15px;
  padding-left: 15px;
}

.active-border {
  border-bottom: $primary-green solid 2px;
}
.nav-title {
  position: absolute;
  font-weight: 500;
  font-size: 12px;
}
</style>