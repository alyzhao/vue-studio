<template>
	<div>
		<Banner />
		<div class="content">
			<div class="cell ts">
				<p class="tit">探索</p>
				<div class="sub-tit clearfix">
					<p class="tt fl">一句话介绍</p>
					<a class="bt fr" href="" target="_blank">我想成为出品人</a>
				</div>
				<div class="c-in clearfix">
					<div class="items"></div>
					<div class="items"></div>
					<div class="items"></div>
					<div class="items"></div>
					<div class="items"></div>
					<div class="items"></div>
				</div>
				<div class="more"><a href="" target="_blank">查看更多</a></div>
			</div>
			<div class="cell tj">
				<p class="tit">团聚</p>
				<div class="sub-tit clearfix">
					<p class="tt fl">全世界年轻人因科技而团聚</p>
					<a class="bt fr" href="" target="_blank">我想成为召集人</a>
				</div>
				<div class="c-in">
					<swiper :options="tjSwiperOption">
						<swiper-slide>
							<div class="tjslide">
								<div class="info">
									<p class="ra">CCF优博论坛</p>
									<p class="rab">执行委员会</p>
									<p class="pe0">召集人</p>
									<p class="team">CCF优博论坛</p>
								</div>
								<div class="tjimg">
									<img src="/src/assets/img/tj.png">
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="tjslide">
								<div class="info">
									<p class="ra">CCF优博论坛</p>
									<p class="rab">执行委员会</p>
									<p class="pe0">召集人</p>
									<p class="team">CCF优博论坛</p>
								</div>
								<div class="tjimg">
									<img src="/src/assets/img/tj.png">
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="tjslide">
								<div class="info">
									<p class="ra">CCF优博论坛</p>
									<p class="rab">执行委员会</p>
									<p class="pe0">召集人</p>
									<p class="team">CCF优博论坛</p>
								</div>
								<div class="tjimg">
									<img src="/src/assets/img/tj.png">
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="tjslide">
								<div class="info">
									<p class="ra">CCF优博论坛</p>
									<p class="rab">执行委员会</p>
									<p class="pe0">召集人</p>
									<p class="team">CCF优博论坛</p>
								</div>
								<div class="tjimg">
									<img src="/src/assets/img/tj.png">
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="tjslide">
								<div class="info">
									<p class="ra">CCF优博论坛</p>
									<p class="rab">执行委员会</p>
									<p class="pe0">召集人</p>
									<p class="team">CCF优博论坛</p>
								</div>
								<div class="tjimg">
									<img src="/src/assets/img/tj.png">
								</div>
							</div>
						</swiper-slide>																																														
					</swiper>
				</div>
				<div class="more"><a href="" target="_blank">查看更多</a></div>
			</div>

			<div class="cell xs">
				<p class="tit">新生</p>
				<div class="sub-tit clearfix">
					<p class="tt fl">超过100个创意空间的诞生</p>
					<a class="bt fr" href="" target="_blank">报名加入</a>
				</div>	
				<div class="c-in"></div>
				<div class="more"><a href="" target="_blank">查看更多</a></div>		
			</div>

			<div class="cell bf">
				<p class="tit">迸发</p>
				<div class="sub-tit clearfix">
					<p class="tt fl">主题论坛、创意空间、音乐节、晨跑，惊喜令人期待</p>
				</div>	
				<div class="c-in pt">
					<div class="ptl">
						<div class="pttop">
							<div class="tplf">
								<div class="smc"><img height="180" src="/src/assets/img/c1.png"></div>
								<div class="smc" style="background-color: #ffcc00">主题论坛</div>
								<div class="cykj">创意空间</div>
							</div>
							<div class="tprg">
								<div class="bgc"><img src="/src/assets/img/c2.png"></div>
							</div>
						</div>
						<div class="ptbt">
							<div class="smc"><img src="/src/assets/img/c3.png"></div>
							<div class="mgc">呐喊音乐节</div>
							<div class="smc pp">逐日·晨跑</div>
						</div>
					</div>
					<div class="ptr">
						<div class="mgc">新生·科技集市</div>
						<div class="btc">
							<div>
								<div class="smc"><img src="/src/assets/img/c5.png"></div>
							</div>
							<div>
								<img src="/src/assets/img/c4.png">
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>
<script>
	import Banner from 'components/Banner';
	export default {
		data() {
			return {
				tjSwiperOption: {
					slidesPerView: 4,
					spaceBetween: 20
				}
			}
		},
		components: {
			Banner
		}
	}
