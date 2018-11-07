<template>
  <div class="paperwork">
    <Header title="证件办理" :exist="exist"></Header>
    <mt-field label="证件类型" class="card-type" ref="cardPicker">
      <mt-picker :slots="slots" :visibleItemCount="3" @change="onValuesChange">
      </mt-picker>
    </mt-field>
    <mt-field :disabled="exist" label="姓名" placeholder="请输入姓名" v-model="formData.cardName"></mt-field>
    <mt-field :disabled="exist" label="单位名称" placeholder="请输入单位名称" v-model="formData.cardCompany"></mt-field>
    <div class="commom-buttom-wrap" v-if="!exist">
      <mt-button :disabled="confirmDisabled" class="submit-btn" type="primary" size="normal" @click="submit">提交</mt-button>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import { Indicator } from 'mint-ui'

  export default {
    data () {
      return {
        formData: {
          cardType: '',
          cardName: '',
          cardCompany: '',
          openid: ''
        },
        exist: false,
        slots: [{
          flex: 1,
          values: [ '参展商', '专业观众', '志愿者', '安保', '工作人员'],
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

      // this.formData.openid = 'oPs9h0YFTx3JEdySKNVOWdHS0asg2'
      // this.loadData(this.formData.openid)
    },
    methods: {
      setData (data) {
        Object.keys(this.formData).forEach(key => {
          if (key === 'cardType') {
            this.defaultCardIndex(data.cardType)
          }
          this.formData[key] = data[key]
        })
      },
      loadData (openid) {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineCard/queryCardById'
        this.axios.get(url, {params: {openid: openid}})
        .then(({data}) => {
          console.log('loadData', data)
          if (data.card) {
            this.exist = true
            this.setData(data.card)
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
      submit () {
        // console.log(qs.stringify(this.formData))
        // return
        Indicator.open()
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineCard/addCard'
        this.axios.post(url, qs.stringify(this.formData))
        .then(({data}) => {
          console.log(data)
          if (data) {
            this.MessageBox.alert('操作成功').then(action => {
              console.log('success', data)
              this.$router.push('/account')
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
        let validate = this.formData.cardType && this.formData.cardName && this.formData.cardCompany
        return !Boolean(validate)
      }
    }
  }
</script>
<style lang="scss">
  
</style>