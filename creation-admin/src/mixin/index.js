const serviceError = function(err) {
  console.log(err)
  let msg = '请求出错!'
  if (err.data) {
    msg = err.data.message
  }
  this.$message.error(msg)
}

export default {
  methods: {
    serviceError,
  }
}