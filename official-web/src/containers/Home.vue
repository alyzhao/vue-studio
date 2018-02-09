<template>
	<div class="main">
		<banner :banners="banners">
		</banner>
	</div>
</template>
<script>
	import {banners} from 'constants/shukong';
	import cloneDeep from 'lodash/cloneDeep';

	import Banner from 'components/Banner';

	export default {
		data() {
			return {
				banners: cloneDeep(banners)
			}
		},
		mounted() {
			console.log(this.banners);
		},
		components: {
			Banner
		}
	}
</script>
<style lang="scss">
	.banner {
		background-color: #24282c;
		height: 640px;
		overflow: hidden;
		position: relative;
	}
	.top-banner {
		overflow: hidden;
		width: 100%;
		position: relative;
		height: 640px;
		.item {
			position: absolute;
			height: 640px;
			width: 100%;
			overflow: hidden;
			visibility: hidden;
			.gradient-mask {
				z-index: 897;
				height: 640px;
				width: 100%;
				background-color: transparent;
				opacity: 1;
				position: absolute;
			}
		}
	}
</style>