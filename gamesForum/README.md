## 项目概述

### 启动项目

```
npm install
npm run dev
```

### 打包发布

新建 dist 目录, 作为打包目录

```
npm run dev
```

### 目录结构

```
├── README.md                   // README
├── src                         // 前端目录
│   ├── assets                  // vue 静态资源存放目录
│   │   ├── fonts               // 字体文件
│   │   ├── img                 // 图片文件
│   │   └── sass                // scss 文件
│   ├── components              // 通用组建目录
│   ├── constant                // 配置文件目录   
│   ├── containers              // 路由文件存放目录, 每个路由新建一个文件, 二级路由也放在这里面
│   ├── vuex                    // vuex 目录
│   ├── App.vue                 // vue 挂载的根组建
│   ├── mian.js                 // 入口文件
│   └── router.js               // 入口文件
├── .babelrc                    // babel 配置文件
├── .gitognore                  // git 忽略文件配置
├── index.html                  // 主页面
├── package.json                // 项目包依赖说明
└── webpackage.config.json      // webpack 配置文件
```