<template>
	<div class="main safe">
		<div class="title">
			<img style="margin-left: 20px;" src="../../assets/img/logo-cj.png">
			<ul>
				<li :class="{active: tabCheckedIndex == 0}" @click="tabCheckedIndex = 0"><a>攻击事件</a></li>
				<li :class="{active: tabCheckedIndex == 1390}" @click="tabCheckedIndex = 1390"><a>主机安全事件</a></li>
				<li :class="{active: tabCheckedIndex == 2}" @click="tabCheckedIndex = 2"><a>网络状态</a></li>
				<li :class="{active: tabCheckedIndex == 3}" @click="tabCheckedIndex = 3"><a>安全威胁</a></li>
			</ul>
		</div>
		<div class="main-content clearfix">
			<div class="left">
				<div class="tit-wrap">	
					<div class="tit" id="fonts">实例列表</div>
				</div>
				<div class="order">
					<ul>
						<li v-for="item in vmIpList" @click="switchIP(item)" :key="item">{{item}}</li>
					</ul>
					<div class="split"></div>					
				</div>
			</div>
			<div class="right">
				<div class="listItem">
					<p class="ob">针对资产{{checkedIp}}的攻击事件</p>
				</div>
				<div class="order thing">
					<table class="scr-table">
						<thead>
							<tr>
								<th width="12%">资产IP</th>
								<th width="12%">攻击日期</th>
								<th width="12%">攻击者IP</th>
								<th width="15%">攻击者所在区域</th>
								<th width="10%">攻击类型</th>
								<th width="15%">攻击手法</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in caseList" @click="showDetail(item)">
								<td>{{item.vm_ip}}</td>
								<td>{{item.attack_date}}</td>
								<td>{{item.source_ip}}</td>
								<td>{{item.source_location}}</td>
								<td>{{item.attack_type}}</td>
								<td>{{item.note}}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="tit-thing tit-line" >	
					<div class="tit line">事件详情: </div>
					<p class='line' style="margin-left:2vw;">
						{{checkedAttack.attack_date}}, 
						{{checkedAttack.source_ip}} 对资产 {{checkedAttack.vm_ip}} 发起 {{checkedAttack.note}} 类型攻击
						<br/>
						具体信息: {{checkedAttack.url}}
					</p>
				</div>
				<div class="tit-thing">	
					<div class="tit">攻击趋势</div>
				</div>
				<div class="charts">
					<div ref="chartsDom" class="charts-dom"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {lineChartsOption} from './chartsOption';
	import echarts from 'echarts';
	import cloneDeep from 'lodash/cloneDeep';


	export default {
		data() {
			return {
				tabCheckedIndex: 0,
				data: [],
				vmIpList: [],
				caseList: [],
				checkedIp: '',
				checkedAttack: {},
				lineCharts: null,
				lineChartsOption: cloneDeep(lineChartsOption),
			}
		},
		mounted:function(){
			this.$nextTick(function() {
				var proxy = 'http://service.datav.aliyun.com/transparentProxy/proxy?url=';
				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1376').then(res => {
					let resData = res.data;
					this.data = resData;
					let vm_ipList = resData.map(item => item.vm_ip);
					vm_ipList = [...new Set(vm_ipList)];
					this.vmIpList = vm_ipList;

					this.switchIP(vm_ipList[0]);
					this.checkedAttack = this.caseList[0];
				})				
			})
		},
		methods: {
			switchIP(ip) {
				this.caseList = this.data.filter(item => item.vm_ip == ip);
				this.checkedIp = ip;
				this.renderLineCharts(ip);
			},
			showDetail(item) {
				this.checkedAttack = item;
			},
			renderLineCharts(ip) {
				var proxy = 'http://service.datav.aliyun.com/transparentProxy/proxy?url=';
				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1377&filters=vm_ip', {
					params: {
						vm_ip: ip
					}
				}).then(res => {
					let resData = res.data;
					this.lineChartsOption.xAxis.data = resData.map(item => item.x);
					this.lineChartsOption.series[0].data = resData.map(item => item.y);
					if (!this.lineCharts) {
						let lineChartsDom = this.$refs.chartsDom;
						this.lineCharts = echarts.init(lineChartsDom);
					}
					this.lineCharts.setOption(this.lineChartsOption);
				})
			}
		}
	}
</script>
<style lang="scss">
	html, body {
		height: 100%;
	}
	.scr-table {
		width: 100%;
		border-collapse: collapse;
		td, th {
			padding: 10px;
			text-align: center;
			vertical-align: middle;
		}
		tbody tr:hover {
			background-color: #347caf;
		}
		&.scroll {
			height: 100%;
			overflow-y: scroll;
		}
	}

	.safe{
		font-size:1vw;
		.title{
			ul {
				list-style-type: none; 	
			}
			ul,li { 
			    text-align: center;  
			    display: inline;
			    border-bottom: 3px solid transparent;
			    margin-left: 8vw;
			}
			ul li {
			    &.active {
				    border-bottom: 3px solid #28d5f3;
				    a {

				    	color: #28d5f3;
				    }	
				    
			    }			
			}
			ul li a {  
			    color: white;
			    text-decoration: none;  
			    font-size: 1.5vw;
				vertical-align: middle;
			}
			
		}
		.tit-wrap #fonts{
			font-size: 1.45vw;
		}
		.listItem{
			width: 100%;
			padding-bottom: 0.5vw;
			border-bottom: 1px solid #20265b;

			p {
				font-size: 1.4vw;
			}
		}
		.tit-thing .tit{
			line-height: 4vw;
			color: #28d5f3;
			z-index: 998;
			position: relative;
			font-size: 1.4vw;
		}
		.thing {
			height: 19vw;
			width: 100%;
			border: 1px solid #20265b;
			overflow-y: scroll;
			ul {
				margin-botton: 3px;
				padding: 0;
				height: 100%;
				overflow-y: scroll;
				
			}
			::-webkit-scrollbar-thumb {
					background-color: #22216b;
				    border-radius: 0px;
				}
			ul li {
				margin-top: 4px;
				margin-left: 3px;
				margin-right: 3px;
				height: 2.7vw;
				line-height: 2.7vw;
				background-color: #0a092b;
				&.active, &:hover {
					background-color: #10124b;
					
				}
			}

		}
		.tit-line {
			border-bottom: 1px solid #20265b;
			.line {
				display: inline;
			}
		}
		.charts-dom {
			width: 100%;
			background-color: #0a092b;
			height: 18vw;
		}
	}
</style>