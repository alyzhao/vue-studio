<template>
	<div class="topology">
		<router-view path="">

		<TopologyBrand :width="228" :top="268" :left="145">互联网</TopologyBrand>
		<TopologyBrand :width="435" :top="268" :left="509">电子政务外网</TopologyBrand>
		<TopologyBrand :width="265" :top="268" :left="980">专有域</TopologyBrand>
		<TopologyBrand :width="268" :top="268" :left="1507">专有域</TopologyBrand>
		<TopologyBrand :width="450" :top="268" :left="1818">互联网</TopologyBrand>
		<TopologyBrand :width="225" :top="268" :left="2316">互联网</TopologyBrand>
		<div class="topology-group" style="left: 335px;top: 538px;z-index: 15;">
			<TopologyBtn :type="'eip'" :status="'default'">EIP</TopologyBtn>
			<TopologyBtn :type="'clouddisk'" :status="'default'">云磁盘</TopologyBtn>
			<TopologyBtn :type="'mq'" :status="'default'">MQ</TopologyBtn>
			<TopologyBtn :type="'drds'" :status="'default'">DRDS</TopologyBtn>			
		</div>
		<div class="topology-group" style="left: 360px;top: 500px;z-index: 14;">
			<TopologyBtn :type="'ecs'" :status="'default'">ECS</TopologyBtn>
			<TopologyBtn :type="'rds'" :status="'default'">RDS</TopologyBtn>
			<TopologyBtn :type="'oss'" :status="'default'">OSS</TopologyBtn>
			<TopologyBtn :type="'slb'" :status="'default'">SLB</TopologyBtn>			
		</div>

		<div class="topology-group" style="left: 454px;top: 397px;z-index: 15;">
			<TopologyBtn :type="'eip'" :status="'default'">EIP</TopologyBtn>
			<TopologyBtn :type="'clouddisk'" :status="'default'">云磁盘</TopologyBtn>
			<TopologyBtn :type="'mq'" :status="'default'">MQ</TopologyBtn>
			<TopologyBtn :type="'drds'" :status="'default'">DRDS</TopologyBtn>			
		</div>
		<div class="topology-group" style="left: 475px;top: 358px;z-index: 14;">
			<TopologyBtn :type="'ecs'" :status="'default'">ECS</TopologyBtn>
			<TopologyBtn :type="'rds'" :status="'default'">RDS</TopologyBtn>
			<TopologyBtn :type="'oss'" :status="'default'">OSS</TopologyBtn>
			<TopologyBtn :type="'slb'" :status="'default'">SLB</TopologyBtn>			
		</div>		

		<div class="more" style="top: 403px;left: 817px;">更多+</div>
		<div class="more" style="top: 534px;left: 725px;">更多+</div>

		<div class="gatekeeper" style="left: 400px;top: 476px;">网闸</div>

		<div class="domain" style="top: 406px;left: 900px;">
			<div class="row" style="margin-left: 55px;">
				<TopologyBtn :type="'slb'" :status="'default'">SLB</TopologyBtn>			
				<TopologyBtn :type="'clouddisk'" :status="'default'">云磁盘</TopologyBtn>
			</div>
			<div class="row">
				<TopologyBtn :type="'eip'" :status="'default'">EIP</TopologyBtn>
				<TopologyBtn :type="'ecs'" :status="'default'">ECS</TopologyBtn>			
			</div>
		</div>

		<div class="domain" style="top: 406px;left: 1438px;">
			<div class="row" style="margin-left: 55px;">
				<TopologyBtn :type="'slb'" :status="'default'">SLB</TopologyBtn>			
				<TopologyBtn :type="'clouddisk'" :status="'default'">云磁盘</TopologyBtn>
			</div>
			<div class="row">
				<TopologyBtn :type="'eip'" :status="'default'">EIP</TopologyBtn>
				<TopologyBtn :type="'ecs'" :status="'default'">ECS</TopologyBtn>			
			</div>
		</div>

		<!--  -->
		<div class="topology-group" style="left: 1689px;top: 538px;z-index: 15;">
			<TopologyBtn :type="'eip'" :status="'default'">EIP</TopologyBtn>
			<TopologyBtn :type="'clouddisk'" :status="'default'">云磁盘</TopologyBtn>
			<TopologyBtn :type="'mq'" :status="'default'">MQ</TopologyBtn>
			<TopologyBtn :type="'drds'" :status="'default'">DRDS</TopologyBtn>			
		</div>
		<div class="topology-group" style="left: 1712px;top: 500px;z-index: 14;">
			<TopologyBtn :type="'ecs'" :status="'default'">ECS</TopologyBtn>
			<TopologyBtn :type="'rds'" :status="'default'">RDS</TopologyBtn>
			<TopologyBtn :type="'oss'" :status="'default'">OSS</TopologyBtn>
			<TopologyBtn :type="'slb'" :status="'default'">SLB</TopologyBtn>			
		</div>

		<div class="topology-group" style="left: 1786px;top: 397px;z-index: 15;">
			<TopologyBtn :type="'eip'" :status="'default'">EIP</TopologyBtn>
			<TopologyBtn :type="'clouddisk'" :status="'default'">云磁盘</TopologyBtn>
			<TopologyBtn :type="'mq'" :status="'default'">MQ</TopologyBtn>
			<TopologyBtn :type="'drds'" :status="'default'">DRDS</TopologyBtn>			
		</div>
		<div class="topology-group" style="left: 1810px;top: 358px;z-index: 14;">
			<TopologyBtn :type="'ecs'" :status="'default'">ECS</TopologyBtn>
			<TopologyBtn :type="'rds'" :status="'default'">RDS</TopologyBtn>
			<TopologyBtn :type="'oss'" :status="'default'">OSS</TopologyBtn>
			<TopologyBtn :type="'slb'" :status="'default'">SLB</TopologyBtn>			
		</div>		

		<div class="more" style="top: 403px;left: 2161px;">更多+</div>
		<div class="more" style="top: 534px;left: 2070px;">更多+</div>

		<div class="gatekeeper" style="left: 1733px;top: 476px;">网闸</div>		

		<!--  -->

		<div class="topology-group bt" style="top: 865px;left: 380px;">
			<TopologyBtn :type="'exchange'" :status="'default'">交换机</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">路由器</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">防火墙</TopologyBtn>			
		</div>

		<div class="topology-group bt" style="top: 910px;left: 345px;">
			<TopologyBtn :type="'exchange'" :status="'default'">服务器</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">数据库</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">存储</TopologyBtn>			
		</div>
		<div class="oob" style="position: absolute;top: 941px;left: 775px;">节点一(观山湖机房)</div>

		<div class="topology-group bt" style="top: 865px;left: 1342px;">
			<TopologyBtn :type="'exchange'" :status="'default'">交换机</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">路由器</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">防火墙</TopologyBtn>			
		</div>

		<div class="topology-group bt" style="top: 910px;left: 1313px;">
			<TopologyBtn :type="'exchange'" :status="'default'">服务器</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">数据库</TopologyBtn>
			<TopologyBtn :type="'exchange'" :status="'default'">存储</TopologyBtn>			
		</div>
		<div class="oob" style="position: absolute;top: 941px;left: 1742px;">节点二(贵安新区机房)</div>

		<div class="bt-con" style="bottom: 100px;left: 220px;">
			<span class="oob">互联网</span>
			<span class="oob">专网</span>
			<span class="oob">政务外网</span>
		</div>
		<div class="bt-con" style="bottom: 100px;left: 1185px;">
			<span class="oob">互联网</span>
			<span class="oob">专网</span>
			<span class="oob">政务外网</span>
		</div>
	</div>
