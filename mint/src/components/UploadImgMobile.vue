<template>
  <div class="upload-img" :class="[type === 'mobile' ? 'mobile' : 'pc']" @click="selectFile" :style="{width: width, height: height, backgroundImage: uploadImgBg}">
    <input type="file" hidden ref="uploadImgElment" @change="uploadChange" accept="image/*" />
    <i v-if="icon" :class="'iconfont ' + icon"></i>
    <div class="tips" :style="{lineHeight: height}">点击上传</div>
  </div>
</template>
<script>
  /**
   * 
   */
  export default {
    props: {
      imgSrc: {},
      icon: {
        String
      },
      width: {
        type: String,
        default: '100px'
      },
      height: {
        type: String,
        default: '100px'
      },
      type: {
        type: String,
        default: 'pc'
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
    &.pc .icon-add {
      display: none;
    }
    .icon-add {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -65%);
      color: #999;
      font-size: 32px;
    }
    &.mobile .tips {
      background-color: unset;
      line-height: 100% !important;
      height: auto;
      bottom: 10%;
    }
    &.pc:hover, &.mobile {
      border-color: #409EFF;
      .tips { 
        visibility: visible;
      }
    }
  }
</style>