<template>
  <div class="header-mint-custom">
    <img class="header-mint-img" src="../assets/images/header-png.png">
    <div class="header-mint-title">{{title}}</div>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
<style lang="scss">
  .header-mint-custom {
    position: relative;
    .header-mint-img {
      display: block;
      width: 100%;
    }
    .header-mint-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #3963af;
      font-size: 1.5rem;
    }
  }
</style>
