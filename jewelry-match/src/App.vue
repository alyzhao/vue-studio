<template>
  <div class="compound">
    <transition name="el-zoom-in-bottom">
      <Product v-show="showProduct" :class="{show: showProduct}"  @getSelectProducts="setSelectProduct" />
    </transition>
    <Upload :selectProducts="selectProducts" @nextStep="nextStep" />
  </div>
</template>
<script>
  import Upload from 'views/Upload'
  import Product from 'views/Product'

  export default {
    data () {
      return {
        showProduct: false,
        selectProducts: []
      }
    },
    methods: {
      nextStep () {
        this.showProduct = true
      },
      setSelectProduct (products) {
        this.selectProducts = products
        console.log(this.selectProducts)
        this.showProduct = false
      }
    },
    components: {
      Upload,
      Product
    }
  }
</script>
<style lang="scss">
  .compound {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .products.show + .upload {
      display: none;
    }
  }
</style>