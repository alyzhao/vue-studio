<template>
  <div class="compound">
<!--     <transition name="el-zoom-in-bottom">
      <Product v-show="showProduct" :class="{show: showProduct}"  @getSelectProducts="setSelectProduct" />
    </transition> -->
    <transition name="el-zoom-in-bottom">
      <Fusion v-if="showGenerate" :class="{show: showGenerate}" :generateData="generateData" />
    </transition>    
  
    <Upload :selectProducts="selectProducts" @nextStep="nextStep"  @generateImg="generateImg"/>
  </div>
</template>
<script>
  import Upload from 'views/Upload'
  import Fusion from 'views/Fusion'
  import cloneDeep from 'lodash.clonedeep'

  export default {
    data () {
      return {
        showProduct: false,
        showGenerate: false,
        generateData: '',
        selectProducts: []
      }
    },
    methods: {
      nextStep () {
        this.showProduct = true
      },
      setSelectProduct (products) {
        // this.selectProducts = products
        let selectProducts = cloneDeep(products)
        selectProducts.map(item => item.matchSelected = false)
        this.selectProducts = selectProducts
        console.log(this.selectProducts)
        this.showProduct = false
      },
      generateImg (data) {
        this.generateData = data
        this.showGenerate = true
      }
    },
    components: {
      Upload,
      Fusion
    }
  }
</script>
<style lang="scss">
  .compound {
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    background: url(./assets/images/bg.png) repeat;
    .products.show + .upload {
      display: none;
    }
    .upload.show + .upload {
      display: none;
    }
  }
</style>