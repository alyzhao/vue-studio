<template>
	<div class="main">
		<div class="title"><img style="margin-left: 20px;" src="../../assets/img/logo-cj.png"></div>
		<div class="main-content clearfix">
			<div class="left">
				<div class="tit-wrap">	
					<div class="tit">工单监控</div>
				</div>
				<div class="order">
					<ul>
						<li v-for="item in workOrderList" 
							:key="item.order_id"
							@click="showDetail(item)">
							{{item.order_id}}
						</li>
					</ul>
					<div class="split"><div class="con"></div></div>					
				</div>
			</div>
			<div class="right">
				<div class="sub-title ob">{{workOrderDetail.order_id}}工单详情</div>
				<div class="flex-center" style="margin-top: 1vw;">
					<span>工单编号: {{workOrderDetail.order_id}}</span>
					<span>工单类型: {{workOrderDetail.type}}</span>
					<span>状态: 进行中</span>
					<span>提交时间: {{workOrderDetail.createdtime}}</span>
				</div>
				<Split :height="'.08vw'" :color="'#3c3c3c'" style="margin-top: 0.8vw"/>
				<div class="flex-center" style="margin-top: 2vw;">
					<ProcessFirst :text="'发起阶段'" :height="3" :has-done="true"/>
					<ProcessMiddle :text="'审批'" :height="3" :has-done="false"/>
					<ProcessEnd :text="'生产阶段'" :height="3" :has-done="false"/>
				</div>
				<div class="flex-center approve" style="margin-top: 2vw;">
					<div class="cell">
						<div>账号: {{Math.floor(Math.random() * 100000000)}}</div>
						<div>申请人: 运维人员</div>
						<div>联系电话: 183{{Math.floor(Math.random() * 100000000)}}</div>
						<div>账号类型: <span class="ob">政府客户</span></div>
						<div>申请部门: 运维</div>
						<div>申请内容: conten.txt</div>
					</div>
					<div class="cell">
						<div>审批人：运维主管</div>
						<div>申请时间：{{workOrderDetail.finishedtime}}</div>
						<div>审批时长：{{workOrderDetail.fieldtime}}</div>
						<div>审批结果：<span class="ob">通过</span></div>
					</div>
					<div class="cell">
						<div>生产时间：{{workOrderDetail.pecomfired}}</div>
						<div>生产时长：{{workOrderDetail.totaltime}}</div>
					</div>
				</div>
				<Split :height="'.08vw'" :color="'#3c3c3c'" style="margin-top: 2vw"/>
				<table class="b-tb">
					<thead>
						<tr>
							<th width="18%">产品</th>
							<th width="28%">配置</th>
							<th width="8%">数量</th>
							<th width="13%">类型</th>
							<th width="18%">备注</th>
							<th width="15%">操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<i class="iconfont icon-server ob"></i> 云服务器ECS
							</td>
							<td class="fff">
								<p>地域 : Cn-guizhou</p>
								<p><span>CPU : 4核</span><span>内存 : 8G</span></p>
								<p><span>系统盘 : 高效云盘</span><span>40G</span></p>
								<p><span>数据盘 : 普通云盘</span><span>500G</span></p>
								<p class="flex-center"><span>所属网络 : </span><span>VPC 专有网络</span></p>
								<!-- <p class="ob">阿里云化堡垒机</p>
								<p><span>数据盘 : 普通云盘</span><span>500G</span></p> -->
							</td>
							<td>1</td>
							<td class="ob">申请资源</td>
							<td>电子政务外网堡垒机器</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>	
</template>
<script>
	import Split from 'components/Split';
	import Triangle from 'components/Triangle';
	import ProcessFirst from 'components/ProcessFirst';
	import ProcessMiddle from 'components/ProcessMiddle';
	import ProcessEnd from 'components/ProcessEnd';

	export default {
		data() {
			return {
				workOrderList: [],
				workOrderDetail: {}
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				this.loadData();
			})
		},
		methods: {
			loadData() {
				var proxy = 'http://service.datav.aliyun.com/transparentProxy/proxy?url=';
				this.axios.get(proxy + 'http://datam.youlishu.com/dataset/json?oid=1369').then(res => {
					let resData = res.data;
					console.log(resData);
					this.workOrderList = resData;
					this.workOrderDetail = workOrderList[0];
				})
			},
			showDetail(item) {
				this.workOrderDetail = item;
			}
		},
		components: {
			Split,
			Triangle,
			ProcessFirst,
			ProcessMiddle,
			ProcessEnd
		}
	}	
