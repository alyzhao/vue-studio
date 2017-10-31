# vuesetup

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 怎样搭建起一个 vue 的骨架

## express 跨域 cors

## vuex

1. state 这是所有组件共享的数据

2. actions 提供组件改变 state 的方法

```
this.$store.dispatch('ADD_NEW_PROJECT'); 		// 以此来触发 action 事件
```

3. mutations 由 actions 来触发的方法, 只能从这儿改变 state

4. getters 计算出的供其他组件调用的值

```
import { mapGetters } from 'vuex';

computed: {
  ...mapGetters([
    'completedProjects',
    'projectCount'
  ])
}

// 等同于

computed: {
	projectCount() {
		return this.$store.getters.projectCount;
	}
}

```


