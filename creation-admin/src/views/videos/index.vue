<template>
  <el-container class="main-container">

    <el-aside :width="isCollapse ? '65px' : '250px'" class="main-aside" >
      <div class="menu-title">
        <img src="../../assets/images/logo.svg">
        <span class="nowrap" v-if="!isCollapse">管理后台</span>
      </div>

      <el-menu
        :collapse="isCollapse"
        class="main-menu"
        :default-active="activeIndex"
        background-color="#001529"
        text-color="#ddd"
        router>

        <el-menu-item
          index="list"
          :route="{path: '/videos'}">
          <i class="el-icon-document"></i>
          <span slot="title">xxxxx</span>
        </el-menu-item>

        <el-menu-item
          index="recommend"
          :route="{path: '/videos/recommend'}">
          <i class="el-icon-star-off"></i>
          <span slot="title">mmmmmmmmm</span>
        </el-menu-item>
      </el-menu>

      <div class="collapse-menu" @click="toggleCollapse">
        <span v-show="!isCollapse">收起</span>
        <i :class="{collapse: isCollapse}" class="el-icon-d-arrow-left"></i>
      </div>
    </el-aside>

    <el-container>

      <el-header class="main-header">

        <el-dropdown>
          <img src="../../assets/images/logo.svg" class="login-info-logo">
          <i class="el-icon-caret-bottom"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="signout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>

      <el-main>
        <div>
          <router-view></router-view>          
        </div>
      </el-main>

    </el-container>

  </el-container>
</template>
<script>
  import qs from 'qs'

  export default {
    data() {
      return {
        activeIndex: this.$route.name,
        isCollapse: localStorage.getItem('isCollapse') === 'true',
      }
    },
    methods: {
      signout() {
        let consoleToken = localStorage.getItem('token')
        if (!consoleToken) {
          return
        }
        this.axios.post('/')
          .then(({data}) => {
            this.$message.success('退出成功!')
            localStorage.setItem('token', '')
            this.$router.replace('/login')
          })
          .catch(this.serviceError)
      },
      toggleCollapse () {
        this.isCollapse = !this.isCollapse
        localStorage.setItem('isCollapse', this.isCollapse)
      }
    }
  }
</script>
<style lang="scss">
  .main-container {
    height: 100%;
    .el-menu-item.is-active, .el-menu-item:hover {
      background-color: #000c17 !important;
    }
  }
  .el-menu.main-menu {
    border-right: solid 1px #001529;
  }
  .main-aside {
    background-color: #001529;
    position: relative;
    width: 250px;
    transition: width .25s;
    &.collapse {
      width: 65px;
    }
  }
  .collapse-menu {
    cursor: pointer;
    border-right: solid 1px #001529;
    width: 100%;
    position: absolute;
    height: 56px;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ddd;
    background-color: #182435;
    color: #fff;
    box-sizing: border-box;
    i {
      font-size: 18px;
      transition: transform .25s;
      &.collapse {
        transform: rotate(180deg);
      }
    }
  }
  .menu-title {
    box-sizing: border-box;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: solid 1px #001529;
    color: #fff;
    font-size: 16px;
    img {
      max-width: 80px;
      max-height: 35px;
      margin-right: 5px;
    }
  }

  .main-header {
    border-bottom: solid 1px #e6e6e6;
    line-height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    .el-dropdown {
      cursor: pointer;
    }
  }
  .login-info-logo {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-right: 5px;
    vertical-align: middle;
  }

  .main {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 3px 1px;
    background-color: #fff;
    overflow: hidden;
  }

  .operator-header {
    border-bottom: 1px solid #dcdfe6;
    margin-bottom: 15px;
    padding: 20px;    
  }

</style>