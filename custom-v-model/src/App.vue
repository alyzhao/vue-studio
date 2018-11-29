<template>
  <div>
    <Custom v-model="text" />
  </div>
</template>
<script>
  /**
   * 加上 v-model 指令之后, 会默认绑定一个 change 事件 和向下传递一个 value 属性
   * 
   */

  import Custom from './components/Custom'

  export default {
    components: {
      Custom
    },
    data: () => ({
      text: 'xxxx'
    }),
    created () {
      setInterval(() => {
        console.log(this.text)
      }, 500)
    }
  }
</script>