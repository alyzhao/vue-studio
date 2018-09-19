<template>
  <div class="upload">
    <div class="upload-wrap" ref="uploadWrap">
      <div style="border: 3px solid #4b240d;">
        <div class="pic-wrap" ref="realpicWrap">
          <img ref="posterTop" crossorigin="anonymous" class="poster-top" src="../assets/images/ptop.png">
          <img ref="realpic" class="real-pic" :style="{transform: transformStyle}">
          <img ref="posterBottom" crossorigin="anonymous" class="poster-bottom" src="../assets/images/pbottom.png">
        </div>
      </div>
      <input type="text" class="name-input" placeholder="输入名字" v-model="name" ref="nameInput" :style="{top: nameTop, left: nameLeft}">
    </div>
    <div class="upload-bottom">
      <div class="upload-btn-group">
        <button class="upload-buttom" @click="uploadImg">上传照片</button>
        <input type="file" hidden @change="uploadChange" ref="uploadElment" accept="image/*">
        <button class="upload-buttom" @click="generate" v-if="hasUpload">生成图片</button>
      </div>
    </div>
  </div>
</template>
<script>
  import util from 'utils'
  import touch from 'touchjs'

  export default {
    data () {
      return {
        hasUpload: false,
        realImgTranslateX: 0,
        realImgTranslateY: 0,
        realImgEndX: 0,
        realImgEndY: 0,
        realImgScale: 1,
        realImgInitialScale: 1,
        name: '',
        nameTop: 0,
        nameLeft: 0,
        nameX: 0,
        nameY: 0
      }
    },
    mounted () {
      // this.initTouch(this.$refs.realpicWrap, this.$refs.realpic)
      let realpicWrap = this.$refs.realpicWrap
      let realpic = this.$refs.realpic
      touch.on(realpicWrap, 'touchstart', e => {
        e.preventDefault()
      })

      touch.on(realpicWrap, 'drag', e => {
        this.realImgTranslateX = this.realImgEndX + e.x
        this.realImgTranslateY = this.realImgEndY + e.y          
      })

      touch.on(realpicWrap, 'dragend', e => {
        this.realImgEndX += e.x
        this.realImgEndY += e.y          
      })

      touch.on(realpicWrap, 'pinch', e => {
        if (typeof e.scale != 'undefined') {
          let currentScale = this.realImgInitialScale + e.scale - 1
          if (currentScale < 0) {
            return
          }
          this.realImgScale = currentScale            
        }
      })

      touch.on(realpicWrap, 'pinchend', e => {
        this.realImgInitialScale = this.realImgScale          
      })

      let posterBottom = this.$refs.posterBottom
      let posterBottomWidth = realpicWrap.offsetWidth
      let posterBottomHeight = posterBottomWidth *  2938 / 4474 


      let nameX = posterBottomWidth * 0.601
      let nameY = posterBottomHeight * 0.202

      let picLeft = posterBottom.offsetLeft
      let picTop = posterBottom.offsetTop - posterBottomHeight

      console.log('picLeft', picLeft)
      console.log('picTop', picTop)

      console.log(realpicWrap.offsetTop)

      let wrapElement = this.$refs.uploadWrap
      console.log(wrapElement.offsetTop)
      this.nameX = nameX + 15
      this.nameY = picTop + nameY + 20
      this.nameLeft = realpicWrap.offsetLeft - wrapElement.offsetLeft + picLeft + nameX + 40 + 'px'
      this.nameTop = realpicWrap.offsetTop - wrapElement.offsetTop + picTop + nameY + 15 + 'px'

      console.log(this.nameLeft)
      console.log(this.nameTop)


    },
    methods: {
      uploadImg () {
        this.$refs.uploadElment.click()
      },
      uploadChange (e) {
        if (!this.hasUpload) {
          this.hasUpload = true
        }
        console.log(e)
        let file = e.target.files[0]
        let reader = new FileReader() 
        reader.readAsDataURL(file)
        let realpic = this.$refs.realpic
        reader.onload = function () {
          let imgData = this.result
          realpic.setAttribute('src', imgData)
        }
      },
      generate () {
        let realpicWrap = this.$refs.realpicWrap
        let canvas = document.createElement('canvas')
        canvas.width = realpicWrap.offsetWidth
        canvas.height = realpicWrap.offsetHeight

        let ctx = canvas.getContext('2d')
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        let realpic = this.$refs.realpic
        let realpicWidth = realpic.offsetWidth
        let realpicHeight = realpic.offsetHeight
        console.log('realpicWidth', realpicWidth)
        console.log('realpicHeight', realpicHeight)

        let realImgX = this.realImgTranslateX + realpicWidth / 2 * (1 - this.realImgScale)

        let realImgY = this.realImgTranslateY + realpicHeight / 2 * (1 - this.realImgScale)

        ctx.drawImage(realpic, realImgX, realImgY, realpicWidth * this.realImgScale, realpicHeight * this.realImgScale)

        // 把海报加上去
        let posterTop = this.$refs.posterTop
        let posterBottom = this.$refs.posterBottom
        ctx.drawImage(posterTop, 0, 0, posterTop.offsetWidth, posterTop.offsetHeight)
        ctx.drawImage(posterBottom, 0, realpicWrap.offsetHeight - posterBottom.offsetHeight, posterBottom.offsetWidth, posterBottom.offsetHeight)

        // 文字
        ctx.font = "28px Microsoft YaHei"
        // let textElement = this.$refs.nameInput
        // let textX = textElement.offsetLeft
        // console.log('textX', textX)
        // let textY = textElement.offsetTop
        // console.log('textY', textY)
        ctx.fillText(this.name, this.nameX, this.nameY)

        let resultData = canvas.toDataURL('image/jpeg')
        this.$emit('generateImg', resultData)
      },

    },
    computed: {
      transformStyle () {
        return "translateX(" + this.realImgTranslateX + "px) translateY(" + this.realImgTranslateY + "px) scale(" + this.realImgScale + ")"
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
    padding: 5vw;
    box-sizing: border-box;
    .upload-wrap {
      min-height: 100%;
      width: 100%;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center; 
      .pic-wrap {
        width: 70vw;
        height: 125vw;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        .real-pic {
          width: 100%;
          transition: all .2s linear;
          display: block;
          position: absolute;
        }
        .product-img {
          width: 150px;
          height: 150px;
          display: block;
          position: absolute;
          transition: all .2s linear;
          z-index: 999;
        }
      }
    }
    .upload-bottom {
      padding: 5px 5vw;
      position: absolute;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      margin-top: -100px;
      height: 100px;
    }
    .upload-btn-group {
      text-align: center;
      margin-top: 10px;
    }
    .swiper-product {
      display: block;
      width: 100px;
      height: 100px;
      border: 1px solid #DCDFE6;
      &.selected {
        border-color: #F56C6C;
      }
    }
  }
  .upload-buttom {
    background: url(../assets/images/buttons.png) no-repeat left top;
    border: none;
    display: inline-block;
    background-size: 140px;
    padding: 15px 20px;
    text-shadow: 2px 2px #c44911;
    font-size: 16px;
    color: #fff;
    background-position: 3px -41px;
  }
  .poster-top {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .poster-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
  button:focus, input:focus {
    outline: none;
  }
  // .name-input {
  //   position: absolute;
  //   right: 3vw;
  //   bottom: 38vw;
  //   border: none;
  //   border-bottom: 2px solid #fff;
  //   width: 100px;
  //   display: inline-block;
  //   z-index: 999;
  //   background-color: transparent;
  //   height: 6vw;
  //   line-height: 6vw;
  //   font-size: 38px;
  //   color: #fff;
  // }
  .name-input {
    position: absolute;
    bottom: 20%;
    left: 65%;
    width: 22%;
    height: 30px;
    line-height: 38px;
    font-size: 28px;
    border: 0px;
    border-bottom: 2px solid #FFF;
    color: white;
    z-index: 99999;
    background-color: transparent;
    border-radius: 0;
    color: #fff;
    padding: 0;
    &::-webkit-input-placeholder {
      font-size: 22px;
      color: rgba(255, 255, 255, .5);
    }
  }

</style>