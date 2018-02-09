<template>
	<a class="nav-link" :target="target" :href="link">
		{{name}}
		<span v-if="btLine" class="bt-line"></span>
	</a>
</template>
<script>
	export default {
		props: {
			name: String,
			btLine: {
				type: Boolean,
				default: false
			},
			link: String,
			target: {
				type: String,
				default: 'self'
			}
		}
	}
</script>
<style lang="scss">
	.nav-link {
		display: block;
		float: left;
		line-height: 40px;
		padding: 0 20px;
		color: #fff;
		transition: all .3s linear;
		position: relative;
		font-size: 14px;
		&.big {
			line-height: 60px;
		}
		&:hover {
			color: #32e1f1;
			cursor: pointer;
			.bt-line {
				background-color: #32e1f1;
			}
		}
		.bt-line {
			position: absolute;
			display: block;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: transparent;
			transition: all .3s linear;
		}
	}
</style>