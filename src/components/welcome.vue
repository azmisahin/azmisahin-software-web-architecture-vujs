<template>
  <div class="welcome">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    title: String,
    message: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/variable.scss";

// Welcome Component
h1{
  color           : $secondary-color;
}
</style>
