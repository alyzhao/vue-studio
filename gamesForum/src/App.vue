<template>
	<div>
		<Header :nav-links="navLinks" :logo="logo"/>
		<router-view />
		<Footer :footer-info="footerInfo"/>
	</div>
</template>
<script>
	import cloneDeep from 'lodash/cloneDeep';
	import { navLinks, footerInfo} from 'constants/2050.js';
	import logo from 'assets/img/logo.png'

	import Header from 'components/Header';
	import Footer from 'components/Footer';

	export default {
		name: 'app',
		data() {
			return {
				navLinks: navLinks,
				logo: logo,
				footerInfo: footerInfo
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>