</script>
<style>
	::-webkit-scrollbar {
	    width: 10px;
	    height: 10px;
	}
	::-webkit-scrollbar-thumb {
	    background-color: rgba(40,213,243,0.25);
	    border: 2px solid transparent;
	    border-radius: 10px;
	    background-clip: padding-box;
	}
	::-webkit-scrollbar-thumb:hover {
	    background-color: rgba(40,213,243,0.5);
	}
	::-webkit-scrollbar-track {
	    background-color: rgba(40,213,243,0.05);
	}
	html, body {
		height: 100%;
	}
	.ob {
		color: #28d5f3;
		&.big {
			font-size: 30px;
		}
	}
	.main {
		width: 100%;
		height: 100%;
		background: #000 url('../../assets/img/gzbg.png') no-repeat center center;
		background-color: #000;
		background-size: 100% 100%;
		padding: 10px 25px 30px;
		color: #ccc;
		font-size: 16px;
		.title {
	        height: 62px;
		    color: #28d5f3;
		    font-size: 30px;
		    border-bottom: 1px solid #20265b;
		    padding-left: 20px;
		    line-height: 62px;
		    position: relative;
			.top-tab {
				position: absolute;
				left: 25%;
				display: flex;
				top: 0;
				margin-left: 80px;
				.tab-cell {
					font-size: 24px;
					padding: 0 20px;
					margin: 0 20px;
					color: #fff;
					cursor: pointer;
					&.active {
						border-bottom: 3px solid #28d5f3;
						color: #28d5f3;
					}
				}
			}

		}
		.main-content {
			width: 100%;
			height: 100%;
			margin-top: -65px;
			padding-top: 65px;
			.left {
				float: left;
				width: 25%;
				height: 100%;
				.tit-wrap {
					padding-right: 10px;
				}
				.tit {
					line-height: 5vw;
					border-left: .08vw solid #20265b;
					border-right: .08vw solid #20265b;
					color: #28d5f3;
					text-align: center;
					font-size: 1.5vw;
					background-color: #020a2f;
					z-index: 998;
					position: relative;
				}
				.order {
				    margin-top: -5vw;
				    padding-top: 5vw;
				    z-index: 998;
				    height: 100%;
				    position: relative;
				    .split {
				    	position: absolute;
				    	bottom: 0;
				    	padding-right: 10px;
				    	width: 100%;
				    	.con {
				    		width: 100%;
				    		height: .08vw;
				    		background-color: #28d5f3;
				    	}
				    }
				    ul {
					    margin: 0;
					    padding: 0;				    	
					    height: 100%;
					    overflow-y: scroll;					    
				    }
					li {
						height: 3.3vw;
						line-height: 3.3vw;
						text-align: center;
						color: #f3f3f3;
						border-left: .08vw solid #20265b;
						border-right: .08vw solid #20265b;						
						&:nth-child(even) {
							background-color: #070a25;
						}
						&.active, &:hover {
							border-right: none;
							border-top: .08vw solid #20265b;
							border-bottom: .08vw solid #20265b;
							background-color: #000;
							color: #28d5f3;
						}
					}
				}
			}
			.right {
				float: left;
				width: 75%;
				height: 100%;
				padding: 25px 0 25px 35px;
				.sub-title {
				    font-size: 22px;
				    font-weight: bold;
				    color: #fff;
				}
				.approve {
					align-items: flex-start;
					.cell div {
						line-height: 2.3vw;
					}
				}
				.b-tb {
					width: 100%;
					thead tr th, tbody tr td {
						text-align: left;
						vertical-align: middle;
						padding: 1vw;
					}
					.fff p span:first-child {
						margin-right: 3vw;
					}
					.flex-center {
						align-items: flex-start;
					}
					.flex-center span:first-child {
						margin-right: 0 !important;
						width: 15vw;
					}
				}
			}
		}
		.process {
			&.first {
				z-index: 13;				
			}
			&.middle {
				z-index: 12;
				margin-left: -2.5vw;
			}
			&.end {
				margin-left: -2.5vw;
			}
		}
	}	
</style>