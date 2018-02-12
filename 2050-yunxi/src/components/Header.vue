<template>
	<div class="header">
		<div class="top-nav">
			<div class="logo"><a href="/" target="self"><img :src="logo"></a></div>
			<div class="link">
				<header-link v-for="item in navLinks"
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
		props: ['logo', 'navLinks'],
		components: {
			HeaderLink
		}
	}
</script>
<style lang="scss">
	.header {
		transition: all .3s linear;
		position: relative;
		.top-nav {
			height: 100px;
			width: 1380px;
			margin: 0 auto;
			.logo {
				height: 100%;
				float: left;
				margin-left: 60px;
				display: flex;
				align-items: center;
				min-height: 40px;
			}
			.link {
				float: left;
				margin-left: 30px;
				height: 100%;
				display: flex;
				align-items: center;
			}
		}
	}
</style>