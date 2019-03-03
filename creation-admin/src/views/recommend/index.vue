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

      <el-col :span="9">
        <el-date-picker
          v-model="createTime"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="-"
          start-placeholder="推荐日期"
          end-placeholder="推荐日期"
          align="right">
        </el-date-picker>
      </el-col>

      <el-col :span="7" style="text-align: right;">
        <el-button type="primary" icon="el-icon-search" @click="loadData(1)">搜索</el-button>
      </el-col>
    </el-row>

    <el-table class="table" :data="list" v-loading="loading">
      <el-table-column type="selection" width="50"></el-table-column>

      <el-table-column label="资源名称" width="480" align="center">
        <template slot-scope="scope">
          <el-row>
            
          </el-row>
        </template>
      </el-table-column>

      <el-table-column label="用户名称"  align="center">
        <template slot-scope="scope">
          {{scope.row.user.userName}}
        </template>
      </el-table-column>

      <el-table-column label="审核状态"  align="center">
        <template slot-scope="scope">
        </template>
      </el-table-column>

      <el-table-column label="窄带高清转码状态"  align="center">
        <template slot-scope="scope">
        </template>
      </el-table-column>

      <el-table-column label="操作" width="250"  align="center">
        <template slot-scope="scope">
          <el-button
            :loading="scope.row.warmLoading"
            type="primary"
            @click="warmVideo(scope.row)"
            :disabled="false">xxx
          </el-button>

          <el-dropdown class="more-operator">
            <el-button>
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-if="scope.row.narrowTranscodeStatus === 'fail'"
                @click.native="transNarrowVideo(scope.row.videoId)">xxx</el-dropdown-item>
              <el-dropdown-item @click.native="deleteVideo(scope.row)">xxx</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
    <VodPlayer :title="videoTitle" :description="videoDescription" :vid="videoId" ref="vodPlayer" />
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

        // censorStatus: '',
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
        // if (this.censorStatus) {
        //   params.censorStatus = this.censorStatus
        // }
        if (this.createTime) {
          params.startTime = this.getFormatDate(this.createTime[0])
          params.endTime = this.getFormatDate(this.createTime[1])
        }
        this.page = page
        this.loading = true
        this.axios.get('/', { params })
          .then(({data}) => {
            let resData = data.data
            this.total = resData.nowTotal
            this.list = resData.videoList
          })
          .catch(this.serviceError)
          .finally(() => {
            this.loading = false
          })
      },
      deleteVideo(videoInfo) {
        this.$msgbox({
          title: '消息',
          message: '确定吗?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '操作中...'
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
      handleDelete(videoInfo, cb) {
        let { videoId } = videoInfo
        let { userId } = videoInfo.user
        this.axios.post('/', qs.stringify({
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
      }
    }
  }
</script>
