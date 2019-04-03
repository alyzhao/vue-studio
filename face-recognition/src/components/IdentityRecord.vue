<template>
  <div class="identity-record">
    <div class="avartar-identity" :style="{backgroundImage: smallAvartar}"></div>
    <div class="record-name nowrap">{{recordName}}</div>
    <div class="record-time">{{recordTime}}</div>
  </div>
</template>
<script>
  import s_defaultAvartar from '@/assets/images/mavartar_default.png'

  export default {
    props: ['avartar', 'recordName', 'recordTime'],
    data() {
      return {

      }
    },
    computed: {
      smallAvartar() {
        let bgImage = this.avartar ? this.avartar : s_defaultAvartar
        return `url(${bgImage})`
      }
    }
  }
</script>
<style lang="scss">
  .identity-record {
    width: 90px;
    .avartar-identity {
      height: 90px;
      border-radius: 50%;
      background-size: contain;
      background-position: center;
    }
    .record-name {
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      margin: 10px 0 8px;
    }
    .record-time {
      color: #d5d5d5;
      font-size: 14px;
      text-align: center;
    }
  }
</style>