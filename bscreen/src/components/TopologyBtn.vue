<template>
	<div :class="['topology-btn', type, status]"><slot></slot></div>
</template>
<script>
	export default {
		props: {
			type: {
				type: String
			},
			status: {
				type: String,
				default: 'default'
			}
		}
	}	
</script>
<style lang="scss">
	.topology-btn {
		min-width: 80px;
		min-height: 66px;
		background-repeat: no-repeat;
		background-position: center bottom;
		color: #fff;
		font-size: 20px;
		text-align: center;
		padding-bottom: 50px;
		&.ecs {
			&.default {
				background-image: url('../assets/img/ECS.png')
			}
			&.danger {
				background-image: url('../assets/img/ECS2.png');
			}
			&.warning {
				background-image: url('../assets/img/ECS3.png');
			}
		}		
		&.eip {
			&.default {
				background-image: url('../assets/img/EIP.png')
			}
			&.danger {
				background-image: url('../assets/img/EIP2.png');
			}
			&.warning {
				background-image: url('../assets/img/EIP3.png');
			}
		}
		&.clouddisk {
			&.default {
				background-image: url('../assets/img/CLOUDDISK.png')
			}
			&.danger {
				background-image: url('../assets/img/CLOUDDISK2.png');
			}
			&.warning {
				background-image: url('../assets/img/CLOUDDISK3.png');
			}
		}
		&.mq {
			&.default {
				background-image: url('../assets/img/MQ.png')
			}
			&.danger {
				background-image: url('../assets/img/MQ2.png');
			}
			&.warning {
				background-image: url('../assets/img/MQ3.png');
			}
		}
		&.drds {
			&.default {
				background-image: url('../assets/img/DRDS.png')
			}
			&.danger {
				background-image: url('../assets/img/DRDS2.png');
			}
			&.warning {
				background-image: url('../assets/img/DRDS3.png');
			}
		}
		&.rds {
			&.default {
				background-image: url('../assets/img/RDS.png')
			}
			&.danger {
				background-image: url('../assets/img/RDS2.png');
			}
			&.warning {
				background-image: url('../assets/img/RDS3.png');
			}
		}
		&.oss {
			&.default {
				background-image: url('../assets/img/OSS.png')
			}
			&.danger {
				background-image: url('../assets/img/OSS2.png');
			}
			&.warning {
				background-image: url('../assets/img/OSS3.png');
			}
		}
		&.slb {
			&.default {
				background-image: url('../assets/img/SLB.png')
			}
			&.danger {
				background-image: url('../assets/img/SLB2.png');
			}
			&.warning {
				background-image: url('../assets/img/SLB3.png');
			}
		}
		&.exchange {
			padding-bottom: 85px;
			&.default {
				background-image: url('../assets/img/EXCHANGE.png')
			}
			&.danger {
				background-image: url('../assets/img/EXCHANGE2.png');
			}
			&.warning {
				background-image: url('../assets/img/EXCHANGE3.png');
			}			
		}
	}
</style>