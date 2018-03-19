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
						<li v-for="item in workOrderList" :key="item.id">{{item.value}}</li>
					</ul>
					<div class="split"><div class="con"></div></div>					
				</div>
			</div>
			<div class="right">
				<div class="sub-title ob">xx工单详情</div>
				<div class="flex-center" style="margin-top: 1vw;">
					<span>工单编号: 1111111</span>
					<span>工单类型: 1111111</span>
					<span>状态: 1111111</span>
					<span>提交时间: 2018.02.01 10:20:29</span>
				</div>
				<Split :height="'.08vw'" :color="'#3c3c3c'" style="margin-top: 0.8vw"/>
				<div class="flex-center" style="margin-top: 2vw;">
					<ProcessFirst :text="'申请阶段'" :height="3" :has-done="true"/>
					<ProcessMiddle :text="'审批'" :height="3" :has-done="false"/>
					<ProcessEnd :text="'生产阶段'" :height="3" :has-done="false"/>
				</div>
				<div class="flex-center approve" style="margin-top: 2vw;">
					<div class="cell">
						<div>账号: xxxx</div>
						<div>申请人: xxxx</div>
						<div>联系电话: xxxx</div>
						<div>账号类型: <span class="ob">xxxx</span></div>
						<div>申请部门: xxxx</div>
						<div>申请内容: xxxx</div>
					</div>
					<div class="cell">
						<div>审批人：xxxxx</div>
						<div>申请时间：2018-02-05 14:22:22</div>
						<div>审批时长：xxxxx</div>
						<div>审批结果：<span class="ob">通过</span></div>
					</div>
					<div class="cell">
						<div>生产时间：2018-02-05 14:22:22</div>
						<div>生产时长：xxxxx</div>
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
								<p>地域 : xxxxxx</p>
								<p><span>CPU : 4核</span><span>内存 : 8G</span></p>
								<p><span>系统盘 : xxxxx</span><span>40G</span></p>
								<p><span>数据盘 : 普通云盘</span><span>500G</span></p>
								<p class="flex-center"><span>所属网络 : </span><span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></p>
								<p class="ob">阿里云化堡垒机</p>
								<p><span>数据盘 : 普通云盘</span><span>500G</span></p>
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
		name: 'app',
		data() {
			return {
				workOrderList: [{
					id: 1,
					value: 222222
				}, {
					id: 2,
					value: 222222
				}, {
					id: 3,
					value: 222222
				}, {
					id: 4,
					value: 222222
				}, {
					id: 5,
					value: 222222
				}, {
					id: 6,
					value: 222222
				}, {
					id: 7,
					value: 222222
				}, {
					id: 8,
					value: 222222
				}, {
					id: 9,
					value: 222222
				}, {
					id: 10,
					value: 222222
				}, {
					id: 11,
					value: 222222
				}, {
					id: 12,
					value: 222222
				}, {
					id: 13,
					value: 222222
				}, {
					id: 1,
					value: 222222
				}, {
					id: 2,
					value: 222222
				}, {
					id: 3,
					value: 222222
				}, {
					id: 4,
					value: 222222
				}, {
					id: 5,
					value: 222222
				}, {
					id: 6,
					value: 222222
				}, {
					id: 7,
					value: 222222
				}, {
					id: 8,
					value: 222222
				}, {
					id: 9,
					value: 222222
				}, {
					id: 10,
					value: 222222
				}, {
					id: 11,
					value: 222222
				}, {
					id: 12,
					value: 222222
				}, {
					id: 13,
					value: 222222
				}]
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
	}
	.main {
		width: 100%;
		height: 100%;
		background: #000 url('../../assets/img/gzbg.png') no-repeat center center;
		background-color: #000;
		background-size: 100% 100%;
		padding: .8vw 2vw 2.5vw;
		color: #ccc;
		font-size: 1.25vw;
		.title {
	        height: 4vw;
		    color: #28d5f3;
		    font-size: 3vw;
		    border-bottom: .08vw solid #20265b;
		    padding-left: 1.2vw;
		    line-height: 4vw;
		}
		.main-content {
			width: 100%;
			height: 100%;
			margin-top: -4vw;
			padding-top: 4vw;
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
				padding: 2vw 0 2vw 3vw;
				.sub-title {
				    font-size: 1.5vw;
				    font-weight: bold;
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