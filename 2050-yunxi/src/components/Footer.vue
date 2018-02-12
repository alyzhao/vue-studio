<template>
	<div class="footer">
		<div class="main clearfix">
			<div class="fl gt">
				<p>掌握云栖2050</p> 
				<p>最新消息</p>
			</div>
			<div class="fl qr">
				<img src="../assets/img/qr.png" width="120">
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
		background: #fff url('../assets/img/bottom.png') no-repeat;
		.main {
			width: 1380px;
			margin: 0 auto;
			padding: 65px 0;
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
						width: 33.33%
					}				
				}
				.ic {
					border-bottom: 1px solid #535353;
					p {
						padding: 85px 0 10px;  
					}
					.add {
						background: url('../assets/img/ic2.png') no-repeat 10px 15px;
					}
					.us {
						background: url('../assets/img/ic3.png') no-repeat 10px 15px;                        
					}
					.em {
						background: url('../assets/img/ic1.png') no-repeat 10px 15px;                  
					}
				}
				.dt {
					align-items: flex-start;
					padding-top: 20px;
				}
			}

		}
	}
</style>