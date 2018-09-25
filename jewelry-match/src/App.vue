<template>
  <div class="compound">
    
    <transition name="el-zoom-in-bottom">
      <Product v-show="showModel" :class="{show: showModel}"  @chooseModel="chooseModel" />
    </transition>
    
    <transition name="el-zoom-in-bottom">
      <Fusion v-if="showGenerate" :class="{show: showGenerate}" :generateData="generateData" />
    </transition>    
    <Upload ref="upload" @selectModel="selectModel" @generateImg="generateImg"/>
  </div>
</template>
<script>
  import Upload from 'views/Upload'
  import Product from 'views/Product'
  import Fusion from 'views/Fusion'
  import cloneDeep from 'lodash.clonedeep'

  export default {
    data () {
      return {
        showModel: false,
        showGenerate: false,
        generateData: '',
        selectProducts: []
      }
    },
    created () {
      function onBridgeReady(){
        WeixinJSBridge.call('hideToolbar');
      }

      if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent){
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      }else{
        onBridgeReady();
      }
    },
    methods: {
      selectModel () {
        this.showModel = true
      },
      chooseModel (model) {
        console.log(model)
        let uploadComponent = this.$refs.upload
        uploadComponent.$refs.realpic.setAttribute('src', model)
        this.showModel = false
        uploadComponent.initialModel()
        uploadComponent.changeModel()
        uploadComponent.hasUpload = false
      },
      generateImg (data) {
        this.generateData = data
        this.showGenerate = true
      }
    },
    components: {
      Upload,
      Product,
      Fusion
    }
  }
</script>
<style lang="scss">
  .compound {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .products.show + .upload {
      display: none;
    }
    .upload.show + .upload {
      display: none;
    }
  }
</style>