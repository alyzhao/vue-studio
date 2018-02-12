<template>
	<div>
		<Header :nav-links="navLinks" :logo="logo"/>
		<router-view />
		<Footer :address="address" :phones="phones" :email="email"/>
	</div>
</template>
<script>
	import cloneDeep from 'lodash/cloneDeep';
	import { navLinks, logo, address, phones, email} from 'constants/2050.js';
	// import logo from 'assets/img/logo.jpg';
	// import qrCode from 'assets/img/qrcode.png';

	import Header from 'components/Header';
	import Footer from 'components/Footer';

	export default {
		name: 'app',
		data() {
			return {
				navLinks: cloneDeep(navLinks),
				logo: logo,
				address: cloneDeep(address),
				phones: cloneDeep(phones),
				email: cloneDeep(email),
			}
		},
		mounted() {
			console.log(this.logo);
		},
		components: {
			Header,
			Footer
		}
	}
</script>
