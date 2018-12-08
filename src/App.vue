<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
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
