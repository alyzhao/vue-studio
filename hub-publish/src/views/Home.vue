<template>
  <div class="home">
    <div class="slide slide-1">
      <h1 class="headline">Whale Hub</h1>
      <h1 class="headline">小身材，大能量</h1>
      <h2 class="subtitle">解决商用边缘计算的场景应用</h2>
    </div>

    <div class="slide slide-2">
      
    </div>

  </div>
</template>
<script>
// @ is an alias to /src
  export default {
    name: 'home',
    components: {
      
    }
  }
</script>
<style lang="scss">
  .slide {
    background-size: cover;
    background-position: center center;
    height: 980px;
    padding: 0 10.5%;
    .headline:first-child {
      padding-top: 200px;
    }
    &.slide-1 {
      background-image: url(../assets/images/slidebg_01.png);
    }
    &.slide-2 {
      background-image: url(../assets/images/slidebg_02.png);
    }

  }
</style>