</template>
<script>
	import TopologyBrand from 'components/TopologyBrand.vue';
	import TopologyBtn from 'components/TopologyBtn.vue';


	export default {
		components: {
			TopologyBrand,
			TopologyBtn,
		}
	}
	
</script>
<style lang="scss">
	.topology {
		width: 2551px;
		height: 1390px;
		background: #000 url('../../assets/img/topology-bg.png') no-repeat center center;
		position: relative;
		.topology-group {
			display: flex;
			position: absolute;
			&.bt {
			    width: 320px;
			    justify-content: space-between;			
			}
		}
		.more {
			position: absolute;
			color: #fff;
			font-size: 16px;
			line-height: 50px;
		}
		.gatekeeper {
			position: absolute;
			border: 1px dashed #28d5f3;
			font-size: 18px;
			line-height: 50px;
			color: #fff;
			text-align: right;
			width: 445px;			
			background-color: #000;
			padding-right: 25px;
		}
		.domain {
			position: absolute;
			.row {
			    display: flex;
			    width: 185px;
			    justify-content: space-between;				
			}
		}
		.oob {
			text-align: center;
			color: #fff;
			font-size: 22px;
			line-height: 50px;
		}
		.bt-con {
			position: absolute;
			.oob {
				padding: 20px 95px;
				font-size: 24px;
			}
		}
	}
</style>