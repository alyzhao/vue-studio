<template>
  <div class="user-info">
    <router-view></router-view>
    <div class="user-info-wrap">
      <el-row :gutter="30">
        <el-col class="title" :span="4">
          邮箱
        </el-col>
        <el-col class="info" :span="20">
          {{user.email}}
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col class="title" :span="4">
          用户名称
        </el-col>
        <el-col class="info" :span="20">
          {{user.shopName}}
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col class="title" :span="4">
          联系电话
        </el-col>
        <el-col class="info" :span="20">
          {{user.shopPhone}}
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col class="title" :span="4">
          地址
        </el-col>
        <el-col class="info" :span="20">
          {{user.shopAddress}}
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col class="title" :span="4">
          门店
        </el-col>
        <el-col class="info" :span="20">
          {{user.shopStore}}
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col class="title" :span="4">
          营业执照
        </el-col>
        <el-col class="info" :span="20">
          <img :src="user.shopLicense">
        </el-col>
      </el-row>

      <el-row :gutter="30">
        <el-col class="info" :span="20" :push="4">
          <el-button type="primary" @click="editUserInfo">编辑</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      user () {
        return this.$store.state.Account.user
      }
    },
    methods: {
      editUserInfo () {
        this.$router.push(`/index/edit`)
      }
    }
  }
</script>
<style lang="scss">
  .user-info {
    .edit-userinfo + .user-info-wrap {
      display: none;
    }
    .el-row {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .title {
      text-align: right;
    }
    .info {
      color: #606266;
      img {
        max-width: 150px;
        max-height: 150px;
      }
    }
  }
</style>