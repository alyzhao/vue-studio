<template>
  <div class="buyers">
    <!-- <div style="font-size: 1rem;color: #000;line-height: 2rem;">{{openId}}</div> -->
    <Header title="采购商登记"></Header>
    <div class="main">
      <mt-field label="姓名" placeholder="请输入姓名" v-model="formData.bName"></mt-field>
      <mt-field label="单位名称" placeholder="请输入单位名称" v-model="formData.bCompany"></mt-field>
      <mt-field label="证件类型" class="card-type" ref="cardPicker">
        <mt-picker :slots="slots" :visibleItemCount="3" @change="onValuesChange">
        </mt-picker>
      </mt-field>
      <mt-field label="证件号码" placeholder="根据选择的证件类型输入" v-model="formData.bCardNum"></mt-field>

      <mt-field label="职务" placeholder="请填写职务" v-model="formData.bPost"></mt-field>

      <mt-field label="地址" placeholder="请填写地址" v-model="formData.bAdress"></mt-field>

      <mt-field label="手机号" placeholder="请填写手机号" v-model="formData.bPhone"></mt-field>

      <mt-field label="国家/地区" class="card-type">
        <mt-picker :slots="countrySlots" :visibleItemCount="3" valueKey="cn" @change="countryValuesChange">
        </mt-picker>
      </mt-field>

      <!-- <mt-field label="照片" placeholder="请填写手机" v-model="formData.bPhone"></mt-field> -->
      <mt-field label="照片" class="card-type">
        <UploadImg ref="uploadImg" @file-change="setFile" class="field-upload" icon="icon-add" />
      </mt-field>

      <mt-field label="感兴趣产品" placeholder="请输入感兴趣的产品" v-model="formData.bLikeProduct"></mt-field>

      <mt-field label="公司业务性质" class="card-type">
        <mt-picker :slots="businessSlots" :visibleItemCount="3" valueKey="cn" @change="businessValuesChange">
        </mt-picker>
      </mt-field>
      <div class="commom-buttom-wrap" v-if="exist">
        <mt-button :disabled="confirmDisabled" class="submit-btn" type="primary" size="normal" @click="submit">提交</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {country} from 'constants/country' 
  import cloneDeep from 'lodash.clonedeep'
  import UploadImg from 'components/UploadImg'
  import qs from 'qs'
  // bName;//个人姓名
  // bImg;//证件照
  // bCardType;//证件类型
  // bCardNum;//证件号码
  // bCountry;//国家
  // bAdress;//地址
  // bPhone;//电话
  // bCompany;//公司
  // bCompanyType;//公司业务性质 
  // bPost;//职务 
  // bLikeProduct;//感兴趣的产品类别
  // openid;//进入公众号 后台返回的userId
  export default {
    data () {
      return {
        formData: {
          bImg: 'img',
          bName: '',
          bCompany: '',
          bCardNum: '',
          bPost: '',
          bAdress: '',
          bPhone: '',
          bLikeProduct: '',
          bCardType: '身份证',
          bCountry: '中国',
          bCompanyType: '生产商',
          openid: ''
        },
        exist: false,
        slots: [{
          flex: 1,
          values: [ '身份证', '护照', '港澳居民来往内地通行证', '台湾居民来往大陆通行证'],
          defaultIndex: 0
        }],
        cardIndex: 0,
        countrySlots: [{
          values: cloneDeep(country),
          defaultIndex: 0
        }],
        countryIndex: 0,
        businessSlots: [{
          defaultIndex: 0,
          values: ['生产商', '批发商', '代理商', '商场/超市', '行业协会', '零售商', '进出口商', '电商/网商/微商', '媒体', '政府', '其它（请列明）']
        }],
        businessIndex: 0,
      }
    },
    created () {
      // .setValues('台湾居民来往大陆通行证')
      // this.cardIndex = this.defaultCardIndex('港澳居民来往内地通行证')
        // if (this.getOpenId()) {
          
        // }
      // alert(this.getOpenId())
      // this.formData.openid = this.getOpenId()
      // oPs9h0YFTx3JEdySKNVOWdHS0asg

      // this.getOpenId().then(({data}) => {
      //   console.log('openid', data)
      //   let openid = data.openid
      //   this.formData.openid = openid
      //   this.loadData(openid)
      // })
      // .catch(this.serviceError)

      this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg10'
      this.loadData(this.formData.openid)
    },
    methods: {
      setFile (file) {
        this.formData.bImg = file
      },
      setData (data) {
        Object.keys(this.formData).forEach(key => {
          if (key === 'bCardType') {
            this.defaultCardIndex(data.bCardType)
          } else if (key === 'bCountry') {
            this.defaultCountryIndex(data.bCountry)
          } else if (key === 'bCompanyType') {
            this.defaultBusinessIndex(data.bCompanyType)
          } else if (key === 'bImg') {
            this.$refs.uploadImg.bgImg = data[key]
          }
          this.formData[key] = data[key]
        })
      },
      loadData (openId) {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineBuyer/queryBuyerById'
        this.axios.get(url, {params: {openid: openId}})
        .then(({data}) => {
          console.log('loadData', data)
          if (data.buyer) {
            this.exist = false
            this.setData(data.buyer)
          } else {
            this.exist = true
          }
        })
        .catch(this.serviceError)
      },
      onValuesChange (picker, values) {
        // picker.setSlotValue(1, values[0]);
        console.log(values)
        this.formData.bCardType = values[0]
      },
      countryValuesChange (picker, values) {
        this.formData.bCountry = values[0].cn
      },
      businessValuesChange (picker, values) {
        this.formData.bCompanyType = values[0]
      },
      submit () {
        console.log(this.formData)
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineBuyer/addBuyer'
        this.axios.post(url, this.getFormData(this.formData))
        .then(({data}) => {
          console.log(typeof data)
          if (data) {
            this.MessageBox.alert('操作成功').then(action => {
              console.log('success', data)
            })
            .catch(err => console.log(err))            
          } else {
            this.serviceError()
          }
        })
        .catch(this.serviceError)
      },
      defaultCardIndex (val) {
        this.slots[0].defaultIndex = this.slots[0].values.findIndex(item => item === val)
      },
      defaultCountryIndex (val) {
        this.countrySlots[0].defaultIndex = this.countrySlots[0].values.findIndex(item => item.cn === val)
        console.log(this.countrySlots[0].defaultIndex)
      },
      defaultBusinessIndex (val) {
        this.businessSlots[0].defaultIndex = this.businessSlots[0].values.findIndex(item => item === val)
      }
    },
    computed: {
      confirmDisabled () {
        let validate = this.formData.bImg && this.formData.bName && this.formData.bCompany && this.formData.bCardNum && this.formData.bPost && this.formData.bAdress && this.formData.bPhone && this.formData.bLikeProduct && this.formData.bCardType && this.formData.bCountry && this.formData.bCompanyType && this.formData.openid;
        validate = Boolean(validate)
        return !validate
      }
    },
    components: {
      UploadImg
    }
  }
</script>
<style lang="scss">
  .card-type {
    .mint-field-core {
      display: none;
    }
    .mint-field-other {
      width: 100%;
    }
  }
  .field-upload {
    margin: 10px 0;
  }
</style>