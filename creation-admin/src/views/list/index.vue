<template>
  <div class="video-list">
    <el-row class="operator-header" :gutter="15">
      <el-col :span="8">
        <el-input placeholder="输入查询内容" v-model="searchKeyWord" clearable>
          <el-select placeholder="选择查询条件" v-model="searchKey" slot="prepend" class="input-with-select">
            <el-option v-for="item in searchKeyOptions" :key="item.vlaue" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-input>
      </el-col>

      <el-col :span="4">
        <el-select placeholder="选择审核状态" v-model="censorStatus" clearable>
          <el-option v-for="item in checkOptions" :key="item.vlaue" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>

      <el-col :span="9">
        <el-date-picker
          v-model="createTime"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="-"
          start-placeholder="创建日期"
          end-placeholder="创建日期"
          align="right">
        </el-date-picker>
      </el-col>

      <el-col :span="3" style="text-align: right;">
        <el-button type="primary" icon="el-icon-search" @click="loadData(1)">搜索</el-button>
      </el-col>

    </el-row>

    <el-table class="table" :data="list" v-loading="loading">
      <el-table-column type="selection" width="50"></el-table-column>

      <el-table-column label="xxxxx" width="480" align="center">
        <template slot-scope="scope">
          <el-row>
          </el-row>
        </template>
      </el-table-column>

      <el-table-column label="xxxxx" align="center">
        <template slot-scope="scope">
          
        </template>
      </el-table-column>

      <el-table-column label="xxxxx" align="center">
        <template slot-scope="scope">
          {{scope.row.user.userName}}
        </template>
      </el-table-column>

      <el-table-column label="xxxxx" align="center">
        
      </el-table-column>

      <el-table-column label="xxxxx" align="center">
       
      </el-table-column>

      <el-table-column label="xxxxx" width="250" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="recommend(scope.row)"
            :disabled="scope.row.isRecommend === 'true' || scope.row.censorStatus !== 'success'">{{ scope.row.isRecommend === 'true' ? '已推荐' : '推荐'}}
          </el-button>

          <el-popover
            placement="top"
            class="delete-propper"
            width="160"
            v-model="scope.row.checkVisible">
            <p class="check-confirm-text">选择审核操作</p>
            <div class="check-confirm">
              <el-button plain type="primary" :loading="scope.row.ckeckPassLoading" @click="checkVideo(scope.row, 1)">通过</el-button>
              <el-button plain type="danger" @click="rejectVideo(scope.row)">屏蔽</el-button>
            </div>
            <el-button
              slot="reference"
              :disabled="scope.row.censorStatus === 'onCensor'"
              type="warning"
              :loading="scope.row.checkLoading">审核</el-button>
          </el-popover>

          <el-dropdown class="more-operator">
            <el-button>
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-if="scope.row.transcodeStatus === 'fail'"
                @click.native="transVideo(scope.row.videoId)">转码</el-dropdown-item>
              <el-dropdown-item @click.native="deleteVideo(scope.row)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <!-- <el-button plain type="primary" :disabled="scope.row.censorStatus !== 'fail'">转码</el-button> -->
          <!-- <el-button type="warning" :disabled="scope.row.censorStatus !== 'fail'">审核</el-button> -->

        </template>
      </el-table-column>

    </el-table>

    <el-row class="main-pagination">
      <el-pagination
        @size-change="loadData(1)"
        @current-change="loadData"
        :current-page="page"
        :page-sizes="[5, 10, 20]"
        :page-size.sync="size"
        background
        layout="total, sizes, prev, pager, next"
        :total="total">
      </el-pagination>
    </el-row>
    <VodPlayer :title="videoTitle" :vid="videoId" :description="videoDescription" ref="vodPlayer" />
    <RecommentVideo @loadData="loadData" ref="dialogRecomment" :video="recommendVideo" />
  </div>
