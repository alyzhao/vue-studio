## 项目概述

## 步骤

1. vue 必须的依赖
	- vue
	- vue-loader
	- vue-router
	- vue-template-compiler, be used to pre-compile Vue 2.0 templates into render functions to avoid runtime-compilation overhead and CSP restrictions. 用来编译 vue 2.0 模板

2. webpack 相关依赖 
	- css-loader
	- file-loader
	- url-loader
	- extract-text-webpack-plugin, 不把引用的 css 文件内嵌到 js bundle 当中, 而是放到单独的文件当中
	- webpack-hot-middleware, 在 webpack 的 entry, plugins 中设置之后就能热加载

3. babel 相关依赖, 添加 .babelrc 文件
	- babel-loader
	- babel-core
	- babel-preset-env 之前是用 babel-preset-es2015 , 现在最新的用这个
	- babel-runtime 为了转码哪些 es6 的新 api 的依赖, babel-polyfill 是相同的功能, 但是 polyfill 会污染整个环境, 将 API 挂载在全局对象上, runtime 则不会, runtime 会引入帮助函数, 这就造成了打包的文件大的情况, 所以需要下面的插件
	- babel-plugin-transform-runtime 解决 runtime 打包过大, 将代码复用起来
```
{
	'presets': [
		['env', { 'modules': false }]	// 将 modules 设置为 false, 即交由 Webpack 来处理模块化, 减小打包体积
	],
	'comments': false	// 是否保留注释
}
```

4. 编码分离 webpack 配置文件, 使用 webpack-merge, npm i webpack-merge -D

5. 安装 express 相关依赖, 编码入口文件
	- express 
	- webpack-dev-middleware
	- webpack-hot-middleware
	- morgan 用来监听请求
	- nodemon 监听文件修改, 自动启动服务, 编码 nodemon.json



