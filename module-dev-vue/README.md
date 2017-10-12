## 项目说明
1. 目录结构
	src/main.js -- 项目的主入口文件, 加载路由, 渲染 Vue
	src/routes.js -- Vue的路由

## 问题

1. 无法打包在 vue 组件中的 scss
```
在 webpack.config.js 中配置
{
	test: /\.vue$/,
	loader: 'vue-loader',
	options: {
		'scss': 'style-loader!css-loader!sass-loader'
	}
}
```

2. 在 vue 的入口文件 main.js 中打包 es6 解析失败
```
添加 .babelrc 并配置
{
  "presets": ["es2015"]
}
```

3. 打包之后的 build.js.map 是怎么来的， logo.png 名字怎么不变
```
devtool 参数的设置, devtool: '#eval-source-map', 用于追踪源码, 方便调试

//  打包图片时的设置, 在打包目录的根目录下生成 images, 图片名为8位hash + name + 后缀名
module: {
　　loaders: [
　　　　{
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
　　　　}
　　]
}
```

4. 在 webpack 打包图片时, 小于 limit 的会转成 base64 引用， 大于 limit 的会正常打包 
```
module: {
　　loaders: [
　　　　{
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192'
　　　　}
　　]
}    
```