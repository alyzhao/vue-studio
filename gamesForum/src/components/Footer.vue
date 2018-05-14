<template>
	<div class="footer">
		<div class="about">
			<div class="content">
				<p v-for="(item, index) in footerInfo.intro" :key="'intro' + index">{{item}}</p>
			</div>
		</div>
		<div class="main">
			<div class="clearfix">
				<div class="fr qr">
					<div style="margin-bottom: 15px;"><img src="../assets/img/logo_2050.png"></div>
					<div class="qr-img clearfix">
						<div class="fl"><img width="150" height="150" src="../assets/img/qr-codel.png"><p>{{footerInfo.weChat}}</p></div>
						<div class="fr"><img width="150" height="150" src="../assets/img/qr-coder.png"><p>{{footerInfo.weibo}}</p></div>		
					</div>
				</div>
				<div class="fl contact">
					<div class="ic">
						<div class="cell ">
							<p class="add">{{footerInfo.contactInfo.address.name}}</p>
						</div>
						<div class="cell">
							<p class="us">{{footerInfo.contactInfo.phones.name}}</p>
						</div>
						<div class="cell ">
							<p class="em">{{footerInfo.contactInfo.tech.name}}</p>
						</div>
					</div>
					<div class="dt">
						<div class="cell ">
							<p v-for="item in footerInfo.contactInfo.address.value">{{item}}</p>
							<p class="email">{{footerInfo.contactInfo.email.name}}</p>
							<p>{{footerInfo.contactInfo.email.value}}</p>
						</div>
						<div class="cell">
							<p v-for="item in footerInfo.contactInfo.phones.value">
								{{item}}
							</p>
						</div>
						<div class="cell ">
							<p>{{footerInfo.contactInfo.tech.value}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="min-main">
				<div class="min-l">
					<p>{{footerInfo.contactInfo.phones.name}}</p>
					<ul>
						<li v-for="item in footerInfo.contactInfo.phones.value">{{item}}</li>
						<li>
							<span class="tit">{{footerInfo.contactInfo.address.name}}:</span>
							<span>{{footerInfo.contactInfo.address.value[0] + footerInfo.contactInfo.address.value[1]}}</span>
						</li>
						<li><span class="tit">{{footerInfo.contactInfo.email.name}}:</span><span>{{footerInfo.contactInfo.email.value}}</span></li>
					</ul>
				</div>
				<div class="min-r">
					<div class="logo"><img src="../assets/img/logo_2050.png"></div>
					<div class="qr"><img width="150" height="150" src="../assets/img/qr-codel.png"><p>{{footerInfo.weChat}}</p></div>					
					<div class="qr"><img width="150" height="150" src="../assets/img/qr-coder.png"><p>{{footerInfo.weibo}}</p></div>	
				</div>
			</div>
			<div class="description">
				<p v-for="item in footerInfo.contactInfo.description">{{item}}</p>
			</div>
		</div>

		<p class="copyright">Copyright © 2050云栖 – 浙ICP备18008601号</p>
	</div>
</template>
<script>
	export default {
		props: ['footerInfo']
	}
</script>
<style lang="scss">
	.footer {
		background: #333;
		.about {
			width: 100%;
			background: #5c40b1 url('../assets/img/footer-bg.png') no-repeat center center;
			overflow: hidden;
			.content {
				margin-top: 25px;
			}
			p {
				text-align: left;
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
					text-align: left;
					font-size: 14px;
					color: #999;
					line-height: 25px;
				}
			}
			.qr-img {
				width: 350px;
				height: 150px;
				img {
					display: block;
				}
				.fl, .fr {
					p {
						text-align: center;
						color: #fff;
						padding: 5px 0;
						font-size: 14px;
					}
				}
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
						.email {
						    padding-bottom: 20px;
						    color: #fff;
						    font-size: 18px;
						    padding-top: 25px;
						}
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
		.min-r {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.logo {
				flex-grow: 1;
			    text-align: center;
			    margin-top: 1rem;
			    width: 100%;
			}
			.qr {
				flex-grow: 1;
				text-align: center;
				p {
					width: 100%;
					text-align: center;
					color: #fff;
					font-size: 14px;
				}
			}
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
							display: flex;
							padding-left: 20px;
							span.tit {
								width: 23%;
								& + span {
									width: 77%;
								}
							}
						}
					} 
				}
			}
		}
		.footer .about {
			height: auto;
			.content {
				padding: 0 15px;
			}
		}
		.footer .main .description {
			padding: 0 2rem;
		    text-align: left;
		    word-break: break-all;
		}
	}
</style>