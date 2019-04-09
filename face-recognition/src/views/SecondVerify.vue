<template>
  <div class="second-verify">
    <div class="page-title">
      <i class="iconfont icon-arrow-left"></i>
      二次验证
    </div>
    <div class="verify-input">
      <div>
        <div class="pass-avartar-wrap">
          <div class="pass-avartar working circle-animation"></div>
          <div class="pass-avartar-image">
            <!-- <img src="../assets/images/avartar_default.png"> -->
            <img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg">
          </div>
        </div>
        
        <PasswordInput :value="keyNumber" />
        <div class="pass-error">
          <i class="iconfont icon-error"></i>
          请重新输入（剩余2次机会）
        </div>
      </div>
    </div>
    <div class="verify-keypad">
      <Numerickeypad v-model="keyNumber" />
    </div>
  </div>
</template>
<script>
  import Numerickeypad from '@/components/Numerickeypad'
  import PasswordInput from '@/components/PasswordInput'

  export default {
    components: {
      Numerickeypad,
      PasswordInput,
    },
    data() {
      return {
        keyNumber: ''
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  .second-verify {
    background: center no-repeat url(../assets/images/bg_pattern.png);
    background-size: cover;
    height: 100%;
    position: relative;
    .page-title {
      position: absolute;
      top: 60px;
      left: 65px;
      font-size: 24px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.3);
      line-height: 36px;
      i {
        font-size: 26px;
        color: #000;
        display: inline-block;
        padding: 0 20px;
      }
    }
    .verify-input {
      height: 55%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .verify-keypad {
      height: 45%;
      display: flex;
      justify-content: center;
      .numeric-keypad {
        height: 100%;
        width: 400px;
      }
    }
    .pass-avartar-wrap {
      width: 165px;
      height: 165px;
      position: relative;
      margin: 0 auto;
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .pass-avartar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 10px;
      border-radius: 50%;
      background-color: #fff;
      box-sizing: border-box;
      &.working {
        background-image: linear-gradient(#003FFF, #CD4FE4);        
      }
    }
    .pass-avartar-image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px;
      box-sizing: border-box;
    }
    img {
      // display: block;
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    .pass-error {
      i {
        font-size: 22px;
      }
      color: #F3233E;
      font-size: 22px;
      text-align: center;
      vertical-align: middle;
      margin-top: 30px;
    }
  }
</style>