<template>
  <div>
    <h1>Masonry - imagesLoaded callback</h1>

    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg" />
      </div>
      <div class="grid-item">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
      </div>
    </div>

  </div>
</template>
<script>
  import Masonry from 'masonry-layout'

  import imagesLoaded from 'imagesloaded'

  export default {
    mounted () {
      // external js: masonry.pkgd.js, imagesloaded.pkgd.js

      // init Masonry after all images have loaded
      var grid = document.querySelector('.grid');

      imagesLoaded(grid, function() {
        var $grid = new Masonry(grid, {
          itemSelector: '.grid-item',
          percentPosition: true,
          columnWidth: '.grid-sizer'
        })
      })

    }
  }

</script>
<style lang="scss">
  * { box-sizing: border-box; }

  /* force scrollbar */
  html { overflow-y: scroll; }

  body { font-family: sans-serif; }

  /* ---- grid ---- */

  .grid {
    background: #DDD;
  }

  /* clear fix */
  .grid:after {
    content: '';
    display: block;
    clear: both;
  }

  /* ---- .grid-item ---- */

  .grid-sizer,
  .grid-item {
    width: 33.333%;
  }

  .grid-item {
    float: left;
  }

  .grid-item img {
    display: block;
    width: 100%;
  }

</style>