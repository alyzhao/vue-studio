<template>
  <div class="avartar">
    <div class="aperture" :class="{'working circle-animation': working}"></div>
    <div class="avartar-img" :style="{backgroundImage: avartarBgImage}"></div>
    <div class="s-avartar">
      <div class="s-avartar-img" :style="{backgroundImage: smallAvartarBgImage}"></div>
    </div>
  </div>
</template>
<script>
  import defaultAvartar from '@/assets/images/avartar_default.png'
  import s_defaultAvartar from '@/assets/images/mavartar_default.png'

  export default {
    props: ['avartar', 'smallAvartar', 'working'],
    data() {
      return {
        defaultAvartar: `url(${defaultAvartar})`,
        s_defaultAvartar: `url(${s_defaultAvartar})`,
      }
    },
    computed: {
      avartarBgImage() {
        let bgImage = this.avartar ? this.avartar : defaultAvartar
        return `url(${bgImage})`
      },
      smallAvartarBgImage() {
        let bgImage = this.smallAvartar ? this.smallAvartar : s_defaultAvartar
        return `url(${bgImage})`
      }
    }
  }
</script>
<style lang="scss">
  @keyframes circle {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .circle-animation {
    animation: circle 1.5s linear infinite;
  }
  .avartar {
    width: 266px;
    height: 266px;
    position: relative;
    .aperture {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      &.working {
        background-image: linear-gradient(#003FFF, #CD4FE4);        
      }
    }
    .avartar-img {
      width: 240px;
      height: 240px;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-position: center;
      background-size: contain;
    }
    .s-avartar {
      position: absolute;
      width: 75px;
      height: 75px;
      box-sizing: border-box;
      padding: 6px;
      background-color: #fff;
      bottom: 8px;
      right: 8px;
      border-radius: 50%;
      .s-avartar-img {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
        border-radius: 50%;
      }
    }
  }
</style>