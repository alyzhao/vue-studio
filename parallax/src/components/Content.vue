<template>
  <div class="container">
    <div class="g item1"></div>
    <div class="g item2"></div>
    <div class="g item3"></div>
    <div class="item4-wrap"><div class="g item4"></div></div>
    <div><div class="g item5"></div></div>
  </div>
</template>
<script>
  import * as basicScroll from 'basicscroll'

  export default {
    mounted () {
      const instance = basicScroll.create({
        elem: document.querySelector('.item5'),
        from: 'top-bottom',
        to: 'bottom-bottom',
        props: {
          '--ty': {
            from: 0,
            to: '100px'
          },
          '--h': {
            from: '200px',
            to: '0px'
          }
        }
      })
      instance.start()
    }
  }
</script>
<style lang="scss">
  .container {
    .g {
      height: 200px;
    }
    .item1 {
      background-color: #000
    }
    .item2 {
      background-color: #333
    }
    .item3 {
      background-color: #666
    }
    .item4-wrap {
      will-change: height;
      overflow: hidden;
      height: var(--h);
    }
    .item4 {
      background-color: #999;
      background-image: linear-gradient(0deg, #000, #fff);
    }
    .item5 {
      background-color: #e42141;
    }
  }
</style>