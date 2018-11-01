export default {
  methods: {
    goRouter (path) {
      this.$router.push(path)
    },
    getOpenId () {
      let code = this.getUrlQueryString('code')
      let url = 'https://www.x-pingic.com/ASEAN_Mining/onLineToken/queryToken'
      return this.axios.get(url, {params: {wxcode: code}})     
      // 获取openApi
    },
    getOpenIdError () {
      this.MessageBox.alert('请在微信中打开!').then(action => {
        window.location.href = '/'
      })
    },
    getUrlQueryString(name) {
      let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if (r!=null) {
        return  unescape(r[2]);
      }
      return null;
    },
    serviceError (err) {
      console.log(err)
      this.Toast({
        message: '网络错误请重试!'
      })
    },
    getFormData (data) {
      let formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
      return formData
    }
  }
}