</script>
<style lang="scss">
	.content {
		width: 1200px;
		margin: 0 auto;
		.cell {
			&.ts {
				margin-top: 90px;
			}
			.tit {
				color: #4122a0;
				font-size: 60px;
			}
			.sub-tit {
				.tt {
					color: #4122a0;
					font-size: 26px;
					font-weight: 400;
				}
				.bt {
					display: block;
					background-color: #42a1ff;
					color: #fff;
					font-size: 22px;
					font-weight: 400;
					padding: 5px 20px;
					border-radius: 5px;
				}
			}
			.c-in {
				margin-top: 90px;
				width: 100%;
				.items {
					float: left;
					width: 375px;
					height: 225px;
					margin: 0 37px 37px 0;
					background-color: #42a1ff;
					&:nth-child(3n) {
						margin-right: 0;
					}
				}
			}
			.more {
				margin-top: 10px;
				a {
					display: block;
					margin: 0 auto;
					width: 400px;
					line-height: 70px;
					background: #4c2baf;
					color: #fff;
					font-size: 22px;
					text-align: center;
					border-radius: 5px;
				}
			}
			.c-in .swiper-slide {
				width: 285px;
			}
			.tjslide {
				width: 285px;
				height: 580px;
				float: left;
				.info {
					height: 280px;
					background-image: linear-gradient(0deg, #412791, #201444);
					overflow: hidden;
					p {
						color: #fff;
						padding-left: 12px;
					}
					.ra, .rab{
						font-size: 28px;
					}
					.ra {
						margin-top: 25px;
					}
					.rab {
						margin: 5px 0 15px;
					}
					.team {
						font-size: 26px;
						margin-top: 47px;
					}
				}
			}
			&.xs {
				.c-in {
					height: 588px;
					background-color: #ffcc00;
				}
			}
			&.bf {
				.c-in.pt {
					display: flex;
					width: 100%;
					background-color: #5c40b2;
					.ptl {
						padding-right: 10px;
						width: 800px;
						.pttop {
							height: 380px;
							display: flex;
							padding-bottom: 10px;
							.tplf {
								width: 380px;
								display: flex;
								flex-wrap: wrap;
								justify-content: space-between;
								padding-right: 10px;
								.cykj {
									width: 100%;
									height: 180px;
									background-color: #5732ca;
									color: #ffcc00;
									text-align: center;
									line-height: 180px;
									font-size: 22px;
								    align-self: flex-end;
								}
							}
							.tprg {
								width: 410px;
							}
						}
						.ptbt {
							display: flex;
							justify-content: space-between;
							.mgc {
								width: 410px;
								height: 180px;
								background-color: #ffcc00;
								color: #5732ca;
								font-size: 22px;
								text-align: center;
								line-height: 180px;
							}
						}
					}
					.ptr {
						width: 34%;
						display: flex;
						flex-wrap: wrap;
						.mgc {
							width: 100%;
							height: 180px;
							background-color: #ffcc00;
							color: #5732ca;
							font-size: 22px;
							text-align: center;
							line-height: 180px;
						}
						.btc {
							width: 100%;
							display: flex;
							justify-content: space-between;
							padding-top: 10px;
						}
					}
					.smc {
						height: 180px;
						width: 180px;
						text-align: center;
						line-height: 180px;
						color: #5732ca;
						overflow: hidden;
						font-size: 20px;
						&.pp {
							background-color: #5732ca;
							color: #ffcc00;
						}
					}
					.bgc {
						width: 408px;
						height: 370px;
					}
				}
			}
		}

	}
</style>