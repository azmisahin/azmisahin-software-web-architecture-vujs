<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import "./src/styles/variable.scss";

// Application
#app{
  font-family     : $font;
  color           : $primary-color;
}
</style>
