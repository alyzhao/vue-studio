<template>
  <div class="edit-shops">
    <el-form ref="shopInfo" :model="shopInfo" label-width="120px" :rules="shopRules" status-icon style="padding: 30px 30px 10px 0;">
      <el-form-item label="商家邮箱" prop="email">
        <el-input style="max-width: 500px" v-model="shopInfo.email" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家密码" prop="password" v-if="!isEdit">
        <el-input style="max-width: 500px" v-model="shopInfo.password" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家名称" prop="shopName">
        <el-input style="max-width: 500px" v-model="shopInfo.shopName" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家电话" prop="shopPhone">
        <el-input style="max-width: 500px" v-model="shopInfo.shopPhone" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家地址" prop="shopAddress">
        <el-input style="max-width: 500px" v-model="shopInfo.shopAddress" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家门店" prop="shopStore">
        <el-input style="max-width: 500px" v-model="shopInfo.shopStore" clearable></el-input>
      </el-form-item>

      <el-form-item label="营业执照" prop="shopLicense">
        <UploadImg ref="uploadImg" :imgSrc="shopInfo.shopLicense" @file-change="fileChange" />
      </el-form-item>

      <el-form-item label="入驻时间" prop="shopCheckDate">
        <el-date-picker
          v-model="shopInfo.shopCheckDate"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('shopInfo')">{{submitText}}</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import UploadImg from 'components/UploadImg'

  export default {
    props: ['id'],
    data () {
      return {
        shopInfo: {
          email: '',
          password: '',
          shopName: '',
          shopAddress: '',
          shopPhone: '',
          shopStore: '',
          shopLicense: '',
          shopCheckDate: ''
        },
        shopRules: {
          email: [{ required: true , message: '商家邮箱不能为空', trigger: 'blur'}],
          password: [{ required: true , message: '商家密码不能为空', trigger: 'blur'}],
          shopName: [{ required: true, message: '商家名称不能为空', trigger: 'blur' }],
          shopAddress: [{ required: true, message: '商家地址不能为空', trigger: 'blur' }],
          shopPhone: [{ required: true, message: '商家电话不能为空', trigger: 'blur' }],
          shopStore: [{ required: true, message: '商家门店不能为空', trigger: 'blur' }],
          shopLicense: [{ required: true, message: '商家营业执照不能为空', trigger: 'blur' }],
          shopCheckDate: [{ required: true, message: '商家入驻时间不能为空', trigger: 'blur' }]
        }
      }
    },
    created () {
      if (this.isEdit && this.id) {
        this.loadData()
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return
          }
          // 如果是添加操作
          let form = new FormData()
          if (this.shopInfo.shopLicense instanceof File) {
            form.append('uploadImg', this.shopInfo.shopLicense)
          } else {
            form.append('shopLicense', this.shopInfo.shopLicense)
          }
          form.append('password', this.shopInfo.password)
          form.append('shopName', this.shopInfo.shopName)
          form.append('shopAddress', this.shopInfo.shopAddress)
          form.append('shopPhone', this.shopInfo.shopPhone)
          form.append('shopStore', this.shopInfo.shopStore)
          form.append('shopCheckDate', this.shopInfo.shopCheckDate)
          form.append('email', this.shopInfo.email)
          // 添加 _id 不要传, 否则报 Cast to ObjectID failed for value "undefined" at path "_id" 错误
          if (this.isEdit) {
            form.append('_id', this.id)            
          }
          if (!this.isEdit) {
            console.log('addShop', this.shopInfo)
            this.axios.post('/user/signup', form).then(res => {
              let data = res.data
              if (data.message === 'success') {
                this.$message.success('添加成功!')
                this.$emit('load-data')
                this.$router.push('/shops')
              } else {
                this.$message.error(data.message)
              }
            }).catch(err => {
              console.info(err.response)
              this.$message.error(err.response.data.message)
            })
          } else {
            console.log('modify')
            // 修改操作
            this.axios.post('/user/updateShopInfo', form).then(res => {
              let data = res.data
              if (data.message === 'success') {
                this.$message.success('修改成功!')
                this.$emit('load-data')
                this.$router.push('/shops')
              } else {
                this.$message.error(data.message)
              }
            }).catch(err => {
              console.info(err.response)
              this.$message.error(err.response.data.message)
            })
          }
        })
      },
      fileChange (file) {
        this.shopInfo.shopLicense = file
      },
      cancel () {
        this.$router.push('/shops')
      },
      loadData () {
        this.axios.post('/user/getShopInfo', {_id: this.id}).then(res => {
          this.initShopInfo(res.data.shopInfo)
          this.$refs.uploadImg.bgImg = res.data.shopInfo.shopLicense
        })
      },
      initShopInfo (shopInfo) {
        Object.keys(this.shopInfo).forEach(key => {
          this.shopInfo[key] = shopInfo[key]
        })
      }
    },
    computed: {
      isEdit () {
        return this.$router.currentRoute.name === 'editShop'
      },
      submitText () {
        return this.isEdit ? '提交修改' : '立即添加'
      }
    },
    components: {
      UploadImg
    }
  }
</script>
<style lang="scss">
  
</style>