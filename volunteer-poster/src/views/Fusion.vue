<template>
  <div class="upload">
    <div class="upload-wrap" ref="uploadWrap">
      <div class="pic-wrap" ref="realpicWrap">
        <img :src="generateData" />
      </div>
    </div>
    <div class="upload-bottom">
      <el-row class="generate-tip">
        图片生成成功, 长按图片保存！
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['generateData']
  }
</script>
<style lang="scss">
  .generate-tip {
    color: #e84040;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
  }
</style>