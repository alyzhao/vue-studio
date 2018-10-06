<template>
  <div class="forum">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="forum">
        <div class="tab-con-wrap">
          <h3 class="center-text">同期活动</h3>

          <div class="schedule">
            <p class="title">11月14日（星期三）</p>
            <div class="main-content">
              <mt-cell title="08:00-22:00" value="全天注册报到（红林大酒店大堂）"></mt-cell>
            </div>
          </div>
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
      overflow: hidden;
    }
    .tab-con-wrap h3 {
      color: #26a2ff;
      font-size: 22px;
      font-weight: bold;
      margin: 22px 0;
    }
    .schedule {
      .title {

      }
      .main-content {
        .mint-cell-wrapper {
          padding: 0;
        }
        .mint-cell-title {
          -webkit-box-flex: unset;
          -ms-flex: unset;
          flex: unset;
          font-size: 14px;
          margin-right: 15px;
          white-space: nowrap;
          color: #888;
        }
        .mint-cell-value {
          color: #333;
          font-size: 16px;
        }
      }
    }
  }
</style>