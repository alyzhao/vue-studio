<template>
  <div class="structure">
    <div>
      <el-row class="operate-container">
        <!--
        <el-col :span="18">
          <el-select v-model="keyword" placeholder="请选择搜索条件">
            <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-input v-model="keywordValue" style="width: 300px" placeholder="请输入搜索关键词"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-col>
        -->
        <el-col :span="24">
          <el-button-group>
            <el-button type="warning" icon="el-icon-circle-plus-outline" @click="addShop">添加</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="deleteBatchShop">删除</el-button>          
          </el-button-group>          
        </el-col>
      </el-row>

      <el-table :data="list" style="width: 100%" class="shop-table center-tb" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>

        <el-table-column prop="unitId" label="id" width="200">
        </el-table-column>

        <el-table-column prop="unitType" label="类别">
        </el-table-column>

        <el-table-column label="单位logo">
          <template slot-scope="scope">
            <img class="product-img" :src="scope.row.unitImg" />
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

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData () {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineUnit/queryUnitList'
        this.axios.get(url)
          .then(({data}) => {
            let prefix = 'https://www.x-pingic.com/ASEAN_Mining/img/'
            data.forEach(item => item.unitImg = prefix + item.unitImg)
            this.list = data
          })
          .catch(this.errorHandle)
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
      }
    }
  }
</script>
<style lang="scss">
  
</style>