<template>
  <div class="mine">
    <div class="main">
      <mt-field label="单位名称" placeholder="请输入单位名称" v-model="formData.companyName"></mt-field>
      <mt-field label="单位地址" placeholder="请输入单位地址" v-model="formData.companyAddress"></mt-field>
      <mt-field label="单位主页" placeholder="若有单位主页请填写" v-model="formData.homePage"></mt-field>
      <mt-field label="微信公众号" placeholder="若有公众号请填写" v-model="formData.weChatNumber"></mt-field>
      <!-- 营业执照 -->

      <mt-field label="照片" class="card-type">
        <UploadImg @file-change="setFile" class="field-upload" icon="icon-add" />
      </mt-field>

      <mt-field label="电子邮箱" type="email" placeholder="请输入电子邮箱" v-model="formData.email"></mt-field>
      <mt-field label="单位联系人" placeholder="请输入单位联系人" v-model="formData.contactPerson"></mt-field>
      <mt-field label="固定电话" placeholder="请输入固定电话" v-model="formData.phone"></mt-field>
      <mt-field label="单位简介" rows="5" type="textarea" placeholder="请输入单位简介" v-model="formData.introduction"></mt-field>
    </div>
    <div class="commom-buttom-wrap">
      <mt-button class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import UploadImg from 'components/UploadImg'

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

    },
    methods: {
      setFile (file) {

      }
    },
    components: {
      UploadImg
    }
  }
</script>
<style lang="scss">
  .mine {
    overflow: hidden;
  }
  .submit-btn {
    width: 100%;
  }
</style>