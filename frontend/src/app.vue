<script>
import Header from './components/header.vue'
export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<template lang="pug">
#app
  Header.header
  router-view.content
</template>

<style lang="scss">
@import '@/assets/styles/index.scss';

.header {
  width: 100%;
  position: fixed;
  top: 0;
}

.content {
  position: relative;
  top: 120px;
}
</style>
