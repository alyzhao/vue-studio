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
            <el-button type="warning" icon="el-icon-circle-plus-outline" @click="add">添加</el-button>
            <!-- <el-button type="danger" icon="el-icon-delete" @click="deleteBatchShop">删除</el-button>           -->
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
            <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
            <!-- <el-button type="warning" size="mini" style="margin-left: 3px;" @click="showProducts(scope.row.unitId)">查看商品</el-button> -->
            <el-button size="mini" type="danger" style="margin-left: 3px;" @click="delete(scope.row.unitId)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :title="isModify ? '编辑' : '添加'" :visible.sync="dialogVisible" width="70%" @open="initialUpload">
        <el-form :model="form" label-width="80px">
          <el-form-item label="单位类型">
            <el-select v-model="form.unitType" placeholder="选择类别">
              <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="单位logo">
            <UploadImg ref="uploadImg" :imgSrc="form.unitImg" @file-change="fileChange" />
          </el-form-item>        
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm" :loading="confirmLoading">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>
<script>
  import UploadImg from 'components/UploadImg'
  import { cloneDeep } from 'lodash'

  export default {
    components: {
      UploadImg,
    },
    data () {
      return {
        list: [],

        options: ['主办单位', '协办单位', '合作单位'],

        // 修改添加表单
        isModify: false,
        dialogVisible: false,
        confirmLoading: false,
        form: {},
      }
    },
    created () {
      this.loadData()
    },
    methods: {
      initialUpload() {
        if (this.$refs.uploadImg) {
          this.$refs.uploadImg.bgImg = this.form.unitImg
        }
        console.log(this.$refs.uploadImg)
        console.log(this.form.unitImg)
      },
      fileChange (file) {
        this.form.unitImg = file
      },
      // 添加修改表单
      add () {
        this.isModify = false
        this.form = {}
        this.dialogVisible = true
      },
      // deleteBatchShop () { },
      delete (id) {
        let url = ''
      },
      edit (item) {
        this.isModify = true
        this.form = cloneDeep(item)
        this.dialogVisible = true
      },
      confirm() {
        this.confirmLoading = true
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineUnit/' + (this.isModify ? 'upDateUnit' : 'creatUnit')

        let form = new FormData()
        if (this.form.unitImg instanceof File) {
          form.append('changeImg', 1)
          form.append('uImg', this.form.unitImg)
        } else {
          form.append('changeImg', 0)
          console.log(this.form.unitImg)
          let unitImg = this.form.unitImg.replace(/https:\/\/www.x-pingic.com\/ASEAN_Mining\/img\//g, '')
          form.append('unitImg', unitImg)          
          console.log(unitImg)
        }
        form.append('unitType', this.form.unitType)

        if (this.isModify) {
          form.append('unitId', this.form.unitId)
        }

        this.axios.post(url, form)
          .then(({data}) => {
            console.log(data)
            this.$message.success('提交成功!')
            this.loadData()
            this.dialogVisible = false
          })
          .catch(this.errorHandle)
          .finally(() => {
            this.confirmLoading = false
          })
      },


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