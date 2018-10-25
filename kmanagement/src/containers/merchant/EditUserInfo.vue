<template>
  <div class="edit-userinfo">
    <el-form ref="userTable" :model="user" label-width="120px" :rules="userRules" status-icon style="padding: 30px 30px 10px 0;">

      <el-form-item label="商家邮箱" prop="email">
        <el-input style="max-width: 500px" v-model="user.email" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家名称" prop="shopName">
        <el-input style="max-width: 500px" v-model="user.shopName" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家电话" prop="shopPhone">
        <el-input style="max-width: 500px" v-model="user.shopPhone" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家地址" prop="shopAddress">
        <el-input style="max-width: 500px" v-model="user.shopAddress" clearable></el-input>
      </el-form-item>

      <el-form-item label="商家门店" prop="shopStore">
        <el-input style="max-width: 500px" v-model="user.shopStore" clearable></el-input>
      </el-form-item>

      <el-form-item label="营业执照" prop="shopLicense">
        <UploadImg ref="uploadImg" :imgSrc="user.shopLicense" @file-change="fileChange" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('userTable')">提交修改</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import UploadImg from 'components/UploadImg'

  export default {
    data () {
      return {
        user: {
          email: '',
          shopName: '',
          shopAddress: '',
          shopPhone: '',
          shopStore: '',
          shopLicense: ''
        },
        userRules: {
          email: [{ required: true , message: '商家邮箱不能为空', trigger: 'blur'}],
          shopName: [{ required: true, message: '商家名称不能为空', trigger: 'blur' }],
          shopAddress: [{ required: true, message: '商家地址不能为空', trigger: 'blur' }],
          shopPhone: [{ required: true, message: '商家电话不能为空', trigger: 'blur' }],
          shopStore: [{ required: true, message: '商家门店不能为空', trigger: 'blur' }],
          shopLicense: [{ required: true, message: '商家营业执照不能为空', trigger: 'blur' }],
        }
      }
    },
    mounted () {
      if (this.userStore.email) {
        this.initUserInfo(this.userStore)
        this.$refs.uploadImg.bgImg = this.userStore.shopLicense
      } else {
        this.$store.dispatch('getUserInfo', this).then(user => {
          this.initUserInfo(user)
          this.$refs.uploadImg.bgImg = user.shopLicense
        })
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return
          }

          let form = new FormData()
          if (this.user.shopLicense instanceof File) {
            form.append('uploadImg', this.user.shopLicense)
          } else {
            form.append('shopLicense', this.user.shopLicense)
          }
          form.append('shopName', this.user.shopName)
          form.append('shopAddress', this.user.shopAddress)
          form.append('shopPhone', this.user.shopPhone)
          form.append('shopStore', this.user.shopStore)
          form.append('email', this.user.email)
          // 调取接口用户修改信息
          this.axios.post('/user/update', form).then(res => {
            let data = res.data
            if (data.message === 'success') {
              this.$message.success('修改成功!')
              this.$store.dispatch('getUserInfo', this).then(res => {
                this.$router.push('/index')
              })
            } else {
              this.$message.error(data.message)
            }
          }).catch(err => {
            this.$message.error(err.response.data.message)
          })
        })
      },
      initUserInfo (user) {
        Object.keys(this.user).forEach(key => {
          this.user[key] = user[key]
        })
      },
      cancel () {
        this.$router.push('/index')
      },
      fileChange (file) {
        this.user.shopLicense = file
      }
    },
    computed: {
      userStore () {
        return this.$store.state.Account.user
      }
    },
    components: {
      UploadImg
    }
  }
</script>