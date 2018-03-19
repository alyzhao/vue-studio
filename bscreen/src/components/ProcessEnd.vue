<template>
	<div class="process end" :style="{height: height + 'vw'}">
		<Triangle class="on-tri front mf"
			:triangle-width="firTriangleWidth" 
			:triangle-color="'#000'" 
			:triangle-direction="'left'"
			:style="middleFirTriangleStyle"/>
		<Triangle class="on-tri front" v-if="!hasDone"
			:triangle-width="height / 2 + 0.08 + 'vw'" 
			:triangle-color="'#20265b'" 
			:triangle-direction="'left'"/>				
		<div class="pcc" :class="{nodone: !hasDone}" :style="{lineHeight: height + 'vw', paddingLeft: height + 0.16 + 'vw'}">{{text}}</div>
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
				return this.hasDone ? '#3b015c' : '#0a092b';
			},
			firTriangleWidth() {
				return this.hasDone ? this.height / 2 + 0.08 + 'vw' : this.height / 2 + 'vw';
			},
			firTriangleStyle() {
				return this.hasDone ? {} : {top: '0.08vw', right: '0.24vw'};
			},
			middleFirTriangleStyle() {
				return this.hasDone ? {} : {top: '0.08vw', left: '-0.08vw'};
			}
		}
	}
	
</script>
<style lang="scss">
.process.end {
	.front {
		left: 0;
		&.mf {
			z-index: 10;
		}
	}
}
</style>