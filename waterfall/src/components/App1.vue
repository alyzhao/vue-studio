<template>
  <div>
    <waterfall align="center" :line-gap="200" :watch="items" :min-lin-gap="100">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
      >
        <div class="item" :style="item.style" :index="item.index">{{index}}</div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>
<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

  var ItemFactory = (function () {

    var lastIndex = 0

    function generateRandomItems (count) {
      var items = [], i
      for (i = 0; i < count; i++) {
        items[i] = {
          index: lastIndex++,
          style: {
            background: getRandomColor()
          },
          width: 200,
          height: 100 + ~~(Math.random() * 50)
        }
      }
      return items
    }

    function getRandomColor () {
      var colors = [
        'rgba(21,174,103,.5)',
        'rgba(245,163,59,.5)',
        'rgba(255,230,135,.5)',
        'rgba(194,217,78,.5)',
        'rgba(195,123,177,.5)',
        'rgba(125,205,244,.5)'
      ]
      return colors[~~(Math.random() * colors.length)]
    }

    return {
      get: generateRandomItems
    }

  })()

  export default {
    data () {
      return {
        items: []
      }
    },
    created () {
      this.items = ItemFactory.get(10)
      console.log(this.items)
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
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;
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