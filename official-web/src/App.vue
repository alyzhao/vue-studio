<template>
	<div>
		<Header :top-nav-links="topNavLinks" :nav-links="navLinks" :logo="logo"/>
		<router-view />
		<Footer :league="league" :address="address" :phones="phones" :wechat="wechat" :email="email" :qrCode="qrCode"/>
	</div>
</template>
<script>
	import cloneDeep from 'lodash/cloneDeep';
	import { topNavLinks, navLinks, logoUrl, league, address, phones, wechat, email} from 'constants/shukong.js';
	import logo from 'assets/img/logo-sk.png';
	import qrCode from 'assets/img/qrcode.png';

	import Header from 'components/Header';
	import Footer from 'components/Footer';

	export default {
		name: 'app',
		data() {
			return {
				topNavLinks: cloneDeep(topNavLinks),
				navLinks: cloneDeep(navLinks),
				logo: logo,
				league: cloneDeep(league),
				address: cloneDeep(address),
				phones: cloneDeep(phones),
				wechat: cloneDeep(wechat),
				email: cloneDeep(email),
				qrCode: qrCode
			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>
