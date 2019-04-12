<template>
  <div class="sign-up">
    <BackNav text="注册 Face ID"/>
    <div class="steps">
      <el-steps :active="activeStep" align-center>
        <el-step title="录入照片"></el-step>
        <el-step title="填写资料"></el-step>
        <el-step title="admin认证"></el-step>
      </el-steps>
    </div>

    <div class="entry-data" v-show="activeStep === 1">
      <div class="progress-wrap">
        <el-progress type="circle" :percentage="progress" color="#6FC9EF" :show-text="false" :width="640" :stroke-width="28">
          <div class="ssss"></div>
        </el-progress>
        <div class="input-data">
          
        </div>
      </div>
      <div class="entry-data-status">信息展示</div>
    </div>

    <div class="fill-info" v-show="activeStep === 2">
      <div class="card-img">
        <img src="../assets/images/card_machine.png" width="173">
        <div class="card-tips">刷卡机上刷卡</div>
      </div>
      <div class="info-split"><span>或</span></div>
      <div class="info-form-wrap">
        <InfoForm />
      </div>
    </div>

    <div class="signup-result" v-show="activeStep === 3">
      <Prompt v-show="false" type="success" text="通过认证，注册成功" />

      <Prompt type="failed" text="管理员认证失败">
        <div class="admin-refused">
          <el-button>取消注册</el-button>

          <el-button type="primary">重新认证</el-button>
        </div>
      </Prompt>
    </div>
  </div>
</template>
<script>
  import BackNav from '@/components/BackNav'
  import InfoForm from '@/components/InfoForm'
  import Prompt from '@/components/Prompt'

  export default {
    components: {
      BackNav,
      InfoForm,
      Prompt,
    },
    data() {
      return {
        progress: 15,
        activeStep: 3,
      }
    }
  }
</script>
<style lang="scss">
  .sign-up {
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(148,157,177,0.1);
    position: relative;
    .steps {
      padding-top: 50px;
      width: 390px;
      margin: 0 auto;
      .el-step__head.is-finish {
        color: #fff;
        border-color: #85AAEA;
        .el-step__icon {
          background-color: #85AAEA;
        }
      }
      .el-step__head.is-wait {
        color: #fff;
        border-color: #DEE1E7;
        .el-step__icon {
          background-color: #DEE1E7;
        }
      }
      .el-step__head.is-process {
        color: #fff;
        border-color: #DEE1E7;
        .el-step__icon {
          background-color: #DEE1E7;
        }
      }
      .el-step__line {
        background-color: #E1E3E8;
      }
      .el-step__icon {
        height: 56px;
        width: 56px;
        font-size: 28px;
      }
      .el-step.is-horizontal .el-step__line {
        top: 28px;
      }
    }

    .entry-data {
      margin-top: 80px;
      .progress-wrap {
        position: relative;
        width: 640px;
        height: 640px;
        margin: 0 auto;
      }
      
      .input-data {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 570px;
        height: 570px;
        border-radius: 50%;
        background: url(../assets/images/profile.png) no-repeat center center;
        background-size: contain;
      } 
    }

    .entry-data-status {
      font-size: 48px;
      font-weight: 500;
      color: rgba(0,0,0,0.78);
      line-height:72px;
      text-align: center;
      margin-top: 45px;
      padding-bottom: 100px;
    }
    .el-step__title {
      font-size: 24px;
      font-weight: 500;
      &.is-finish {
        color: #85AAEA;        
      }
      &.is-process, &.is-wait {
        color:rgba(0,0,0,0.6);        
      }
    }

    // 填写资料
    .fill-info {
      width: 1010px;
      margin: 65px auto;
      display: flex;
      .card-img {
        img {
          display: block;
        }
        .card-tips {
          font-size: 24px;
          color: rgba(0,0,0,0.6);
          text-align: center;
          margin-top: 15px;
        }
      }
      .info-split {
        margin-left: 95px;
        background-color: rgba(148,157,177,0.2);
        position: relative;
        // flex-basis: max-content;
        width: 2px;
        span {
          position: absolute;
          display: block;
          background: rgba(244,245,247,1);
          color: rgba(0,0,0,0.2);
          font-size: 24px;
          padding: 12px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .info-form-wrap {
        width: 640px;
        margin-left: 95px;
      }
    }

    .signup-result {
      margin-top: 12vh;
    }

    .admin-refused {
      text-align: center;
      margin-top: 48px;
      .el-button {
        font-size: 30px;
        padding: 17px 30px;
        + .el-button {
          margin-left: 80px;
        }
      }
      .el-button--default {
        border: 2px solid rgba(148,157,177,0.3);
        color: rgba(116,190,240,1);
      }
      .el-button--primary {
        background-color: #74BEF0;
        border-color: #74BEF0;
      }
      .el-button--primary:hover, .el-button--primary:focus {
        background: #90cbf3;
        border-color: #90cbf3;
      }
    }
  }
</style>