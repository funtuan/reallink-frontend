<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'App',

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