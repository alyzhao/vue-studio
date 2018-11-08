<template>
  <div class="v-console" style="padding: 30px;">
    <el-input v-model="source"></el-input>
    <el-button @click="clickHandle">click</el-button>
    <div :title="source" ref="playerContent"></div>
  </div>
</template>
<script>
  import VConsole from './modules/vconsole.min'


  export default {
    data () {
      return {
        vConsole: null,
        source: null
      }
    },
    mounted () {
      this.vConsole = new VConsole({
        defaultPlugins: ['system', 'network', 'element']
      })
    },
    methods: {
      clickHandle () {
        let playerContent = this.$refs.playerContent
        let encodeHtml = decodeHtml(this.source)
        // let encodeHtml = this.source
        playerContent.innerHTML = `<video style="object-fit:fill" id="native-player" autoplay class="original-player" src="${encodeHtml}" controls class="detection-video"></video>`
      },
      encodeHtml (s) {
        let REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g
        return (typeof s != "string") ? s :
        s.replace(REGX_HTML_ENCODE,
        function($0){
            var c = $0.charCodeAt(0), r = ["&#"];
            c = (c == 0x20) ? 0xA0 : c;
            r.push(c); r.push(";");
            return r.join("");
        })
      }
    }
  }
</script>
<style lang="scss">

</style>