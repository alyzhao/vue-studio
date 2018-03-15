<template>
	<div class="main resource">
		<div class="title">资源库存</div>
		<div class="tab">
			<div class="top-tab">
				<span class="active">节点一</span>
				<span>节点二</span>
			</div>
			<div class="bt-tab">
				<span>ECS</span>
				<span>RDS</span>
				<span>OSS</span>
				<span>DISK</span>
				<span>EIP</span>
			</div>
		</div>
		<div class="quantity">
			<div class="c-tit">数量</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="scss">
	.resource {
		.tab {
			margin-top: 30px;
			.top-tab {
				line-height: 50px;
				color: #7e7e7e;
			    font-size: 20px;
			    font-weight: bold;
			    span {
			    	display: inline-block;
			    	width: 123px;
			    	text-align: center;
			    	border-top: 2px solid #131313;
			    	border-left: 2px solid #131313;
			    	border-right: 2px solid #131313;
			    	border-top-left-radius: 3px;
			    	border-top-right-radius: 3px;
			    	margin-right: 35px;	    	
			    	&.active {
			    		background-color: #28d5f3;
			    		color: #000;
			    	}
			    }
			}
			.bt-tab {
				border: 2px solid #131313;
				border-left: 2px solid #28d5f3;
				padding: 15px 0;
				span {
					display: inline-block;
					width: 80px;
					line-height: 35px;
					color: #e0e0e0;
					font-size: 16px;
					border: 2px solid #4e4e4e;
					border-radius: 3px;
					text-align: center;
					margin: 0 35px;
				}

			}
		}
		.quantity {
			.c-tit {
				padding-left: 20px;
			}
		}
	}
	.c-tit {
		font-size: 18px;
		color: #28d5f3;
	}
</style>