</template>
<script>
  import qs from 'qs'

  export default {
    components: {
    },
    data() {
      return {
        searchKeyOptions: [{
          label: '视频ID',
          value: 'videoId'
        }],
        searchKey: '',
        searchKeyWord: '',

        censorStatus: '',
        checkOptions: [{
          label: '审核中',
          value: 'onCensor'
        }],

        createTime: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一天',
            onClick: this.pickerHandle()
          }, {
            text: '最近一周',
            onClick: this.pickerHandle(7)
          }, {
            text: '最近一个月',
            onClick: this.pickerHandle(30)
          }]
        },

        loading: false,
        list: [],

        page: 1,
        size: 5,
        total: 0,

        videoTitle: '',
        videoId: '',
        videoDescription: '',

        recommendVideo: null,
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData(page = this.page) {
        let params = {
          pageIndex: page,
          pageSize: this.size
        }
        if (this.searchKey && this.searchKeyWord) {
          params[this.searchKey] = this.searchKeyWord
        }
        if (this.censorStatus) {
          params.censorStatus = this.censorStatus
        }
        if (this.createTime) {
          params.startTime = this.getFormatDate(this.createTime[0])
          params.endTime = this.getFormatDate(this.createTime[1])
        }
        this.page = page
        this.loading = true
        // this.axios.get('/', { params })
        //   .then(({data}) => {
        //     let resData = data.data
        //     this.total = resData.total
        //     this.list = resData.videoList
        //   })
        //   .catch(this.serviceError)
        //   .finally(() => {
        //     this.loading = false
        //   })
      },
      // 显示删除视频的对话框
      deleteVideo(videoInfo) {
        this.$msgbox({
          title: '消息',
          message: '确定删除吗?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '删除中...'
              this.handleDelete(videoInfo, () => {
                done()
                instance.confirmButtonLoading = false
              })
            } else {
              done()
            }
          }
        })
        .catch(() => {})
      },
      // 删除接口
      handleDelete(videoInfo, cb) {
        let { videoId } = videoInfo
        let { userId } = videoInfo.user
        this.axios.post('/console/vod/deleteVideoById', qs.stringify({
          videoId,
          userId
        }))
          .then(({data}) => {
            this.$message.success('删除成功!')
            this.loadData()
          })
          .catch(this.serviceError)
          .finally(() => {
            cb && cb()
          })
      },
      recommend(videoInfo) {
        this.recommendVideo = videoInfo
        this.$refs.dialogRecomment.visible = true
      },
      // 显示填写屏蔽的理由, 优化功能
      showCheckReject() {
        this.$prompt('请输入屏蔽理由', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '请不要超过128个字'
        }).then(({ value }) => {
          this.$message({

          })
        }).catch(() => {
          this.$message({

          })
        })
      },
      transVideo(videoId) {
        this.axios.post('/console/vod/submitTranscode', qs.stringify({
          mediaId: videoId
        }))
          .then(({data}) => {
            this.$message.success('转码成功!')
          })
          .catch(this.serviceError)
      },
      rejectVideo(videoInfo) {
        this.$msgbox({
          title: '消息',
          message: '确定屏蔽吗?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '执行中...'
              this.checkVideo(videoInfo, 0, () => {
                done()
                instance.confirmButtonLoading = false
              })
            } else {
              done()
            }
          }
        })
        .catch(() => {})
      },
      checkVideo(videoInfo, code, cb) {
        videoInfo.ckeckPassLoading = code === 1 && true
        let videoId = videoInfo.videoId
        let params = {
          mediaId: videoId
        }
        params.status = code === 1 ? 'Normal' : 'Blocked'
        this.axios.post('/console/vod/createAudit', qs.stringify(params))
          .then(({data}) => {
            videoInfo.checkVisible = false
            this.$message.success(data.message)
            this.loadData()
          })
          .catch(this.serviceError)
          .finally(() => {
            videoInfo.ckeckPassLoading = code === 1 && false;
            cb && cb();
          })
      },
    }
  }
</script>
<style lang="scss">
  .video-list {
    .el-button + .el-button {
      margin-left: 5px;
    }
  }
  .input-with-select .el-input {
    width: 120px;
  }
  .main-pagination {
    padding: 20px;
    .el-pagination {
      text-align: right;
    }
  }
  .empty-data {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }

  .more-operator {
    margin-left: 5px;
    .el-button {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .delete-confirm-text {
    font-size: 12px;
  }
  .delete-confirm {
    text-align: right;
    margin: 0;
  }
  .delete-propper {
    margin-left: 5px;
  }

  .check-confirm-text {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .check-confirm {
    text-align: right;
    margin: 0;
    .el-button {
      padding: 5px 12px;      
    }
  }
</style>
