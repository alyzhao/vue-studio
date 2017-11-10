const express = require('express');
const path = require('path');
const morgan = require('morgan');
const serveStatic = require('serve-static');

const port = process.env.PORT || 3001;
const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);

if (app.get('env') === 'development') {
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}));
	app.use(webpackHotMiddleware(compiler, {
		log: console.log()
	}));
}

if (app.get('env') === 'development') {
	app.set('showStackError', true);
	app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
	app.locals.pretty = true;
}

// express 默认模板引擎是 ejs 
var ejs = require('ejs');
app.set('views', path.resolve(__dirname, './'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use('/', function(req, res) {
	res.render('./index.html');
})

// app.use(serveStatic(path.join(__dirname, './build'), {
// 	'cacheControl': false 	// 这是个可选 options
// }));

app.listen(port, function() {
	console.log('app started on port ' + port);
})