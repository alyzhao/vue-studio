<template>
	<div class="banner">
		<div class="links">
			<a :href="link" target="_blank" :style="{backgroundImage: bgUrl(bannerImg)}"></a>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['link', 'bannerImg'],
		methods: {
			bgUrl(img) {
				return 'url(' + img + ')'
			}
		}
	}
</script>
<style lang="scss">
	.banner {
		background: url('../assets/img/banner.png');
		height: 1080px;
		overflow: hidden;
		position: relative;
		.links {
			height: 314px;
			width: 880px;
			bottom: 0;
			right: 0;
			position: absolute;
			a {
				display: inline-block;
				width: 100%;
				height: 100%
			}
		}
	}
</style>