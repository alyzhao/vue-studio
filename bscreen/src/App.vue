<template>
	<div class="main">
		<div class="title">工单监控</div>
		<div class="main-content clearfix">
			<div class="left">
				<div class="tit-wrap">	
					<div class="tit">工单</div>
				</div>
				<div class="order">
					<ul>
						<li v-for="item in workOrderList" :key="item.id">{{item.value}}</li>
					</ul>
					<div class="split"><div class="con"></div></div>					
				</div>
			</div>
			<div class="right">
				<div class="sub-title">xx工单详情</div>
				<div class="flex-center">
					<span>工单编号: 1111111</span>
					<span>工单类型: 1111111</span>
					<span>状态: 1111111</span>
					<span>提交时间: 2018.02.01 10:20:29</span>
				</div>
				<Split :height="'.08vw'" :color="'#3c3c3c'" />
				<div class="flex-center">
					<div class="process">
						<div class="pcc">申请阶段</div>
						<Triangle class="on-tri" :triangle-width="'1.5vw'" :triangle-color="'#28d5f3'" :triangle-direction="'left'"/>
					</div>
					<div class="process">
						<div class="pcc">审批</div>
						<Triangle class="on-tri" :triangle-width="'1.5vw'" :triangle-color="'#28d5f3'" :triangle-direction="'left'"/>						
					</div>
					<div class="process"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Split from 'components/Split';
	import Triangle from 'components/Triangle';


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
				}]
			}
		},
		components: {
			Split,
			Triangle,
		}
	}
</script>
<style lang="scss">
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
		width: 100%;
		height: 100%;
	}
	.main {
		width: 100%;
		height: 100%;
		background-color: #000;
		padding: 2.5vw 2vw;
		color: #ccc;
		.title {
	        height: 4vw;
		    color: #28d5f3;
		    font-size: 3vw;
		    border-left: .3vw solid #28d5f3;
		    border-bottom: .08vw solid #28d5f3;
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
					border-left: .08vw solid #28d5f3;
					border-right: .08vw solid #28d5f3;
					color: #28d5f3;
					text-align: center;
					font-size: 1.5vw;
					background-color: #171a21;
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
						border-left: .08vw solid #28d5f3;
						border-right: .08vw solid #28d5f3;						
						&:nth-child(odd) {
							background-color: #030a10;
						}
						&.active, &:hover {
							border-right: none;
							border-top: .08vw solid #28d5f3;
							border-bottom: .08vw solid #28d5f3;
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
				    color: #fff;
				    font-size: 1.5vw;
				    font-weight: bold;
				}
				.process {
					height: 3vw;
					padding-right: 3vw;
					position: relative;
					.pcc {
					    line-height: 3vw;
					    background-color: #28d5f3;
					    color: #000;
					    font-size: 1.25vw;
					    font-weight: bold;
					    padding-left: 1.5vw;
					}
					.on-tri {
						right: 0;
						top: 0;
					}
				}
			}
		}
	}
</style>