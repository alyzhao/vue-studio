<template>
	<div>
		<ol>
			<li v-for="todo in todos">
				{{todo.text}}
			</li>
		</ol>
		<button @click="eClick()">事件</button>
	</div>
</template>

<script>
	export default {
		name: 'indexP',
		data() {
			return {
				todos: [
					{text: 'Learn JavaScripts'},
					{text: 'Learn Vue'},
					{text: 'Build something awesome'}
				]
			}
		},
		methods: {
			eClick() {
				console.log(666);
			}
		}
	}
</script>