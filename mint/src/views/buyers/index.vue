<template>
  <div class="buyers">
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

      <mt-field label="手机" placeholder="请填写手机" v-model="formData.bPhone"></mt-field>

      <mt-field label="国家/地区" class="card-type">
        <mt-picker :slots="countrySlots" :visibleItemCount="3" valueKey="cn" @change="onValuesChange">
        </mt-picker>
      </mt-field>

      <!-- <mt-field label="照片" placeholder="请填写手机" v-model="formData.bPhone"></mt-field> -->

      <mt-field label="感兴趣产品" placeholder="请输入感兴趣的产品类别" v-model="formData.bLikeProduct"></mt-field>

      <mt-field label="公司业务性质" class="card-type">
        <mt-picker :slots="businessSlots" :visibleItemCount="3" valueKey="cn" @change="onValuesChange">
        </mt-picker>
      </mt-field>
      <div class="commom-buttom-wrap">
        <mt-button class="submit-btn" type="primary" size="normal" @click="submit">提交</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {country} from 'constants/country' 
  import cloneDeep from 'lodash.clonedeep'
  export default {
    data () {
      return {
        formData: {
          bName: '',
          bCompany: '',
          bCardNum: '',
          bPost: '',
          bAdress: '',
          bPhone: '',
          bLikeProduct: '',
          bCardType: '身份证',
          bCountry: '中国',
          bCompanyType: '生产商'
        },
        slots: [{
          flex: 1,
          values: [ '身份证', '护照', '港澳居民来往内地通行证', '台湾居民来往大陆通行证'],
        }],
        cardIndex: 0,
        countrySlots: [{
          values: cloneDeep(country)
        }],
        countryIndex: 0,
        businessSlots: [{
          values: ['生产商', '批发商', '代理商', '商场/超市', '行业协会', '零售商', '进出口商', '电商/网商/微商', '媒体', '政府', '其它（请列明）']
        }],
        businessIndex: 0
      }
    },
    created () {
      // .setValues('台湾居民来往大陆通行证')
      this.cardIndex = this.defaultCardIndex('港澳居民来往内地通行证')
    },
    methods: {
      onValuesChange (picker, values) {
        // picker.setSlotValue(1, values[0]);
      },
      submit () {

      },
      defaultCardIndex (val) {
        this.slots[0].defaultIndex = this.slots[0].values.findIndex(item => item === val)
      },
      defaultCountryIndex (val) {
        this.countrySlots[0].defaultIndex = this.countrySlots[0].values.findIndex(item => item.cn === val)
      },
      defaultBusinessIndex (val) {
        this.businessSlots[0].defaultIndex = this.businessSlots[0].values.findIndex(item => item === val)
      }
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
</style>