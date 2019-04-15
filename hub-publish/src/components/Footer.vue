<template>
  <div class="footer s-content">
    <div class="footer-nav">
      <router-link class="text-small" to="/">简介</router-link>
      <router-link class="text-small" to="/function">功能与参数</router-link>    
      <router-link class="text-small" to="/os">操作系统</router-link>
      <router-link class="text-small" to="/service">服务与应用</router-link>
      <router-link class="text-small" to="/developer">开发者服务</router-link>
      <router-link class="text-small" to="/case">项目实例</router-link>
    </div>
    <div class="copyright explanation">©1692019-2022 Whale.Inc . All Rights Reserved. 杭州帷幄匠心科技有限公司</div>
  </div>
</template>
<style lang="scss">
  .footer {
    .footer-nav {
      padding-top: 90px;
      padding-bottom: 33px;
      a + a {
        margin-left: 100px;
      }
    }
    .copyright {
      padding-bottom: 82px;
    }
  }
</style>