<template>
  <div class="upload">
    <div class="upload-wrap" ref="uploadWrap">
      <div class="pic-wrap" ref="realpicWrap">
        <img ref="productPic" crossorigin="anonymous" v-show="showProductImg" class="product-img" :style="{transform: transformProduct}">
        <img ref="realpic" class="real-pic" :style="{transform: transformStyle}">
      </div>
    </div>
    <div class="upload-bottom">
      <div v-if="selectedProductName">当前商品名称: {{selectedProductName}}, 型号: {{selectedProductModel}}</div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in selectProducts" :key="item.id">
          <img :src="item.productImg" class="swiper-product" :class="{selected: item.matchSelected}" @click="selectMatch(item)">
        </swiper-slide>
      </swiper>
      <div class="upload-btn-group">
        <el-button type="primary" @click="uploadImg">上传个人图片</el-button>
        <input type="file" hidden @change="uploadChange" ref="uploadElment" accept="image/*">
        <el-button type="primary" :disabled="hasUpload" @click="nextStep">选择商品</el-button>
        <el-button style="margin-left: 0;" type="success" v-if="selectProducts.length > 0" @click="generate">生成图片</el-button>
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
        hasUpload: true,
        realImgTranslateX: 0,
        realImgTranslateY: 0,
        realImgEndX: 0,
        realImgEndY: 0,
        realImgScale: 1,
        realImgInitialScale: 1,
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 10,
          freeMode: true
        },
        productTranslateX: 0,
        productTranslateY: 0,
        productEndX: 0,
        productEndY: 0,
        dragProduct: false,
        pinchProduct: false,
        productScale: 1,
        productInitialScale: 1,
        selectedProductName: '',
        selectedProductModel: '',
        selectProducts: []    // 商品列表
      }
    },
    created () {
      // this.loadData()
    },
    mounted () {
      // this.initTouch(this.$refs.realpicWrap, this.$refs.realpic)
      let realpicWrap = this.$refs.realpicWrap
      let realpic = this.$refs.realpic
      touch.on(realpicWrap, 'touchstart', e => {
        e.preventDefault()
      })

      touch.on(realpicWrap, 'drag', e => {
        console.log('drag', this.dragProduct)
        if (e.target.className === 'product-img' && !this.dragProduct) {
          this.dragProduct = true
        }
        if (this.dragProduct) {
          this.productTranslateX = this.productEndX + e.x
          this.productTranslateY = this.productEndY + e.y
        } else {
          this.realImgTranslateX = this.realImgEndX + e.x
          this.realImgTranslateY = this.realImgEndY + e.y          
        }
      })

      touch.on(realpicWrap, 'dragend', e => {
        console.log('dragend', this.dragProduct)
        if (this.dragProduct) {
          this.productEndX += e.x
          this.productEndY += e.y          
          this.dragProduct = false
        } else {
          this.realImgEndX += e.x
          this.realImgEndY += e.y          
        }
      })

      touch.on(realpicWrap, 'pinch', e => {
        if (typeof e.scale != 'undefined') {
          if (e.target.className === 'product-img' && !this.pinchProduct) {
            this.pinchProduct = true
          }
          if (this.pinchProduct) {
            let currentProductScale = this.productInitialScale + e.scale - 1
            if (currentProductScale < 0) {
              return
            }
            this.productScale = currentProductScale
          } else {
            let currentScale = this.realImgInitialScale + e.scale - 1
            if (currentScale < 0) {
              return
            }
            this.realImgScale = currentScale            
          }
        }
      })

      touch.on(realpicWrap, 'pinchend', e => {
        if (this.pinchProduct) {
          this.productInitialScale = this.productScale
          this.pinchProduct = false
        } else {
          this.realImgInitialScale = this.realImgScale          
        }
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
      nextStep () {
        this.$emit('nextStep')
      },
      selectMatch (item) {
        let lastSelect = this.selectProducts.find(product => product.matchSelected)
        if (lastSelect !== undefined) {
          lastSelect.matchSelected = false
        }
        this.selectedProductName = item.productName
        this.selectedProductModel = item.productModel
        item.matchSelected = true
        let productImg = this.$refs.productPic
        this.productTranslateX = 0
        this.productTranslateY = 0
        this.productEndX = 0
        this.productEndY = 0
        productImg.setAttribute('src', item.productImg)
      },
      generate () {
        // return

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

        let productImg = this.$refs.productPic
        let productImgWidth = productImg.offsetWidth
        let productImgHeight = productImg.offsetHeight
        let productX = this.productTranslateX + productImgWidth / 2 * (1 - this.productScale)
        let productY = this.productTranslateY + productImgHeight / 2 * (1- this.productScale)
        ctx.drawImage(productImg, productX, productY, productImgWidth * this.productScale, productImgHeight * this.productScale)

        let resultData = canvas.toDataURL('image/jpeg')
        this.$emit('generateImg', resultData)
      },
      loadData () {
        this.axios.get('http://139.224.118.14:3000/client/list?_id=' + this.getUrlQueryString('sid')).then(res => {
          let list = res.data.list
          this.selectProducts = list
        }).catch(err => {
          this.$message.error('获取商品列表失败！')
        })
      },
      getUrlQueryString(name) {
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r!=null) {
            return  unescape(r[2]);
        }
        return '';
      }
    },
    computed: {
      transformStyle () {
        return "translateX(" + this.realImgTranslateX + "px) translateY(" + this.realImgTranslateY + "px) scale(" + this.realImgScale + ")"
      },
      transformProduct () {
        return "translateX(" + this.productTranslateX + "px) translateY(" + this.productTranslateY + "px) scale(" + this.productScale + ")"
      },
      showProductImg () {
        let selectedMatchProduct = this.selectProducts.find(item => item.matchSelected)
        return selectedMatchProduct !== undefined
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
      padding-bottom: 160px;
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
      margin-top: -160px;
      height: 160px;
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
</style>