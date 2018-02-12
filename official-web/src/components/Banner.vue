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
							<button class="laybtn">查看详情</button>
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
				position: relative;
				height: 100%;
				z-index: 900;
				min-width: 1000px;
				max-width: 1200px;
				margin-left: auto;
				margin-right: auto;
				overflow: hidden;
				.layer {
					color: #fff;
					position: absolute;
					top: 200px;
					line-height: 50px;
					a {
						text-decoration: none;
						outline: none;
					}
					h1, p {
						margin: 0;
						color: #fff;
						text-align: left;
					}
					h1 {
						font-size: 44px;
						font-weight: 400;
					}
					p {
						font-size: 20px;
					}
					.laybtn {
						color: #fff;
						border: 1px solid #fff;
						background-color: transparent;
						outline: none;
						cursor: pointer;
						margin-top: 30px;
						font-size: 16px;
						float: left;
						width: 120px;
						height: 36px;
						transition: all .3s ease-in-out;
						line-height: 36px;
						&:hover {
							color: #373d41;
							background-color: #fff;
						}
					}
				}
			}
		}
	}
</style>