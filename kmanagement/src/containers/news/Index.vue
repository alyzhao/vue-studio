<template>
  <div class="news">
    <el-row class="operate-container">
      <el-col :span="12">
        新闻类别:
        <el-select style="margin-left: 5px;" v-model="selectedType" placeholder="选择类别" @change="loadData()">
          <el-option v-for="item in typeOptions" :key="item.type" :label="item.label" :value="item.type"></el-option>
        </el-select>
      </el-col>
      
      <el-col :span="12" style="text-align: right;">
        <el-button-group>
          <el-button type="warning" icon="el-icon-circle-plus-outline" @click="addShop">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="deleteBatchShop">删除</el-button>          
        </el-button-group>          
      </el-col>
    </el-row>

    <el-table :data="list" style="width: 100%" class="shop-table center-tb" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column prop="id" label="id" width="80">
      </el-table-column>

      <el-table-column prop="newsDate" label="发布日期">
      </el-table-column>

      <el-table-column prop="newsName" label="新闻标题">
      </el-table-column>

      <el-table-column prop="newsSource" label="信息来源">
      </el-table-column>

      <el-table-column prop="newsSource" label="新闻链接">
        <template slot-scope="scope">
          <a :href="scope.row.newsURL" target="_blank">{{scope.row.newsURL}}</a>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="260px">
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
        list: [],
        typeOptions: [{
          type: 1,
          label: '2018矿业展'
        }, {
          type: 2,
          label: '行业资讯'          
        }, {
          type: 3,
          label: '秘书处公告'          
        }, {
          type: 4,
          label: '展会回顾'          
        }],
        selectedType: 1,
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
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineNews/query2018List'
        let params =  {
          type: this.selectedType,
          pageIndex: (this.page - 1) * this.size,
          pageSize: this.size
        }
        this.axios.get(url, {params}).then(({data}) => {
          this.list = data.news
          this.total = Number(data.totalCount)
        }).catch(this.errorHandle)
      },
      addShop () {

      },
      deleteBatchShop () {

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
        this.loadData()
      },
      handleCurrentChange(val) {
        this.page = val
        this.loadData()
      }
    }
  }
</script>