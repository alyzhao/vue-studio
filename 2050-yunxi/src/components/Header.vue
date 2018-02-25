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
					:key="item.name"
					:bt-line="true">
				</header-link>
			</div>
			<div class="purchase">
				<a class="pur-btn" target="_blank" href="">立即购票</a>
				<!-- <a class="switch">语言<i class="fa fa-sort-desc"></i></a> -->
				<button class="lang" @click="setLang('zh')">中文</button>
				<button class="lang" @click="setLang('en')">ENG</button>
			</div>
		</div>
	</div>
</template>
<script>
	import HeaderLink from 'components/HeaderLink';
	import { mapState } from 'vuex';

	export default {
		props: ['logo', 'navLinks'],
		methods: {
			setLang(val) {
				console.log(val);
				console.log(this.lang);
			}
		},
		computed: mapState([
			'lang'
		]),
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
						margin-bottom: 6px;
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
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.pur-btn {
					color: #fff;
					font-weight: 800;
					font-size: 18px;
					display: inline-block;
					padding: 10px 45px;
					border-radius: 5px;
					background-color: rgba(0, 0, 0, .3);
					margin-right: 20px;
					position: relative;
				}
				.lang {
					border: 1px solid #fff;
					color: #fff;
					background-color: transparent;
					cursor: pointer;
					border-radius: 15px;
					font-size: 14px;
					margin-left: 8px;
					transition: all .2s linear;						
					&:hover, &.active {
						background-color: #1192ff;
						border: 1px solid #1192ff;
					}
					&:focus {
						outline: none;
					}
				}
				.switch {
					color: #fff;
					cursor: pointer;
					user-select: none;
					position: relative;
					i.fa {
						position: absolute;
						top: 3px;
						right: 0px;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>