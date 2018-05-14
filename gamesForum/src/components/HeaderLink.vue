<template>
	<router-link class="nav-link" :to="link">
		{{name}}
	</router-link>
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
		line-height: 20px;
		min-width: 60px;
		text-align: center;
		color: #333;
		transition: all .3s linear;
		position: relative;
		font-size: 16px;
		font-weight: 400;
		&.big {
			line-height: 60px;
		}
		&:hover {
			cursor: pointer;
			color: #5c40b1;
			font-size: 20px;
		}
		&.is-active {
			color: #5c40b1 !important;
			font-size: 18px;			
			font-weight: bold;
		}
		.bt-line {
			position: absolute;
			display: block;
			bottom: -5px;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: transparent;
			transition: all .3s linear;
		}
	}
</style>