<template>
	<div class="banner-wrap">
		<swiper :options="swiperOption">
			<swiper-slide>
				<div class="banner"><img width="100%" :src="bannerUrl && (staticHost + bannerUrl)"></div>				
				<div class="mb-banner"><img width="100%" src="../assets/img/mb-banner.png"></div>
				<!-- <div class="banner"><img width="100%" height="100%" src="../assets/img/banner.png"></div>				 -->
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	// import { prodUrl } from 'constants/config.js';	
	const prodUrl = require('constants/config.js').prodUrl;

	console.log(prodUrl)	

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
				staticHost: prodUrl.imgHost
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				this.axios.get(prodUrl.HOST + '/2050webOnline/onLinebanner/queryBanner').then(response => {
					let resData = response.data;
					this.bannerUrl = resData.imgOne;
				})
			})
		},
		methods: {

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
		position: relative;
		width: 100%;
		img {
			display: block;
		}
	}
	.mb-banner {
		display: none;
	}
	@media (max-width: 1200px) {
		.mb-banner {
			display: block;
		}
		.banner {
			display: none;
		}
	}

</style>