<template>
  <div class="paperwork" v-show="!exist">
    <Header title="证件办理" :exist="exist"></Header>

    <mt-field label="证件类型" class="card-type" ref="cardPicker">
      <mt-picker :slots="slots" :visibleItemCount="3" @change="onValuesChange">
      </mt-picker>
    </mt-field>

    <mt-field v-show="formData.cardType !== '参展商'" :disabled="exist" label="姓名" placeholder="请输入姓名" v-model="formData.cardName"></mt-field>

    <mt-field v-show="formData.cardType !== '参展商'" :disabled="exist" label="单位名称" placeholder="请输入单位名称" v-model="formData.cardCompany"></mt-field>

    <div v-show="formData.cardType == '参展商'">
      <div class="apply-list" v-for="item in moreCardList" :key="item.uuid">
        <div class="mint-checklist-title">
          参展商人员
          <mt-button v-if="!exist" type="danger" size="small" @click="deleteCard(item.uuid)"><i class="iconfont icon-delete"></i>删除</mt-button>
        </div>

        <mt-field :disabled="exist" label="单位名称" placeholder="请输入单位名称" v-model="item.cardCompany"></mt-field>

        <mt-field :disabled="exist" label="姓名" placeholder="请输入姓名" v-model="item.cardName"></mt-field>

        <mt-field :disabled="exist" label="身份证号" placeholder="请输入身份证号" v-model="item.cardNum"></mt-field>

        <mt-field label="性别" class="card-type">
          <mt-radio
            class="in-cell-radio"
            v-model="item.cardSex"
            :options="sexOptions">
          </mt-radio>
        </mt-field>
        <mt-field :disabled="exist" label="手机号" placeholder="请输入手机号" v-model="item.cardPhone"></mt-field>
      </div>
    </div>

    <div class="commom-buttom-wrap" v-if="!exist && formData.cardType == '参展商'">
      <mt-button @click="addCard" class="submit-btn" type="primary" plain size="normal">添加参展商人员</mt-button>
    </div>

    <div class="commom-buttom-wrap" v-if="!exist">
      <mt-button :disabled="confirmDisabled" class="submit-btn" type="primary" size="normal" @click="submit">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import { Indicator } from 'mint-ui'
  import cloneDeep from 'lodash.clonedeep'

  export default {
    data () {
      return {
        formData: {
          cardType: '',
          cardName: '',
          cardCompany: '',
          openid: ''
        },
        moreCardList: [{
          uuid: this.uuid(),
          cardCompany: '',
          cardName: '',
          cardNum: '',
          cardSex: '',
          cardPhone: ''
        }],
        partFormData: {
          cardSex: '',
          cardNum: '',
          cardPhone: ''
        },
        sexOptions: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        exist: true,
        slots: [{
          flex: 1,
          values: ['参展商', '专业观众', '志愿者', '安保', '工作人员'],
          defaultIndex: 0
        }]
      }
    },
    created () {
      this.getOpenId().then(({data}) => {
        console.log('openid', data)
        let openid = data.openid
        this.formData.openid = openid
        this.loadData(openid)
      })
      .catch((err) => {
        this.MessageBox.alert('请在微信中打开!').then(action => {
          this.$router.push('/account')
        })
      })

      // this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg23'
      // this.loadData(this.formData.openid)
    },
    methods: {
      addCard () {
        this.moreCardList.push({
          uuid: this.uuid(),
          cardCompany: '',
          cardName: '',
          cardNum: '',
          cardSex: '',
          cardPhone: ''
        })
        console.log(this.moreCardList)
      },
      deleteCard (uuid) {
        let index = this.moreCardList.findIndex(item => item.uuid === uuid)
        console.log(index)
        if (index != -1) {
          this.moreCardList.splice(index, 1)        
        }
      },
      loadData (openid) {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineCard/queryCardById'
        this.axios.get(url, {params: {openid: openid}})
        .then(({data}) => {
          console.log('loadData', data)
          if (data.card) {
            this.exist = true
            this.MessageBox.alert('您已办理过证件, 请到 我的证件 中查看!').then(action => {
              console.log('success', data)
              location.href = '/'
            })
            .catch(err => console.log(err))
            // this.setData(data.card)
          } else {
            this.exist = false
          }
        })
        .catch(this.serviceError)
      },
      onValuesChange (picker, values) {
        this.formData.cardType = values[0]
      },
      defaultCardIndex (val) {
        this.slots[0].defaultIndex = this.slots[0].values.findIndex(item => item === val)
      },
      checkCardList () {
        if (this.formData.cardType !== '参展商') {
          return true
        }
        if (this.moreCardList.length === 0) {
          return false
        }
        let validate = true
        console.log(this.moreCardList)
        for (let i = 0, length = this.moreCardList.length; i < length; i++) {
          let item = this.moreCardList[i]
          let validateItem = item.cardCompany && item.cardName && item.cardSex && item.cardNum && item.cardPhone
          if (!Boolean(validateItem)) {
            validate = false
            break
          }
        }
        return validate
      },
      submit () {
        // console.log(qs.stringify(this.formData))
        // return
        if (!this.checkCardList()) {
          this.Toast('请填写完证参展商人员信息, 可删除多余的人员!')
          return
        }
        Indicator.open()
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineCard/addCard'
        let params = {
          cardType: this.formData.cardType
        }
        // let params = cloneDeep(this.formData)
        if (this.formData.cardType !== '参展商') {
          params.cardCompany = this.formData.cardCompany
          params.cardName = this.formData.cardName
          params.openid = this.formData.openid
        } else {
          let moreCardList = this.moreCardList.map(item => {
            let newItem = cloneDeep(item)
            delete newItem.uuid
            newItem.cardType = this.formData.cardType
            newItem.openid = this.formData.openid
            return newItem
          })
          params.moreCard = JSON.stringify(moreCardList)
        }
        this.axios.post(url, qs.stringify(params))
        .then(({data}) => {
          console.log(data)
          if (data) {
            this.MessageBox.alert('操作成功, 可到 我的证件 中查看证件信息').then(action => {
              console.log('success', data)
              location.href = '/'
            })
            .catch(err => console.log(err))            
          } else {
            this.serviceError()
          }
        })
        .catch(this.serviceError)
        .finally(() => {
          Indicator.close()
        })
      }
    },
    computed: {
      confirmDisabled () {
        if (this.formData.cardType == '参展商') {
          return false
        }
        let validate = this.formData.cardType && this.formData.cardName && this.formData.cardCompany 
        return !Boolean(validate)
      }
    }
  }
</script>
<style lang="scss">
  
</style>