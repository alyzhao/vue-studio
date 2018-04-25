<template>
	<div class="explore">
		<Banner :banner-list="exploreBannerList" />
		<div class="content">
			<div class="explore-cell" v-for="item in exploreList" :key="item.id">
				<div class="logo-wrap">
					<div class="logo"><img :src="staticImg + item.companyImg"></div>
				</div>
				<div class="company">
					<p class="name">{{item.companyName}}</p>
					<p class="split"><span></span></p>
				</div>
				<div class="intro">
					{{item.companyWord}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import explorePcBanner from 'assets/img/explore-banner-pc.png';
    import explorePcBanner_en from 'assets/img/explore-banner-pc_en.png';
    import exploreMbBanner from 'assets/img/explore-banner-mb.png';
    import exploreMbBanner_en from 'assets/img/explore-banner-mb_en.png';

    import qs from 'qs';

    const prodUrl = require('constants/config').prodUrl;
    import Banner from 'components/Banner';
	
	export default {
		data() {
			return {
				exploreBannerList: [{
	                mbBanner: exploreMbBanner,
	                router: '/explore',
	                pcBanner: explorePcBanner				
				}],
                staticImg: prodUrl.imgHost,				
				exploreList: []
			}
		},
        mounted() {
            this.$nextTick(function () {
                this.loadData();            	
            })        	
        },
        methods: {
        	loadData() {
        		this.axios.post(prodUrl.HOST + '/2050webOnline/onLineExploration/queryExp', qs.stringify({
        			Language: this.$store.state.lang
        		})).then(response => {
        			this.exploreList = response.data;
        		})

                if (this.isZh) {
                    this.exploreBannerList[0].pcBanner = explorePcBanner;
                    this.exploreBannerList[0].mbBanner = exploreMbBanner;
                } else {
                    this.exploreBannerList[0].pcBanner = explorePcBanner_en;
                    this.exploreBannerList[0].mbBanner = exploreMbBanner_en;                    
                }

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
<style lang="scss">
	.explore {
		.content {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.explore-cell {
				width: 33.33%;
				padding: 2%;
				.logo-wrap {
					display: flex;
					justify-content: center;
					.logo {
						width: 60%;
						height: 211px;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							max-width: 100%;
							max-height: 211px;
							display: block;
						}
					}
				}
				.company {
					margin-top: 15px;
					.name {
						text-align: center;
						font-size: 18px;
						font-weight: bold;
						color: #333;
					}
					.split {
						text-align: center;
						line-height: 10px;
						span {
							display: inline-block;
							width: 45px;
							height: 4px;
							background-color: #5547a6;
						}
					}
				}
				.intro {
					color: #333;
					margin-top: 20px;
					overflow: hidden;
				}
			}
			@media (max-width: 768px) {
				.explore-cell {
					width: 100%;
					padding: 5%;
				}
			}
		}
	}
</style>