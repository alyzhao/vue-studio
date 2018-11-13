<template>
  <div class="paperwork" v-show="exist">
    <Header title="我的证件"></Header>

    <mt-cell title="证件类型" :value="formData.cardType"></mt-cell>

    <mt-cell v-show="formData.cardType !== '参展商'" title="姓名" :value="formData.cardName"></mt-cell>

    <mt-cell v-show="formData.cardType !== '参展商'" title="单位名称" :value="formData.cardCompany"></mt-cell>

    <div v-show="formData.cardType == '参展商'">
      <div class="apply-list" v-for="item in moreCardList" :key="item.cardId">
        <div class="mint-checklist-title">
          参展商人员
        </div>

        <mt-cell title="单位名称" :value="item.cardCompany"></mt-cell>

        <mt-cell title="姓名" :value="item.cardName"></mt-cell>

        <mt-cell title="身份证号" :value="item.cardNum"></mt-cell>

        <mt-cell title="性别" :value="item.cardSex"></mt-cell>

        <mt-cell title="手机号" :value="item.cardPhone"></mt-cell>
      </div>
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
        moreCardList: [],
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
      setData (data) {
        this.formData.cardType = data[0].cardType
        this.formData.cardCompany = data[0].cardCompany
        this.formData.cardName = data[0].cardName
        if (data.length > 1) {
          this.moreCardList = data
        }
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
            this.MessageBox.alert('您还未办理过证件, 请到 首页证件办理 中办理!').then(action => {
              location.href = '/'
            })
            .catch(err => console.log(err))
          }
        })
        .catch(this.serviceError)
      }
    }
  }
</script>
<style lang="scss">
  
</style>