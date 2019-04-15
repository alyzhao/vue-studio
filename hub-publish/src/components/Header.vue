<template>
  <div class="header">
    <router-link to="/">简介</router-link>
    <router-link to="/function">功能与参数</router-link>    
    <router-link to="/os">操作系统</router-link>
    <router-link to="/service">服务与应用</router-link>
    <router-link to="/developer">开发者服务</router-link>
    <router-link to="/case">项目实例</router-link>
  </div>
</template>
<style lang="scss">
  .header {
    a {
      display: inline-block;
      padding: 36px 0 16px;
      color: #242b35;
      &.router-link-active {
        color: #9DA2A6;
      }
      & + a {
        margin-left: 80px;
      }
    }
  }
</style>