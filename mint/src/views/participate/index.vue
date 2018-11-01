<template>
  <div class="participate mine">
    <!-- <div style="font-size: 1rem;color: #000;line-height: 2rem;">{{formData.openid}}</div> -->
    <Header title="参展申请"></Header>
    <div class="main">
      <mt-field label="申请单位" placeholder="请输入申请单位" v-model="formData.aCompany"></mt-field>
      <mt-field label="单位地址" placeholder="请输入单位地址" v-model="formData.aAdress"></mt-field>
      <mt-field label="单位主页" placeholder="若有单位主页请填写" v-model="formData.aWeb"></mt-field>
      <mt-field label="微信公众号" placeholder="若有公众号请填写" v-model="formData.aWX"></mt-field>
      <mt-radio
        title="有无加入党组织"
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
      <mt-field label="参展类别" class="card-type big">
        <mt-picker :slots="aTypeSlots" :visibleItemCount="3" valueKey="label" @change="onValuesChange">
        </mt-picker>
      </mt-field>      
      <mt-radio
        title="展位/面积"
        v-model="formData.aArea"
        :options="options">
      </mt-radio>
    </div>
    <div class="commom-buttom-wrap" v-if="!exist">
      <mt-button :disabled="confirmDisabled" @click="submit" class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import {aAreaOptions, aTypeOptions} from 'constants/field'
  import cloneDeep from 'lodash.clonedeep'
  import { Indicator } from 'mint-ui'
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
          aParty: '有',
          aProduct: '',
          aBusiness: '',
          aContacts: '',
          aPhone: '',
          aEmail: '',
          aArea: '1',
          aType: '',
          openid: ''
        },
        aPartyOptions: [{
          label: '有',
          value: '有'
        }, {
          label: '无',
          value: '无'
        }],
        aTypeSlots: [{
          values: cloneDeep(aTypeOptions),
          defaultIndex: 0
        }],
        aTypeOptions: cloneDeep(aTypeOptions),
        options: cloneDeep(aAreaOptions),
        exist: true
      }
    },
    created () {
      this.getOpenId().then(({data}) => {
        console.log('openid', data)
        let openid = data.openid
        if (openid) {
          this.formData.openid = openid
          this.loadData(openid)
        } else {
          this.getOpenIdError()
        }
      })
      .catch(this.getOpenIdError)

      // this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg9'
      // this.loadData(this.formData.openid)
    },
    methods: {
      setFile (file) {
        this.formData.aBusiness = file
      },
      loadData (openId) {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineApplication/queryAppById'
        this.axios.get(url, {params: {openid: openId}})
        .then(({data}) => {
          console.log('loadData', data)
          if (data.application) {
            this.exist = true
            this.setData(data.application)
          } else {
            this.exist = false
          }
        })
      },
      setData (data) {
        Object.keys(this.formData).forEach(key => {
          if (key === 'aBusiness') {
            this.$refs.uploadImg.bgImg = 'https://www.x-pingic.com/ASEAN_Mining/img/Appliction/' + data[key]
          } else if (key === 'aType') {
            this.defaultIndex(data.aType)
          }
          this.formData[key] = data[key]
        })
      },
      onValuesChange (picker, values) {
        console.log(values)
        this.formData.aType = values[0].value
      },
      defaultIndex (val) {
        this.aTypeSlots[0].defaultIndex = this.aTypeSlots[0].values.findIndex(item => item.value == val)
      },
      submit () {
        console.log(this.formData)
        Indicator.open()
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineApplication/addApp'
        // alert(JSON.stringify(this.formData))
        this.axios.post(url, this.getFormData(this.formData))
        .then(({data}) => {
          console.log(typeof data)
          if (data) {
            this.MessageBox.alert('操作成功').then(action => {
              console.log('success', data)
              window.location.href = '/'
            })
            .catch(err => console.log(err))            
          } else {
            // alert(data)
            this.serviceError()
          }
        })
        .catch(this.serviceError)
        .finally(() => {
          Indicator.close()
        })
      },
    },
    computed: {
      confirmDisabled () {
        let validate = this.formData.aAdress &&
        this.formData.aCompany &&
        this.formData.aParty &&
        this.formData.aProduct &&
        this.formData.aBusiness &&
        this.formData.aContacts &&
        this.formData.aPhone &&
        this.formData.aEmail &&
        this.formData.aArea &&
        this.formData.openid;
        validate = Boolean(validate) 
        return !validate
      }      
    }
  }
</script>
<style lang="scss">
  .participate {

  }
  .card-type.big {
    .mint-cell-wrapper {
      flex-wrap: wrap;
      .mint-cell-value {
        width: 100%;
        .picker-item {
          font-size: 14px;
        }        
      }
    }
  }
</style>