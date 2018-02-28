<template>
	<div class="banner-wrap">
		<swiper :options="swiperOption">
			<swiper-slide>
				<div class="banner"><img width="100%" height="100%" :src="publicPath + bannerUrl"></div>				
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				swiperOption: {
					autoplay: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets'
					}
				},
				bannerUrl: null,
				publicPath: 'http://47.100.174.9:8081/2050website/img/'
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				this.axios.get('http://47.100.174.9:7001/2050webOnline/onLinebanner/queryBanner').then(response => {
					let resData = response.data;
					this.bannerUrl = resData.imgOne;
				})
			})
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
		// background: url('../assets/img/banner.png');
		height: 960px;
		position: relative;
		width: 100%;
	}
</style>