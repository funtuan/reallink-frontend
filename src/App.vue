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
<style>
html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  max-width: 400px;
  margin: auto;
}


</style>