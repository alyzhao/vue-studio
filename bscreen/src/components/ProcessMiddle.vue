<template>
	<div class="process middle" :style="{height: height + 'vw', paddingRight: height + 0.16 + 'vw'}">
		<Triangle class="on-tri front mf"
			:triangle-width="firTriangleWidth" 
			:triangle-color="'#000'" 
			:triangle-direction="'left'"
			:style="middleFirTriangleStyle"/>
		<Triangle class="on-tri front" v-if="!hasDone"
			:triangle-width="height / 2 + 0.08 + 'vw'" 
			:triangle-color="'#808080'" 
			:triangle-direction="'left'"/>				
		<div class="pcc" :class="{nodone: !hasDone}" :style="{lineHeight: height + 'vw', paddingLeft: height + 0.16 + 'vw'}">{{text}}</div>
		<Triangle class="on-tri fir" 
			:style="firTriangleStyle" 
			:triangle-width="firTriangleWidth" 
			:triangle-color="triangleColor" 
			:triangle-direction="'left'"/>
		<Triangle class="on-tri" v-if="!hasDone"
			:triangle-width="height / 2 + 0.08 + 'vw'" 
			:triangle-color="'#808080'" 
			:triangle-direction="'left'"/>	
	</div>
</template>
<script>
	import Triangle from 'components/Triangle';

	export default {
		props: ['text', 'height', 'hasDone'],
		components: {
			Triangle,
		},
		computed: {
			triangleColor() {
				return this.hasDone ? '#28d5f3' : '#000';
			},
			firTriangleWidth() {
				return this.hasDone ? this.height / 2 + 0.08 + 'vw' : this.height / 2 + 'vw';
			},
			firTriangleStyle() {
				return this.hasDone ? {} : {top: '0.08vw', right: '0.25vw'};
			},
			middleFirTriangleStyle() {
				return this.hasDone ? {} : {top: '0.08vw', left: '-0.08vw'};
			}
		}
	}
	
</script>
<style lang="scss">
.process.middle {
	.front {
		left: 0;
		&.mf {
			z-index: 10;
		}
	}
}
</style>