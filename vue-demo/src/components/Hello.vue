<template lang='html'>
  <div>{{message}}</div>
</template>

<script>
	export default {
		name: 'hello',
		// data : () => ({
		// 	message: 'Hi Vue'
		// })
		data() {
			return {
				message: 'Hi Vue ---- '
			}
		}
	}
</script>