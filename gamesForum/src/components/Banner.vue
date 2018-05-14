<template>
	<div class="banner-wrap">
		<swiper :options="swiperOption">			
 			<swiper-slide v-for="item in bannerList">
				<div class="banner">
					<router-link v-if="item.router" :to="item.router"><img width="100%" :src="item.pcBanner"></router-link>					
					<a v-if="item.link" :href="item.link" target="_blank"><img width="100%" :src="item.pcBanner"></a>
				</div>
				<div class="mb-banner">
					<router-link v-if="item.router" :to="item.router"><img width="100%" :src="item.mbBanner"></router-link>
					<a v-if="item.link" :href="item.link" target="_blank"><img width="100%" :src="item.mbBanner"></a>					
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	const prodUrl = require('constants/config.js').prodUrl;

	export default {
		props: {
			bannerList: {
				type: Array,
				// default: [{
				// 	router-linkr: '',
				// 	pcBanner: '',
				// 	mbBanner: ''
				// }]
			}
		},
		data() {
			return {
				swiperOption: {
					autoplay: true,
					// pagination: {
					// 	el: '.swiper-pagination',
					// 	type: 'bullets'
					// }
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