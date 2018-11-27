<template>
  <div class="container">
    <!-- <Test /> -->
    <!-- <Footer /> -->
    <!-- <Example1 /> -->
    <Content />
  </div>
</template>
<script>
  import Test from './components/Test'
  // import Example1 from './components/Example1'
  import Footer from './components/Footer'
  import Content from './components/Content'

  export default {
    components: {
      Test,
      Footer,
      Content
      // Example1
    }
  }
</script>
<style lang="scss">
  .container {
    min-height: 300vh;
  }
</style>