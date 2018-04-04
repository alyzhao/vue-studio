<template>
	<div class="people">
        <Banner :banner-list="bannerList"/>
		<div class="main-content">
			<div class="side-nav-bar">
				<ul class="side-nav">
                    <li class="active">A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </ul>
			</div>
			<div class="face">
                <p class="initials">A</p>				
                <div class="con">
                	<div class="content">
                		<div class="face-cell" v-for="n in reportList" :key="n">
                			<div class="avatar"><img src="../../assets/img/test-report-header.png" /></div>
                			<div class="info">
                				<p class="name">唐文斌</p>
                				<p class="intro">GO 全称 Top Geeks’ Organization，是极客邦科技旗下一个聚集技术领导者的组织。“大鹏一日同风起，扶摇直上九万里”</p>
                			</div>
                		</div>
                	</div>
                </div>
			</div>

			<div class="face">
                <p class="initials">A</p>				
                <div class="con">
                	<div class="content">
                		<div class="face-cell" v-for="n in reportList" :key="n">
                			<div class="avatar"><img src="../../assets/img/test-report-header.png" /></div>
                			<div class="info">
                				<p class="name">唐文斌</p>
                				<p class="intro">GO 全称 Top Geeks’ Organization，是极客邦科技旗下一个聚集技术领导者的组织。“大鹏一日同风起，扶摇直上九万里”</p>
                			</div>
                		</div>
                	</div>
                </div>
			</div>

		</div>
	</div>
</template>
<script>
    import volunteerPcBanner from 'assets/img/zy-banner.png';
    import volunteerMbBanner from 'assets/img/zy-mb-banner.png';

    import Banner from 'components/Banner';

    export default {
        data() {
            return {
                bannerList: [{
                    pcBanner: volunteerPcBanner,
                    mbBanner: volunteerMbBanner,
                    link: 'http://tgonetworks.mikecrm.com/BjHVvZo',
                    router: ''
                }],
                reportList: 5
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
            				flex-grow: 1;
            				img {
	            				width: 130px;
	            				height: 130px;
            				}
            			}
            			.info {
            				flex-grow: 1;
            				padding-left: 12px;
            				.name {
            					font-size: 24px;
            					font-weight: bold;
            				}
            				.intro {
            					height: 96px;
            					overflow: hidden;
            				}
            			}
            		}
            	}
            }
		}
	}
</style>