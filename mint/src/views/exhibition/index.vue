<template>
  <div class="tmp exhibition">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1">
        <div class="tab-con-wrap">
          <div class="overview">
            <p>2018年经济工作的重心主要是调整经济结构、提高经济素质。“一带一路”作为中国首倡、高层推动的国家战略，对我国与东盟十国经济发展具有深远的战略意义。 </p>
            <p>随着 “一带一路”战略构想的实施，契合沿线国家的共同需求，为沿线国家优势互补、开放发展开启了新的机遇之窗，是国际合作的新平台。千百年来，中国与东南亚人民通过“海上丝绸之路”相知相交，互通有无，传递情谊。自2004年以来，每年举办的中国—东盟博览会、中国—东盟商务与投资峰会高层论坛，构建了中国与东盟在多个领域的协作机制。2018年9月12日至15日举行的第15届中国－东盟博览会，将准确把握共建“一带一路”的深刻内涵，突出“共建21世纪海上丝绸之路，旅游助推区域经济一体化”主题，通过中国—东盟博览会的升级发展，推动中国—东盟合作向更高水平迈进。</p>
            <p>2018（第九届）中国—东盟矿业合作论坛暨推介展示会定于2018年11月15日-18日在广西南宁举办。认真贯彻习近平总书记、李克强总理关于深化中国—东盟合作的一系列倡议，坚持“亲、诚、惠、容”的周边外交理念，按照有机衔接“一带一路”的新要求，以东盟建立50周年、中国—东盟建立战略伙伴关系15周年、贯彻落实党的十九大精神的开局之年和改革开放40周年等重要热点，中国—东盟矿业论坛为契机，将围绕“聚焦丝路合作，发展绿色矿业”主题，落实《推进“一带一路”贸易畅通合作倡议》，对提升中国—东盟自由贸易区质量，改革创新，延伸展会价值链，深化贸易、投资、旅游、国际产能等重点领域合作，提高实效，促进区域经济一体化朝更高水平互利共赢的方向发展，使21世纪海上丝绸之路建设从共识走向务实。</p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <div class="tab-con-wrap">
          <h3 class="center-text">展会特色</h3>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <div class="tab-con-wrap">

        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <div class="tab-con-wrap">

        </div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed class="bt-tab">
      <mt-tab-item id="tab1">
        展会概况
      </mt-tab-item>
      <mt-tab-item id="tab2">
        展会特色
      </mt-tab-item>
      <mt-tab-item id="tab3">
        收费标准
      </mt-tab-item>
      <mt-tab-item id="tab4">
        优惠政策
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: 'tab1',
      }
    }
  }
</script>
<style lang="scss">
  .exhibition {
    .overview {
      padding: 20px 15px;
      margin-top: 30px;
      margin-bottom: 30px;
      border: 3px solid #409eff;
      p {
        text-indent: 2em;
        line-height: 160%;
        color: #0035d0;
        margin: 10px 0;
      }
    }
  }
</style>