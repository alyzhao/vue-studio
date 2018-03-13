<template>
	<div class="process first" :style="{height: height + 'vw', paddingRight: height + 0.16 + 'vw'}">
		<div class="pcc" :class="{nodone: !hasDone}" :style="{lineHeight: height + 'vw'}">{{text}}</div>
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
				return this.hasDone ? {} : {top: '0.08vw', right: '0.24vw'};
			}
		}
	}
	
</script>
<style lang="scss">
.process {
	position: relative;
	.pcc {
	    background-color: #28d5f3;
	    color: #000;
	    font-size: 1.25vw;
	    font-weight: bold;
	    padding-left: 1.5vw;
	    border: .08vw solid #28d5f3;
		&.nodone {
			background-color: #000;
			border: .08vw solid #808080;
			color: #808080;
		}
	}
	.on-tri {
		right: 0;
		top: 0;
		&.fir {
			z-index: 10;
		}
	}
}
</style>