<template>
	<div class="people">
        <Banner :banner-list="bannerList"/>
		<div class="main-content">
<!-- 			<div class="side-nav-bar">
				<ul class="side-nav">
                    <li v-for="(item, key) in peopleList" :key="key">{{key}}</li>
                </ul>
			</div>
 -->			<div class="face" v-for="(item, key) in peopleList" :key="key">
                <p class="initials">{{key}}</p>
                <div class="con">
                	<div class="content">
                		<div class="face-cell" v-for="people in item" :key="people.id">
                			<div class="avatar"><img :src="staticHost + people.faceImg" /></div>
                			<div class="info">
                				<p class="name">{{people.faceName}}</p>
                				<p class="intro">{{people.facePer}}</p>
                			</div>
                		</div>
                	</div>
                </div>
			</div>
		</div>
	</div>
</template>
<script>
    import peoplePcBanner from 'assets/img/peo-banner.png';
    import peopleMbBanner from 'assets/img/peo-mb-banner.png';
    import peoplePcBanner_en from 'assets/img/peo-banner_en.png';
    import peopleMbBanner_en from 'assets/img/peo-mb-banner_en.png';
    const prodUrl = require('constants/config.js').prodUrl;

    import Banner from 'components/Banner';

    export default {
        data() {
            return {
                bannerList: [{
                    pcBanner: peoplePcBanner,
                    mbBanner: peopleMbBanner,
                    link: '',
                    router: '/people',
                }],
                peopleList: {},
                staticHost: prodUrl.imgHost,
                reportList: 5
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {
            loadData() {
                this.axios.get(prodUrl.HOST + '/2050webOnline/onLineFace/queryFace', { params: {
                    Language: this.$store.state.lang
                }}).then(response => {
                    console.log(response.data);
                    let resData = response.data;
                    let data = {};
                    for ( let p in resData) {
                        if (resData[p].length) {
                            data[p] = resData[p]
                        }
                    }
                    console.log(data);
                    this.peopleList = data;
                })

                if (this.isZh) {
                    this.bannerList[0].pcBanner = peoplePcBanner;
                    this.bannerList[0].mbBanner = peopleMbBanner;
                } else {
                    this.bannerList[0].pcBanner = peoplePcBanner_en;
                    this.bannerList[0].mbBanner = peopleMbBanner_en;                    
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
	.people {
		.main-conten {
			padding-top: 65px;
		}
		.side-nav-bar {
			width: 1200px;
			position: relative;
			margin: 0 auto;
			.side-nav {
                position: absolute;
                padding: 0;
                margin: 0;
                right: -60px;
			    top: 145px;
                li {
                    border-radius: 100%;
                    font-size: 16px;
                    font-weight: bold;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    margin: 5px;
                    text-align: center;
                    transition: background-color .3s;
                    cursor: pointer;
                    &:hover, &.active {
                        background-color: #ffcc00;
                    }
                }
            }
		}
		.face {
            margin-top: 50px;
            .initials {
                background-color: #f6f6f6;
                text-align: center;
                font-size: 18px;
                padding: 3px 0;
            }
            .con {
            	background-color: #fff;
            	.content {
            		display: flex;
            		flex-wrap: wrap;
            		padding: 38px 0;
            		.face-cell {
            			width: 385px;
            			padding: 20px 10px;
            			display: flex;
            			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        			    margin-bottom: 25px;
					    margin-right: 22px;
					    &:nth-child(3n) {
					    	margin-right: 0;
					    }
            			.avatar {
            				border-radius: 100%;
                            overflow: hidden;
                            min-width: 130px;
                            min-height: 130px;
                            width: 130px;
                            height: 130px;
            				img {
	            				width: 130px;
	            				height: 130px;
            				}
            			}
            			.info {
            				flex-grow: 1;
            				padding-left: 12px;
            				.name {
            					font-size: 20px;
            					font-weight: bold;
            				}
            				.intro {
            					height: 96px;
            					overflow: hidden;
                                font-size: 14px;
                                margin-top: 10px;
            				}
            			}
            		}
            	}
            }
		}
	}
    @media (max-width: 768px) {
        .people .face .con .content .face-cell {
            margin: 0 10px 10px;
            width: 100%;
        }
        .people .face .con .content .face-cell:nth-child(3n) {
            margin-right: 10px;
        }
    }
</style>