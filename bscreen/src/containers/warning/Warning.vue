<template>
	<div class="main warning" :class="{intopology: intopology}">
		<div class="title">
			<img style="margin-left: 20px;" src="../../assets/img/logo-cj.png">
			<div class="top-tab">
				<div class="tab-cell" :class="{active: netNodeChecked == 0}" @click="netNodeChecked = 0">节点一</div>
				<div class="tab-cell" :class="{active: netNodeChecked == 1}" @click="netNodeChecked = 1">节点二</div>
			</div>
		</div>
		<div class="main-content clearfix">
			<div class="left">
				<!--
				<div class="flex-center left-tab">
					<div class="tab active">节点一</div>
					<div class="tab">节点二</div>
				</div>
				-->
				<div class="warning-tit">预警监控</div>
				<SubTitle :tab-title="internetTab.title" :tab-list="internetTab.tabList" :on-active-default="true"/>
				<SubTitle :tab-title="goverTab.title" :tab-list="goverTab.tabList" :on-active-default="false"/>
				<SubTitle :tab-title="privateTab.title" :tab-list="privateTab.tabList" :on-active-default="false"/>
			</div>
			<div class="right">
				<div class="sub-title">ESC预警详情</div>
				<div class="flex-center warning-view" style="margin-top: 12px;">
					<span>今日告警总数 : <span class="ob big">4</span></span>
					<span>预警事件 : <span class="ob">库存不足</span></span>
				</div>
				<div class="warning-view" style="margin-top: 24px;">涉及实例 : <span class="ob big">4</span><span class="ob">(实例1， 实例2， 实例3， 实例4)</span></div>
				<Split :height="'1px'" :color="'#z20265b'" style="margin-top: 24px"/>				
				<div class="c-title" style="margin-top: 24px;">历史预警数量</div>
				<div class="charts" ref="charts">
					<div class="charts-dom"></div>
					<div class="charts-dom"></div>
					<div class="charts-dom"></div>
					<div class="charts-dom"></div>
				</div>
			</div>
		</div>		
	</div>
</template>
<script>
	import SubTitle from 'components/SubTitle';
	import Split from 'components/Split';
	import echarts from 'echarts';
	import cloneDeep from 'lodash/cloneDeep';

	import { warningOption } from 'constants/charts.js';

	export default {
		props: {
			intopology: {
				type: Boolean,
				default: false
			},
			warningId: {
				type: String
			},
			checkedNode: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				internetTab: {
					title: '互联网',
					tabList: [{
						name: '1',
						value: 'ECS'
					}, {
						name: '2',
						value: 'RDS'
					}, {
						name: '3',
						value: 'OSS'
					}, {
						name: '4',
						value: 'SLB'
					}]
				},
				goverTab: {
					title: '电子政务外网',
					tabList: [{
						name: '1',
						value: 'ECS'
					}, {
						name: '2',
						value: 'RDS'
					}, {
						name: '3',
						value: 'OSS'
					}, {
						name: '4',
						value: 'SLB'
					}]
				},
				privateTab: {
					title: '专有域',
					tabList: [{
						name: '1',
						value: 'ECS'
					}, {
						name: '2',
						value: 'RDS'
					}, {
						name: '3',
						value: 'OSS'
					}, {
						name: '4',
						value: 'SLB'
					}]
				},
				serverCharts: [],
				serverChartsOption: [{
					title: 'CPU',
				}, {
					title: 'CPU',
				}, {
					title: 'IOPS'
				}, {
					title: '网络'
				}],
				netNodeChecked: 0	
			}
		},
		mounted: function(){
			this.$nextTick(function() {
				console.log(this.checkedNode);
				this.netNodeChecked = this.checkedNode;

				let element = this.$refs.charts;
				let serverChartsDom = element.querySelectorAll('.charts-dom');
				for (let i = 0; i < serverChartsDom.length; i ++) {
					this.serverCharts[i] = echarts.init(serverChartsDom[i])
					let option = cloneDeep(warningOption);
					option.title.text = this.serverChartsOption[i].title;
					this.serverCharts[i].setOption(option);
				}

				console.log(this.warningId);
			})
		},
		components: {
			SubTitle,
			Split
		}
	}
</script>
<style lang="scss">
	.warning {
		.left {
			border-right: .08vw solid #20265b;
		    border-bottom: .08vw solid #20265b;			
		    border-left: .08vw solid #20265b;			
		    .left-tab {
			    border-bottom: .08vw solid #28d5f3;
			    .tab {
				    color: #7e7e7e;
				    text-align: center;
				    font-size: 1.5vw;
				    line-height: 4vw;
				    font-weight: bold;
			    	&.active {
			    		background-color: #28d5f3;
			    		color: #000;
			    	}
			    }
		    }
		    .warning-tit {
				line-height: 60px;
				color: #28d5f3;
				text-align: center;
				font-size: 26px;
				background-color: #020a2f;
				z-index: 998;
				position: relative;		
			    border-bottom: 3px solid #20265b;			
		    }

		}
		.right {
			.warning-view {
				font-size: 16px;
			}
			.c-title {
				color: #28d5f3;
				font-size: 18px;
			}
		}
	}
	.charts {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.charts-dom {
			width: 48%;
			height: 250px;
			background-color: #0a092b;
			margin-bottom: 30px;
		}
	}
</style>