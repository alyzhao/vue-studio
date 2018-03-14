<template>
	<div class="main warning">
		<div class="title">预警监控</div>
		<div class="main-content clearfix">
			<div class="left">
				<div class="flex-center left-tab">
					<div class="tab active">节点一</div>
					<div class="tab">节点二</div>
				</div>
				<div class="warning-tit">预警对象</div>
				<SubTitle :tab-title="internetTab.title" :tab-list="internetTab.tabList" :on-active-default="true"/>
				<SubTitle :tab-title="goverTab.title" :tab-list="goverTab.tabList" :on-active-default="false"/>
				<SubTitle :tab-title="privateTab.title" :tab-list="privateTab.tabList" :on-active-default="false"/>
			</div>
			<div class="right">
				<div class="sub-title">ESC预警详情</div>
				<div class="flex-center warning-view" style="margin-top: 1vw;">
					<span>故障总数 : <span class="ob">4</span></span>
					<span>涉及实例数 : <span class="ob">4</span></span>
					<span>预警时间 : 2018.02.01 10:20:29</span>
				</div>
				<div class="warning-view" style="margin-top: 2vw;">预警事件 : <span class="ob">库存不足</span></div>
				<Split :height="'.08vw'" :color="'#3c3c3c'" style="margin-top: 2vw"/>				
			</div>
		</div>		
	</div>
</template>
<script>
	import SubTitle from 'components/SubTitle';
	import Split from 'components/Split';	

	export default {
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
				}								
			}
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
			border-right: .08vw solid #28d5f3;
		    border-bottom: .08vw solid #28d5f3;			
		    border-left: .08vw solid #28d5f3;			
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
				line-height: 5vw;
				color: #28d5f3;
				text-align: center;
				font-size: 1.5vw;
				background-color: #171a21;
				z-index: 998;
				position: relative;		    	
		    }

		}
		.right {
			.warning-view {
				font-size: 1.35vw;
			}
		}
	}
</style>