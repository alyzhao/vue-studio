<template>
	<div class="header">
		<div class="top-nav">
			<div class="logo">
				<a href="/" target="self"><img :src="logo"></a>
				<div class="info">
					<p>时间： xxxxxxxxxxxxxxxxxx</p>
					<p>地址： xxxxxxxxxxxxxxxxxx</p>
					<p>热线： xxxxxxxxxxxxxxxxxx</p>
				</div>
			</div>
			<div class="link">
				<header-link v-for="item in navLinks"
					:name="item.name"
					:link="item.link"
					:bt-line="true">
				</header-link>
			</div>
			<div class="purchase">
				<a class="pur-btn" target="_blank" href="">立即购票</a>
				<a class="switch">语言切换</a>
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
		z-index: 999;
		.top-nav {
			height: 80px;
			width: 1200px; 
			margin: 0 auto;
			display: flex;
			align-items: center;
			.logo {
				height: 100%;
				display: flex;
				align-items: center;
				min-height: 40px;
				flex-grow: 1;
				.info {
					color: #fff;
					font-size: 12px;
					margin-left: 10px;
					border-left: 1px solid #fff;
					p {
						line-height: 15px;
						margin-bottom: 10px;
						margin-left: 5px;
						&:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
			.link {
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-grow: 1;
			}
			.purchase {
				flex-grow: 1;
				.pur-btn {
					color: #fff;
					font-weight: 800;
					font-size: 18px;
					display: inline-block;
					padding: 10px 52px;
					border-radius: 5px;
					background-color: rgba(0, 0, 0, .2);
				}
				.switch {
					color: #fff;
				}
			}
		}
	}
</style>