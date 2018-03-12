<template>
	<i class="triangle" :style="triangleStyle"></i>
</template>
<script>
	export default {
		props: ['triangleWidth', 'triangleColor', 'triangleDirection'],
		computed: {
			triangleStyle() {
				let style = {};
				console.log(this.triangleWidth);
				style['border-' + this.triangleDirection + '-color'] = this.triangleColor;
				style['border-width'] = this.triangleWidth;
				console.log(style);
				return style;
			}
		}
	}
</script>
<style lang="scss">
	.triangle {
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
		display: block;
		position: absolute;
	}
</style>