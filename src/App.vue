<template>
	<div id="app">
		<Welcome title="Welcome" message="The Progressive JavaScript Framework"/>
	</div>
</template>

<script>

import Welcome from './components/welcome.vue'

export default {
	name: 'app',
	components: {
		Welcome
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
