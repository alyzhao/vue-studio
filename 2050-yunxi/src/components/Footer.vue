<template>
	<div class="footer">
		<div class="about">
			<div class="content">
				<p class="tit">关于2050</p>
				<p>2050让全世界年青人因科技而团聚，全世界的年青人都能在这里老友重逢，相遇新知，迸发改变世界的新生力量。这里没有旁观者，每个人都是2050的塑造者。</p>
				<p>首届2050将为100个团聚活动提供支持，邀请全球最具创意的年青人创作100个探索展区，志愿出品人将为与会者奉上100场新生论坛，更有音乐节、逐日晨跑、科学影像剧场、云栖灯光秀等丰富多彩的活动。2050还将设置草坪露营区，提供约800顶帐篷作为参会期间的住宿选择。</p>
				<p>杭州市云栖科技创新基金会每年将通过2050候鸟计划为100名来自不同国家的年青人提供参会的差旅支持，并为10位2050青年奖获奖者提供每人1万美元的奖励。</p>
			</div>
		</div>
		<div class="main">
			<div class="clearfix">
				<div class="fr qr">
					<div style="margin-bottom: 15px;"><img src="../assets/img/logo_2050.png"></div>
					<div class="qr-img clearfix">
						<div class="fl"><img width="150" height="150" src="../assets/img/qr-codel.png"></div>
						<!-- <div class="fr"><img width="150" height="150" src="../assets/img/qr-code.png"></div>		 -->
					</div>
				</div>
				<div class="fl contact">
					<div class="ic">
						<div class="cell ">
							<p class="add">联系地址</p>
						</div>
						<div class="cell">
							<p class="us">联系我们</p>
						</div>
						<div class="cell ">
							<p class="em">邮箱地址</p>
						</div>
					</div>
					<div class="dt">
						<div class="cell ">
							<p v-for="item in address">{{item}}</p>
						</div>
						<div class="cell">
							<p v-for="item in phones">
								{{item.name}}: {{item.value}}
							</p>
						</div>
						<div class="cell ">
							<p v-for="item in email">{{item}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="description">
				<p>2050是由杭州市云栖科技创新基金会与志愿者共同发起的非营利活动，全部收入用于大会，获通过基金会支持更多青年创新项目。</p>
				<p>2050将提供中、英、法、德、西、日、韩、阿8种语言服务，如您需更多语言服务，超过30人以上，即可申请团体预约。</p>
			</div>
			<div class="min-main">
				<div class="min-l">
					<p>联系我们</p>
					<ul>
						<li v-for="item in phones">{{item.name}}: {{item.value}}</li>
					</ul>
				</div>
				<div class="min-r">
					<div style="margin-bottom: 15px;"><img src="../assets/img/logo_2050.png"></div>
					<div class="qr-img clearfix">
						<div class="fl"><img width="150" height="150" src="../assets/img/qr-codel.png"></div>
                        <!-- <div class="fr"><img src="../assets/img/qr-coder.png"></div> -->
					</div>
				</div>
			</div>
		</div>

		<p class="copyright">Copyright © 2050云栖 – 鄂ICP备16005435号-3</p>
	</div>
</template>
<script>
	export default {
		props: ['address', 'phones', 'email']
	}
</script>
<style lang="scss">
	.footer {
		background: #333;
		.about {
			height: 250px;
			width: 100%;
			background: url('../assets/img/footer-bg.png') no-repeat center center;
			overflow: hidden;
			.content {
				margin-top: 25px;
			}
			p {
				text-align: center;
				color: #fff;
				font-size: 16px;
				margin: 20px 0;
				&.tit {
					font-size: 20px;
				}
			}
		}
		.main {
			width: 1200px;
			margin: 0 auto;
			padding-top: 65px;
			.description {
				margin-top: 12px;
				p {
					text-align: center;
					font-size: 16px;
					color: #999;
					line-height: 30px;
				}
			}
			.qr-img {
				width: 350px;
				height: 150px;
			}
			.fl {
				float: left;
			}
			.gt {
				color: #5d5d5d;
				font-size: 24px;
				padding: 150px 180px 0 80px;
			}
			.contact {
				width: 850px;
				.ic, .dt {
					display: flex;
					align-items: center;
					font-size: 14px;
					font-weight: 400;
					.cell {
						width: 33.33%;
						margin-bottom: 0;
						font-size: 14px;
						color: #c8c8c8;
						line-height: 30px;
					}				
				}
				.ic {
					p {
						padding-bottom: 35px;
						color: #fff;
						font-size: 18px;
					}
				}
				.dt {
					align-items: flex-start;
					color: #fff;
					font-size: 16px;
				}
			}
			.min-main{
				display: none;
			}
		}
		.copyright {
			text-align: center;
			font-size: 14px;
			color: #666;
			padding: 10px 0 15px;
		}
	}
	@media (max-width: 1200px) {
		.footer .main {
			width: 100%;
			.fr, .fl {
				display: none;
			}
			.min-main{
				padding:0 20px;
				display: block;
				justify-content: space-around;
				align-items: center;
				.min-l{
					p{
						color: #fff;
						font-size: 22px;
						text-align: center;
					}
					ul{
						margin: 0;
						padding: 0;
						li{
							margin-bottom: 0;
							font-size: 14px;
							color: #c8c8c8;
							line-height: 30px;
						}
					}
				}
			}
		}
	}
</style>