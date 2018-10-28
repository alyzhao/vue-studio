<template>
  <div class="mine">
    <div class="main">
      <mt-field label="单位名称" placeholder="请输入单位名称" v-model="formData.companyName"></mt-field>
      <mt-field label="单位地址" placeholder="请输入单位地址" v-model="formData.companyAddress"></mt-field>
      <mt-field label="单位主页" placeholder="若有单位主页请填写" v-model="formData.homePage"></mt-field>
      <mt-field label="微信公众号" placeholder="若有公众号请填写" v-model="formData.weChatNumber"></mt-field>
      <!-- 营业执照 -->
      <mt-field label="电子邮箱" type="email" placeholder="请输入电子邮箱" v-model="formData.email"></mt-field>
      <mt-field label="单位联系人" placeholder="请输入单位联系人" v-model="formData.contactPerson"></mt-field>
      <mt-field label="固定电话" placeholder="请输入固定电话" v-model="formData.phone"></mt-field>
      <mt-field label="单位简介" :rows="5" type="textarea" placeholder="请输入单位简介" v-model="formData.introduction"></mt-field>
    </div>
    <div class="submit-btn-wrap">
      <mt-button class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formData: {
          companyName: '',
          companyAddress: '',
          homePage: '',
          weChatNumber: '',
          email: '',
          contactPerson: '',
          phone: '',
          introduction: ''
        }
      }
    },
    created () {

    }
  }
</script>
<style lang="scss">
  .mine {
    overflow: hidden;
    .main {
      margin-bottom: 55px;
    }
  }
  .submit-btn-wrap {
    position: fixed;
    width: 100%;
    bottom: 0vh;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .submit-btn {
    width: 100%;
  }
</style>