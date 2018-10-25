<template>
  <div class="upload-img" @click="selectFile" :style="{width: width, height: height, backgroundImage: uploadImgBg}">
    <input type="file" hidden ref="uploadImgElment" @change="uploadChange" accept="image/*" />
    <div class="tips" :style="{lineHeight: height}">点击上传</div>
  </div>
</template>
<script>
  export default {
    props: {
      imgSrc: {},
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '100px'
      }
    },
    data () {
      return {
        bgImg: null,
        file: null
      }
    },
    created () {
      this.bgImg = this.imgSrc
    },
    mounted () {
      console.log(this.uploadImgBg)
    },
    methods: {
      selectFile () {
        this.$refs.uploadImgElment.click()
      },
      uploadChange (e) {
        console.log(e)
        this.file = e.target.files[0]
        this.$emit('file-change', this.file)
        console.log(this.file instanceof File)
        let reader = new FileReader()
        reader.onload = (rd) => {
          this.bgImg = rd.target.result
        }
        reader.readAsDataURL(e.target.files[0])
      },
    },
    computed: {
      uploadImgBg () {
        if (this.bgImg) {
          return 'url(' + this.bgImg + ')'
        }
        return null        
      }
    }
  }
</script>
<style lang="scss">
  .upload-img {
    border: 1px solid #EBEEF5;
    border-radius: 3px;
    position: relative;
    transition: all .2s;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    .tips {
      visibility: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(255, 255, 255, .5);
      color: #409EFF;
      line-height: 100%;
      text-align: center;
      transition: inherit;
    }
    &:hover {
      border-color: #409EFF;
      .tips {
        visibility: visible;
      }
    }
  }
</style>