<template>
	<div class="main">
		<Banner :link="'http://reactjs.org'" :banner-img="creativityImg"/>
		<div class="creativity">

		</div>
	</div>
</template>
<script>
	import Banner from 'components/Banner';

	import creativityImg from 'assets/img/ap_crea.png';

	export default {
		data() {
			return {
				creativityImg
			}
		},
		components: {
			Banner
		}
	}

</script>
<style lang="scss">
	
</style>