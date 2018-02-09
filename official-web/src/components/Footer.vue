<template>
	<div class="footer">
		<div class="main">
			<p class="title">杭州数空科技</p>
			<div class="clearfix">
				<div class="col center">
					<header-link v-for="item in league"
						:name="item.name"
						:link="item.link"
						:target="'_blank'">
					</header-link>				
				</div>
				<div class="col">
					<div class="cell clearfix">
						<p class="tit">地址:</p>
						<ul class="list">
							<li v-for="item in address">{{item}}</li>
						</ul>
					</div>
					<div class="cell clearfix">
						<p class="tit">电话:</p>
						<ul class="list">
							<li v-for="item in phones">{{item}}</li>
						</ul>
					</div>
					<div class="cell clearfix">
						<p class="tit">微信:</p>
						<ul class="list">
							<li v-for="item in wechat">{{item}}</li>
						</ul>
					</div>
					<div class="cell clearfix">
						<p class="tit">邮箱:</p>
						<ul class="list">
							<li v-for="item in email">{{item}}</li>
						</ul>
					</div>
				</div>
				<div class="col center">
					<div class="qr"><img :src="qrCode"/></div>
					<p>扫码关注公众号</p>
				</div>
			</div>
			<p class="title cp">COPY  RIGHT©2016  数空科技有限公司  DATAWYC,ALL RIGHTS RESERVED浙ICP备16004637号-1</p>
		</div>
	</div>
</template>
<script>
	import HeaderLink from 'components/HeaderLink';

	export default {
		props: ['league', 'address', 'phones', 'wechat', 'email', 'qrCode'],
		components: {
			HeaderLink
		}
	}
</script>
<style lang="scss">
	.footer {
		background-color: #373d41;
		.main {
			width: 1200px;
			margin: 0 auto;
			.title {
				text-align: center;
				color: #bfbfbf;
				display: block;
				&.cp {
					font-size: 12px;
				}
			}
			.col {
				width: 33%;
				float: left;
				&.center {
					text-align: center;
				}
				.cell {
					padding: 10px 0;
				}
				.nav-link {
					float: none;
					color: #bfbfbf;
					&:hover {
						color: #bfbfbf
					}
				}
				.tit, .list {
					font-size: 14px;
					color: #bfbfbf;
					float: left;
					margin: 0;
					padding: 0;
				}
				.list {
					padding-left: 20px;
				}
				.qr {
					img{
						max-width: 150px;
					}
					& + p{
						color: #bfbfbf;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>