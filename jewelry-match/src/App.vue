<template>
  <div class="compound">
    <Upload />
  </div>
</template>
<script>
  import Upload from 'views/Upload'

  export default {
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      Upload
    }
  }
</script>
<style lang="scss">
  .compound {
    width: 100%;
    height: 100%;
    padding: 5vw;
    box-sizing: border-box;
  }
</style>