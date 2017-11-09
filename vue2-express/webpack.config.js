const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/main.js')	// path.resolve 返回绝对路径
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js',
		publicPath: '/build'	// public 就是供服务器访问静态资源的的文件夹, 可以随便定义只是一个编码而已
	},
	devtool: 'inline-source-map', 
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader'
		}, {
			test: /\.vue$/,
			use: {
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							use: 'css-loader'
						})
					}
				}
			}
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'images/[name].[hash:7].[ext]'
				}
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf|)(\?.*)?$/, 
			use: {
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
		}, {
			test: /\.css/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader']
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '/build/style.css'
		}),
		new webpack.optimize.UglifyJsPlugin({  
            compress: { warnings: false } 
        })
	]
}