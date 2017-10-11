## 项目说明

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
