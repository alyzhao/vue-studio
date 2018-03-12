<template>
	<div class="split" :style="{ backgroundColor: color, height: height }"></div>
</template>
<script>
	export default {
		props: ['color', 'height']
	}	
</script>
<style lang="scss">
	.split {
		width: 100%;
	}
</style>