<template>
  <div class="news">
    <el-row class="operate-container">
      <el-col :span="24" style="text-align: right;">
        <el-button-group>
          <!-- <el-button type="warning" icon="el-icon-circle-plus-outline" @click="addShop">添加</el-button> -->
          <el-button type="danger" icon="el-icon-delete" @click="deleteBatch">删除</el-button>          
        </el-button-group>          
      </el-col>
    </el-row>

    <el-table :data="list" style="width: 100%" class="shop-table center-tb" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column prop="aId" label="id" width="80">
      </el-table-column>

      <el-table-column prop="bName" label="姓名">
      </el-table-column>

      <el-table-column label="照片">
        <template slot-scope="scope">
          <img class="product-img" :src="scope.row.bImg" />
        </template>
      </el-table-column>


      <el-table-column prop="bCardType" label="证件类型">
      </el-table-column>

      <el-table-column prop="bCardNum" label="证件号码">
      </el-table-column>

      <el-table-column prop="bCountry" label="国家">
      </el-table-column>

      <el-table-column prop="bAdress" label="地址">
      </el-table-column>

      <el-table-column prop="bPhone" label="电话">
      </el-table-column>

      <el-table-column prop="bCompany" label="公司">
      </el-table-column>

      <el-table-column prop="bCompanyType" label="公司业务性质">
      </el-table-column>

      <el-table-column prop="bPost" label="职务">
      </el-table-column>

      <el-table-column prop="bLikeProduct" label="感兴趣的产品类别">
      </el-table-column>

      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="edit(scope.row.unitId)">编辑</el-button>
          <!-- <el-button type="warning" size="mini" style="margin-left: 3px;" @click="showProducts(scope.row.unitId)">查看商品</el-button> -->
          <el-button size="mini" type="danger" style="margin-left: 3px;" @click="delete(scope.row.unitId)">删除</el-button>
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
</template>
<script>
  export default {
    data () {
      return {
        list: [{
          // bName: 1,//个人姓名
          // bImg: 1,//证件照
          // bCardType: 1,//证件类型
          // bCardNum: 1,//证件号码
          // bCountry: 1,//国家
          // bAdress: 1,//地址
          // bPhone: 1,//电话
          // bCompany: 1,//公司
          // bCompanyType: 1,//公司业务性质 
          // bPost: 1,//职务 
          // bLikeProduct: 1,//感兴趣的产品类别
          // Openid: 1
        }],
        page: 1,
        size: 5,
        total: 0
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData () {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineBuyer/queryBuyerList'
        let params =  {
          pageIndex: (this.page - 1) * this.size,
          pageSize: this.size
        }
        this.axios.get(url, {params}).then(({data}) => {
          console.log(data)
          this.list = data.application
          this.total = Number(data.totalCount)
        })
        .catch(this.errorHandle)
      },
      addShop () {

      },
      deleteBatch () {

      },
      edit (id) {

      },
      delete (id) {

      },
      handleSelectionChange (val) {
        console.log(val)
        this.loadData()
      },
      handleSizeChange (val) {
        this.size = val
        this.page = 1
        this.loadData()
      },
      handleCurrentChange(val) {
        this.page = val
        this.loadData()
      }
    }
  }
</script>