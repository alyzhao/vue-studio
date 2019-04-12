<template>
  <el-form class="info-form" :model="form" label-width="150px" label-position="left">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="手机号">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>

    <el-button type="primary">提交</el-button>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          phone: ''
        }
      }
    }
  }
</script>
<style lang="scss">
  .info-form {
    .el-form-item__label {
      font-size: 24px;
      color: rgba(0,0,0,0.6);
      font-weight: 500;
      line-height: 80px;
    }
    .el-input__inner {
      height: 80px;
      border-bottom: 2px solid rgba(148,157,177,0.2);
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      font-size:24px;
      background-color: #F4F5F7;
      &:focus {
        border-color: rgba(116,190,240,1);
      }
    }
    .el-button--primary {
      background: rgba(116, 190, 240, 1);
      border-color: rgba(116, 190, 240, 1);
    }
    .el-button--primary:focus, .el-button--primary:hover {
      background: rgba(116, 190, 240, .8);
      border-color: rgba(116, 190, 240, .8);
    }
    .el-button {
      width: 100%;
      font-size: 30px;
      margin-top: 20px;
    }
  }
</style>