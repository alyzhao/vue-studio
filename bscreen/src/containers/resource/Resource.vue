<template>
	<div class="main resource">
		<div class="title">
			<img src="../../assets/img/logo-cj.png">
			<div class="top-tab">
				<div class="tab-cell active">节点一</div>
				<div class="tab-cell">节点二</div>
			</div>
		</div>
		<div class="sub-title ob">资源库存</div>

		<div class="resource-tab">
			<div class="tab-con">
				<div class="tab-cell" :class="{active: resourceCheckTab == 'ECS'}" @click="resourceCheckTab = 'ECS'">ECS</div>
				<div class="tab-cell" :class="{active: resourceCheckTab == 'RDS'}" @click="resourceCheckTab = 'RDS'">RDS</div>
				<div class="tab-cell" :class="{active: resourceCheckTab == 'OSS'}" @click="resourceCheckTab = 'OSS'">OSS</div>
				<div class="tab-cell" :class="{active: resourceCheckTab == 'DISK'}" @click="resourceCheckTab = 'DISK'">DISK</div>
				<div class="tab-cell" :class="{active: resourceCheckTab == 'EIP'}" @click="resourceCheckTab = 'EIP'">EIP</div>
			</div>
			<Split :height="'2px'" :color="'#20265b'" class="resource-split"/>				
		</div>

		<div class="quantity">
			<div class="chart-cell" ref="pieCharts"></div>
			<div class="chart-cell charts-flex">
				<div class="nnb">
					<p class="ob">CPU</p>
					<p><span class="org">258</span>个</p>
				</div>
				<div class="nnb">
					<p class="ob">CPU</p>
					<p><span class="org">258</span>个</p>
				</div>
				<div class="nnb">
					<p class="ob">CPU</p>
					<p><span class="org">258</span>个</p>
				</div>
			</div>
			<div class="chart-cell" ref="lineCharts"></div>
			<div class="chart-cell" ref="barCharts"></div>
		</div>
	</div>
</template>
<script>
	import Split from 'components/Split';
	import echarts from 'echarts';
	import cloneDeep from 'lodash/cloneDeep';
	import { pieChartsOption, lineChartsOption, barChartsOption } from './chartsOption';


	export default {
		data() {
			return {
				resourceCheckTab: 'RDS',
				pieCharts: null,
				lineCharts: null,
				barCharts: null
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				let pieChartDom = this.$refs.pieCharts;
				this.pieCharts = echarts.init(pieChartDom)
				let pieOption = cloneDeep(pieChartsOption);
				this.pieCharts.setOption(pieOption);

				let lineChartDom = this.$refs.lineCharts;
				this.lineCharts = echarts.init(lineChartDom);
				let lineOption = cloneDeep(lineChartsOption);
				this.lineCharts.setOption(lineOption);

				let barChartDom = this.$refs.barCharts;
				// console.log()
				this.barCharts = echarts.init(barChartDom);
				let barOption = cloneDeep(barChartsOption);
				barOption.series[1].itemStyle = {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#35045d'},
	                            {offset: 0.5, color: '#1d1360'},
	                            {offset: 1, color: '#111a62'}
	                        ]
	                    )
	                },
	                emphasis: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#111a62'},
	                            {offset: 0.7, color: '#1d1360'},
	                            {offset: 1, color: '#35045d'}
	                        ]
	                    )
	                }
	            };
				this.barCharts.setOption(barOption);

			})
		},
		components: {
			Split,
		}
	}
</script>
<style lang="scss">
	.resource {
		padding: 20px 50px 30px;
		height: auto;
		.title .top-tab {
			margin-left: 0;
		}
		.sub-title {
			font-size: 24px;
			padding: 20px 0;
		}
		.resource-tab {
			position: relative;
			.tab-con {
				display: flex;
				.tab-cell {
					color: #24226d;
					font-size: 18px;
					padding: 15px 45px;
					margin: 0 15px;
					border-bottom: 3px solid transparent;
					cursor: pointer;
					&.active {
						border-color: #28d5f3;
						color: #28d5f3;
					}
				}
			}
			.resource-split {
				position: absolute;
				bottom: 3px;
			}
		}
		.quantity {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.chart-cell {
				margin-bottom: 20px;
				width: 450px;
				height: 300px;
				background-color: #0a092b;
				&.charts-flex {
					display: flex;
					flex-wrap: wrap;
					.nnb {
						width: 50%;
					    padding: 30px 70px 0;
					    height: 130px;
					    justify-content: space-between;
					    .org {
					    	color: #ff6b00;
					    	font-size: 30px;
					    }
					}
				}
			}
		}
	}
	.c-tit {
		font-size: 18px;
		color: #28d5f3;
	}
</style>