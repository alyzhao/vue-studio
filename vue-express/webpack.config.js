const path = require('path');

module.exports = {
	entry: {
		index: [ path.resolve(__dirname, '../src/main.js') ]
	},
	output: {
		path: path.resolve(__dirname, '../output'),
		publicPath: '/',
		filename: '[name].[hash].js'
	},
	resolve: {
		extensions: ['js', '.vue', 'json'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}],
		vue: {
			loaders: {
				js: 'babel'
			}
		}
	}
}