<template>
  <div class="entrance">
    <header>
      <div class="logo flex-center">
        <img src="../../assets/images/logo.png">
      </div>
      <div class="language flex-center">
        <span class="active">中</span>
        <span class="split">/</span>
        <span>Eng</span>
      </div>
    </header>
    <div class="title">
      <p class="center-text">2018(第九届)中国-东盟矿业合作论坛暨推介展示会</p>
      <p class="center-text" style="font-size: 16px;">中国—东盟矿业新技术 矿山机械 珠宝玉石展览会</p>
    </div>
    <div class="swipe-wrap">
      <mt-swipe :auto="0" style="height: 200px;">
        <mt-swipe-item>
          <div class="swiper-content">1</div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="swiper-content">2</div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="swiper-content">3</div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="classify flex-center">
      <div class="item">
        <mt-button @click="goRouter('/forum')">
          <i class="iconfont icon-luntan"></i>
          <span>论坛</span>
        </mt-button>        
      </div>
      <div class="item">
        <mt-button @click="goRouter('/exhibition')">
          <i class="iconfont icon-zhanhui"></i>
          <span>展会概况</span>
        </mt-button>        
      </div>
      <div class="item">
        <mt-button @click="goRouter('/news')">
          <i class="iconfont icon-xinwenzixun"></i>
          <span>新闻资讯</span>
        </mt-button>        
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .entrance {
    padding: 10px 15px;
    .classify {
      margin-top: 30px;
      justify-content: space-between;
      .item {
        width: 30%;
        position: relative;
        &:after {
          padding-bottom: 100%;
          content: "";
          display: block;
        }
        .mint-button {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 8px;
          label {
            width: 100%;
            display: inline-block;
            i {
              font-size: 30px;
              font-weight: bold;
              color: #409EFF;
              margin-bottom: 10px;
            }
            i, span {
              display: block;
            }
          }
        }
      }
    }
    header {
      position: relative;
      .language {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        span {
          color: #409EFF;
          padding: 5px 10px;
          &.active {
            color: #E6A23C;
          }
          &.split {
            color: #ccc;
            padding: 0;
          }
        }
      }
    }
    .title {
      margin-top: 20px;
      p {
        font-weight: bold;
        line-height: 160%;        
      }
    }
    .logo {
      img {
        display: block;
        max-height: 120px;
        max-width: 50%;
      }
    }
    .swipe-wrap {
      height: 200px;
      margin-top: 30px;
    }
    .swiper-content {
      width: 100%;
      height: 200px;
      background-image: linear-gradient(#85b3e8 20%, #073cf1 80%);
    }
  }
</style>