<template>
	<div class="banner-wrap">
		<swiper :options="swiperOption">
			<swiper-slide>
				<div class="banner"></div>				
			</swiper-slide>
			<swiper-slide>
				<div class="banner"></div>				
			</swiper-slide>
			<swiper-slide>
				<div class="banner"></div>				
			</swiper-slide>			
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		props: ['link', 'bannerImg'],
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets'
					}
				}
			}
		},
		methods: {
			bgUrl(img) {
				return 'url(' + img + ')'
			}
		}
	}
</script>
<style lang="scss">
	.banner-wrap {
		margin-top: -80px;
		.swiper-pagination-bullet {
			width: 10px;
			height: 10px;
			background: #fff;
			opacity: 1;
			transition: all .2s linear;
			&.swiper-pagination-bullet-active {
				width: 60px;
				background: #fff;
				border-radius: 5px;
			}
		}
	}
	.banner {
		background: url('../assets/img/banner.png');
		height: 880px;
		position: relative;
		width: 100%;
	}
</style>