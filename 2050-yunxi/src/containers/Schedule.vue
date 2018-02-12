<template>
	<div class="main">
		<Banner :link="'http://vuejs.org'" :banner-img="bannerImg"/>
		<div class="burst">
			<div class="content">
				<div class="title"></div>
				<schedule-cell v-for="item in scheduleList" key="item.time" :data="item">
				</schedule-cell>
			</div>
		</div>
	</div>
</template>
<script>
	import Banner from 'components/Banner';
	import ScheduleCell from 'components/ScheduleCell';

	import platformImg from 'assets/img/ap_plat.png';

	export default {
		data() {
			return {
				bannerImg: platformImg,
				scheduleList: [{
					name: '校友会',
					day: 25,
					month: 5,
					dayEn: 'TWENTY-FICE',
					monthEn: 'MAY',
					time: '01:00-06:00 PM'
				}, {
					name: '欢迎晚宴',
					day: 25,
					month: 5,
					dayEn: 'TWENTY-FICE',
					monthEn: 'MAY',
					time: '02:00-06:00 PM'
				}, {
					name: '开幕式',
					day: 25,
					month: 5,
					dayEn: 'TWENTY-FICE',
					monthEn: 'MAY',
					time: '03:00-06:00 PM'
				}, {
					name: '论坛',
					day: 25,
					month: 5,
					dayEn: 'TWENTY-FICE',
					monthEn: 'MAY',
					time: '04:00-06:00 PM'
				}]
			}
		},
		mounted() {

		},
		components: {
			Banner,
			ScheduleCell
		}
	}
</script>
<style lang="scss">
	.burst {
		background-color: #ffb900;
		.content {
			width: 1380px;
			margin: 0 auto;
			overflow: hidden;
			.title {
				height: 318px;
				margin: 0 auto;
				background: url('../assets/img/tit1.png') no-repeat center center;
				margin: 75px 0;
			}
		}
	}

</style>