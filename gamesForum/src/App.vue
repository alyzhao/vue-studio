<template>
	<div>
		<Header :nav-links="navLinks" :logo="logo" :head-info="headInfo"/>
		<router-view />
		<Footer :footer-info="footerInfo"/>
	</div>
</template>
<script>
	import cloneDeep from 'lodash/cloneDeep';
	import { navLinks, headInfo, footerInfo} from 'constants/2050.js';
	import { navLinks_en, headInfo_en, footerInfo_en, logo_en} from 'constants/2050_en.js';
	import logo from 'assets/img/logo.png'

	import Header from 'components/Header';
	import Footer from 'components/Footer';

	export default {
		name: 'app',
		data() {
			return {
				navLinks: navLinks,
				logo: logo,
				headInfo: headInfo,
				footerInfo: footerInfo
			}
		},
		computed: {
			isZh() {
				return this.$store.state.lang == 'zh';
			},
		},
		watch: {
			isZh(val) {
				if (val) {
					this.navLinks = navLinks;
					this.headInfo = headInfo;
					this.footerInfo = footerInfo;

					this.logo = logo;
				} else {
					this.headInfo = headInfo_en;
					this.navLinks = navLinks_en;
					this.footerInfo = footerInfo_en;

					this.logo = logo_en;
				}
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>
