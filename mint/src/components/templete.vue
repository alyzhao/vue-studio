<template>
  <div class="tmp exhibition">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1">
        <div class="tab-con-wrap"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <div class="tab-con-wrap">
          <h3 class="center-text">展会特色</h3>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <div class="tab-con-wrap">

        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <div class="tab-con-wrap">

        </div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed class="bt-tab">
      <mt-tab-item id="tab1">
        展会概况
      </mt-tab-item>
      <mt-tab-item id="tab2">
        展会特色
      </mt-tab-item>
      <mt-tab-item id="tab3">
        收费标准
      </mt-tab-item>
      <mt-tab-item id="tab4">
        优惠政策
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: 'tab1',
      }
    }
  }
</script>