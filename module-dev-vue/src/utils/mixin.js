var mix = {
	created: function() {
		this.hello();
	},
	methods: {
		hello: function() {
			console.log('mixin---');
		}
	}
}

export default mix;