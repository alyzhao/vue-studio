## 项目介绍

用 vue + webpack + express 搭建 vue 项目

## 步骤

1. npm install --save express 安装 express 编写入口文件 app.js 搭建服务器

2.  安装 webpack 并配置 webpack.config.js
	- npm install --save-dev webpack

3. 安装 babel 相关依赖, 并添加 .babelrc 文件
	- npm install --save-dev babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-runtime babel-preset-stage-2
	- babel-core, babel-loader: babel配合webpack工具使用必须要引入的
	- babel-plugin-transform-runtime, babel-runtime: 解决重复出现在一些模块里，导致编译后的代码体积变大的问题
	- babel-preset-es2015 将es6编译成es5
```
// .babelrc 文件
{  
	"presets": ["es2015","stage-2"],  
	"plugins": ["transform-runtime"],  
	"comments": false
}
```

4. npm install --save-dev webpack-dev-middleware , 安装 webpack 中间件这样不用每次都打包, 打包文件放到内存中, 并编码 app.js
