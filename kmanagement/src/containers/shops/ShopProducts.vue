<template>
  <div class="shop-products products">
    <router-view @load-data="loadData"></router-view>
    <div class="product-table-wrap">
      <el-row class="operate-container">
        <el-button-group>
          <el-button type="warning" icon="el-icon-circle-plus-outline" @click="goBack">返回</el-button>
        </el-button-group>
      </el-row>
      <el-table :data="products" style="width: 100%" class="product-table center-tb">
        <el-table-column prop="productName" label="商品名称"></el-table-column>

        <el-table-column prop="shopName" label="所属商户"></el-table-column>

        <el-table-column label="商品图">
          <template slot-scope="scope">
            <img class="product-img" :src="scope.row.productImg">
          </template>
        </el-table-column>

        <el-table-column prop="productNumber" label="商品货号"></el-table-column>

        <el-table-column prop="productBrand" label="商品品牌"></el-table-column>

        <el-table-column prop="productModel" label="商品型号"></el-table-column>

        <el-table-column label="上市时间">
          <template slot-scope="scope">
            {{new Date(scope.row.productMarketDate).toLocaleDateString()}}
          </template>
        </el-table-column>

        <el-table-column prop="productMaterial" label="商品材质"></el-table-column>

        <el-table-column label="商品重量">
          <template slot-scope="scope">{{scope.row.productWeight}}g</template>
        </el-table-column>

        <el-table-column prop="productDetails" label="详情"></el-table-column>

        <el-table-column prop="originalPrice" label="原价"></el-table-column>

        <el-table-column prop="currentPrice" label="折后价"></el-table-column>

      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['sid'],
    data () {
      return {
        products: [],
      }
    },
    created () {
      console.log('shop products')
      this.loadData()
    },
    methods: {
      goBack () {
        this.$router.push('/shops')
      },
      loadData () {
        console.log('load-data')
        console.log(this.sid)
        this.axios.get('/pro/getProducts', {params: {_id: this.sid}}).then(res => {
          let data = res.data
          if (data.message === 'success') {
            this.products = data.list

          }
        }).catch(this.errorHandle)
      }
    }
  }
</script>
<style lang="scss">
  .products {
    .edit-products + .product-table-wrap {
      display: none;
    }
    .product-img {
      max-width: 150px;
      max-height: 150px;
    }
  }
  .center-tb {
    table {
      tr {
        th, td {
          text-align: center;
          vertical-align: middle;
        }
      }
    }
  }
  .operate-container {
    padding: 20px;
    border-bottom: 1px solid #DCDFE6;
    margin-bottom: 15px;
  }
</style>