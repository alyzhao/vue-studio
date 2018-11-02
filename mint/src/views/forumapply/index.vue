<template>
  <div class="forum-apply">
    <!-- <div style="font-size: 1rem;color: #000;line-height: 2rem;">{{formData.openid}}</div> -->
    <Header title="论坛报名"></Header>
    <div class="main">
      <mt-field label="姓名" placeholder="请输入姓名" v-model="formData.fName"></mt-field>

      <mt-field label="联系方式" placeholder="请输入联系方式" v-model="formData.fPhone"></mt-field>

      <mt-checklist
        class="bigger-checklist"
        title="选择套餐(可多选)"
        v-model="formData.fPack"
        :options="fPackOptions">
      </mt-checklist>
    </div>
    <div class="commom-buttom-wrap" v-if="!exist">
      <mt-button :disabled="confirmDisabled" @click="submit" class="submit-btn" type="primary" size="normal">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import {fPackOptions} from 'constants/field'
  import cloneDeep from 'lodash.clonedeep'
  import { Indicator } from 'mint-ui'
  import qs from 'qs'
    /*String fName;//姓名
      String fPhone;//手机号码
      String fPack;//套餐     注册费:人民币800元/人 （传参：01）
            包括：参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等。
      
            套餐1服务:人民币1800元/人（传参：02） 
            包括：机场接送机和会务用车（限会期内推荐酒店和会议地点）、会期中/晚自助餐、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）

            套餐2服务:人民币2800元/人（传参：03） 
            包括：大会指定酒店住宿（3晚，1人/间，含早餐）、会期中/晚自助餐、机场接送机和会务用车（限会期内推荐酒店和会议地点）、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）。        
      String openid;  */
  export default {
    data () {
      return {
        formData: {
          fName: '',
          fPhone: '',
          fPack: ['01'],
          openid: ''
        },
        exist: true,
        fPackOptions: cloneDeep(fPackOptions),
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

      // this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg2'
      // this.loadData(this.formData.openid)
    },
    methods: {
      loadData (openId) {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/queryForumById'
        this.axios.get(url, {params: {openid: openId}})
        .then(({data}) => {
          console.log('loadData', data)
          if (data.forumform) {
            this.exist = true
            this.setData(data.forumform)
          } else {
            this.exist = false
          }
        })
      },
      setData (data) {
        Object.keys(this.formData).forEach(key => {
          if (key === 'fPack') {
            this.formData.fPack = data.fPack.split(',')
          } else {
            this.formData[key] = data[key]            
          }
        })
      },
      submit () {
        this.MessageBox.confirm('确定填写信息无误, 并提交吗?').then(action => {
          Indicator.open()
          let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/addForum'
          let params = cloneDeep(this.formData)
          params.fPack = params.fPack.join(',')
          console.log(params)
          this.axios.post(url, qs.stringify(params))
          .then(({data}) => {
            console.log(typeof data)
            if (data) {
              this.MessageBox.alert('提交成功').then(action => {
                console.log('success', data)
                window.location.href = '/page/tqhd/index.html'
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
        })
      }
    },
    computed: {
      confirmDisabled () {
        let validate = this.formData.fName &&
        this.formData.fPhone &&
        this.formData.fPack.length;
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
  .bigger-checklist .mint-checklist-label {
    padding: 10px;
  }
</style>