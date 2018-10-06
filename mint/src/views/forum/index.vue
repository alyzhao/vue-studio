<template>
  <div class="forum tmp">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="forum">
        <div class="tab-con-wrap">
          <h3 class="center-text">同期活动</h3>

          <div class="schedule" v-for="item in scheduleList" :key="item.date">
            <p class="title">{{item.date}}</p>
            <div class="main-content">
              <mt-cell
                v-for="(schedule, index) in item.list"
                :key="index"
                :title="schedule.time"
                :value="schedule.content"></mt-cell>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="charges">
        <div class="tab-con-wrap">
          <h3 class="center-text">论坛参会注册价格</h3>

          <div class="charges-items">
            <div class="title">注册费:人民币<span>800</span>元/人</div>
            <div class="includes">包括：参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等。</div>
          </div>

          <div class="charges-items">
            <div class="title">套餐1服务:人民币<span>1800</span>元/人</div>
            <div class="includes">包括：机场接送机和会务用车（限会期内推荐酒店和会议地点）、会期中/晚自助餐、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）</div>
          </div>

          <div class="charges-items">
            <div class="title">套餐2服务:人民币<span>2800</span>元/人</div>
            <div class="includes">包括：大会指定酒店住宿（3晚，1人/间，含早餐）、会期中/晚自助餐、机场接送机和会务用车（限会期内推荐酒店和会议地点）、注册费（参加开幕式、主题大会、专场推介会、各分论坛、参观展馆、嘉宾证、赠送会刊等）。</div>
          </div>

        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="apply">
        <div>apply</div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed class="bt-tab">
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
  import {schedule} from 'constants'
  import cloneDeep from 'lodash.clonedeep'
  console.log(schedule)
  export default {
    data () {
      return {
        selected: 'forum',
        scheduleList: cloneDeep(schedule)
      }
    }
  }
</script>
<style lang="scss">
  .tmp {
    height: 100vh;
    padding-bottom: 44px;    
    .mint-tab-container {
      height: 100%;
      overflow-y: scroll;
    }
    .tab-con-wrap h3 {
      color: #2b7ae8;
      font-size: 22px;
      font-weight: bold;
      margin: 22px 0;
    }
    .bt-tab {
      background: #ccc;
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
  }
  .forum {
   
    .schedule {
      & + .schedule {
        margin-top: 20px;
      }
      .title {
        color: #539bff;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
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
          font-size: 14px;
          line-height: 120%;
          padding: 5px 0;
        }
      }
    }
    .charges-items {
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
      & + .charges-items {
        padding-top: 20px;
      }
      .title {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
        span {
          color: #f1bf00;
          margin: 0 3px;
        }
      }
      .includes {
        color: #555;
        line-height: 110%;
      }
    }
  }
</style>