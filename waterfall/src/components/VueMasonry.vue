<template>
  <div>
    <div v-masonry transition-duration="0.3s" stagger="0" item-selector=".grid-item" column-width=".grid-sizer" horizontal-order="true" gutter=".gutter-sizer">
      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <div v-masonry-tile class="grid-item" v-for="(item, index) in blocks">
         <img :src="item" width="100%">
      </div>
    </div>
    <div><button @click="add">添加</button></div>
  </div>
</template>
<script>

  // import Masonry from 'masonry-layout'
  export default {
    data () {
      return {
        blocks: ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg', '/images/5.jpeg', '/images/6.jpeg', '/images/7.jpeg', '/images/8.jpeg']
      }
    },
    mounted () {
      let imgs = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg', "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"]
    },
    methods: {
      add () {
        let imgs = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg', "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"]

        this.blocks.push(...imgs)
      }
    }
  }
</script>
<style lang="scss">
* { box-sizing: border-box; }

body { font-family: sans-serif; }

/* ---- grid ---- */

.grid {
  background: #EEE;
  counter-reset: grid-item;
}

/* clearfix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-item {
  width: 5%;
  min-height: 120px;
  float: left;
  background: #D26;
  border: 2px solid #333;
  border-color: hsla(0, 0%, 0%, 0.5);
  border-radius: 5px;
}
.grid-sizer,
.grid-item {
  width: 23.5%;
  margin-bottom: 2%;
}
.gutter-sizer { width: 2%; }

.grid-item--width2 { width: 320px; }
.grid-item--width3 { width: 480px; }
.grid-item--width4 { width: 720px; }

.grid-item--height2 { height: 200px; }
.grid-item--height3 { height: 260px; }
.grid-item--height4 { height: 360px; }

.grid-item:before {
  counter-increment: grid-item;
  content: counter(grid-item);
  display: block;
  color: white;
  padding-top: 0.2em;
  text-align: center;
  font-size: 1.4rem;
}
</style>