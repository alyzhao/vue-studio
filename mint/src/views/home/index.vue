<template>
  <div class="home flex-center">
    <div class="main">
      <h1 class="title center-text">2018（第九届）中国—东盟矿业</h1>
      <h1 class="title center-text">合作论坛暨推介展示会</h1>
      <p class="sub-title center-text">距离开幕式还有</p>
      <div class="main-time center-text">
        <span class="time">45</span>
        <span class="unit">天</span>
      </div>
      <p class="start-time center-text">开幕时间：2018年11月15日</p>
      <div class="chanel clearfix">
        <mt-button type="primary" size="large" @click="goEntrance">点击进入</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goEntrance () {
        this.$router.push('/entrance')
      }
    }
  }
</script>
<style lang="scss">
  .home {
    background: transparent url('../../assets/images/homebg.png') 100% 100%;
    min-height: 100vh;
    .title {
      font-size: 24px;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, .5);
      color: #fff;
      line-height: 150%;
      font-weight: bold;
    }
    .sub-title {
      font-size: 20px;
      color: #fff;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, .5);
      margin-top: 25px;
    }
    .main-time {
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .time {
      font-size: 80px;
      color: #ffc000;
    }
    .unit {
      font-size: 24px;
      color: #fff;
    }
    .start-time {
      color: #fff;
      font-size: 16px;
    }
    .chanel {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
      .mint-button {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 15px;
        padding: 0;
        background-image: linear-gradient(150deg, #85b3e8 20%, #073cf1 80%);
        label {
          font-weight: bold;
          width: 100%;
          display: inline-block;
        }
      }
    }
  } 
</style>