<template>
  <div class="products">
    <router-view @load-data="loadData"></router-view>
    <div class="product-table-wrap">
      <el-row class="operate-container">
        <el-col :span="18">
          <el-select v-model="keyword" placeholder="请选择搜索条件">
            <!-- <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option> -->
          </el-select>
          <el-input v-model="keywordValue" style="width: 300px" placeholder="请输入搜索关键词"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button-group>
            <el-button type="warning" icon="el-icon-circle-plus-outline" @click="addProducts">添加</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="deleteBatchProducts" :disabled="multipleSelection.length <= 0">删除</el-button>          
          </el-button-group>
        </el-col>
      </el-row>
      <el-table :data="list" style="width: 100%" class="product-table center-tb" @selection-change="handleSelectionChange" v-loading="loading">
        <el-table-column type="selection" width="55">
        </el-table-column>

        <el-table-column prop="fName" label="姓名"></el-table-column>

        <el-table-column prop="fPhone" label="手机号码"></el-table-column>
        <el-table-column prop="fPack" label="套餐">
          <template slot-scope="scope">
            <el-tag class="pack-tag" v-for="item in computedPack(scope.row.fPack)" :key="item">{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editProduct(scope.row.aId)">编辑</el-button>
            <el-button size="mini" style="margin-left: 3px;" type="danger" @click="deleteProduct(scope.row.aId)">删除</el-button>
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
  import { aTypeOptions, aAreaOptions } from 'constants/index'
  export default {
    data () {
      return {
        list: [],
        multipleSelection: [],
        keyword: '',
        keywordValue: '',
        page: 1,
        size: 5,
        total: 0,
        loading: false
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
        // this.$confirm('确定删除该商品吗?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.axios.delete('/pro/delete', {data: {_id: productId}}).then(res => {
        //     this.successHandle(res, '删除成功!', () => {
        //       this.loadData()
        //     })
        //   }).catch(this.errorHandle)
        // })
      },
      addProducts () {
        // this.$router.push(`/products/add`)
      },
      loadData (params = {}) {
        this.loading = true
        console.log('page: ', this.page)
        console.log('size: ', this.size)
        params.pageSize = this.size
        params.pageIndex = (this.page - 1) * this.size
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/queryForumAllList'
        this.axios.get(url, {params: params}).then(res => {
          let data = res.data
          this.list = data.forum_FormList
          this.total = Number(data.totalCount) 
        })
        .catch(this.errorHandle)
        .finally(() => {
          this.loading = false
        })
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      deleteBatchProducts () {
        // this.$confirm('确定删除这些商品吗?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   let _ids = this.multipleSelection.map(item => item._id)
        //   this.axios.delete('/pro/batchDelete', {
        //     data: {_ids}
        //   }).then(res => {
        //     if (res.data.message === 'success') {
        //       this.$message.success('删除成功!')
        //       this.loadData()
        //     } else {
        //       this.$message.error(res.data.message)
        //     }
        //   }).catch(err => {
        //     this.$message.error(err.response.data.message)
        //   })
        // }).catch(err => console.log(err))
      },
      search () {
        // let searchkey = ''
        // if (this.keywordValue && this.keyword) {
        //   searchkey = {}
        //   searchkey[this.keyword] = this.keywordValue
        // }
        // this.loadData({searchkey: searchkey})
      },
      handleSizeChange (val) {
        this.size = val
        this.loadData()
      },
      handleCurrentChange (val) {
        this.page = val
        this.loadData()
      },
      computedPack (val) {
        let arr = val.split(',')
        let packResult = {
          '01': '注册费',
          '02': '套餐1服务',
          '03': '套餐2服务'
        }
        return arr.map(item => packResult[item])
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
  .pack-tag + .pack-tag {
    margin-left: 5px;
  } 
</style>
