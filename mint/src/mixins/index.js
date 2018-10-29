export default {
  methods: {
    goRouter (path) {
      this.$router.push(path)
    },
    getOpenId () {
      this.$redirect('')
    }
  }
}