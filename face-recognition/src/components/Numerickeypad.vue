<template>
  <div class="numeric-keypad">
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(1)">1</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(2)">2</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(3)">3</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(4)">4</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(5)">5</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(6)">6</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(7)">7</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(8)">8</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(9)">9</button>
    </div>
    <div class="number-cell"></div>
    <div class="number-cell">
      <button @touchstart="test" @click="keyIn(0)">0</button>
    </div>
    <div class="number-cell">
      <button @touchstart="test" @click="deletKey" class="number-delete"><i class="iconfont icon-delete"></i></button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
      max: {
        type: Number,
        default: 4
      }
    },
    model: {
      prop: 'value',
      event: 'change',
    },
    data() {
      return {

      }
    },
    methods: {
      test() {
        // alert(1)
        console.log('xxxx')
      },
      keyIn(number) {
        // this.$emit('keyIn', number)
        if (this.value.length < 4) {
          this.$emit('change', this.value + number.toString())          
        }
      },
      deletKey() {
        this.$emit('change', this.value.slice(0, -1))
      }
    }
  }
</script>
<style lang="scss">
  .numeric-keypad {
    display: flex;
    flex-wrap: wrap;
    background-color: #d0d3d9;
    align-content: flex-start;
    .number-cell {
      width: 33.33%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      button {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #fefefe;
        color: #000;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        box-shadow: #888 0 1.5px;
        user-select: none;
        transition: background-color linear .05s;
        -webkit-tap-highlight-color: transparent;
        &.number-delete {
          background-color: transparent;
          box-shadow: none;
          i {          
            font-size: 22px;
          }
          &:active {
            background-color: transparent;
            i {
              color: #555;
            }
          }
        }
        &:focus {
          outline: none;
        }
        // &:hover {
        //   background-color: #fefefe;
        // };
        &:active {
          background-color: #b8c2ce;
        }
      }
    }
  }
</style>