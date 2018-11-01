<template>
  <div class="paperwork">
    <mt-field label="证件类型" class="card-type" ref="cardPicker">
      <mt-picker :slots="slots" :visibleItemCount="5" @change="onValuesChange">
      </mt-picker>
    </mt-field>
    <mt-field label="cardName" placeholder="请输入姓名" v-model="formData.cardName"></mt-field>
    <mt-field label="单位名称" placeholder="请输入单位名称" v-model="formData.companyName"></mt-field>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formData: {
          cardType: '',
          cardName: '',
          companyName: '',
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

    },
    methods: {
      onValuesChange (picker, values) {
        this.formData.cardType = values[0]
      },
      defaultCardIndex (val) {
        this.slots[0].defaultIndex = this.slots[0].values.findIndex(item => item === val)
      }
    }
  }
</script>
<style lang="scss">
  
</style>