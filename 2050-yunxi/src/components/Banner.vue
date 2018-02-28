<template>
	<div class="banner-wrap">
		<swiper :options="swiperOption">
			<swiper-slide>
				<div class="banner"><img width="100%" height="100%" :src="staticHost + bannerUrl"></div>				
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	import { prodUrl } from 'constants/config.js';	

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
				staticHost: prodUrl.staticHost
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				this.axios.get(prodUrl.HOST + '/2050webOnline/onLinebanner/queryBanner').then(response => {
					let resData = response.data;
					this.bannerUrl = resData.imgOne;
					console.log(this.staticHost);
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