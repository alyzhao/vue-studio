<template>
  <div>
    <waterfall :line-gap="200" :watch="items" :min-lin-gap="100" :max-line-gap="300">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
      >
      <div class="item">
        <div :style="{backgroundColor: '#' + item.height + 'eff'}">
          <img :src="item.img" width="100%">
        </div>
      </div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>
<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  export default {
    data () {
      return {
        items: [{width: 480, height: 621}
          ,{width: 480, height: 640}
          ,{width: 480, height: 2291}
          ,{width: 480, height: 354}
          ,{width: 480, height: 722}
          ,{width: 480, height: 715}
          ,{width: 480, height: 718}
          ,{width: 451, height: 599}]
      }
    },
    created () {
      let imgList = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg', '/images/5.jpeg', '/images/6.jpeg', '/images/7.jpeg', '/images/8.jpeg']
      let list = imgList .map((item, index) => {
        let imgElement = new Image()
        imgElement.onload = () => {
          list[index].width = imgElement.width
          list[index].height = imgElement.height
        }
        imgElement.src = item
        return {
          img: item,
          id: index
        }
      })
      console.log(list)
      // this.items = list
    }, 
    methods: {
      randomStyle () {

      }
    },
    components: {
      Waterfall,
      WaterfallSlot
    }
  }
</script>
<style>
  .item {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  .item div {
    width: 100%;
    height: 100%; 
    overflow: hidden;  
  }
  .item img {
    width: 100%;
  }
</style>