<template>
  <div class="second-verify">
    <div class="verify-input">
      <div>
        <div class="pass-avartar"><img src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"></div>
        <PasswordInput :value="keyNumber" />
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

    .pass-avartar {
      padding: 10px;
      width: 155px;
      height: 155px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 0 auto;
      margin-bottom: 50px;
      img {
        // display: block;
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

  }
</style>