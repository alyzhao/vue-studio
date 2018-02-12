<template>
	<router-link class="nav-link" :to="link">
		{{name}}
		<span v-if="btLine" class="bt-line"></span>
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
		min-width: 95px;
		text-align: center;
		color: #5c40b1;
		transition: all .3s linear;
		position: relative;
		font-size: 16px;
		border-right: 1px solid #ddd;
		&:first-child {
			border-left: 1px solid #ddd;			
		}
		&.big {
			line-height: 60px;
		}
		&:hover {
			cursor: pointer;
			.bt-line {
				background-color: #acacac;
			}
		}
		&.router-link-exact-active .bt-line {
			background-color: #acacac;			
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