<template>
  <div class="masonry">
    <div>
      <button @click="add">点击</button>
      <button @click="reload">reload</button>
    </div>
    <!-- <div class="grid" ref="grid" :data-masonry="options"> -->
    <div class="grid" ref="grid">

      <div class="grid-sizer"></div>
      <div class="gutter-sizer"></div>
      <div class="grid-item">
        <div style="font-size: 18px;">
          var imgLoad = imagesLoaded('#container');
          imgLoad.on( 'always', function() {
            console.log( imgLoad.images.length + ' images loaded' );
            // detect which image is broken
            for ( var i = 0, len = imgLoad.images.length; i < len; i++ ) {
              var image = imgLoad.images[i];
              var result = image.isLoaded ? 'loaded' : 'broken';
              console.log( 'image is ' + result + ' for ' + image.img.src );
            }
          });
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" width="100%">
        </div>
      </div>
      <div class="grid-item grid-item--height3"></div>
      <div class="grid-item"></div>
      <div class="grid-item grid-item--height2"></div>
      <div class="grid-item"></div>
      <div class="grid-item grid-item--height3"></div>
      <div class="grid-item grid-item--height2"></div>
      <div class="grid-item"></div>
      <div class="grid-item grid-item--height2"></div>
      <div class="grid-item grid-item--height3"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item grid-item--height2"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item grid-item--height2"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item grid-item--height2"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item" v-for="item in total"></div>
    </div>
  </div>
</template>
<script>
  import Masonry from 'masonry-layout'

  import imagesLoaded from 'imagesloaded'

  export default {
    data () {
      return {
        options: null,
        total: 0,
        msnry: null
      }
    },
    mounted () {
      let options = { "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "horizontalOrder": "true", "gutter": ".gutter-sizer", "percentPosition": "true" }
      // this.options = JSON.stringify(options)
      let element = this.$refs.grid
      imagesLoaded(element, () => {
        this.msnry = new Masonry(element, options)
      })

    },
    methods: {
      add () {
        this.total = 6
        // this.msnry.reloadItems()
      },
      reload () {
        this.msnry.reloadItems()
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