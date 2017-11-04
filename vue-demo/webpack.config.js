const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		path.join(__dirname, 'src/main.js')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/dist/'
	},
	resolve: {
		alias: {
			// 重新命名, 在静态资源引用时可以直接使用 components
			components: path.join(__dirname, 'src/components'),
			views: path.join(__dirname, 'src/views'),
			styles: path.join(__dirname, 'src/styles'),
			store: path.join(__dirname, 'src/store'),
			'vue': 'vue/dist/vue.js'	// 防止报错, 具体细节不知道
		},
	    extensions: ['.js', '.vue'],	// 引用js和vue文件可以省略后缀名
	    // fallback: [path.join(__dirname, 'node_modules')] 	// 1.x 版本用 fallback 高版本用一下替换
	    modules: [path.join(__dirname, 'node_modules')] 	// 找不到的模块会尝试在这个数组的目录里面再寻找
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin() // 添加热替换插件
	],
    resolveLoader: {
    	//  这仅仅用来打包 webpack loader packages 才使用的规则
    	modules: [ 'node_modules' ]		// 找不到的loader模块会尝试在这个数组的目录里面再寻找, 1.x 版本用下面那个
        // fallback: [path.join(__dirname, 'node_modules')]		
    },
    devServer: {
    	historyApiFallback: true, // 404的页面会自动跳转到/页面
	    inline: true, // 文件改变自动刷新页面
	    progress: true, // 显示编译进度
	    port: 3002 // 服务器端口
    },
    devtool: 'source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
    module: {
    	loaders: [
    		{
    			test: /\.vue$/,
    			loader: 'vue-loader'
    		},
    		{
    			test: /\.js$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/
    		}
    	]
    }
}