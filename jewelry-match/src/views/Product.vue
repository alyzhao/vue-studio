<template>
  <div class="products">
    <div class="products-wrap">
      <el-row :gutter="10" style="margin-left: 0;margin-right: 0;padding-top: 5px;">
        <el-col :span="8" v-for="product in productsList" :key="product.id" @click.native="selectProduct(product)">
          <el-card class="product-cell" :class="{selected: product.selected}">
            <img :src="product.img">
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-row style="text-align: center;position: absolute;bottom: 20px;width: 100%;">
      <el-button type="primary" :disabled="hasSelectProduct" @click="nextStep">下一步</el-button>
    </el-row>
  </div>  
</template>
<script>
  export default {
    data () {
      return {
        productsList: [{
          id: 1,
          img: '/src/assets/images/p1.png',
          selected: false
        }, {
          id: 2,
          img: '/src/assets/images/p2.png',
          selected: false
        }, {
          id: 3,
          img: '/src/assets/images/p3.png',
          selected: false
        }, {
          id: 4,
          img: '/src/assets/images/p4.png',
          selected: false
        }, {
          id: 11,
          img: '/src/assets/images/p1.png',
          selected: false
        }, {
          id: 22,
          img: '/src/assets/images/p2.png',
          selected: false
        }, {
          id: 33,
          img: '/src/assets/images/p3.png',
          selected: false
        }, {
          id: 44,
          img: '/src/assets/images/p4.png',
          selected: false
        }]
      }
    },
    mounted () {
      console.log('sgfasdfasdfas')
    },
    methods: {
      selectProduct (product) {
        product.selected = !product.selected
      },
      nextStep () {
        let selectProducts = this.productsList.filter(item => item.selected)
        console.log(selectProducts)
        this.$emit('getSelectProducts', selectProducts)
      }
    },
    computed: {
      hasSelectProduct () {
        let selectedItem = this.productsList.find(item => item.selected)
        return selectedItem === undefined
      }
    }
  }
</script>
<style lang="scss">
  .products {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 80px;
    box-sizing: border-box;
    .products-wrap {
      overflow-y: scroll;
      overflow-x: hidden;
      height: 100%;      
    }
    .product-cell {
      position: relative;
      padding: 0;
      padding-top: 100%;
      .el-card__body {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      &.selected{
        border-color: #F56C6C;
      } 
    }
    .el-col-8 {
      margin-bottom: 10px;
    }
  }
</style>