<template>
  <div class="edit-products">
    <el-form ref="guideInfo" :model="guideInfo" label-width="100px" status-icon style="padding: 30px 30px 10px 0;">
      <el-form-item label="文章标题:">
        <el-input v-model="guideInfo.guideName"></el-input>
      </el-form-item>
      <el-form-item label="文章内容:" prop="article">
        <quill-editor v-model="guideInfo.article"
          ref="myQuillEditor"
          class="editer"
          @ready="onEditorReady($event)">
        </quill-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="submitForm()">提交</el-button>
      </el-form-item>   
    </el-form>
  </div>
</template>
<script>
  import { quillEditor } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import qs from 'qs'
  export default {
    data () {
      return {
        guideInfo: {
          article: '',
          guideName: ''
          // editorOption: {}
        }        
      }
    },
    methods: {
      onEditorReady (editor) {
        console.log(editor)
      },
      submitForm () {
        if (!this.guideInfo.article || !this.guideInfo.guideName) {
          this.$message.warning('请填完整信息')
          return
        }
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineGuide/addGuide'
        let params = {
          guideContent: this.guideInfo.article,
          guideName: this.guideInfo.guideName
        }
        this.axios.post(url, qs.stringify(params))
          .then(({data}) => {
            this.$message.success('添加成功!')
            console.log(data)
          })
          .catch(err => console.log(err))
        // console.log(this.guideInfo.article)
      }
    },
    components: {
      quillEditor
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