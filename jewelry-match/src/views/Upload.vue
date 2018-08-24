<template>
  <div class="upload">
    <div class="upload-wrap" ref="uploadWrap">
      <div class="pic-wrap" ref="realpicWrap">
        <img ref="realpic" class="real-pic" :style="{transform: transformStyle}">
      </div>
    </div>
    <div class="upload-btn-group">
      <el-button type="primary" @click="uploadImg">上传图片</el-button>
      <input type="file" hidden @change="uploadChange" ref="uploadElment">
      <el-button type="primary" :disabled="hasUpload">下一步</el-button>
    </div>
  </div>
</template>
<script>
  import util from 'utils'
  import touch from 'touchjs'

  export default {
    data () {
      return {
        hasUpload: true,
        realImgTranslateX: 0,
        realImgTranslateY: 0,
        realImgEndX: 0,
        realImgEndY: 0,
        realImgScale: 1,
        realImgInitialScale: 1
      }
    },
    mounted () {
      // this.initTouch(this.$refs.realpicWrap, this.$refs.realpic)
      let realpicWrap = this.$refs.realpicWrap
      let realpic = this.$refs.realpic
      touch.on(realpicWrap, 'touchstart', e => {
        console.log('touchstarttouchstart')
        e.preventDefault()
      })

      touch.on(realpicWrap, 'drag', e => {
        console.log('dragdrag')
        console.log(this.realImgEndX)
        console.log(this.realImgEndY)
        console.log("drag x: ", e.x)
        console.log("drag y: ", e.y)
        this.realImgTranslateX = this.realImgEndX + e.x
        this.realImgTranslateY = this.realImgEndY + e.y
      })

      touch.on(realpicWrap, 'dragend', e => {
        console.log('dragenddragend')
        // e.stopPropagation()
        console.log("dragend x: ", e.x)
        console.log("dragend y: ", e.y)
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

    },
    methods: {
      uploadImg () {
        this.$refs.uploadElment.click()
      },
      uploadChange (e) {
        this.hasUpload = false
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
      // initTouch: function(element, img) {
      //   let offx = 0, offy = 0;
      //   let scale = 1;
      //   let currScale;

      //   function formatTransform(offx, offy, scale) {
      //     let translate = 'translate3d(' + (offx + 'px,') + (offy + 'px,') + '0)';
      //     scale = 'scale(' + scale + ')';
      //     return translate + ' ' + scale;
      //   }

      //   touch.on(element, 'touchstart', function (ev) {
      //     ev.preventDefault();
      //   });

      //   touch.on(element, 'drag', function(ev) {
      //     let currOffx = offx + ev.x;
      //     let currOffy = offy + ev.y;
      //     img.style.transform = formatTransform(currOffx, currOffy, scale);
      //   });

      //   touch.on(element, 'dragend', function(ev) {
      //     offx += ev.x;
      //     offy += ev.y;
      //   });

      //   touch.on(element, 'pinch', function(ev) {
      //     if(typeof ev.scale != 'undefined') {
      //       currScale = ev.scale - 1 + scale;
      //       img.style.transform = formatTransform(offx, offy, currScale);
      //     }
      //   });

      //   touch.on(element, 'pinchend', function() {
      //     scale = currScale;
      //   });
      // }
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
    .upload-wrap {
      min-height: 100%;
      width: 100%;
      padding-bottom: 100px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center; 
      .pic-wrap {
        width: 90vw;
        height: 118vw;
        border: 1px solid #DCDFE6;
        overflow: hidden;
        position: relative;
        .real-pic {
          width: 100%;
          transition: all .2s linear;
          display: block;
          position: absolute;
        }
      }
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