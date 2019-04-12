<template>
  <div class="prompt">
    <div class="prompt-icon">
      <img v-if="type === 'success'" src="../assets/images/icon_success.png">
      <img v-else-if="type === 'failed'" src="../assets/images/icon_failed.png">
    </div>
    <div class="prompt-text">{{text}}</div>
    <slot>
      <div class="prompt-jump">2s后自动跳转</div>
    </slot>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'success'
      },
      text: {
        type: String
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>
<style lang="scss">
  .prompt {
    .prompt-icon {
      text-align: center;
      img {
        width: 172px;
        height: 172px;
        vertical-align: top;
      }
    }
    .prompt-text {
      font-size: 56px;
      font-weight: 500;
      color: rgba(0,0,0,0.78);
      line-height: 78px;
      text-align: center;
      margin-top: 30px;
    }

    .prompt-jump {
      font-size: 24px;
      font-weight:500;
      color: rgba(0,0,0,0.2);
      line-height: 33px;
      text-align: center;
    }
  }
</style>