<template>
	<div class="trip">
		<div class="trip-cell" v-for="(item, index) in tripList" :key="index">
			<div class="time">
				<span class="date">{{item.date}}</span>
				<span class="split"></span>
			</div>
			<div class="con">
				<div class="wrap">
					<div class="tri">
						<p v-for="(route, index) in item.tripRoute" :key="index">{{route.departure}} <font color="#999">至</font> {{route.destination}}</p>
<!-- 						<p class="bus-time">发车时间：12:00, 15:00</p>
						<p class="bus-rule">发车规则：坐满发车或者每个整点发车</p>
 -->					
					</div>
					<div class="hotel" v-if="item.hotel">
						<p class="hotel-rec">周边酒店信息（仅供参考）</p>
						<p v-for="(hotel, index) in item.hotel" :key="index">{{hotel}}</p>
					</div>
				</div>
				<div class="wrap">
					<div class="tri">
						<p v-for="(line, index) in item.tripLine" :key="index">{{line}}</p>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>
<script>
    import {tripList} from 'constants/guide.js';
	
	export default {
		data() {
			return {
				tripList: tripList				
			}
		},
		mounted: function() {
			console.log(this.tripList);
		}
	}
</script>
<style lang="scss">
	.guide .trip, .guide .schedule {
		.trip-cell, .schedule-cell {
			.bus-time, .bus-rule {
				color: #67cfea;
			}
			.time {
				height: 33px;
				position: relative;
				margin-bottom: 15px;
			}
			.date {
			    font-weight: bold;
			    font-size: 22px;
			    color: #333;
			    display: inline-block;
			    background-color: #fff;
			    padding-right: 80px;
			    z-index: 10;
			    position: absolute;
			}
			.split {
			    display: inline-block;
			    height: 1px;
			    background-color: #d2d2d2;
			    width: 100%;
			    position: absolute;
			    left: 0;
			    top: 50%;
			}
			.con {
				display: flex;
				flex-wrap: wrap;
			    justify-content: space-between;
			    .wrap {
			    	width: 49%;
			    	.tri {
			    		margin-bottom: 30px;
			    		p {
			    			line-height: 30px;
			    			color: #333;
			    		}
			    	}
			    	.hotel {
			    		p {
			    			font-size: 14px;
			    			color: #666;
			    		}
			    		.hotel-rec {
						    font-size: 14px;
						    line-height: 29px;
						    display: inline-block;
						    height: 29px;
						    margin-bottom: 12px;
						    padding: 0 20px;
						    color: #29bbe2;
						    border: 1px solid #29bbe2;
						    border-radius: 29px;			    			
			    		}
			    	}
			    }
			}
		}
	}
	@media (max-width: 768px) {
		.guide .trip .trip-cell .con .wrap .hotel {
		    padding: 0 5px 5px;
		    border: 2px solid #e9e9e9;
		    border-radius: 5px;
		    overflow: hidden;
		    margin-bottom: 20px;
		    .hotel-rec {
	    	    margin-bottom: 0;
	    	    padding: 0;
	    	    border: none;
		    }
		}
		.guide .trip .trip-cell .con .wrap {
			width: 100%;
		}
	}	
</style>