<template>
  <div class="upload">
    <div class="upload-wrap" ref="uploadWrap">
      
    </div>
    <div class="upload-btn-group">
      <el-button type="primary" @click="uploadImg">上传图片</el-button>
      <input type="file" hidden @change="uploadChange" ref="uploadElment">
      <el-button type="primary" :disabled="hasUpload">下一步</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        hasUpload: true
      }
    },
    methods: {
      uploadImg () {
        this.$refs.uploadElment.click()
      },
      uploadChange (e) {
        console.log(e)
        let file = e.target.files[0]
        var reader = new FileReader() 
        reader.readAsDataURL(file)
        let self = this
        reader.onload = function () {
          let imgData = this.result

          var img = new Image()
          img.onload = function () {
            console.log(this.width)
            console.log(this.height)
          }
          img.src = imgData
          self.$refs.uploadWrap.appendChild(img)
        }
      }
    }
  }
</script>
<style lang="scss">
  html, body {
    height: 100%;
  }
  .upload {
    position: relative;
    height: 100%;
    .upload-wrap {
      height: 100%;
      width: 100%;
      padding-bottom: 100px;
      box-sizing: border-box;
    }
    .upload-btn-group {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      padding: 30px 0;
    }
  }
</style>