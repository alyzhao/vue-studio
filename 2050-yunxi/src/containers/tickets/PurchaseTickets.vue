<template>
  <div class="box">
    <div class="shadow"></div>
    <h1 class="com-title">大会报名</h1>
    <div class="container content">
      <div class="baige">
        <iframe id="promote_ticket_iframe" width="100%" src="https://www.bagevent.com/widget/ticket/1251050?widget=2" frameborder="0" scrolling="no"></iframe>
      </div>
      <h2>温馨提示</h2>
      <ol>
        <!-- <li><a href="http://a.app.qq.com/o/simple.jsp?pkgname=org.geekbang.geekTime" target="_blank">下载极客时间 APP </a>获取专属优惠码，可享受现有票价基础上的9折优惠。</li> -->
        <li>请大家在报名时，选择除IE以外的浏览器，以免报名不成功并影响您的时间。</li>
        <li>选择在线支付可通过支付宝与微信的余额支付。</li>
        <li>有报名意向的参会者请于优惠截止前提交订单，错过优惠期报名的则按照下一个折扣阶段计算票价，请知晓。</li>
        <li>全日制学生购票可享受特惠价，购买学生票线下检票时需提供本人的学生证及身份证。</li>
      </ol>
      <h2>门票费用中包含</h2>
      <p>5月26日-27日期间2050的全部公开活动，如新生论坛、探索展区、音乐节等，如需参加逐日晨跑或预定露营帐篷可在门票订单里单独购买。</p>
      <!-- <ol>
        <li>2050开幕式</li>
        <li>探索空间</li>
        <li>晚场活动的参与，与讲师面对面交流的机会；</li>
        <li>新生论坛</li>
        <li>2050狂欢音乐节系列活动</li>
        <li>2050青年奖颁奖盛典</li>
        <li>如需参加逐日晨跑和帐篷体验可在门票里订里单独购买。</li>
      </ol> -->
      <h2>发票开具流程</h2>
      <ol>
        <li>确认收到购票方的票款；</li>
        <li>请购票方确认发票信息100%无误；</li>
        <li>在无外力因素的情况下，发票将在7个工作日开具并快递；</li>
        <li>会务组规定，在收到购票方票款后，方可按照实际总金额开具，如您有特殊需求，可及时找工作人员沟通；</li>
        <li>每月25日至下月8日，财务在报税过程中不能开具发票，请各位亲理解，请尽量付款错开这个时间段。</li>
      </ol>
      <h2>特别说明</h2>
      <p><b>请仔细阅读以下说明：</b></p>
      <ol>
        <li>门票一旦购买，概不退换。</li>
        <li>电子门票是大会现场换取入场证的唯一凭证，请妥善保管。</li>
        <li>如果门票遗失，请您及时与工作人员联系。</li>
        <li>遇到极端情况大会取消，主办方责任仅限于退回已支付的票款。</li>
      </ol>
      <h2>票务咨询：</h2>
      <ol>
        <li>团体票务咨询：林卓橞</li>
        <li>购票热线： +86 18519014746</li>
        <li>邮箱: lachel.lin@geekbang.org</li>
      </ol>
    </div>
  </div>
</template>
<script>
  export default {
    mounted: function() {
      this.$nextTick(function() {
        (function (i, s, o, g, r, a, m) {
          i['BagEventIFrameResize'] = r;
          i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
          };
          a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.bagevent.com/resources/js/iframeResizer/iframeResizer.min.js', 'bfr');
        bfr('iFrameResize', {checkOrigin: false, heightCalculationMethod: 'taggedElement'}, "#promote_ticket_iframe");        
      })
    }
  }
</script>
<style lang="scss">
  .box {
    .shadow {
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
      height: 2px;
    }
a {
  color: #1f63af;
  cursor: pointer;
  text-decoration: none;
  transition: none 86ms ease-out; }
  a:hover {
    color: #363636; }

@media screen and (min-width: 769px), print {
  body {
    min-width: 1140px; } }
.container {
  margin: 0 auto;
  width: 92vw; }
  @media screen and (min-width: 769px), print {
    .container {
      width: 1140px; } }

.box {
  padding-top: 38px;
  padding-bottom: 38px; 
  overflow: hidden;
}

.content {
  font-size: 16px; 
  margin-bottom: 35px;
}
  @media screen and (max-width: 768px) {
    .content {
      font-size: 14px; } }
  .content p:not(:last-child), .content dl:not(:last-child), .content ol:not(:last-child), .content ul:not(:last-child), .content blockquote:not(:last-child), .content pre:not(:last-child), .content table:not(:last-child), .content h1:not(:last-child), .content h2:not(:last-child), .content h3:not(:last-child), .content h4:not(:last-child), .content h5:not(:last-child), .content h6:not(:last-child) {
    margin-bottom: 0.8em; }
  .content blockquote {
    padding: 0 20px;
    border-left: 6px solid #ccc;
    margin: 13px;
    font-size: 1em;
    color: #888; }
    .content blockquote b {
      color: red; }
  .content h2 {
    font-size: 1.4em;
    color: #1C5696;
    font-weight: bold;
    margin-bottom: 0.8em !important;
    margin-top: 2em; }
  .content ul, .content ol {
    margin-left: 1.2em; }
  .content ul li {
    list-style-type: disc; }
  .content ol li {
    list-style-type: decimal; }
  .content li {
    font-size: 1em;
    line-height: 2; }
  .content table {
    border: 1px solid #E2E6EB;
    margin: 0 auto 40px auto;
    width: 100%; }
    .content table thead tr {
      height: 75px;
      background-color: #1D5B9E; }
    .content table tbody tr {
      height: 54px; }
    .content table tr {
      border-top: 1px solid #cccccc;
      background-color: #fff;
      margin: 0;
      padding: 0; }
      .content table tr:nth-child(2n) {
        background-color: #F5F6F8; }
    .content table th, .content table td {
      text-align: center;
      vertical-align: middle;
      border: 1px solid #cccccc; }
    .content table th {
      font-weight: bold;
      color: #fff; }
    .content table th:first-child {
      width: 50px; }
    @media screen and (min-width: 769px), print {
      .content table th:first-child {
        width: 140px; }
      .content table th:nth-child(2) {
        width: 320px; } }

.baige iframe {
  min-height: 628px; }
  @media screen and (max-width: 768px) {
    .baige iframe {
      min-height: 800px; } }

.com-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 34px;
  color: #242424; 
  margin-top: 50px;
}
  @media screen and (max-width: 768px) {
    .com-title {
      font-size: 22px;
      margin-bottom: 20px; 
    } 
  }
}
</style>