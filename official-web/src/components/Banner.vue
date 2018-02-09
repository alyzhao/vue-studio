<template>
	<div class="banner">
		<div class="top-banner">
			<div v-for="item in banners" class="item"
				key="item.key"
				:class="{center: item.key === centerBannerIndex}">
				<div class="gradient-mask" :style="{backgroundImage: gradient(item.maskColor)}"></div>
				<div class="row">
					<div class="layer">
						<a :href="item.link" target="_blank">
							<h1>{{item.title}}</h1>
							<p>{{item.subTitle}}</p>
							<button>查看详情</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			banners: Array
		},
		data() {
			return {
				centerBannerIndex: 0
			}
		},
		mounted() {

		},
		methods: {
			gradient(color) {
				return `linear-gradient(180deg, ${color.startColor}, ${color.endColor})`
			}
		},
		compute: {
		}
	}
</script>
<style lang="scss">
	.banner {
		background-color: #24282c;
		height: 640px;
		overflow: hidden;
		position: relative;
		top: -100px;
	}
	.top-banner {
		overflow: hidden;
		width: 100%;
		position: relative;
		height: 640px;
		.item {
			position: absolute;
			height: 640px;
			width: 100%;
			overflow: hidden;
			visibility: hidden;
			&.center {
				visibility: visible;
				z-index: 100;
				transform: translateZ(0);
			}
			.gradient-mask {
				z-index: 897;
				height: 640px;
				width: 100%;
				background-color: transparent;
				opacity: 1;
				position: absolute;
			}
			.row {

			}
		}
	}
</style>