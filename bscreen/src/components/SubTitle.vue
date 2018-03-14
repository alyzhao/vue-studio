<template>
	<div class="sub-tab" :class="{active: onActive}">
		<div class="tp" @click="onActive = !onActive">{{tabTitle}}<i class="iconfont icon-up"></i></div>
		<ul :style="tabHeight">
			<li v-for="item in tabList" :key="item.name">{{item.value}}</li>
		</ul>
	</div>	
</template>
<script>
	export default {
		props: ['tabTitle', 'tabList', 'onActiveDefault'],
		data() {
			return {
				onActive: this.onActiveDefault
			}
		},
		computed: {
			tabHeight() {
				let height = this.onActive ? this.tabList.length * 3.3 + 'vw' : '0vw';
				return {height: height}
			}
		}
	}
</script>
<style>
	.sub-tab {
		.tp {
			background-color: #14151a;
			line-height: 3.5vw;
			color: #28d5f3;
			cursor: pointer;
		}
		ul {
			overflow: hidden;
		}
		ul li {
			line-height: 3.3vw;
			color: #f3f3f3;
			&:nth-child(even) {
				background-color: #030a10;	
			}
		}
		.icon-up {
			display: inline-block;
		}
		* {
			text-align: center;
			transition: all .3s;
		}
		&.active {
			.icon-up {
				transform: rotate(180deg);
			}
		}
	}	
</style>