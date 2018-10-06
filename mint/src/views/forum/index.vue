<template>
  <div class="forum">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="forum">
        <div class="tab-con-wrap">
          
          forum
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="charges">
        <div>charges</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="apply">
        <div>apply</div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" class="bt-tab">
      <mt-tab-item id="forum">
        开幕式分论坛
      </mt-tab-item>
      <mt-tab-item id="charges">
        收费标准
      </mt-tab-item>
      <mt-tab-item id="apply">
        论坛报名
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: 'forum'        
      }
    }
  }
</script>
<style lang="scss">
  .forum {
    .bt-tab {
      background: rgba(0, 0, 0, .3);
      color: #fff;
      a.is-selected {
        background: #ffcc00;
        color: #333;
      }
      .mint-tab-item-label {
        line-height: 30px;
        font-size: 14px;
      }
    }
    .tab-con-wrap {
      padding: 0 15px;
    }
  }
</style>