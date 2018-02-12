<template>
	<div class="schedule-cell">
		<div class="top clearfix">
			<div class="date fl">
				<span class="month">{{data.month}}</span>
				<span class="day">{{data.day}}</span>
				<span class="month-en">{{data.monthEn}}</span>
				<span class="day-en">{{data.dayEn}}</span>
			</div>
			<p class="con fl">{{data.name}}</p>
			<p class="time fl">{{data.time}}</p>
		</div>
		<div class="list">
			<div class="item">
				<div class="tit clearfix">
					<div class="index fl">01</div>
					<div class="topic fl">
						<div>
							<span class="tt">专   题:</span>
							<span class="pro">极客公开课Pro</span>
						</div>
						<div class="clearfix">
							<div class="overh product fl">
								<span class="tt">出品人:</span>
								<span>范凌  世界经济论坛全球青年领袖 | 特赞创始人</span>
							</div>
							<div class="overh add fl">
								<span>地点:</span>
								<span>云栖小镇国际会展中心001</span>
							</div>
						</div>
					</div>
				</div>

				<div class="content">
					<schedule-time-cell>
					</schedule-time-cell>
					<schedule-time-cell>
					</schedule-time-cell>
					<schedule-time-cell>
					</schedule-time-cell>
					<schedule-time-cell>
					</schedule-time-cell>
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
	import ScheduleTimeCell from './ScheduleTimeCell';

	export default {
		props: ['data'],
		components: {
			ScheduleTimeCell
		}
	}
</script>
<style lang="scss">
	.schedule-cell {
		width: 100%;
		margin-bottom: 35px;		
		.top {
			min-height: 155px;
			background: #fff url('../assets/img/triangle.png') no-repeat;
			border-left: 6px solid #5c409f;
			.date {
				height: 155px;
				width: 225px;
				position: relative;
				background: url('../assets/img/xsplit.png') no-repeat 50px 33px;
				margin-left: 140px;
				span {
					position: absolute;
					letter-spacing: -1px;
				}
				.day, .month{
					color: #5c409f;
					font-weight: bold;
					font-size: 86px;
					line-height: 75px;
					font-family: "dinmittelschrift";
				}
				.month {
					left: 40px;
					top: 13px;
				}
				.day {
					left: 118px;
					top: 70px;
				}
				.month-en {
					color: #5b5b5b;
					font-size: 18px;
					font-weight: 800;
					top: 100px;
					width: 110px;
					text-align: right;
					line-height: 20px;
				}
				.day-en {
					color: #5c409f;
					width: 110px;
					line-height: 20px;
					text-align: right;
					top: 120px;
				}
			}
			.con {
				color: #5c409f;
				line-height: 155px;
				text-align: center;
				font-size: 60px;
				font-weight: 600;
				width: 650px;
			}
			.time {
				font-family: "dinmittelschrift";
				color: #5c409f;
				line-height: 155px;
				text-align: left;
				font-size: 50px;
				font-weight: 400;
			}
		}
		.item {
			.tit {
				background-color: #5c409f;
				.index {
					width: 138px;
					text-align: center;
					line-height: 125px;
					color: #fff;
					font-size: 56px;
					font-weight: 400;
					font-family: "dinmittelschrift";
				}
				.topic {
					color: #fff;
					font-size: 24px;
					margin-top: 22px;
					.tt {
						display: inline-block;
						min-width: 75px;
						white-space: pre;
					}
					.product {
						width: 830px;
						padding-right: 15px;
					}
					.add {
						width: 400px;
					}
					.pro {
						font-size: 28px;
					}
				}		
			}

			.content {
				background-color: #fff;
				padding: 20px 45px;
			}
		}
	}	
</style>