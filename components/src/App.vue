<template>
  <div id="app">
    <button @click="tree = !tree">switch</button>
    <Tree v-if="tree" />
    <HelloWorld v-else />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tree from './components/Tree'

export default {
  name: 'app',
  data: () => ({
    tree: true
  }),
  components: {
    Tree,
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
