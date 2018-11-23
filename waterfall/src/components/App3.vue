<template>
  <div>
    <div class="masonry">
      <div class="item">
        <div class="item__content">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--small">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--medium">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--small">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--medium">
        </div>
      </div>
      <div class="item">
        <div class="item__content">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--large">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--medium">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--small">
        </div>
      </div>
      <div class="item">
        <div class="item__content">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--large">
        </div>
      </div>
      <div class="item">
        <div class="item__content">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--small">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--large">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--medium">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--small">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--medium">
        </div>
      </div>
      <div class="item">
        <div class="item__content">
        </div>
      </div>
      <div class="item">
        <div class="item__content item__content--small">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      let imgList = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg', '/images/5.jpeg', '/images/6.jpeg', '/images/7.jpeg', '/images/8.jpeg']
      this.list = imgList
    }
  }
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Mono');

@function set-counter-bg-color($color) {
  @if (lightness($color) > 50) {
    @return darken($color, 60%);
  } @else {
    @return lighten($color, 50%);
  }
}

$bg: #0D0630;
$itemBg1: #18314F;
$itemBg2: #8BBEB2;
$itemBg3: #E6F9AF;
$itemBg4: #384E77;

@mixin setColorAndHover($baseColor) {
  color: $baseColor;
  &:hover {
    background: lighten($baseColor, 8%);
  }
}

body,
html {
  position: relative;
  width: 100%;
  height: 100%;
  background: $bg;
  font-family: "PT Mono", monospace;
}

.masonry {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: auto;
  
  @media screen and (min-width: 400px) {
    height: 1600px;
  }

  @media screen and (min-width: 600px) {
    height: 1300px;
  }

  @media screen and (min-width: 800px) {
    height: 1100px;
  }

  @media screen and (min-width: 1100px) {
    height: 800px;
  }
}

.item {
  box-sizing: border-box;
  padding: 10px;
  counter-increment: item-counter;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 220px;
    font-size: 40px;
    color: darken($bg, 5%);
    background: currentColor;
    box-sizing: border-box;
    @include setColorAndHover($itemBg1);

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      width: 2em;
      height: 2em;
      line-height: 2em;
      text-align: center;
      font-weight: bold;
      background-color: set-counter-bg-color($itemBg1);
      content: counter(item-counter);
    }

    &:after {
      color: darken($bg, 10%);
      content: 'ಠ‿ಠ';
    }

    &--small {
      @include setColorAndHover($itemBg2);
      height: 100px;

      &:before {    
        background: set-counter-bg-color($itemBg2);
      }

      &:after {
        content: '♥◡♥';
      }
    }

    &--medium {
      @include setColorAndHover($itemBg3);
      height: 175px;

      &:before {    
        background: set-counter-bg-color($itemBg3);
      }

      &:after {
        content: '◔ᴗ◔';
      }
    }

    &--large {
      @include setColorAndHover($itemBg4);
      height: 280px;

      &:before {    
        background: set-counter-bg-color($itemBg4);
      }

      &:after {
        content: 'ಠ_๏';
      }
    }
  }
}
</style>