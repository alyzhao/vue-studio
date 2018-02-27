<template>
	<div>
		<Banner />
		<div class="main-content">
			<div class="content">
				<!-- 探索 -->
				<div class="cell ts">
					<p class="tit"><a href="" target="_blank"><img src="../../assets/img/tit-ts.png"></a></p>
					<p class="sub-tit">
						科学与技术、艺术与设计，近百场主题论坛，期待你全身心的参与，激发思考与创意
					</p>
					<div class="c-in clearfix">
						<div class="items" v-for="item in exploreList" :key="item.id">
							<p class="ctt">{{item.title}}</p>
							<p class="ccon">{{item.describetxt}}</p>
							<div class="peop">
								<a href="" target="_blank"><img height="40" width="40" :src="item.initiatorphoto"></a>
								<span class="cp">出品人:  {{item.initiator}}</span>
								<span class="ct">{{item.time}}</span>
							</div>
						</div>

					</div>
					<div class="more"><a href="" target="_blank">查看更多</a></div>
				</div>
			</div>
			<!-- 团聚 -->
			<div class="cell tj">
				<p class="tit"><a href="" target="_blank"><img src="../../assets/img/tit-tj.png"></a></p>
				<p class="sub-tit">世界各地的青年人在2050握手团聚，老友重逢，相遇新知，给彼此灵感，给未来答案</p>
				<div class="c-in">
					<swiper :options="tjSwiperOption">
						<!-- v-for="item in reuniteList" -->
						<swiper-slide>
							<div class="tjslide">
								<div class="tj-con clearfix">
									<div class="info">
										<!-- <p class="ra">{{item.name}}</p> -->
										<p class="ra">xxxxxx</p>
										<p class="peo">召集人</p>
										<!-- <p class="team">{{item.introduce}}</p> -->
										<p class="team">xxxxx</p>
										<p class="split"><span></span></p>
										<div class="intro">
											<p>TGO全称Top Geeks' Organization,是极客邦科技旗下一个聚集高端技术人的组织。其中文名“鲲鹏会”，致力于TGO全称Top Geeks' Organization,是极客邦科技旗下一个聚集高端技术人的组织。其中文名“鲲鹏会”，致力于</p>
										</div>
									</div>
									<div class="tj-img">
										<img src="../../assets/img/tj.png">
									</div>
								</div>
								<div class="details">
									<a class="kn" href="" target="_blank">查看详情 ></a>
								</div>
							</div>								
						</swiper-slide>
						<swiper-slide>
							<div class="tjslide">
								<div class="tj-con clearfix">
									<div class="info">
										<!-- <p class="ra">{{item.name}}</p> -->
										<p class="ra">xxxxxx</p>
										<p class="peo">召集人</p>
										<!-- <p class="team">{{item.introduce}}</p> -->
										<p class="team">xxxxx</p>
										<p class="split"><span></span></p>
										<div class="intro">
											<p>TGO全称Top Geeks' Organization,是极客邦科技旗下一个聚集高端技术人的组织。其中文名“鲲鹏会”，致力于TGO全称Top Geeks' Organization,是极客邦科技旗下一个聚集高端技术人的组织。其中文名“鲲鹏会”，致力于</p>
										</div>
									</div>
									<div class="tj-img">
										<img src="../../assets/img/tj.png">
									</div>
								</div>
								<div class="details">
									<a class="kn" href="" target="_blank">查看详情 ></a>
								</div>
							</div>								
						</swiper-slide>						
						<div class="swiper-pagination-tj" slot="pagination"></div>
						<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
						<div class="swiper-button-next swiper-button-black" slot="button-next"></div>						
					</swiper>
				</div>
				<div class="more"><a href="" target="_blank">查看更多</a></div>
			</div>

			<div class="content">
				<!-- 新生 -->
				<div class="cell xs">
					<p class="tit">新生</p>
					<div class="sub-tit clearfix">
						<p class="tt fl">超过100个创意空间的诞生</p>
						<a class="bt fr" href="" target="_blank">报名加入</a>
					</div>	
					<div class="c-in"></div>
					<div class="more"><a href="" target="_blank">查看更多</a></div>		
				</div>

				<!-- 迸发 -->
				<div class="cell bf">
					<p class="tit"><a href="" target="_blank"><img src="../../assets/img/tit-bf.png"></a></p>
					<p class="sub-tit">
						音乐、影像、晨跑、露营……这里没有旁观者，2050的狂欢属于每一位年青人
					</p>	
					<div class="c-in pt">
						<div class="item">
							<div class="bg"><img src="../../assets/img/c1.png"></div>
							<div class="con"><a href="" target="_blank">主题论坛</a></div>
						</div>
						<div class="item">
							<div class="bg"><img src="../../assets/img/c1.png"></div>
							<div class="con"><a href="" target="_blank">主题论坛</a></div>
						</div>
						<div class="item">
							<div class="bg"><img src="../../assets/img/c1.png"></div>
							<div class="con"><a href="" target="_blank">主题论坛</a></div>
						</div>
						<div class="item">
							<div class="bg"><img src="../../assets/img/c1.png"></div>
							<div class="con"><a href="" target="_blank">主题论坛</a></div>
						</div>
						<div class="item">
							<div class="bg"><img src="../../assets/img/c1.png"></div>
							<div class="con"><a href="" target="_blank">主题论坛</a></div>
						</div>
						<div class="item">
							<div class="bg"><img src="../../assets/img/c1.png"></div>
							<div class="con"><a href="" target="_blank">主题论坛</a></div>
						</div>																								
					</div>
				</div>
			</div>
			<div class="cell zy">
				<div class="content">
					<p class="tit"><a href="" target="_blank"><img src="../../assets/img/tit-bf.png"></a></p>
					<p class="sub-tit">
						感谢所有的志愿机构与志愿者，你们用年青人的方式定义了“志愿“，让2050与众不同
					</p>
					<p class="zy-tit">志愿发起人</p>
					<swiper :options="zypSwiperOption">
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img src="../../assets/img/pto.png"></a></div>
								</div>
							</div>
						</swiper-slide>																								

					</swiper>
					<div class="more"><a href="" target="_blank">查看更多</a></div>
				</div>
			</div>
			<div class="content">
				<div class="cell jg">
					<p class="zyjg">志愿发起机构</p>
					<div class="c-in">
						<swiper :options="zySwiperOption">
							<swiper-slide v-for="(item, index) in volunteerList" :key="index">
								<div class="zy-slide">
									<div class="mark" v-for="vol in item" :key="vol.id">
										<img :src="vol.logo">
									</div>
								</div>
							</swiper-slide>												
							<div class="swiper-pagination" slot="pagination"></div>
						</swiper>
					</div>					
					<div class="more"><a href="" target="_blank">查看更多</a></div>					
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
					// autoplay: true,
					// spaceBetween: 20
					pagination: {
						el: '.swiper-pagination-tj',
						type: 'bullets'
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				},
				zySwiperOption: {
					autoplay: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets'
					}
				},
				zypSwiperOption: {
					autoplay: true,
					slidesPerView: 5,
				},
				exploreList: [],
				reuniteList: [],
				burstList: [],
				volunteerList: []
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				console.log('mounted');
				this.axios.get('http://datav.youlishu.com:8080/2050/webClient/findexplore.do').then(response => {
					console.log(response.data);
					let resData = response.data;
					this.exploreList = resData;
				})

				this.axios.get('http://datav.youlishu.com:8080/2050/webClient//findreunite.do').then(response => {
					let resData = response.data;
					this.reuniteList = resData;
				})

				this.axios.get('http://datav.youlishu.com:8080/2050/webClient/findburst.do').then(response => {
					this.burstList = response.data;
				})

				this.axios.get('http://datav.youlishu.com:8080/2050/webClient/findvolunteer.do').then(response => {
					let resData = response.data;

					let volPageCount = Math.ceil(resData.length / 15);
					console.log('volPageCount', volPageCount);
					let list = [];
					for(let i = 0; i < volPageCount; i ++) {
						list.push(resData.slice(i * 15, (i + 1) * 15));
					}
					this.volunteerList = list;
					console.log(this.volunteerList);
				})
			})
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
	}
	.cell {
		margin-bottom: 180px;
		&.ts {
			margin-top: 90px;
		}
		.tit {
			color: #4122a0;
			text-align: center;
		}
		.sub-tit {
			color: #333;
			font-size: 26px;
			text-align: center;

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
			margin-top: 60px;
			width: 100%;
			.items {
				float: left;
				width: 375px;
				height: 225px;
				margin: 0 37px 37px 0;
				background-color: #fff;
				padding: 15px 20px;
				color: #555;
				box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .2);
				&:nth-child(3n) {
					margin-right: 0;
				}
				.peop {
					display: flex;
					align-items: center;
					margin-top: 8px;
					justify-content: space-between;
					.ct {
						flex-grow: 1;
						text-align: right;
					}
				}
				.cp {
					margin-left: 10px;
				}
				.ctt {
					font-size: 24px;
					line-height: 40px;
				}
				.ccon {
					height: 110px;
					line-height: 28px;
					font-size: 14px;
					overflow: hidden;
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
				background: #333;
				color: #fff;
				font-size: 22px;
				text-align: center;
				border-radius: 5px;
			}
		}
		.c-in .swiper-slide {
			width: 285px;
		}
		&.tj {
			background-color: #ededed;
		}
		.tjslide {
			width: 100%;
			position: relative;
			.tj-con {
				width: 1200px;
				margin: 0 auto;
			}
			.details {
				width: 1200px;
				margin: 0 auto;
				.kn {
					background-color: #ffcc00;
					color: #333;
					font-size: 24px;
					line-height: 80px;
					display: inline-block;
					padding: 0 33px;			
				}
			}
			.info {
				width: 400px;
				float: left;
				background-color: #fff;
				p {
					color: #333;
					padding-left: 25px;
					padding-right: 25px;
				}
				.peo {
					font-size: 18px;
				}
				.ra {
					font-size: 30px;
					margin-top: 25px;
					margin-bottom: 15px;
					height: 85px;
					overflow: hidden;
				}
				.rab {
					margin: 5px 0 15px;
				}
				.team {
					font-size: 24px;
					margin-top: 33px;
				}
				.split span {
					display: inline-block;
					width: 20px;
					height: 6px;
					background-color: #333;
				}
				.intro {
					font-size: 16px;
					color: #666;
					text-align: justify;
					line-height: 30px;
					padding-top: 20px;
					padding-bottom: 40px;
					p {
						height: 120px;
						overflow: hidden;
					}
				}
			}
			.tj-img {
				float: left;
				height: 425px;
				img {
					width: 800px;
					height: 425px;
				}
			}
		}
		.swiper-pagination-tj {
			text-align: center;
			.swiper-pagination-bullet {
				width: 15px;
				height: 15px;
				background: #000;
				border-radius: 0;
				&.swiper-pagination-bullet-active {
					background-color: #ffcc00;
				}
			}
		}
		.swiper-button-prev, .swiper-button-next {
			width: 120px;
			height: 240px;
			background-color: #fff;
			text-align: center;
			line-height: 240px;
			position: absolute;
			color: #666;
		}
		.swiper-button-prev {
			left: 0;
		}
		.swiper-button-next {
			right: 0;
		}
		&.tj .more{
			margin-top: 70px;
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
				flex-wrap: wrap;
				.item {
					width: 400px;
					height: 400px;
					overflow: hidden;
					// flex-grow: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					.bg {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						overflow: hidden;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.con {
						width: 190px;
						height: 190px;
						border: 5px solid #fff;
						text-align: center;
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 20px;
						a {
							font-size: 26px;
							color: #fff;
							word-break: keep-all;
						}
					}
				}
			}
		}
		&.zy {
			background-color: #0a0a0a;
			.sub-tit {
				color: #fff;
			}
			.zy-tit {
				color: #fff;
				font-size: 36px;
				text-align: center;
			}
			.zyp-wrap {
				width: 230px;
				height: 230px;				
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.swiper-slide-next + .swiper-slide .zyp-slide {
				transform: scale(1.25);				
			}
			.zyp-slide {
				width: 180px;
				height: 180px;
				border-radius: 100%;
				overflow: hidden;
				transition: transform .3s;
				&:hover {
					transform: scale(1.25);
				}
				.zyp-img, img {
					width: 100%;
					height: 100%;
				}
			}
		}
		&.jg {
			.zy-slide {
				display: flex;
				flex-wrap: wrap;
				.mark {
					width: 225px;
					height: 135px;
					background-color: rgba(255, 255, 255, .1);
					margin-bottom: 20px;
					margin-right: 15px;
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						width: 225px;
						height: 135px;
					}
				}
			}
			.swiper-container {
				padding-bottom: 40px;
			}
			.swiper-pagination {
				bottom: 0;
			}
			.swiper-pagination-bullet {
				width: 10px;
				height: 10px;
				background: #999;
				opacity: 1;
				transition: all .2s linear;
				&.swiper-pagination-bullet-active {
					width: 60px;
					background: #ffcc00;
					border-radius: 5px;
				}
			}
			.zyjg {
				text-align: center;
				font-size: 36px;
				color: #333;
			}
		}
	}
</style>