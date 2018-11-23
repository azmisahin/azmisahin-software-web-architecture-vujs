<template>
  <div class="welcome">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
	name: "welcome",
	props: {
		title: String,
		message: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	color: #42b983;
}
</style>
