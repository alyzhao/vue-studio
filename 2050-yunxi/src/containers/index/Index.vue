<template>
	<div>
		<Banner />
		<div class="main-content">
			<div class="content">
				<div class="cell ts">
					<p class="tit">探索</p>
					<div class="sub-tit clearfix">
						<p class="tt fl">一句话介绍</p>
						<a class="bt fr" href="" target="_blank">我想成为出品人</a>
					</div>
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
				<div class="cell tj">
					<p class="tit">团聚</p>
					<div class="sub-tit clearfix">
						<p class="tt fl">全世界年轻人因科技而团聚</p>
						<a class="bt fr" href="" target="_blank">我想成为召集人</a>
					</div>
					<div class="c-in">
						<swiper :options="tjSwiperOption">
							<swiper-slide v-for="item in reuniteList">
								<div class="tjslide">
									<div class="info">
										<p class="ra">{{item.name}}</p>
										<p class="peo">召集人</p>
										<p class="team">{{item.introduce}}</p>
									</div>
									<div class="tjimg">
										<img width="285" :src="item.photo">
									</div>
									<div class="details">
										<p>{{item.details}}</p>
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
						<div v-if="burstList.length > 0" class="ptl">
							<div class="pttop">
								<div class="tplf">
									<div class="smc"><img height="180" :src="burstList[0].image"></div>
									<div class="smc" style="background-color: #ffcc00">{{burstList[0].name}}</div>
									<div class="cykj">{{burstList[1].name}}</div>
								</div>
								<div class="tprg">
									<div class="bgc"><img :src="burstList[1].image"></div>
								</div>
							</div>
							<div class="ptbt">
								<div class="smc"><img :src="burstList[2].image"></div>
								<div class="mgc">{{burstList[2].name}}</div>
								<div class="smc pp">{{burstList[3].name}}</div>
							</div>
						</div>
						<div v-if="burstList.length > 0" class="ptr">
							<div class="mgc">{{burstList[4].name}}</div>
							<div class="btc">
								<div>
									<div class="smc"><img :src="burstList[3].image"></div>
								</div>
								<div class="middle-img">
									<img :src="burstList[4].image">
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="cell zy">
					<p class="tit">志愿</p>
					<div class="sub-tit clearfix">
						<p class="tt fl">"志愿"二字凝聚了2050最独特的魅力</p>
						<a class="bt fr" href="" target="_blank">我想成为志愿者</a>
					</div>
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
					autoplay: true,
					slidesPerView: 4,
					spaceBetween: 20
				},
				zySwiperOption: {
					autoplay: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets'
					}
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
	.main-content {
		background: url('/src/assets/img/bg.png') no-repeat;		
	}
	.content {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.cell {
			margin-bottom: 180px;
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
				margin-top: 60px;
				width: 100%;
				.items {
					float: left;
					width: 375px;
					height: 225px;
					margin: 0 37px 37px 0;
					background-color: #42a1ff;
					padding: 15px 20px;
					color: #5c40b2;
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
				position: relative;
				.details {
					box-sizing: border-box;
					position: absolute;
					top: 0;
					padding: 35px 17px;
					overflow: hidden;
					width: 100%;
					height: 100%;
					background: #2d1c5e;
					background: linear-gradient(0deg, rgba(65, 39, 144, .7), #201444);
					transition: opacity .2s linear;
					color: #fff;
					line-height: 28px;
					visibility: hidden;
					opacity: 0;
					p {
						height: 100%;
						overflow: hidden;
					}
				}
				&:hover .details{
					visibility: visible;
					opacity: 1;
				}
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
						margin-bottom: 15px;
						height: 85px;
						overflow: hidden;
					}
					.rab {
						margin: 5px 0 15px;
					}
					.team {
						font-size: 26px;
						margin-top: 47px;
					}
				}
				.tjimg {
					overflow: hidden;
					height: 300px;
					img {
						max-height: 300px;
					}
				}
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
							.middle-img img{
								width: 210px;
								height: 370px;
							}
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
						img {
							width: 180px;
							height: 180px;
						}
					}
					.bgc {
						width: 410px;
						height: 370px;
						img {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
			&.zy {
				.zyjg {
					font-weight: 400;
					font-size: 26px;
					color: #4a15c5;
				    margin-top: 70px;
				}
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
					background: #fff;
					opacity: 1;
					transition: all .2s linear;
					&.swiper-pagination-bullet-active {
						width: 60px;
						background: #fff;
						border-radius: 5px;
					}
				}
			}
		}

	}
</style>