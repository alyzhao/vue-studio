<template>
	<div class="footer">
		<div class="main clearfix">
			<div class="fl qr">
				<div style="margin-bottom: 15px;"><img src="../assets/img/logo_2050.png"></div>
				<div class="qr-img"></div>
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
			padding: 65px 0;
			.qr-img {
				width: 350px;
				height: 150px;
				background: url('../assets/img/qr.png') no-repeat;
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
				width: 690px;
				margin-left: 150px;
				.ic, .dt {
					display: flex;
					align-items: center;
					font-size: 14px;
					font-weight: 400;
					.cell {
						width: 33.33%;
						margin-bottom: 0;
					}				
				}
				.ic {
					p {
						padding-bottom: 55px;
						color: #fff;
						font-size: 20px;
					}
				}
				.dt {
					align-items: flex-start;
					color: #fff;
					font-size: 16px;
				}
			}
		}
	}
</style>