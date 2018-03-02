<template>
	<div class="header">
		<div class="top-nav">
			<div class="logo">
				<a href="/" target="self"><img :src="logo"></a>
				<div class="info">
					<p>时间： 2018.5.25 - 2018.5.27</p>
					<p>地址： 杭州云栖小镇</p>
					<p>热线： 18500840525</p>
				</div>
			</div>
			<div class="link">
				<header-link v-for="item in navLinks"
					:name="item.name"
					:link="item.link"
					:key="item.name">
				</header-link>
			</div>
			<div class="purchase">
				<a class="pur-btn" target="_blank" href="">立即购票</a>
				<!-- <a class="switch">语言<i class="fa fa-sort-desc"></i></a> -->
				<button class="lang active" @click="setLang('zh')">中文</button>
				<span class="split"></span>
				<button class="lang" @click="setLang('en')">ENG</button>
				<i class="mb-bar fa fa-bars" @click="showMbNav = !showMbNav"></i>
			</div>
		</div>
		<div class="mb-nav" :style="{show: showMbNav}">
			<ul>
				<li class="clearfix" v-for="item in navLinks">
					<header-link 
						:name="item.name"
						:link="item.link"
						:key="item.name">
					</header-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import HeaderLink from 'components/HeaderLink';
	import { mapState } from 'vuex';

	export default {
		props: ['logo', 'navLinks'],
		data() {
			return {
				showMbNav: false;
			}
		}
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
			width: 100%; 
			padding: 0 30px;
			display: flex;
			align-items: center;
			.logo {
				height: 100%;
				display: flex;
				align-items: center;
				min-height: 40px;
				flex-grow: 1;
				a {
					margin-top: 10px;
				}
				.info {
					color: #fff;
					font-size: 12px;
					margin-left: 15px;
					border-left: 1px solid #333;
					min-width: 220px;
					p {
						line-height: 15px;
						margin-bottom: 6px;
						margin-left: 15px;
						color: #333;
						font-size: 14px;
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
				justify-content: space-between;
				flex-grow: 1;
				margin-right: 30px;
			}
			.purchase {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.pur-btn {
					color: #fff;
					font-weight: 800;
					font-size: 18px;
					display: inline-block;
					padding: 10px 0;
					min-width: 175px;
					text-align: center;
					border-radius: 5px;
					background: #4528a3;
					background-image: linear-gradient(90deg, #5438ae, #41229e);
					margin-right: 20px;
					position: relative;
				}
				.split {
					height: 40px;
					background: #eee;
					width: 2px;
					transform: rotate(45deg);
				}
				.lang {
					border: none;
					color: #333;
					background-color: transparent;
					cursor: pointer;
					font-size: 14px;
					transition: all .2s linear;
					width: 50px;					
					&:hover, &.active {
						font-size: 18px;
						color: #5c40b1;
					}
					&:focus {
						outline: none;
					}
				}
				.mb-bar {
			        transition: all 0.2s ease 0s;
					font-size: 45px;
					padding: 10px;
					color: #333;
					cursor: pointer;
					display: none;
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
		.mb-nav {
			position: absolute;
			top: 80px;
			width: 100%;
			background-color: #ffcc00;
			display: none;
			height: 0;
			transition: height .3s;
			&.show {
				height: 320px;
			}
			ul {
				padding: 0;
				margin: 0;
				li {
					padding: 10px 20px;
					&:hover {
						background-color: #dcb001;
					}
					a {
						color: #fff;
						font-size: 18px;
					}
				}
			}
		}
	}
	@media (max-width: 1200px) {
		.header .top-nav .logo .info {
			display: none;
		}
		.header .top-nav .link {
			display: none;
		}
		.purchase .lang, .purchase .split {
			display: none;
		}
		.header .top-nav .purchase .mb-bar {
			display: block;
		}
		.header .mb-nav {
			display: block;
		}
		.nav-link.router-link-exact-active {

		}
	}
</style>