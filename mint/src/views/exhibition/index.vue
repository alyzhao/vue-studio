<template>
  <div class="tmp exhibition">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab1">
        <div class="tab-con-wrap">
          <h3 class="center-text">展会状况</h3>
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
          <div class="badge flex-center">
            <mt-badge type="primary">高层论坛</mt-badge>
            <mt-badge type="success">商品贸易</mt-badge>
            <mt-badge type="warning">投资合作</mt-badge>
          </div>
          <div class="badge flex-center">
            <mt-badge type="success">服务贸易</mt-badge>
            <mt-badge type="warning">文化交流</mt-badge>
            <mt-badge type="error">展销服务</mt-badge>
          </div>

          <div class="features">
            <div class="features-title">特色：</div>
            <p>1. 进口与出口相结合，以进口为特色，强调对东盟市场开放，做东盟矿业商品进入中国的桥梁。</p>
            <p>2. 投资与引资相结合，以中国企业“走出去”为特色，做中国企业矿业投资东盟的平台。</p>
            <p>3. 商品贸易与服务贸易相结合，以矿业服务和中小企业技术创新成果转让为切入点，培育中国与东盟矿业经贸合作的新增长点。</p>
            <p>4. 展会结合，相得益彰。2018（第九届）中国－东盟矿业合作论坛暨推介展示会、2018中国—东盟矿业新技术 矿山机械 珠宝玉石展览会同期举办，二者有机结合，相互促进。既有实实在在的经贸活动，又有官方、企业、专家学者的相互对话与交流。</p> 
            <p>5. 矿业盛会与外交舞台。矿业论坛既是一次矿业盛会，又是一次多边国际活动，增进了了解，充分体现了中国与东盟睦邻友好、建立面向和平与繁荣的战略合作伙伴关系的宗旨和意图，务实地推动了中国与东盟国家区域经济矿业合作的深入发展</p>
            <p>6. 经贸活动与文化交流相结合。论坛期间同时举办“2018中国—东盟国际珠宝首饰创意设计及制作大赛”、品牌珠宝模特秀等，五彩纷呈的文化活动穿插其间。</p>
            <p>7. 在做好现场展销服务的同时，重点提供展前展后的销售服务工作，论坛是平台，交易是纽带，双赢是共识。</p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <div class="tab-con-wrap">
          <h3 class="center-text">收费标准</h3>
          <table class="exhibition-hall center-table" border=0 cellpadding="0" cellspacing="0">
            <tbody>
              <tr><td colspan="4" class="tb-title">展区位置B1、B2展厅</td></tr>
              <tr>
                <td width="22%" class="td-title">展位面积</td>
                <td width="28%">个展</td>
                <td width="28%">团展</td>
                <td width="22%">集展</td>
              </tr>
              <tr>
                <td class="td-title">标展</td>
                <td>RMB7800<br />（9m²）</td>
                <td>RMB5800 <br />（30个标展起订）</td>
                <td rowspan="2">RMB2800/企业</td>
              </tr>
              <tr>
                <td class="td-title">特装</td>
                <td>RMB680/m² <br />（36m²净地起订）</td>
                <td>RMB500/m² <br />（360m²净地起订）</td>
              </tr>
            </tbody>
          </table>

          <table class="exhibition-hall center-table" border=0 cellpadding="0" cellspacing="0">
            <tbody>
              <tr><td colspan="2" class="tb-title">参展类别说明</td></tr>
              <tr>
                <td width="30%" class="td-title">个展</td>
                <td width="70%">以单个企业为单位报名参展，参展对象：小微企业、民企、国企、上市公司、外资企业、海外企业 </td>
              </tr>
              <tr>
                <td width="30%" class="td-title">团展</td>
                <td width="70%">以单位或组织名义组团参展，参展对象：行业协会（含海外）、产业园区、专业机构、交易中心、商场 </td>
              </tr>
              <tr>
                <td width="30%" class="td-title">集展</td>
                <td width="70%">以文化、人才和技术交流为主，指定展区参展对象及企业数，参展对象：非公党建成果展、人才交流、科普互动 </td>
              </tr>
            </tbody>
          </table>

          <div class="tip">
            <div class="mark">备注说明:</div>
            <p>标准展位3×3m2（含个展和团展），配备企业中英文楣板、1张洽谈桌、2把折椅、2个射灯、1个500W插座、地毯、纸篓、统一配置变异标展，双开口加收RMB700/个。集展区每个企业提供1张洽谈桌、2把折椅以及公共配套设施（含地毯、灯光、插座、纸篓、开放式展位搭建）。净地不提供任何展具。</p>
          </div>
        </div>
      </mt-tab-container-item>

      <mt-tab-container-item id="tab4">
        <div class="tab-con-wrap offer-wrap">
          <h3 class="center-text">优惠政策</h3>
          <div class="offer">一、提前交款优惠</div>
          <p>个展： 2018年8月30日前交足全款的企业给予标展优惠600元/个，净地优惠80元/平；</p>
          <p>团展：2018年8月30日前交足全款的企业给予标展优惠300元/个，净地优惠30元/平；</p>
          <p>集展：2018年8月30日前交足全款的企业给予优惠300元/家。</p>


          <div class="offer">二、品牌优惠</div>
          <p>（1）节能技术和装备、高效节能产品、节能服务产业、先进环保技术和装备、环保产品与环保服务、资源循环利用关键技术装备等高新技术企业给予优惠30%；</p>
          <p>（2）拥有国家驰名商标的企业（有效期内），由国家工商局认定的按照20%优惠；</p>
          <p>（3）拥有省级著名商标、省名牌产品、省知名商号企业优惠10%；</p>
          <p>（4）拥有地市级知名商标或地市级名牌产品的企业优惠5%。</p>

          <div>注：以上三项优惠不含双开口费。</div>

          <div class="offer"">三、领军企业优惠</div>
          <p>（1）中国500强企业参展展位费（限36㎡）免费；</p>
          <p>（2）国家一级行业协会或副会长以上单位优惠20%；</p>
          <p>（3）省级一级行业协会或副会长以上单位优惠10%；</p>

          <div class="offer">四、以上三项优惠政策办理说明</div>
          <p>（1）符合条件的企业可享受以上优惠政策，办理顺序按：第1项提前交款优惠→第2项品牌优惠、第3项领军企业优惠；</p>
          <p>（2）品牌优惠政策和领军企业优惠政策各项不重复使用，参照高优惠政策执行；</p>
          <p>（3）享受品牌优惠、领军企业优惠须在缴纳展位费时，凭有效期内的相关证书、证明原件或加盖企业公章的相关材料复印件申请，逾期不再享受。</p>

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
    .badge {
      margin-bottom: 10px;
      .mint-badge {
        margin: 0 5px;
        font-size: 14px;
        padding: 3px 8px;
      }
    }
    .features {
      .features-title {
        font-size: 15px;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 10px;
        padding: 0 5px;
    }
      p {
        padding: 0 10px;
        color: #666;
        margin: 8px 0;
      }
    }
    .tip {
      margin-top: 15px;
      padding-bottom: 12px;
      .mark {
        padding: 0 5px;
        color: #f44336;
        font-size: 14px;
        margin-bottom: 5px;
      }
      p {
        padding: 0 5px;
        line-height: 145%;
        font-size: 12px;
        color: #666;      }
    }
    .offer-wrap {
      .offer {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-bottom: 15px;
        margin-top: 20px;
      }
      p {
        margin-bottom: 5px;
        color: #333;
        line-height: 140%;
      }      
    }
  }
</style>