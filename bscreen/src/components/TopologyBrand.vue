<template>
	<div class="brand" :style="brandStyle"><slot></slot></div>
</template>
<script>
	export default {
		props: ['width', 'top', 'left'],
		computed: {
			brandStyle() {
				return {
					width: this.width + 'px',
					top: this.top + 'px',
					left: this.left + 'px'
				}
			}
		}
	}
</script>
<style lang="scss">
	.brand {
		line-height: 125px;
		text-align: center;
		color: #28d5f3;
		font-size: 30px;
		position: absolute;
	}
</style>