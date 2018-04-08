<template>
	<div>
		<Banner :banner-list="activityBannerList"/>
		<ul class="containers">
			<li v-for="item in runList" :key="item.id">
			<div class="item">

				<img :src="staticHost + item.actImg" class="pic">

				<div class="neirong">
					<p class="title">{{item.actName}}</p>
					<div class="xian"></div>
					<p class="miaoshu">{{item.actWord}}</p>
					<p class="time">{{item.actTimeDate}}</p>
					<P class="hour">{{item.actTime}}</p>
				</div>		
				<!-- <button class="btn">立即参加</button> -->
			</div>
			<div class="dixian"></div>
			</li>	
		</ul>
	</div>
</template>
<script>
 	const prodUrl = require('constants/config.js').prodUrl;
    import Banner from 'components/Banner';

    import activityPcBanner from 'assets/img/bf-banner.png';
    import activityMbBanner from 'assets/img/bf-mb-banner.png';
    import qs from 'qs';

	export default {
		data() {
			return {
				runList: [],
				activityBannerList: [{
                    pcBanner: activityPcBanner,
                    mbBanner: activityMbBanner,
                    link: '',
                    router: '/activity'				
				}],
				staticHost: prodUrl.imgHost
			}

		},
		mounted: function () {
			this.$nextTick(function () {
                this.loadData();
			})
		},
		methods: {
			loadData() {
				this.axios.post(prodUrl.HOST + '/2050webOnline/onLineActivity/queryActivityList', qs.stringify({
					Language: this.$store.state.lang
				})).then(response => {
					let resData = response.data;

					this.runList = resData.map((v,i)=>{
			
						let timeArr=v.actTime.split(" ");
						v.actTimeDate=timeArr[0];
						v.actTime=timeArr[1];	
						return v;
					});

				})
			}
		},
		computed: {
            isZh() {
                return this.$store.state.lang == 'zh';
            },			
		},
        watch: {
            isZh() {
                this.loadData();
            }
        },		
		components: {
			Banner
		}
	}

</script>
<style lang="scss" scoped>
	.banner-wrap {
		margin-top: 0;
	}
	.bannr{
		width: 100%;
		height: 300px;
		background-color: #FFC600;
	}
	.containers{
		width: 100%;
		height: 100%;
		margin-top: 60px;
		padding: 0;
		text-align: center;
	}
	.item{
		display: flex;
		flex-direction: row;
		width: 90%;
		margin: 0 auto;
		align-items:center;
	}
	.neirong{
		text-align: left;
		margin-left: 2%; 
		margin-right:2%;
		width: 83%;
		height: 120px;
	}
	.pic{
		width: 120px;
		height: 120px;
	}
	.xian{
		width: 30px;
		height: 2px;
		background-color: #5c40b1;
		margin-bottom: 7px;
		margin-top:10px;
	}
	p{
		margin-bottom: 7px;
		font-size: 14px;
	}
	.title{
		line-height: 1em;
		font-size: 17px;
		font-weight: bold;
		color: #333;
	}
	.miaoshu{
		height:60px;
		overflow: hidden;
		color: #555;
		text-align: justify;		
	}
	
	.time{
		margin-top:10px;
		margin-bottom: -7px;
		color: #555;		
	}
	.btn{
		
		background-color: #FFC600;
		outline: none;
		height: 50px;
		border: none;
		width: 160px;
	}
	.dixian{
		width:90%;
		height:1px;
		background-color:#DDDDDD;
		margin:0 auto;
		margin-top: 20px;
		margin-bottom: 30px;
	}

	.hour{
		color: #555;		
		margin-left:23px;
	}
	.time , .hour{
		display:inline;
	}
	@media screen and (max-width: 768px){
		.pic{
			width: 9rem;
			height: 9rem;
		}
		.title{
			font-size:0.9rem;
		}
		.btn{
			display:none;
			background-color:#fff;
		}
		.neirong{
			margin-left: 5%;
			margin-right:0%; 
		}
		p{
			margin-bottom: 0;
			font-size: 0.85rem;
		}
		.xian{
			width: 2rem;
			height: 0.15rem;
			margin-bottom: 0.2rem;
			margin-top: 0.8rem;
		}
		.miaoshu{
			height: 4rem;
		}
		.time , .hour{
			display: block;
		}
		.time{
			line-height:0.7;
		}
		.hour{
			margin-left: 0;
			margin-top: 0.9rem;
		}
	}

</style>