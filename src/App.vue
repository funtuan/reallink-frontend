<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {NavBar},

  data: () => ({
    //
  })
}
</script>
<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  max-width: 550px;
  margin: auto;
  letter-spacing: 2px;
}

hr {
  border: dashed 1px $secondary-grey;
}

.el-input {
  // border: solid 1.5px $primary-green;
  border-radius: 12px;
  height: 40px !important;
  background: $tertiary-grey;
}


// button overwrite
.el-button:focus {
  color: white !important;
  background: $primary-green !important;
}

.el-button:hover {
  color: white !important;
  background: $primary-green !important;
}

// input overwrite
.el-input__inner {
  border: none;
  border-radius: 12px !important;
  background: $tertiary-grey;
}

.el-input__inner:focus {
  border: solid 1.5px $primary-green;
}
</style>