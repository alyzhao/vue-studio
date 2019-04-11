<template>
  <div class="page-title"  @click="goHome" >
    <i class="iconfont icon-arrow-left"></i>
    {{text}}
  </div>
</template>
<script>
  export default {
    props: ['text'],
    methods: {
      goHome() {
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss">
  .page-title {
    font-size: 24px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    color: #333;
    line-height: 36px;
    position: absolute;
    top: 60px;
    left: 65px;
    i {
      font-size: 26px;
      color: #000;
      display: inline-block;
      padding: 0 20px;
    }
  }
</style>