<template>
  <div class="edit-products">
    <el-form ref="guideInfo" label-width="100px" status-icon style="padding: 30px 30px 10px 0;">
      <el-form-item label="文件标题:">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="选择文件:" prop="article">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-input v-show="fileName" disabled :value="fileName"></el-input>                      
          </el-col>
          <el-col :span="5">
            <el-button type="primary" @click="selectFile">点击上传</el-button>
            <input type="file" hidden ref="pdfElement">            
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" :disabled="!confirmDisabled" type="primary" size="small" @click="submitForm()">提交</el-button>
      </el-form-item>   
    </el-form>
  </div>
</template>
<script>
  import qs from 'qs'
  export default {
    data () {
      return {
        fileName: '',
        file: '',
        title: '',
        loading: false  
      }
    },
    create() {
      this.$message.error('gggggg')
    },
    mounted () {
      let fileInputElement = this.$refs.pdfElement
      fileInputElement.addEventListener('change', this.fileChange)
    },
    methods: {
      submitForm () {
        this.loading = loading
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineGuide/addPDF'
        // let params = {
        //   znName: this.title,
        //   znPdf: this.file
        // }
        let formData = new FormData()
        formData.append('znName', this.title)
        formData.append('znPdf', this.file)
        console.log(formData)
        this.axios.post(url, formData)
          .then(({data}) => {
            console.log(data)
            if (data) {
              this.$message.success('上传成功!')
            } else {
              this.$message.error('文件太大!请更换文件!')
            }
          })
          .catch(err => {
            this.$message.error('网络错误, 请稍后重试!')
          })
          .finally(() => {
            this.loading = false
          })
      },
      selectFile () {
        this.$refs.pdfElement.click()
      },
      fileChange (e) {
        let target = e.target
        console.log(target)
        let file = target.files[0]
        let fileName = file.name
        let fileSplit = fileName.split('.')
        let format = fileSplit[fileSplit.length - 1].toLowerCase()
        if (format !== 'pdf') {
          this.$message.error('请上传 PDF 文件!')
          return
        }
        this.file = file
        this.fileName = fileName
        console.log(file)
      }
    },
    beforeDestroy () {
      let fileInputElement = this.$refs.pdfElement
      fileInputElement.removeEventListener('change', this.preUpload)
    },
    computed: {
      confirmDisabled () {
        return this.title && this.fileName
      }
    }
  }
</script>
<style lang="scss">
  .editer {
    .ql-container {
      min-height: 300px;
    }
  }
</style>