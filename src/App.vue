<template>
  <div id="app">
    <NavBar />
    <router-view v-loading.fullscreen.lock="fullscreenLoading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ls from 'local-storage'
import { v4 as uuidv4 } from 'uuid';
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {NavBar},
  computed: {
    ...mapState([
      'fullscreenLoading',
    ]),
  },
  created() {
    if (!ls.get('uuid')) {
      ls.set('uuid', uuidv4())
    }
  },
}
</script>

<style lang="scss">
html, body, #app {
  font-family: 'Noto Sans TC';
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
</style>