<template>
	<div>
		<Banner />
		<div class="main-content">
			<div class="content">
				<!-- 探索 -->
				<div class="cell ts clearfix">
					<p class="tit"><a href="http://egonetworks.mikecrm.com/BjHVvZo" target="_blank"><img src="../../assets/img/tit-xs.png"></a></p>
					<p class="sub-tit">
						科学与技术、艺术与设计，近百场主题论坛，期待你全身心的参与，激发思考与创意
					</p>
					<div class="c-in clearfix">
						<div class="items" v-for="item in forumList" :key="item.id">
							<p class="ctt"><a href="" :title="item.forumName">{{item.forumName}}</a></p>
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
					<div class="more"><a target="_blank" v-show="forumList.length>6">查看更多</a></div>
				</div>
			</div>

			<!-- 团聚 -->
			<div class="cell tj clearfix">
				<p class="tit"><a href=" http://cn.mikecrm.com/6hWZ5TL" target="_blank"><img src="../../assets/img/tit-tj.png"></a></p>
				<p class="sub-tit">世界各地的青年人在2050握手团聚，老友重逢，相遇新知，给彼此灵感，给未来答案</p>
				<div class="c-in">
					<swiper :options="tjSwiperOption">
						<!-- v-for="item in reuniteList" -->
						<swiper-slide v-for="item in groupList">
							<div class="tjslide">
								<div class="tj-con clearfix">
									<div class="info">
										<p class="ra"><a href="" :title="item.groupName">{{item.groupName}}</a></p>
										<p class="peo">召集人</p>
										<p class="team overh"><a href="" :title="item.groupLead">{{item.groupLead}}</a></p>
										<p class="split"><span></span></p>
										<div class="intro">
											<p>{{item.groupWord}}</p>
										</div>
									</div>
									<div class="tj-img">
										<img :src="staticHost + item.groupImg1">
									</div>
								</div>
							</div>								
						</swiper-slide>
					
						<div class="swiper-pagination-tj" slot="pagination"></div>
						<!--<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>-->
						<!--<div class="swiper-button-next swiper-button-black" slot="button-next"></div>						-->
					</swiper>
				</div>
				<div class="more"><a target="_blank">查看更多</a></div>
			</div>

			<div class="content">

				<!-- 迸发 -->
				<div class="cell bf clearfix">
					<p class="tit"><a target="_blank"><img src="../../assets/img/tit-bf.png"></a></p>
					<p class="sub-tit">
						音乐、影像、晨跑、露营……这里没有旁观者，2050的狂欢属于每一位年青人
					</p>	
					<div class="c-in pt">
						<div class="item" v-for="item in activityList" :key="item.id">
							<div class="bg"><img :src="staticHost + item.actImg"></div>
							<div class="con"><a href="" target="_blank">{{item.actName}}</a></div>
						</div>
						<div class="item">
							<div class="bg"></div>														
							<div class="bmore"><a target="_blank">更多精彩 <i class="fa fa-angle-right"></i></a></div>
						</div>																							
					</div>
				</div>
			</div>

			<div class="cell zy clearfix">
				<div class="content">
					<p class="tit"><a target="_blank"><img src="../../assets/img/tit-zy.png"></a></p>
					<p class="sub-tit">
						感谢所有的志愿机构与志愿者，你们用年青人的方式定义了“志愿“，让2050与众不同
					</p>
					<p class="zy-tit">志愿发起人</p>
					<swiper :options="zypSwiperOption">
						<swiper-slide v-for="item in volunteerList" :key="item.id">
							<div class="zyp-wrap">
								<div class="zyp-slide">
									<div class="zyp-img"><a href="" target="_blank"><img :src="staticHost + item.votImg"></a></div>
									<a href="" class="intro" :title="item.votWord">
										<p class="vcon">{{item.votWord}}</p>
									</a>
								</div>
								<p class="vna">{{item.votName}}</p>
							</div>
						</swiper-slide>
					</swiper>
					<div class="more"><a target="_blank">查看更多</a></div>
				</div>
			</div>

			<div class="content">
				<div class="cell jg clearfix">
					<p class="zyjg">志愿发起机构</p>
					<div class="c-in">
						<swiper :options="zySwiperOption">
							<!-- <swiper-slide v-for="(item, index) in volunteerOrgList" :key="index">
								<div class="zy-slide">
									<div class="mark" v-for="vol in item" :key="vol.id">
										<img :src="vol.logo">
									</div>
								</div>
							</swiper-slide> -->
							<swiper-slide>
								<div class="zy-slide">
									<div class="mark">
										<a href=""><img src="../../assets/img/2.png"></a>
									</div>
									<div class="mark">
										<a href=""><img src="../../assets/img/3.png"></a>
									</div>
									<div class="mark">
										<a href=""><img src="../../assets/img/4.png"></a>
									</div>
									<div class="mark">
										<a href=""><img src="../../assets/img/7.png"></a>
									</div>
									<div class="mark">
										<a href=""><img src="../../assets/img/8.png"></a>
									</div>
									<div class="mark">
										<a href=""><img src="../../assets/img/9.png"></a>
									</div>
									<div class="mark">
										<a href=""><img src="../../assets/img/10.png"></a>
									</div>
								</div>								
							</swiper-slide>										
							<div class="swiper-pagination" slot="pagination"></div>
						</swiper>
					</div>					
					<div class="more"><a target="_blank">查看更多</a></div>					
				</div>
			</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Banner from 'components/Banner';
	// import { prodUrl } from 'constants/config.js';

	const prodUrl = require('constants/config.js').prodUrl;

	export default {
		data() {
			return {
				tjSwiperOption: {
					autoplay: true,
					// spaceBetween: 20
					pagination: {
						el: '.swiper-pagination-tj',
						clickable: true,
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
				forumList: [],
				groupList: [],
				activityList: [],
				volunteerList: [],
				volunteerOrgList: [],
				staticHost: prodUrl.imgHost
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				this.axios.get(prodUrl.HOST + '/2050webOnline/onLineFroum/queryFroum').then(response => {
					let resData = response.data;
					this.forumList = resData;
				})

				this.axios.get(prodUrl.HOST + '/2050webOnline/onLineGroup/queryGroup').then(response => {
					let resData = response.data;
					this.groupList = resData;
				})

				this.axios.get(prodUrl.HOST + '/2050webOnline/onLineActivity/queryActivity').then(response => {
					this.activityList = response.data;
				})

				this.axios.get(prodUrl.HOST + '/2050webOnline/onLinevot/queryVot').then(response => {
					let resData = response.data;

					this.volunteerList = resData;

					// this.volunteerList =[{
					// 	id: 1,
					// 	votImg: 'Activity20180228193913éè²åé£æ ¼-3.jpg',
					// 	votName: 'FUCK',
					// 	votWord: 'You are running Vue in development mode.Make sure to turn on production mode when deploying for production.See more tips at https://vuejs.org/guide/deployment.htmlclient?1a6c:77 [WDS] Hot Module Replacement enabled.'
					// }, {
					// 	id: 2,
					// 	votImg: 'Activity20180228193913éè²åé£æ ¼-3.jpg',
					// 	votName: 'FUCK',
					// 	votWord: 'You are running Vue in development mode.Make sure to turn on production mode when deploying for production.See more tips at https://vuejs.org/guide/deployment.htmlclient?1a6c:77 [WDS] Hot Module Replacement enabled.'
					// }, {
					// 	id: 3,
					// 	votImg: 'Activity20180228193913éè²åé£æ ¼-3.jpg',
					// 	votName: 'FUCK',
					// 	votWord: 'You are running Vue in development mode.Make sure to turn on production mode when deploying for production.See more tips at https://vuejs.org/guide/deployment.htmlclient?1a6c:77 [WDS] Hot Module Replacement enabled.'
					// }, {
					// 	id: 4,
					// 	votImg: 'Activity20180228193913éè²åé£æ ¼-3.jpg',
					// 	votName: 'FUCK',
					// 	votWord: 'You are running Vue in development mode.Make sure to turn on production mode when deploying for production.See more tips at https://vuejs.org/guide/deployment.htmlclient?1a6c:77 [WDS] Hot Module Replacement enabled.'
					// }, {
					// 	id: 5,
					// 	votImg: 'Activity20180228193913éè²åé£æ ¼-3.jpg',
					// 	votName: 'FUCK',
					// 	votWord: 'You are running Vue in development mode.Make sure to turn on production mode when deploying for production.See more tips at https://vuejs.org/guide/deployment.htmlclient?1a6c:77 [WDS] Hot Module Replacement enabled.'
					// }, {
					// 	id: 6,
					// 	votImg: 'Activity20180228193913éè²åé£æ ¼-3.jpg',
					// 	votName: 'FUCK',
					// 	votWord: 'You are running Vue in development mode.Make sure to turn on production mode when deploying for production.See more tips at https://vuejs.org/guide/deployment.htmlclient?1a6c:77 [WDS] Hot Module Replacement enabled.'
					// }]
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
		&.ts {
			.more {
				margin-top: 30px;
			}
		}
		.tit {
			margin-top: 80px;			
			height: 95px;
			text-align: center;
		}
		.sub-tit {
			color: #333;
			font-size: 26px;
			text-align: center;
			margin-top: 45px;
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
			margin-top: 80px;
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
		.more {
			margin-top: 10px;
			margin-bottom: 90px;			
			a {
				display: block;
				margin: 0 auto;
				width: 400px;
				line-height: 70px;
				background: #5c40b1;
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
			background: #ededed url('../../assets/img/tj-bg.png') no-repeat center bottom;
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
					margin-top: 5px;
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
						height: 148px;
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
			margin-top: 83px;
			.swiper-pagination-bullet {
				width: 15px;
				height: 15px;
				background: #000;
				border-radius: 0;
				opacity: 1;
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
			top: 110px;
		}
		.swiper-button-prev {
			left: 0;
		}
		.swiper-button-next {
			right: 0;
		}
		&.tj .more{
			margin-top: 110px;
		    margin-bottom: 63px;
		}
		&.xs {
			.c-in {
				height: 588px;
				background-color: #ffcc00;
			}
		}
		&.bf {
			margin-bottom: 80px;
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
						background-color: #333;
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
						}
					}
					.bmore {
					    width: 190px;
					    height: 190px;
						text-align: center;
						position: relative;
						a {
							color: #ffcc00;
							font-size: 30px;
							font-weight: 600;
							line-height: 190px;
							i {
								margin-left: 5px;
								display: inline-block;
								width: 30px;
								height: 30px;
								border-radius: 100%;
								border: 1px solid #ffcc00;
								line-height: 26px;
							}
						}
					}
				}
			}
		}
		&.zy {
			background: #272336 url('../../assets/img/zy-bg.png') no-repeat;
			.sub-tit {
				color: #fff;
			}
			.zy-tit {
				color: #fff;
				font-size: 36px;
				text-align: center;
				margin: 75px 0 58px;
			}
			.zyp-wrap {
				width: 230px;
				height: 301px;				
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				.vna {
					width: 100%;
					color: #fff;
					text-align: center;
					font-size: 20px;
				}
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
				position: relative;
				&:hover {
					transform: scale(1.25);
					.intro {
						visibility: visible;
						opacity: 1;
					}
				}
				.zyp-img, img {
					width: 100%;
					height: 100%;
				}
				.intro {
					background-color: #fece00;
					background-color: rgba(255, 204, 0, .8);
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					opacity: 0;
					visibility: hidden;
					transition: all .3s;
					p {
						text-align: center;
						padding: 0 30px;
						color: #333;
					}
					.vna {
						font-size: 22px;
						margin-top: 30px;
					}
					.vcon {
						height: 72px;
						overflow: hidden;
						margin-top: 50px;
					}
				}
			}
			.more {
				margin-top: 88px;
				a {
					background-color: #fece00;
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
						height: 65px;
						max-width: 225px;
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
				width: 15px;
				height: 15px;
				background: #000;
				border-radius: 0;
				opacity: 1;
				&.swiper-pagination-bullet-active {
					background-color: #ffcc00;
				}
			}
			.zyjg {
				text-align: center;
				font-size: 36px;
				color: #333;
				margin-top: 65px;
			}
			.more {
				margin-top: 105px;
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
				&:nth-child(3n) {
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
		.swiper-button-prev, .swiper-button-next {
			display: none;
		}
	}
</style>