<template>
  <div class="account">
    <Header title="个人中心"></Header>
    <div class="main-padding flex-center">
      <a class="item" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3b62f31b43c8f76a&redirect_uri=https://www.x-pingic.com/mint/%23/paperwork/&response_type=code&scope=snsapi_base#wechat_redirect">
        <mt-button>
          <i class="iconfont icon-zhengjian"></i>
          <span>证件办理</span>
        </mt-button>          
      </a>
    </div>
  </div>
</template>
<script>
  
</script>
<style lang="scss">
  .account {
    .main-padding {
      justify-content: space-between;
      .item {
        width: 30%;
        position: relative;
        margin-bottom: 20px;
        &:after {
          padding-bottom: 80%;
          content: "";
          display: block;
        }
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
            font-size: 26px;
            font-weight: bold;
            color: #0070e4;
            background-repeat: no-repeat;
            background-size: auto 100%;
            background-position: center;
            height: 30px;
            margin-bottom: 10px;
            display: block;
          }
          span {
            display: block;
            font-size: 14px;
          }
        }
      }
    }
    a {
      color: unset;
      text-decoration: none;
    }
  }
</style>