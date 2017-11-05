const express = require('express');
const path = require('path');

// const webpack = require('webpack');

// 启动配置
const port = process.env.PORT || 3000;
const app = express();


app.listen(port, function() {
	console.log('app start on port ' + port);
})