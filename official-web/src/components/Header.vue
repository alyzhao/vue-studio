<template>
	<div class="header">
		<div class="top-nav">
			<div class="logo"><img height="30" :src="logo"></div>
			<div class="link">
				<header-link v-for="item in topNavLinks"
					key="item.name"
					:name="item.name"
					:link="item.link">
				</header-link>
			</div>
		</div>
		<div class="nav">
			<div class="nav-wrap clearfix">
				<header-link class="big" v-for="item in navLinks"
					key="item.name"
					:name="item.name"
					:link="item.link"
					:bt-line="true">
				</header-link>
			</div>
		</div>
	</div>
</template>
<script>
	import HeaderLink from 'components/HeaderLink';

	export default {
		props: ['logo', 'topNavLinks', 'navLinks'],
		components: {
			HeaderLink
		}
	}
</script>
<style lang="scss">
	.header {
		transition: all .3s linear;
		.top-nav {
			min-height: 40px;
			border-bottom: 1px solid hsla(0, 0%, 100%, .15);
			.logo {
				float: left;
				margin-left: 60px;
				display: flex;
				align-items: center;
				min-height: 40px;
			}
			.link {
				float: right;
				margin-right: 30px;
			}
		}
		&:hover {
			background-color: #333;
		}
		.nav-wrap {
			margin-left: 60px;
		}
	}
</style>