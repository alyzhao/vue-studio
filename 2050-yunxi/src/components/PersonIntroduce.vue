<template>
	<div class="main-content">
		<div class="bannr"></div>
		<div class="content">	
			<div class="cell ts clearfix">
			<div class="c-in clearfix">
				<div class="items" v-for="item in forumList" :key="item.id">
				<p class="ctt"><a href="" :title="item.forumWord">{{item.forumName}}</a></p>
					<p class="ccon"><a href="" :title="item.forumWord">{{item.forumWord}}</a></p>
						<div class="peop">
							<a class="portrait" href="" target="_blank"><img height="60" width="60" :src="staticHost + item.productsImg"></a>
							<div>
								<p class="cp">出品人:  {{item.products}}</p>
								<p class="ct overh"><a href="" :title="item.productsWord">{{item.productsWord}}</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>		
</template>
<style lang="scss">
	.bannr{
		width: 100%;
		height: 300px;
		background-color: #FFC600;
	}
	.content {
		width: 1200px;
		margin: 0 auto;
	}
	.cell {
		.c_in{
			margin-top: 60px;
			width: 100%;
			.items {
				float: left;
				width: 375px;
				margin: 0 37px 37px 0;
				background-color: #fff;
				padding: 15px 20px;
				color: #333;
				box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .2);
				&:nth-child(3n) {
					margin-right: 0;
				}
				.peop {
					display: flex;
					align-items: center;
					margin-top: 15px;
					overflow: hidden;
					.portrait {
						display: block;
						width: 60px;
						height: 60px;
						border-radius: 100%;
						overflow: hidden;
						img {
							display: block;
						}
					}
				}
				.cp {
					font-size: 18px;
				}
				.cp, .ct {
					margin-left: 10px;
				}
				.ct {
					color: #666;
					font-size: 16px;
					width: 265px;
					a {
						color: #666;
					}
				}
				.ctt {
					font-size: 24px;
					line-height: 40px;
					color: #333;
					width: 335px;
					margin-bottom: 5px;
					height: 80px;
					overflow: hidden;
					a {
						color: #333;
						font-weight: 600;
					}
				}
				.ccon {
					height: 85px;
					line-height: 28px;
					font-size: 14px;
					overflow: hidden;
					a {
						color: #666;						
					}
				}
			}	
		}

	}
	@media (max-width: 1200px) {
		.content {
			width: 100%;		
		}
		.cell .c-in {
			padding: 0 10px;
			.items {
				width: 49%;
				margin: 0 2% 13px 0;
				&:nth-child(2n) {
					margin-right: 0;
				}
				&:nth-child(2n - 1) {
					margin-right: 2%;
				}
				&:last-child {
					display: none;
				}
			}
		}
		.cell .c-in .items .ctt {
			width: 100%;
		}
	}
</style>
<script>
	const prodUrl = require('../constants/config.js').prodUrl;

	export default {
		data() {
			return {
				forumList: [],
				staticHost: prodUrl.imgHost
			}

		},
		mounted: function () {
			this.$nextTick(function () {
				this.axios.get("http://192.168.1.74:8080" + '/2050website/froumClient/queryFroum').then(response => {
					let resData = response.data;
					this.forumList = resData;
				})
			})
		}
	}
</script>