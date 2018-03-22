<template>
	<div class="main resource">
		<div class="title">
			<img src="../../assets/img/logo-cj.png">
			<div class="top-tab">
				<div class="tab-cell" :class="{active: nodeChecked == 0}" @click="nodeChecked = 0">节点一</div>
				<div class="tab-cell" :class="{active: nodeChecked == 1}" @click="nodeChecked = 1">节点二</div>
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
					<p class="ob">{{attributeName1}}</p>
					<p><span class="org">{{attributeValue1}}</span>个</p>
				</div>
				<div class="nnb">
					<p class="ob">{{attributeName2}}</p>
					<p><span class="org">{{attributeValue2}}</span>个</p>
				</div>
				<div class="nnb">
					<p class="ob">{{attributeName3}}</p>
					<p><span class="org">{{attributeValue3}}</span>个</p>
				</div>
				<div class="nnb">
					<p class="ob">{{attributeName4}}</p>
					<p><span class="org">{{attributeValue4}}</span>个</p>
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
				resourceCheckTab: 'ECS',
				nodeChecked: 0,
				pieCharts: null,
				pieChartsOption: cloneDeep(pieChartsOption),
				lineCharts: null,
				lineChartsOption: cloneDeep(lineChartsOption),
				barCharts: null,
				barChartsOption: cloneDeep(barChartsOption),
				attributeValue3: '',
				attributeName3: '',
				attributeValue2: '',
				attributeName2: '',
				attributeValue1: '',
				attributeName1: '',
				attributeValue4: '',
				attributeName4: '',
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				// this.axios.get('http://service.datav.aliyun.com/transparentProxy/proxy?url=http://datam.youlishu.com/dataset/json?oid=1363&filters=product,region_id&product=ECS&region_id=1').then(res => {
				// 	let resData = res.data;
				// 	console.log(resData);
					
				// 	let lengendData = resData.map((item) => item.pie_chart_dimension);
				// 	let pieData = resData.map(item => ({value: item.pie_chart_value, name: item.pie_chart_dimension}))

				// 	let pieOption = cloneDeep(pieChartsOption);

				// 	pieOption.legend.data = lengendData;
				// 	pieOption.series[0].data = pieData;

				// 	let pieChartDom = this.$refs.pieCharts;
				// 	this.pieCharts = echarts.init(pieChartDom)
				// 	console.log(pieOption);
				// 	this.pieCharts.setOption(pieOption);
				// })

				this.loadData();

				// let lineChartDom = this.$refs.lineCharts;
				// this.lineCharts = echarts.init(lineChartDom);
				// let lineOption = cloneDeep(lineChartsOption);
				// this.lineCharts.setOption(lineOption);

				// let barChartDom = this.$refs.barCharts;
				// this.barCharts = echarts.init(barChartDom);
				// let barOption = cloneDeep(barChartsOption);
				// barOption.series[1].itemStyle = {
	   //              normal: {
	   //                  color: new echarts.graphic.LinearGradient(
	   //                      0, 0, 0, 1,
	   //                      [
	   //                          {offset: 0, color: '#35045d'},
	   //                          {offset: 0.5, color: '#1d1360'},
	   //                          {offset: 1, color: '#111a62'}
	   //                      ]
	   //                  )
	   //              },
	   //              emphasis: {
	   //                  color: new echarts.graphic.LinearGradient(
	   //                      0, 0, 0, 1,
	   //                      [
	   //                          {offset: 0, color: '#111a62'},
	   //                          {offset: 0.7, color: '#1d1360'},
	   //                          {offset: 1, color: '#35045d'}
	   //                      ]
	   //                  )
	   //              }
	   //          };
				// this.barCharts.setOption(barOption);

			})
		},
		methods: {
			loadData() {
				var proxy = 'http://service.datav.aliyun.com/transparentProxy/proxy?url=';
				var params = {
					product: this.resourceCheckTab,
					region_id: this.nodeChecked + 1
				}

				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1363&filters=product,region_id', {
					params
				}).then(res => {
					let resData = res.data;
					let lengendData = resData.map((item) => item.pie_chart_dimension);
					lengendData = lengendData.slice(0, 5);
					let pieData = resData.map(item => ({value: item.pie_chart_value, name: item.pie_chart_dimension}))
					pieData = pieData.slice(0, 5);
					console.log(pieData);
					this.pieChartsOption.legend.data = lengendData;
					this.pieChartsOption.series[0].data = pieData;
					if (!this.pieCharts) {
						let pieChartDom = this.$refs.pieCharts;
						this.pieCharts = echarts.init(pieChartDom)
					}
					this.pieCharts.setOption(this.pieChartsOption);
				})

				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1362&filters=product,region_id', {
					params
				}).then(res => {
					let resData = res.data[0];
					this.attributeName1 = resData.attributeName1;
					this.attributeValue1 = resData.attributeValue1;
					this.attributeName2 = resData.attributeName2;
					this.attributeValue2 = resData.attributeValue2;
					this.attributeName3 = resData.attributeName3
					this.attributeValue3 = resData.attributeValue3;
					this.attributeName4 = resData.attributeName4
					this.attributeValue4 = resData.attributeValue4;
				})

				// this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1363&filters=product,region_id', {
				// 	params
				// }).then(res => {
				// 	let resData = res.data;
				// 	let resData_first = resData[0];
				// 	let lengendData = [];
				// 	if (resData_first) {
				// 		lengendData = [resData_first.lineSerice1, resData_first.lineSerice2, resData_first.lineSerice3]
				// 	}
				// })

				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1365&filters=product,region_id', {
					params
				}).then(res => {
					let resData = res.data;
					console.log(resData);
					resData.sort((x, y) => x.line_time > y.line_time);

					let resData_first = resData[0];
					let lengendData = [];
					if (resData_first) {
					console.log(resData_first);
						lengendData = [resData_first.lineSerice1, resData_first.lineSerice2, resData_first.lineSerice3]
						console.log(lengendData);
					}

					let xAxisData = resData.map(item => item.line_time);

					let seriesData = [];
					lengendData.forEach((item, index) => {
						let obj = {
							name: item,
							type: 'line',
							stack: '总量',
						}
						let data = resData.map(item => item['lineValue' + (index + 1)]);
						obj.data = data;
						seriesData.push(obj);
					})

					console.log(seriesData);
					this.lineChartsOption.legend.data = lengendData;
					this.lineChartsOption.xAxis.data = xAxisData;
					this.lineChartsOption.series = seriesData;

					if (!this.lineCharts) {
						let lineChartsDom = this.$refs.lineCharts;
						this.lineCharts = echarts.init(lineChartsDom)
					}
					this.lineCharts.setOption(this.lineChartsOption);


				})

				let barParams = {
					product: this.resourceCheckTab,
					node_id: this.nodeChecked + 1
				}
				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1368&filters=product,node_id', {
					params: barParams
				}).then(res => {
					let resData = res.data;
					let xAxisData = resData.map(item => item.x);

					let seriesData = resData.map(item => item.y);
					let max = Math.max(...seriesData);
					let shadowData = [];
					seriesData.forEach((item, index) => {
						shadowData.push(max);
					})

					this.barChartsOption.xAxis.data = xAxisData;
					this.barChartsOption.series[0].data = shadowData;
					this.barChartsOption.series[1].data = seriesData;

					if (!this.barCharts) {
						let barChartDom = this.$refs.barCharts;
						this.barCharts = echarts.init(barChartDom);
						
						this.barChartsOption.series[1].itemStyle = {
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
					}
					this.barCharts.setOption(this.barChartsOption);
				})
			}
		},
		watch: {
			resourceCheckTab(tab) {
				this.loadData();
			},
			nodeChecked(node) {
				this.loadData();
			}
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
				width: 48%;
				height: 400px;
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