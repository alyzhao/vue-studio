<template>
  <div class="products">
    <router-view @load-data="loadData"></router-view>
    <div class="product-table-wrap">
      <el-row class="operate-container">
        <el-col :span="18">
          <el-select v-model="keyword" placeholder="请选择搜索条件">
            <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-input v-model="keywordValue" style="width: 300px" placeholder="请输入搜索关键词"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-col>
        <el-button-group>
          <el-button type="warning" icon="el-icon-circle-plus-outline" @click="addProducts">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="deleteBatchProducts" :disabled="multipleSelection.length <= 0">删除</el-button>          
        </el-button-group>
      </el-row>
      <el-table :data="products" style="width: 100%" class="product-table center-tb" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>

        <el-table-column prop="productName" label="商品名称"></el-table-column>

        <el-table-column prop="shopName" label="所属商户" v-if="isAdmin"></el-table-column>

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

        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editProduct(scope.row._id)">编辑</el-button>
            <el-button size="mini" style="margin-left: 3px;" type="danger" @click="deleteProduct(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row style="padding: 30px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-sizes="[5, 10, 20]"
          :page-size="size"
          background
          style="text-align: right"
          layout="total, sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        products: [],
        multipleSelection: [],
        keyword: '',
        keywordValue: '',
        page: 1,
        size: 5,
        total: 0
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      editProduct (productId) {
        console.log(productId)
        this.$router.push(`/products/edit/${productId}`)
      },
      deleteProduct (productId) {
        this.$confirm('确定删除该商品吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/pro/delete', {data: {_id: productId}}).then(res => {
            this.successHandle(res, '删除成功!', () => {
              this.loadData()
            })
          }).catch(this.errorHandle)
        })
      },
      addProducts () {
        this.$router.push(`/products/add`)
      },
      loadData (params = {}) {
        console.log('page: ', this.page)
        console.log('size: ', this.size)
        params.page = this.page
        params.size = this.size
        this.axios.get('/pro/list', {params: params}).then(res => {
          let data = res.data
          if (data.message === 'success') {
            this.products = data.list
            this.total = data.count
          }
        }).catch(this.errorHandle)
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      deleteBatchProducts () {
        this.$confirm('确定删除这些商品吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let _ids = this.multipleSelection.map(item => item._id)
          this.axios.delete('/pro/batchDelete', {
            data: {_ids}
          }).then(res => {
            if (res.data.message === 'success') {
              this.$message.success('删除成功!')
              this.loadData()
            } else {
              this.$message.error(res.data.message)
            }
          }).catch(err => {
            this.$message.error(err.response.data.message)
          })
        }).catch(err => console.log(err))
      },
      search () {
        let searchkey = ''
        if (this.keywordValue && this.keyword) {
          searchkey = {}
          searchkey[this.keyword] = this.keywordValue
        }
        this.loadData({searchkey: searchkey})
      },
      handleSizeChange (val) {
        this.size = val
        this.loadData()
      },
      handleCurrentChange(val) {
        this.page = val
        this.loadData()
      }
    },
    computed: {
      isAdmin () {
        return this.$store.state.Account.user.role > 50
      },
      selectOptions () {
        let options = [{
          value: 'productName',
          label: '商品名称'
        }, {
          value: 'productBrand',
          label: '商品品牌'
        }, {
          value: 'productNumber',
          label: '商品货号'
        }]
        if (this.isAdmin) {
          options.push({
            value: 'shopName',
            label: '所属商户'
          })
        }
        return options
      }
    }
  }
</script>
<style lang="scss">
  .products {
    .edit-products + .product-table-wrap {
      display: none;
    }
  }
    .product-img {
      max-width: 150px;
      max-height: 150px;
      width: 100%;
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
