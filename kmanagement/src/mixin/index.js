const successHandle = function (res, smessage, cb, errCb) {
  if (res.data.message === 'success') {
    this.$message.success(smessage)
    cb && cb();
  } else {
    this.$message.error(res.data.message)
    errCb && errCb();
  }
}

const errorHandle = function (err) {
  this.$message.error(err.response.data.message || err.response)
}

export default {
  methods: {
    successHandle,
    errorHandle    
  }
}