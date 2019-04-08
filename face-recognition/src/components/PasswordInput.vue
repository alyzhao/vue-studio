<template>
  <div class="password-input">
    <div class="input-cell" :class="{'on-input': value.length === 0}">{{value[0]}}</div>
    <div class="input-cell" :class="{'on-input': value.length === 1}">{{value[1]}}</div>
    <div class="input-cell" :class="{'on-input': value.length === 2}">{{value[2]}}</div>
    <div class="input-cell" :class="{'on-input': value.length === 3}">{{value[3]}}</div>
  </div>
</template>
<script>
  export default {
    props: ['value'],
    data() {
      return {

      }
    },
    computed: {

    }
  }
</script>
<style lang="scss">
  @keyframes glint {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .password-input {
    .input-cell {
      display: inline-block;
      width: 64px;
      height: 86px;
      line-height: 86px;
      text-align: center;
      background-color: #fff;
      vertical-align: top;
      color:rgba(0,0,0,0.78);
      font-weight:800;
      font-size: 56px;
      position: relative;
      &.on-input::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 40px;
        background-color: rgba(116,190,240,1);
        animation: glint .9s linear infinite alternate;
      }
      & + .input-cell {
        margin-left: 40px;
      }
    }
  }
</style>