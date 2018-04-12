<template>
	<div class="media-reports">
        <Banner :banner-list="bannerList"/>
		<div class="main-content">
			<div class="content">
				<div v-for="item in reports" class="report clearfix" :key="item.id">
					<div class="report-img">
						<a :href="item.newsChaining" target="_blank" title=""><img :src="staticHost + item.newsImg"></a>
					</div>
					<div class="report-info">
						<div class="title">
							<a :href="item.newsChaining" target="_blank" title="">{{item.newsName}}</a>
							<p class="intro">{{item.newsWord}}</p>
						</div>
						<div class="source">
							<span>来源: {{item.newsSource}}</span>
							<span class="date">{{item.newsDate}}</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
    import volunteerPcBanner from 'assets/img/cd-banner.png';
    import volunteerMbBanner from 'assets/img/cd-mb-banner.png';
    const prodUrl = require('constants/config.js').prodUrl;

    import Banner from 'components/Banner';

    export default {
        data() {
            return {
                bannerList: [{
                    pcBanner: volunteerPcBanner,
                    mbBanner: volunteerMbBanner,
                    link: '',
                    router: '/reports'
                }],
                staticHost: prodUrl.imgHost,
                reports: []
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.loadData();            	
            })        	
        },
        methods: {
        	loadData() {
        		this.axios.get(prodUrl.HOST + '/2050webOnline/onLineNews/queryNewsList', {params: {
                    Language: this.$store.state.lang
                }}).then(response => {
                	let resData = response.data;
                	console.log(resData)
                	this.reports = resData;
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
<style lang="scss">
	.media-reports {
		color: #333;
		.banner-wrap {
			margin-top: 0;
		}
		.report {
			padding: 25px 0;
			border-bottom: 1px solid #eaeaea;
		}
		.report-img {
			float: left;
			width: 25%;
			img {
				width: 100%;
				display: block;			
				height: 190px;
			}
		}
		.report-info {
			float: left;
			width: 75%;
			padding-left: 50px;
			.title {
				height: 145px;
				overflow: hidden;
				a {
					font-size: 24px;
					transition: color .15s ease-in-out;
					&:hover {
						color: #ffc600;
					}
				}
				.intro {
					margin-top: 10px;
				}
			}
		}
		.source {
			margin-top: 10px;
			.date {
				margin-left: 50px;
			}
		}
	}
	@media (max-width: 768px) {
		.media-reports .content {
			padding: 0 25px;
		}
		.media-reports .report-info {
			padding-left: 0;
			margin-top: 15px;
		}
		.media-reports .report-img, .media-reports .report-info {
			width: 100%;
		}
		.media-reports .report-info .title a {
			font-size: 18px;
		}
		.media-reports .report-info .title {
			height: auto;
		}
	}
</style>