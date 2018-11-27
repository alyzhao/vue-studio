<template>
  <div>
    <div class="element" ref="test"></div>
    <!-- <div class="test" ref="test"></div> -->
  </div>
</template>
<script>
  import * as basicScroll from 'basicscroll'

  console.log(basicScroll)

  export default {
    mounted () {
      let test = this.$refs.test
      const instance = basicScroll.create({
        elem: document.querySelector('.element'),
        from: 'top-top',
        to: 'bottom-bottom',
        props: {
          '--opacity': {
            from: .01,
            to: .99
          }
        }
      })
      instance.start()

      // const instance2 = basicScroll.create({
      //   elem: document.querySelector('.test'),
      //   from: 'top-bottom',
      //   to: 'bottom-top',
      //   props: {
      //     '--translateY': {
      //       from: '0',
      //       to: '100%',
      //       timing: 'circIn'
      //     }
      //   }
      // })
      // instance2.start()
    }
  }
</script>
<style lang="scss">
  .test {
    width: 200px;
    height: 100px;
    background-color: #999;
    top: 200px;
    left: 500px;
    position: absolute;
    transform: translateY(var(--translateY));
    will-change: transform;
  }
  .element {
    width: 200px;
    height: 100px;
    background-color: #999;
    top: 45%;
    left: 800px;
    position: absolute;
    will-change: opacity;
    transform: translateY(var(--translateY));
    opacity: var(--opacity)
  }
</style>