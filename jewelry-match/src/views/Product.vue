<template>
  <div class="products">
    <div class="products-wrap">
      <el-row v-if="productsList.length <= 0" style="color: #909399;font-size: 14px;text-align: center;margin-top: 50px;">暂无商品...</el-row>
      <el-row :gutter="10" style="margin-left: 0;margin-right: 0;padding-top: 5px;">
        <el-col :span="8" v-for="product in productsList" :key="product._id" @click.native="selectProduct(product)">
          <el-card class="product-cell" :class="{selected: product.selected}">
            <img :src="product.productImg">
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
        productsList: []
      }
    },
    mounted () {
      console.log(this.getUrlQueryString('sid'))
      this.axios.get('/client/list?_id=' + this.getUrlQueryString('sid')).then(res => {
        console.log(res)
        let list = res.data.list.map(item => {
          item.selected = false
          return item
        })
        this.productsList = list
        console.log(this.productsList)
      }).catch(err => {
        this.$message.error('获取商品列表失败！')
      })
    },
    methods: {
      selectProduct (product) {
        product.selected = !product.selected
      },
      nextStep () {
        let selectProducts = this.productsList.filter(item => item.selected)
        console.log(selectProducts)
        this.$emit('getSelectProducts', selectProducts)
      },
      getUrlQueryString(name) {
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r!=null) {
            return  unescape(r[2]);
        }
        return '';
      },
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