<template>
	<div id="app">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
		background-color: #eeeeee;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	#nprogress .bar{
		background: #009a61 !important;
	}
</style>
