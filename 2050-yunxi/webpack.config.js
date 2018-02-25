const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');	// 用这个插件可以把css都提取出来

module.exports = {
	entry: {
		app: [path.resolve(__dirname, './src/main.js'), path.resolve(__dirname, './src/assets/sass/index.scss')]	// path.resolve 返回绝对路径
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		publicPath: './'		// public 就是供服务器访问静态资源的的文件夹, 可以随便定义只是一个编码而已
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'src': path.resolve(__dirname, './src'),
			'assets': path.resolve(__dirname, './src/assets'),
			'components': path.resolve(__dirname, './src/components'),
			'constants': path.resolve(__dirname, './src/constants')
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader'
		}, {
			test: /\.vue$/,
			use: {
				loader: 'vue-loader',
				options: {
					// 把写在 vue 模板里的 css 提取出来
					loaders: {
						css: ExtractTextPlugin.extract({
							use: ['css-loader', 'sass-loader'],
							fallback: 'style-loader'
						}),
						scss: ExtractTextPlugin.extract({
							use: ['css-loader', 'sass-loader'],
							fallback: 'style-loader'
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
			test: /\.s?css$/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader', 'sass-loader'],
				fallback: 'style-loader'
			})
		}]
	},
	devServer: {
		port: 3000,
		historyApiFallback:{
            index:'/index.html'
        },
		contentBase: './',
		publicPath: '/',
		hot: true,
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css'	// 这是提取到 output 中去的, 可以加 '/' 建立一个文件夹
		}),
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: '"production"'
		// 	}
		// }),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.optimize.UglifyJsPlugin({
  //           compress: { 
  //           	warnings: false,
  //           	drop_debugger: true,  
		// 		drop_console: true
  //       	} 
  //       })
	]
}