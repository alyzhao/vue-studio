<template lang="html">
	<div>
		hello, vue
		<p class="gotta" @click="getContent()"> ---!!!</p>
		<quill-editor   
            :content="content"
            :options = "editorOption"  
            @change="onEditorChange($event)">
        </quill-editor>
	</div>
</template>
<script>
	import './test.scss';
	import { quillEditor } from 'vue-quill-editor';
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'

	export default {
		data() {
			return {
				content: '111111',
				editorOption: {
		          modules: {
		            toolbar: [
		              [{ 'size': ['small', false, 'large'] }],
		              ['bold', 'italic'],
		              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
		              ['link', 'image']
		            ],
		            history: {
		              delay: 1000,
		              maxStack: 50,
		              userOnly: false
		            }
		          }
		        }
		    }
		},
		methods: {
			onEditorChange({ editor, html, text }) {
				console.log(html);
			},
			getContent() {
				console.log(this.content);
			}
		},
		components: {
			quillEditor
		}
	}

</script>
<style lang="scss">
	div {
		color: blue;
		.gotta {
			color: #e42141;
		}
	}
</style>