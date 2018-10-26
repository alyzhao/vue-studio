<template>
  <el-container class="z-management">
    <el-aside width="250px" style="position: relative;">
      <div class="z-management-title"><i class="el-icon-goods"></i>矿业展后台管理系统</div>
      <el-menu style="height: 100%;padding-top: 56px;box-sizing: border-box;" :default-active="activeIndex" router background-color="#324157"
      text-color="#bfcbd9">
        <el-submenu index="1" :default-openeds="['1','2','3','4', '5']">
          <template slot="title"><i class="el-icon-star-on"></i>参会指南</template>
          <el-menu-item v-for="item in menu" :key="item.route" :index="item.route" :route="{path: '/' + item.route}">
            <!-- <i :class="item.icon"></i> -->
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
          <el-menu-item index="pdf" :route="{path: 'pdf'}">
            <!-- <i :class="item.icon"></i> -->
            <span slot="title">上传pdf</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right;border-bottom: solid 1px #e6e6e6;line-height: 60px;background-color: #242f42;color: #fff;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px;color: #fff;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="signout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{userInfo.shopName}}</span>
      </el-header>
      <el-main style="background-color: #F2F6FC;">
        <div style="box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px 1px;background-color: #fff">
          <router-view></router-view>          
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import { adminMenu, userMenu } from 'constants'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        menu: [],
        activeIndex: null
      }
    },
    created () {
      // this.$store.dispatch('getUserInfo', this).then(user => {
        // if (user.role > 50) {
          this.menu = adminMenu
        // } else {
          // this.menu = userMenu
        // }
      // }).catch(err => {
      //   console.info(err)
      //   console.info(err.response)
      // })

      let fullPath = this.$router.currentRoute.fullPath
      if (fullPath.match(/\/products/)) {
        this.activeIndex = 'products'
      } else if (fullPath.match(/\/index/)) {
        this.activeIndex = 'index'
      } else if (fullPath.match(/\/pdf/)) {
        this.activeIndex = 'pdf'
      }
    },
    methods: {
      signout () {
        this.axios.post('/user/signout').then(res => {
          let data = res.data
          if (data.message === 'success') {
            this.$message.success('退出成功!')
            window.location.href = '/login'
          } else {
            this.$message.error(data.message)
          }
        }).catch(err => {
          this.$message.error(err.response.data.message)
        })
      },
      axiosR () {
        this.axios.interceptors.response.use(response => {
          console.log(response)
          return response
        }, err => {
          if (err.response.status === 401) {
            this.$alert('长时间未操作, 请登录!', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              callback: action => {
                window.location.href = '/login'
              }
            })
          } else if (err.response.status === 403) {
            this.$alert('操作无权限!', '提示', {
              confirmButtonText: '确定',
              type: 'warning',
              callback: action => {
                window.location.href = '/'
              }          
            })
          }
          return Promise.reject(err) 
        })
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.Account.user
      }
    }
  }
</script>
<style lang="scss">
  .z-management {
    height: 100%;
    .z-management-title {
      line-height: 56px;
      text-align: left;
      position: absolute;
      top: 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      z-index: 9;
      padding-left: 20px;
      width: 100%;
      box-sizing: border-box;
      background: #242f42;
      padding-bottom: 3px;
      i {
        margin-right: 5px
      }
    }
  }
</style>