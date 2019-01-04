<template>
  <div class="forum">
    <el-row class="operate-container">
      
      <el-col :span="12" style="text-align: left;">
        <el-button-group>
          <el-button type="warning" icon="el-icon-circle-plus-outline" @click="add">添加</el-button>
          <!-- <el-button type="danger" icon="el-icon-delete" @click="deleteBatchShop">删除</el-button>           -->
        </el-button-group>          
      </el-col>
    </el-row>

    <el-table :data="list" style="width: 100%" class="shop-table center-tb" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>

      <el-table-column prop="opId" label="id" width="80">
      </el-table-column>

      <el-table-column prop="opData" label="论坛日期">
      </el-table-column>

      <el-table-column prop="opTime" label="论坛时间">
      </el-table-column>

      <el-table-column prop="opDetail" label="论坛活动">
      </el-table-column>

      <el-table-column label="操作" width="260px">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
          <!-- <el-button type="warning" size="mini" style="margin-left: 3px;" @click="showProducts(scope.row.unitId)">查看商品</el-button> -->
          <el-button size="mini" type="danger" style="margin-left: 3px;" @click="delete(scope.row.unitId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="isModify ? '编辑' : '添加'" :visible.sync="dialogVisible" width="70%">
      <el-form :model="form" label-width="80px">

        <el-form-item label="论坛日期">
          <el-input v-model="form.opData"></el-input>
        </el-form-item>

        <el-form-item label="论坛时间">
          <el-time-select
              placeholder="起始时间"
              v-model="form.startTime"
              :picker-options="{
                start: '00:00',
                step: '00:10',
                end: '24:00'
              }">
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="form.endTime"
              :picker-options="{
                start: '00:00',
                step: '00:10',
                end: '24:00',
                minTime: form.startTime
              }">
            </el-time-select>
        </el-form-item>
       
        <el-form-item label="论坛活动">
          <el-input v-model="form.opDetail" type="textarea"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm" :loading="confirmLoading">确 定</el-button>
      </div>
    </el-dialog>

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
  import { cloneDeep } from 'lodash'
  import qs from 'qs'

  export default {
    data () {
      return {
        list: [],
        page: 1,
        size: 5,
        total: 0,

        // 修改添加表单
        isModify: false,
        dialogVisible: false,
        confirmLoading: false,
        form: {}
      }
    },
    created () {
      this.loadData()
    },
    methods: {
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
      edit (newsInfo) {
        this.isModify = true
        this.form = cloneDeep(newsInfo)
        this.dialogVisible = true
      },
      confirm() {
        console.log(this.form)
        let params = {
          opData: form.opData,
          opTime: form.startTime + '-' + form.endTime,
          opDetail: form.opDetail
        }
        this.confirmLoading = true
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/' + (this.isModify ? 'upDateNews' : 'webaddFrom')
        this.axios.post(url, qs.stringify({ forumList: [ params ] }))
          .then(({data}) => {
            console.log(data)
            this.$message.success('提交成功!')
            this.loadData()
            // this.dialogVisible = false
            this.form = {}
          })
          .catch(this.errorHandle)
          .finally(() => {
            this.confirmLoading = false
          })
      },

      loadData () {
        let url = 'https://www.x-pingic.com/ASEAN_Mining/onLine_Opening_Forum/queryForumList'
        let params =  {
          pageIndex: (this.page - 1) * this.size,
          pageSize: this.size
        }
        this.axios.get(url, {params}).then(({data}) => {
          this.list = data
          this.total = Number(data.totalCount)
        }).catch(this.errorHandle)
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