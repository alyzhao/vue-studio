<template>
  <div class="edit-products">
    <el-form ref="productInfo" :model="productInfo" label-width="100px" :rules="productsRules" status-icon style="padding: 30px 30px 10px 0;">
      <el-form-item label="商品名称" prop="productName">
        <el-input style="max-width: 500px" v-model="productInfo.productName" clearable></el-input>
      </el-form-item>

      <el-form-item label="商品图片" prop="productImg">
        <UploadImg ref="uploadImg" :imgSrc="productInfo.productImg" @file-change="fileChange" />
      </el-form-item>

      <el-form-item label="商品货号" prop="productNumber">
        <el-input style="max-width: 500px" v-model="productInfo.productNumber" clearable></el-input>
      </el-form-item>
      
      <el-form-item label="商品品牌" prop="productBrand">
        <el-input style="max-width: 500px" v-model="productInfo.productBrand" clearable></el-input>
      </el-form-item>

      <el-form-item label="商品型号" prop="productModel">
        <el-input style="max-width: 500px" v-model="productInfo.productModel" clearable></el-input>
      </el-form-item>

      <el-form-item label="上市时间" prop="productMarketDate">
        <el-date-picker
          v-model="productInfo.productMarketDate"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="商品材质" prop="productMaterial">
        <el-input style="max-width: 500px" v-model="productInfo.productMaterial" clearable></el-input>
      </el-form-item>

      <el-form-item label="商品重量" prop="productWeight">
        <el-input style="max-width: 500px" v-model="productInfo.productWeight">
          <template slot="append">g</template>
        </el-input>
      </el-form-item>

      <el-form-item label="鉴定标识" prop="identification">
        <el-input style="max-width: 500px" v-model="productInfo.identification" clearable></el-input>
      </el-form-item>
     
      <el-form-item label="详情" prop="productDetails">
        <el-input style="max-width: 500px" type="textarea" v-model="productInfo.productDetails"></el-input>
      </el-form-item>

      <el-form-item label="商品原价" prop="originalPrice">
        <el-input style="max-width: 500px" v-model="productInfo.originalPrice">
          <template slot="append">RMB</template>
        </el-input>
      </el-form-item>

      <el-form-item label="折后价" prop="currentPrice">
        <el-input style="max-width: 500px" v-model="productInfo.currentPrice">
          <template slot="append">RMB</template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('productInfo')">{{submitText}}</el-button>
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
        productInfo: {
          productName: '',
          productImg: '',
          productNumber: '',
          productBrand: '',
          productModel: '',
          productMaterial: '',
          productWeight: '',
          identification: '',
          originalPrice: '',
          currentPrice: '',
          productMarketDate: '',
          productDetails: ''
        },
        productsRules: {
          productName: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
          productImg: [{ required: true, message: '商品图片不能为空', trigger: 'blur' }],
          productNumber: [{ required: true, message: '商品货号不能为空', trigger: 'blur' }],
          productBrand: [{ required: true, message: '商品品牌不能为空', trigger: 'blur' }],
          productModel: [{ required: true, message: '商品型号不能为空', trigger: 'blur' }],
          productMaterial: [{ required: true, message: '商品材质不能为空', trigger: 'blur' }],
          productWeight: [{ required: true, message: '商品重量不能为空', trigger: 'blur' }],
          identification: [{ required: true, message: '鉴定标识不能为空', trigger: 'blur' }],
          originalPrice: [{ required: true, message: '商品原价不能为空', trigger: 'blur' }],
          currentPrice: [{ required: true, message: '折后价不能为空', trigger: 'blur' }],
          productMarketDate: [{ required: true, message: '上市时间不能为空', trigger: 'blur' }]
        }
      }
    },
    mounted () {
      if (this.idEdit) {
        this.loadData()
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
            return
          }

          let form = new FormData()
          if (this.productInfo.productImg instanceof File) {
            form.append('uploadImg', this.productInfo.productImg)
          } else {
            form.append('productImg', this.productInfo.productImg)
          }
          Object.keys(this.productInfo).forEach(key => {
            if (key !== 'productImg') {
              form.append(key, this.productInfo[key])
            }
          })
          if (this.idEdit) {
            // 编辑
            form.append('_id', this.id)
            this.axios.post('/pro/update', form).then(res => {
              this.successHandle(res, '修改成功!', () => {
                this.$emit('load-data')
                this.$router.push('/products')
              })              
            }).catch(this.errorHandle)
          } else {
            // 添加
            this.axios.post('/pro/add', form).then(res => {
              this.successHandle(res, '添加成功!', () => {
                this.$emit('load-data')
                this.$router.push('/products')
              })
            }).catch(this.errorHandle)

          }
        })
      },
      cancel () {
        this.$router.push('/products')
      },
      fileChange (file) {
        this.productInfo.productImg = file
        console.log(this.productInfo.productImg)
      },
      loadData () {
        this.axios.post('/pro/detail', {_id: this.id}).then(res => {
          let data = res.data
          if (data.message === 'success') {
            Object.keys(this.productInfo).forEach(key => {
              this.productInfo[key] = data.productInfo[key]
            })
            this.$refs.uploadImg.bgImg = data.productInfo.productImg
          } else {
            this.$message.error(data.message)
          }
        }).catch(this.errorHandle)
      }
    },
    computed: {
      idEdit () {
        return this.$router.currentRoute.name === 'editProducts'
      },
      submitText () {
        return this.idEdit ? '提交修改' : '立即创建'
      }
    },
    components: {
      UploadImg
    }
  }
</script>