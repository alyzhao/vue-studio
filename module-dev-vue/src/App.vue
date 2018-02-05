<template>
	<div id="app">
		<header-tab></header-tab>
		<h2>{{msg}}</h2>
		<div class="nav-box">
			<p class="nav-list">
				<router-link class="nav-item" to="/">qqq</router-link>
				<router-link class="nav-item" to="/about">关于</router-link>
			</p>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import HeaderTab from './components/header.vue';
	import mixin from 'utils/mixin';
	export default {
		name: 'app',
		mixins: [mixin],
		data() {
			return {
				msg: 'Vue Module development!'
			}
		},
		// 在components中注册组件
		components: {
			HeaderTab
		}
	}
</script>

<style lang="scss">
	$redColor: #f00;
	h2 {
		color: $redColor;
	}
	#app {
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	h1, h2 {
		font-weight: normal;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		text-align: left;
		margin: 0 10px;
	}
	a {
		color: #42b983
	}
</style>