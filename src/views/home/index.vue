<template>
  <div class="home">
    <Welcome title="Welcome" message="The Progressive JavaScript Framework"/>
  </div>
</template>

<script>
import Welcome from '@/components/welcome'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>
