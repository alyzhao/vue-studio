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
    },
    uuid (len, radix) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
      var uuid = [], i
      radix = radix || chars.length

      if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
      } else {
        var r
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'
        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16
            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
          }
        }
      }

      return uuid.join('')
    }
  }
}