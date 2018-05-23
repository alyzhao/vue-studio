<template>
	<div class="header">
		<div class="top-nav">
			<div class="logo">
				<router-link to="/" class="logo-wrap"><img :src="logo"></router-link>
				<div class="info">
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
				<!-- <router-link class="pur-btn" to="/purchase">{{purchase}}</router-link> -->
				<!-- <a class="pur-btn" @click="fff()">立即购票</a> -->
				<!-- <a class="switch">语言<i class="fa fa-sort-desc"></i></a> -->
				<button class="lang active">注册</button>
				<button class="lang">登录</button>
				<i class="mb-bar fa fa-bars" @click="showMbNav = !showMbNav"></i>
			</div>
		</div>
		<div class="mb-nav" :class="{show: showMbNav}">
			<ul>
				<li class="clearfix" v-for="item in navLinks" @click="showMbNav = !showMbNav">
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
				showMbNav: false,
				purchase: '立即购票'
			}
		},
		mounted: function () {
            this.$nextTick(function () {
                this.loadData();
            })
        },
		methods: {
			setLang(val) {
				this.$store.dispatch('SET_LANG', val);
			},
			loadData() {
				this.purchase = this.isZh ? '立即购票' : 'Buy Ticket';
			}
		},
		computed: {
			isZh() {
				return this.$store.state.lang == 'zh';
			},
			lang() {
				return this.$store.state.lang;	
			}
		},
		watch: {
			isZh() {
				this.loadData();
			}
		},
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
				img {
					width: 75px;
				}
				.logo-wrap {
					margin-top: 10px;
				}
				.info {
					color: #fff;
					font-size: 12px;
					margin-left: 15px;
					border-left: 1px solid #333;
					min-width: 220px;
					min-height: 68px;
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
				flex-grow: .1;
				align-items: center;
				justify-content: space-between;
				margin-right: 100px;
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
					padding: 8px 0;
					min-width: 145px;
					text-align: center;
					border-radius: 5px;
					background: #4528a3;
					background-image: linear-gradient(90deg, #5438ae, #41229e);
					margin-right: 10px;
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
					padding: 0 5px;
					&:hover, &.active {
						color: #5c40b1;
					}
					&:focus {
						outline: none;
					}
				}
				.mb-bar {
			        transition: all 0.2s ease 0s;
					font-size: 32px;
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
			overflow: hidden;
			&.show {
				height: 320px;
			}
			ul {
				padding: 0;
				margin: 0;
				li {
					&:hover {
						background-color: #dcb001;
					}
					a {
						padding: 10px 30px;
						text-align: left;
						color: #333;
						font-size: 18px;
						width: 100%;
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
		// .purchase .lang, .purchase .split {
		// 	display: none;
		// }
		.header .top-nav .purchase .mb-bar {
			display: block;
		}
		.header .mb-nav {
			display: block;
		}
		.cell.bf .c-in.pt .item {
			width: 50% !important;
		}
	}
	@media (max-width: 768px) {
		.header .top-nav{
		    padding: 0 5px;
		}
		.header .top-nav .logo img {
			width: 8.5rem;
			height: auto;
		}
		.header .top-nav .purchase .pur-btn {
	        min-width: 7rem;
		    padding: .5rem 0;
		    margin-right: 0;
		    font-size: 14px;
		}
		.header .top-nav .purchase {
			flex-grow: 1;
		}
		.header .top-nav .purchase .lang {
			width: auto;
		}
	}
	a[title="站长统计"] {
		display: none;
	}
</style>