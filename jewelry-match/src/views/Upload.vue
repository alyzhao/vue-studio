<template>
  <div class="upload">
    <div class="upload-wrap" ref="uploadWrap">
      <div class="pic-wrap" ref="realpicWrap">
        <img ref="productPic" crossorigin="anonymous" v-show="showProductImg" class="product-img" :style="{transform: transformProduct}">
        <img ref="realpic" class="real-pic" :style="{transform: transformStyle}">
      </div>
    </div>
    <div class="upload-bottom">
      <div v-if="selectedProductName" style="color: #333;font-size: 12px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{selectedProductName}}, 型号: {{selectedProductModel}}</div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in selectProducts" :key="item.id">
          <img :src="item.productImg" class="swiper-product" :class="{selected: item.matchSelected}" @click="selectMatch(item)">
        </swiper-slide>
      </swiper>
      <div class="upload-btn-group">
        <el-button-group v-show="operateModel">
          <el-button type="primary" @click="uploadImg">上传个人照片</el-button>
          <el-button type="primary" @click="selectModel">选择模特照片</el-button>
        </el-button-group>
        <input type="file" hidden @change="uploadChange" ref="uploadElment" accept="image/*">
        <el-button type="warning" v-if="operateModel" :disabled="hasUpload" @click="nextStep">下一步</el-button>
        <el-button type="danger" v-if="!operateModel" @click="reload">上一步</el-button>
        <el-button style="margin-left: 0;" type="success" v-if="!operateModel" @click="generate">生成图片</el-button>
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
        productScale: 1,
        productInitialScale: 1,
        selectedProductName: '',
        selectedProductModel: '',
        selectProducts: [],    // 商品列表
        operateModel: true    // 操作上传的头像还是商品
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
        // 如果操作的是上传图
        if (!this.operateModel) {
          this.productTranslateX = this.productEndX + e.x
          this.productTranslateY = this.productEndY + e.y
        } else {
          this.realImgTranslateX = this.realImgEndX + e.x
          this.realImgTranslateY = this.realImgEndY + e.y          
        }
      })

      touch.on(realpicWrap, 'dragend', e => {
        if (!this.operateModel) {
          this.productEndX += e.x
          this.productEndY += e.y          
        } else {
          this.realImgEndX += e.x
          this.realImgEndY += e.y          
        }
      })

      touch.on(realpicWrap, 'pinch', e => {
        if (typeof e.scale != 'undefined') {
          if (!this.operateModel) {
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
        if (!this.operateModel) {
          this.productInitialScale = this.productScale
        } else {
          this.realImgInitialScale = this.realImgScale          
        }
      })

    },
    methods: {
      reload () {
        window.location.reload()
      },
      selectModel () {
        this.$emit('selectModel')
      },
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
        let self = this
        reader.onload = function () {
          self.initialModel()
          let imgData = this.result
          realpic.setAttribute('src', imgData)
        }
        this.changeModel()    // 选择model之后触发事件
      },
      // 初始化模特图的信息
      initialModel () {
        this.realImgTranslateX = 0
        this.realImgTranslateY = 0
        this.realImgEndX = 0
        this.realImgEndY = 0
        this.realImgScale = 1
        this.realImgInitialScale = 1
      },
      // 选择模特图或者上传个人图之后给个提示
      changeModel () {
        this.$message.warning({message: '调整人物照片, 点击下一步后无法调整!'})
        // this.loadData()
      },
      nextStep () {
        // this.$emit('nextStep')
        this.operateModel = false
        this.loadData()
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
        this.productScale = 1
        this.productInitialScale = 1
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
          let list = res.data.list.map(item => {
            item.matchSelected = false
            item.productImg = 'http://139.224.118.14:3000' + item.productImg
            return item
          })
          this.selectProducts = list
        }).catch(err => {
          this.$message.error('获取商品列表失败！')
        })
        /** 本地测试方法
        let list = [{
          selected: false,
          productImg: '/public/1.png',
          productName: '1',
          productModel: '1'
        }, {
          selected: false,
          productImg: '/public/2.png',
          productName: '2',
          productModel: '2'
        }, {
          selected: false,
          productImg: '/public/3.png',
          productName: '3',
          productModel: '3'
        }, {
          selected: false,
          productImg: '/public/4.png',
          productName: '4',
          productModel: '4'
        }, {
          selected: false,
          productImg: '/public/5.png',
          productName: '5',
          productModel: '5'
        }]
        this.selectProducts = list.map(item => {
          item.matchSelected = false
          return item
        })
        **/
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
    padding: 1.5vw;
    box-sizing: border-box;
    .upload-wrap {
      min-height: 100%;
      width: 100%;
      padding-bottom: 200px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center; 
      .pic-wrap {
        width: 75vw;
        height: 100vw;
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
      margin-top: -200px;
      height: 200px;
    }
    .upload-btn-group {
      text-align: center;
      margin-top: 10px;
      .el-button {
        padding: 10px 8px;
        vertical-align: middle;
      }
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
  .el-message.el-message--warning {
    width: 100%;
    min-width: 0;
  }
</style>