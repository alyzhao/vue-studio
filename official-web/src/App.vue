<template>
	<div>
		<Header :top-nav-links="topNavLinks" :nav-links="navLinks" :logo="logo"/>
		<router-view />
		<Footer />
	</div>
</template>
<script>
	import { topNavLinks, navLinks, logoUrl } from 'constants/shukong.js';
	import cloneDeep from 'lodash/cloneDeep';

	import logo from 'assets/img/logo-sk.png';

	import Header from 'components/Header';
	import Footer from 'components/Footer';

	export default {
		name: 'app',
		data() {
			return {
				topNavLinks: cloneDeep(topNavLinks),
				navLinks: cloneDeep(navLinks),
				logo: logo
			}
		},
		mounted: function(){
			console.log('-----------')
			this.$nextTick(function() {
				console.log(this.logoUrl);				
			}
		)},
		components: {
			Header,
			Footer
		}
	}
</script>
