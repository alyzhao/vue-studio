<template>
	<div class="footer">
		<div class="main clearfix">
			<div class="fr qr">
				<div style="margin-bottom: 15px;"><img src="../assets/img/logo_2050.png"></div>
				<div class="qr-img clearfix">
					<!-- <div class="fl"><img src="../assets/img/qr-code.png"></div>
					<div class="fr"><img src="../assets/img/qr-code.png"></div> -->		
				</div>
			</div>
			<div class="fl contact">
				<div class="ic">
					<div class="cell">
						<p class="add">联系地址</p>
					</div>
					<div class="cell">
						<p class="us">联系我们</p>
					</div>
					<div class="cell">
						<p class="em">邮箱地址</p>
					</div>
				</div>
				<div class="dt">
					<div class="cell">
						<p v-for="item in address">{{item}}</p>
					</div>
					<div class="cell">
						<p v-for="item in phones">
							{{item.name}}: {{item.value}}
						</p>
					</div>
					<div class="cell">
						<p v-for="item in email">{{item}}</p>
					</div>
				</div>
			</div>
		</div>
		<p class="copyright">Copyright © 2050云栖 – 鄂ICP备16005435号-3</p>
	</div>
</template>
<script>
	export default {
		props: ['address', 'phones', 'email']
	}
</script>
<style lang="scss">
	.footer {
		background: #333;
		.main {
			width: 1200px;
			margin: 0 auto;
			padding-top: 65px;
			.qr-img {
				width: 350px;
				height: 150px;

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
		}
		.copyright {
			text-align: center;
			font-size: 14px;
			color: #666;
			padding: 30px 0 20px;
		}
	}
	@media (max-width: 1200px) {
		.footer .main {
			width: 100%;
			.fr, .fl {
				display: none;
			}
		}
	}
</style>