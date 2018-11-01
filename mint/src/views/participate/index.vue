<template>
  <div class="participate mine">
    <Header title="参展申请"></Header>
    <div class="main">
      <mt-field label="国家" placeholder="请输入国家" v-model="formData.country"></mt-field>
      <mt-field label="申请单位" placeholder="请输入申请单位" v-model="formData.companyName"></mt-field>
      <mt-field label="单位地址" placeholder="请输入单位地址" v-model="formData.companyAddress"></mt-field>
      <mt-field label="单位主页" placeholder="若有单位主页请填写" v-model="formData.homePage"></mt-field>
      <mt-field label="微信公众号" placeholder="若有公众号请填写" v-model="formData.weChatNumber"></mt-field>
      <mt-radio
        title="展位/面积"
        v-model="formData.boothType"
        :options="options">
      </mt-radio>
      <mt-field label="标准展位" placeholder="请输入数字" type="number" v-model="formData.boothNumber"></mt-field>
      <mt-field label="参展说明" rows="5" type="textarea" placeholder="请输入参展说明" v-model="formData.introduction"></mt-field>
    </div>
    <div class="commom-buttom-wrap">
      <mt-button class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formData: {
          country: '',
          companyAddress: '',
          homePage: '',
          weChatNumber: '',
          boothType: '',
          boothNumber: '',
          introduction: ''
        },
        options: [{
          label: '标准展位',
          value: '0'
        },
        {
          label: '室内净地',
          value: '1'
        },
        {
          label: '室外净地',
          value: '2'
        },
        {
          label: '标准展位+室内净地',
          value: '3'
        },
        {
          label: '标准展位+室外净地',
          value: '4'
        }]
      }
    }
  }
</script>
<style lang="scss">
  .participate {

  }
</style>