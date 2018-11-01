<template>
  <div class="participate mine">
    <Header title="参展申请"></Header>
    <div class="main">
      <mt-field label="申请单位" placeholder="请输入申请单位" v-model="formData.aCompany"></mt-field>
      <mt-field label="单位地址" placeholder="请输入单位地址" v-model="formData.aAdress"></mt-field>
      <mt-field label="单位主页" placeholder="若有单位主页请填写" v-model="formData.aWeb"></mt-field>
      <mt-field label="微信公众号" placeholder="若有公众号请填写" v-model="formData.aWX"></mt-field>
      <mt-radio
        title="是否为党组织"
        v-model="formData.aParty"
        :options="aPartyOptions">
      </mt-radio>
      <mt-field label="供应产品" placeholder="请输入供应产品" v-model="formData.aProduct"></mt-field>
      <mt-field label="营业执照" class="card-type">
        <UploadImg ref="uploadImg" @file-change="setFile" class="field-upload" icon="icon-add" />
      </mt-field>
      <mt-field label="电子邮箱" type="email" placeholder="请输入电子邮箱" v-model="formData.aEmail"></mt-field>
      <mt-field label="参展联系人" placeholder="请输入参展联系人" v-model="formData.aContacts"></mt-field>
      <mt-field label="手机号码" placeholder="请输入手机号码" v-model="formData.aPhone"></mt-field>
      <mt-radio
        title="展位/面积"
        v-model="formData.aArea"
        :options="options">
      </mt-radio>
    </div>
    <div class="commom-buttom-wrap">
      <mt-button class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import {aAreaOptions, aTypeOptions} from 'constants/field'
  import cloneDeep from 'lodash.clonedeep'

    // String aCompany;//申请单位
    // String aAdress;//单位地址
    // String aWeb;//单位主页
    // String aWX;//微信公众号
    // String aParty;//是否党组织 有/无
    // String aProduct;供应产品
    // File   aBusiness;//营业执照
    // String aEmail;//邮箱
    // String aContacts;//参展联系人
    // String aPhone;//手机号码
    // String aType;//参展类别 select
    // String aArea;//1 标准展位 2室内净地 3室外净地 4标准展位+室内净地5标准展位+室外净地
    // String openid; 隐藏 不需要填写 直接参数上传到后台
  
  export default {
    data () {
      return {
        formData: {
          aWX: '',
          aWeb: '',
          aAdress: '',
          aCompany: '',
          aParty: '否',
          aProduct: '',
          aBusiness: '',
          aContacts: '',
          aPhone: '',
          aEmail: '',
          aArea: '1',
          openid: ''
        },
        aPartyOptions: [{
          label: '是',
          value: '是'
        }, {
          label: '否',
          value: '否'
        }],
        aTypeOptions: cloneDeep(aTypeOptions),
        options: cloneDeep(aAreaOptions)
      }
    },
    created () {
      // this.getOpenId().then(({data}) => {
      //   console.log('openid', data)
      //   let openid = data.openid
      //   this.formData.openid = openid
      //   this.loadData(openid)
      // })
      // .catch((err) => {
      //   this.MessageBox.alert('请在微信中打开!').then(action => {
      //     window.location.href = '/'
      //   })
      // })

      this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg1'
      this.loadData(this.formData.openid)
    },
    methods: {
      setFile (file) {
        this.formData.aBusiness = file
      },
      loadData () {
        let url =''
      }
    }
  }
</script>
<style lang="scss">
  .participate {

  }
</style>