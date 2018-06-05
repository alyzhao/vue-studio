## 使用 vue-cli 脚手架搭建项目, 做一些有趣的事

### 搭建项目

#### 使用 vue-cli

`npm install -g @vue/cli` 全局安装 `vue-cli`

`vue create project-name` 创建一个项目, 项目名要小写

#### 使用 vuex

`npm install vuex --save`

### some interesting thing

#### vuex 中多个 module 有同名的 action, mutations,未使用命名空间, 注册 mapActions, mapMutations 的时候, 调用的是哪个方法?

事实证明无论是以 `this.$store.dispatch('xxx')` 还是以 `mapActions` 分发 Action 同名的方法都会被调用, 该 module 中的 state 都会改变 

同样的, 无论以 `this.$store.commit('xxx')` 还是以 `mapMutations` 中提交同名的 Mutation, 都会被调用, 该 module 中的 state 都会改变