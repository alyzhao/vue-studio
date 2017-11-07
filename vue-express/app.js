const express = require('express');
const path = require('path');

// 启动配置
const port = process.env.PORT || 3001;
const app = express();

// webpack 相关
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');

if (app.get('env') == 'development') {
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}))
}

app.listen(port, function() {
	console.log('app start on port ' + port);
})