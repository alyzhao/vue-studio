<template>
  <div class="shop">
    <router-view @load-data="loadData"></router-view>
    <div class="shop-table-wrap">
      <el-row class="operate-container">
        <el-col :span="18">
          <el-select v-model="keyword" placeholder="请选择搜索条件">
            <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-input v-model="keywordValue" style="width: 300px" placeholder="请输入搜索关键词"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button-group>
            <el-button type="warning" icon="el-icon-circle-plus-outline" @click="addShop">添加</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="deleteBatchShop" :disabled="multipleSelection.length <= 0">删除</el-button>          
          </el-button-group>          
        </el-col>
      </el-row>

      <el-table :data="shops" style="width: 100%" class="shop-table center-tb" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>

        <el-table-column prop="_id" label="商家id">
        </el-table-column>

        <el-table-column prop="shopName" label="商家名称">
        </el-table-column>

        <el-table-column label="商家邮箱" prop="email">
        </el-table-column>

        <el-table-column label="商家电话" prop="shopPhone">
        </el-table-column>

        <el-table-column label="商家地址" prop="shopAddress">
        </el-table-column>

        <el-table-column label="商家门店" prop="shopStore">
        </el-table-column>


        <el-table-column label="营业执照">
          <template slot-scope="scope">
            <img class="product-img" :src="scope.row.shopLicense" />
          </template>
        </el-table-column>

        <el-table-column label="入驻时间">
          <template slot-scope="scope">
            {{new Date(scope.row.shopCheckDate).toLocaleDateString()}}
          </template>
        </el-table-column>

        <el-table-column label="操作" width="260px">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editShop(scope.row._id)">编辑</el-button>
            <el-button type="warning" size="mini" style="margin-left: 3px;" @click="showProducts(scope.row._id)">查看商品</el-button>
            <el-button size="mini" type="danger" style="margin-left: 3px;" @click="deleteShop(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        shops: [],
        multipleSelection: [],
        keyword: null,
        keywordValue: null,
        selectOptions: [{
          value: 'email',
          label: '邮箱'
        }, {
          value: 'shopName',
          label: '商家名称'
        }, {
          value: 'shopPhone',
          label: '商家电话'
        }]
      }
    },
    created () {
      let role = this.$store.state.Account.user.role
      if (role) {
        this.checkPermission(role)
      } else {
        this.$store.dispatch('getUserInfo', this).then(user => {
          this.checkPermission(user.role)
        })
      }
    },
    methods: {
      addShop () {
        this.$router.push(`/shops/add`)
      },
      editShop (id) {
        console.log(id)
        this.$router.push(`/shops/edit/${id}`)
      },
      deleteShop (_id) {
        this.$confirm('确定删除该商家吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/user/delete', {data: {_id: _id}}).then(res => {
            if (res.data.message === 'success') {
              this.$message.success('删除成功!')
              this.loadData()
            } else {
              this.$message.error(res.data.message)
            }
          }).catch(err => {
            this.$message.error(err.response.data.message)
          })
        })
      },
      deleteBatchShop () {
        this.$confirm('确定删除这些商家吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let _ids = this.multipleSelection.map(item => item._id)
          this.axios.delete('/user/batchDelete', {
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
        })
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      loadData (params = {}) {
        console.log(params)
        this.axios.get('/user/list', {params: params}).then(res => {
          let data = res.data
          console.log(data)
          this.shops = data
        })
      },
      checkPermission (role) {
        if (role < 50) {
          window.location.href = '/'
        } else {
          this.loadData()
        }
      },
      showProducts (_id) {
        console.log(_id)
        this.$router.push(`/shops/goods/${_id}`)
      },
      search () {
        let searchkey = ''
        if (this.keywordValue && this.keyword) {
          searchkey = {}
          searchkey[this.keyword] = this.keywordValue
        }
        this.loadData({searchkey: searchkey})
      }
    }
  }
</script>
<style lang="scss">
  .edit-shops + .shop-table-wrap, .shop-products + .shop-table-wrap {
    display: none;
  }
  .product-img {
    max-width: 150px;
    max-height: 150px;
  }
</style>