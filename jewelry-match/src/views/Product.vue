<template>
  <div class="products">
    <div class="products-wrap">
      <el-row :gutter="10" style="margin-left: 0;margin-right: 0;padding-top: 5px;">
        <el-col :span="12" @click.native="selectModel(modelMale)">
          <el-card class="product-cell">
            <img :src="modelMale">
          </el-card>
        </el-col>

        <el-col :span="12" @click.native="selectModel(modelFemal)">
          <el-card class="product-cell">
            <img :src="modelFemal">
          </el-card>
        </el-col>

      </el-row>
    </div>
<!-- 
    <el-row style="text-align: center;position: absolute;bottom: 20px;width: 100%;">
      <el-button type="primary" :disabled="hasSelectProduct" @click="nextStep">下一步</el-button>
    </el-row>
 -->    
  </div>  
</template>
<script>
  import modelMale from 'assets/images/model1.png'
  import modelFemal from 'assets/images/model2.png'

  export default {
    data () {
      return {
        modelMale,
        modelFemal
      }
    },
    mounted () {
      
    },
    methods: {
      selectModel (model) {
        this.$emit('chooseModel', model)
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
      &:active {
        border-color: #F56C6C;
      }
      .el-card__body {
        padding: 0;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      // &.selected{
        
      // } 
    }
    .el-col-8 {
      margin-bottom: 10px;
    }
  }
</style>