<template>
	<div class="time-tb">
		<div class="tm">09:00</div>
		<div class="na">Apollo 开放平台的成长之路</div>
		<div class="dt">
			<span class="reporter">张鹏</span>
			<span class="add">极客公园</span>
			<span class="gim">创始人 & 总裁</span>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang="scss">
	.time-tb {
		color: #5c409f;
		line-height: 40px;
		float: left;
		padding: 22px 0 22px 95px;
		width: 50%;
		.tm {
			font-family: 'dinmittelschrift';
			font-size: 40px;
		}
		.na {
			font-size: 26px;
			font-weight: 600;
		}
		.dt {
			font-size: 22px;
			font-weight: 200;
			.reporter {
				font-weight: 600;
			}
			.add, .gim {
				margin-left: 17px;
			}
		}
	}
</style>