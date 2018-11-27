<template>
  <div>
    <div class="container" style="background-color: #999">
      
    </div>
    <div class="split" ref="split"></div>
    <div class="footer" ref="footer">
      <div class="footer-con"></div>
    </div>
  </div>
</template>
<script>
  import * as basicScroll from 'basicscroll'

  export default {
    mounted () {
      let split = this.$refs.split
      let offset = split.offsetTop - window.innerHeight
      console.log(offset)
      const instance = basicScroll.create({
        // elem: split,
        from: offset + 'px',
        to: offset + 300 + 'px',
        props: {
          '--height': {
            from: '0',
            to: '300px'
          }
        }
      })
      instance.start()
    }
  }
</script>
<style lang="scss">
  .split {
    height: 0px;
    opacity: 0;
    visibility: hidden;
    // margin-top: -300px;
  }
  .footer {
    will-change: height;
    height: var(--height);
    overflow: hidden;
    position: relative;
    .footer-con {
      position: absolute;
      bottom: 0;
      height: 300px;
      width: 100%;
      background-image: linear-gradient(180deg, #000, #fff);
    }
  }
</style>