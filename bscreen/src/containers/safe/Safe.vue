<template>
	<div class="main">
		<div class="title">
			<img style="margin-left: 20px;" src="../../assets/img/logo-cj.png">
			<ul>
				<li :class="{active: tabCheckedIndex == 0}" @click="tabCheckedIndex = 0"><a>攻击事件</a></li>
				<li :class="{active: tabCheckedIndex == 1}" @click="tabCheckedIndex = 1"><a>主机安全事件</a></li>
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
						<li v-for="item in workOrderList" :key="item.id">{{item.value}}</li>
					</ul>
					<div class="split"></div>					
				</div>
			</div>
			<div class="right">
				<div class="listItem">
					<p>i-35031ts50</p>
				</div>
				<div class="tit-thing">	
					<div class="tit">事件列表</div>
				</div>
				<div class="order thing">
					<ul>
						<li v-for="item in thingList" :key="item.id">{{item.value}}</li>
					</ul>										
				</div>
				<div class="tit-thing tit-line" >	
					<div class="tit line">事件详情:</div>
					<p class='line' style="margin-left:2vw;">20170518 xxx实例发生PHP远程multipart/form-data DOS.</p>
				</div>
				<div class="tit-thing">	
					<div class="tit">故障趋势</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tabCheckedIndex: 0,
				workOrderList: [{
					id: 1,
					value: 'i-35031ts5o'
				}, {
					id: 2,
					value: 'i-35031ts5o'
				}, {
					id: 3,
					value: 'i-35031ts5o'
				}, {
					id: 4,
					value: 'i-35031ts5o'
				}],
				thingList: [{
					id: 1,
					value: 'i-35031ts5o'
				}, {
					id: 2,
					value: 'i-35031ts5o'
				}, {
					id: 3,
					value: 'i-35031ts5o'
				}, {
					id: 4,
					value: 'i-35031ts5o'
				}, {
					id: 5,
					value: 'i-35031ts5o'
				}, {
					id: 6,
					value: 'i-35031ts5o'
				}]
			}
		},
		
		methods: {

		}
	}
</script>
<style scoped>
	html, body {
		height: 100%;

	}
	.main{
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

			    }			
			}
			ul li a {  
			    color: white;
			    text-decoration: none;  
			    font-size: 1.25vw;
				vertical-align: middle;
			}
			
		}
		.tit-wrap #fonts{
			font-size: 1.25vw;
		}
		.listItem{
			width: 100%;
			padding-bottom: 0.5vw;
			border-bottom: 3px solid #020a2f;

			p{
				color: white;
				font-size: 1.2vw;
			}
		}
		.tit-thing .tit{
			line-height: 3vw;
			color: #28d5f3;
			z-index: 998;
			position: relative;
			font-size: 1.25vw;
		}
		.thing {
			height: 19vw;
			width: 100%;
			border: 3px solid #020a2f;
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
			border-bottom: 3px solid #020a2f;
			.line {
				display: inline;
			}
		}
		
	}
</style>