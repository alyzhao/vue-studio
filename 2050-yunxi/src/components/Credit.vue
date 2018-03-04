<template>
    <div class="message">
        <div class="">
            <img class="max-bg" src="../assets/img/max-bg.png" alt="">
            <img class="min-bg" src="../assets/img/min-bg.png" alt="">
            <div class="container">
                <div class="message-box">
                    <h1 class="message-box-t">致2050志愿者的感谢信</h1>
                    <div class="message-para">
                        <p>尊敬的2050志愿者们，</p>
                        <p>这是一个激动人心的时代，不只是因为互联网的出现以及人类有了移民火星的可能。</p>
                        <p>这是一个全球年青人比任何时候多的时代，世界人口的50%在30岁以下，还有什么能比这个更令人激动？</p>
                        <p>很多很多年前，我博士毕业在学校工作，对年青人好像没有什么感觉。</p>
                        <p>很多年前，在微软亚洲研究院工作，周围有同事入选MIT Technology Review 35，我也刚过了被入选的年纪，顿时让我感觉还真有年青人那么一回事。</p>
                        <p>多年前，创办阿里云的时候，和一批视ACM竞赛为乐趣的年青人一起工作，虽然我年纪长他们100%。他们用“飞天”代码告诉我，没有年青人，就不会有阿里云。</p>
                        <p>几年前，博客园的小伙伴来到了云栖小镇，我有机会近距离看到了近百万年青人留在博客园上的足迹，让我明白了每个人都知道的一个普通道理，未来是年青人的。</p>
                        <p>我以为，追逐年青人是最伟大的梦想。我以为，追逐年青人就是人类对未来的自信。</p>
                        <p>这也是最挑战的时代，城市发展问题、疾病问题、环境问题，过去留给了未来许多问题，世界自然地把未来的挑战留给了年青人。如果给年青人一个选择的机会，他们会选择留在地球，让地球变得更美好，而不是移民去火星，因为前者更具挑战。去火星只是年青人出外旅行的选择之一，这样的选择，只有年青人才能做到。</p>
                        <p>这就有了2050大会。它是一个年青人的大会，让年青人站在聚光灯下，用年青人的方式谈创新，用年青人的方式看未来，用年青人的方式面对挑战。</p>
                        <p>不同的年青人在这里团聚，既是ACMer与博客园的程序员的团聚，也是MIT TR 35与达沃斯世界经济论坛新生代青年领军者的团聚，更是来自不同领域胸怀同样梦想的青年科学家的团聚。</p>
                        <p>这里，年青人会用最年青人的方式表达对世界的担当、对未来的承诺。</p>
                        <p>这里，挑战离年青人更近，年青人心中的未来一定就是世界的未来。</p>
                        <p>为年青人开一个大会，让世界各地最有创新动力的年青人相互交流，这件事在我心中酝酿已久。当我跟许多不同背景、不同经历的人交流这个想法，几乎每个人都产生了强烈的共鸣，令我振奋。
                        </p>
                        <p>我们非常幸运，在杭州市云栖科技创新基金会的倡议下，2018年，来自五湖四海的一群志愿者聚在了云栖小镇，共同发起了2050大会。我们有一个共同的愿景，让世界各地的年青人因科技而团聚，2050因此成了这群人的公益事业。</p>
                        <p>也因为有了这些志愿者，2050有了巨大的包容性，大家用共同的愿景和初心，在创造一个与众不同的大会同时，也会让云栖小镇成为离全世界年青人最近的地方。</p>
                        <p>“志愿”是2050的一道靓丽风景。参与的每一个人都用年青人的方式定义了“志愿”，其中包括了极客邦科技和新华社“新青年”的一群90后。作为一位曾经的年青人，2050是我能为世界的50%做一点贡献所做出的最重要的选择，我深知为这50%做的任何事就是对世界100%的贡献。</p>
                        <p>2050代表了我们对未来的期待和想象。</p>
                        <p>年青人是不一样的，他们来自世界不同的地方，说着不同的语言，热爱不同的科学和技术，怀揣不同的梦想。</p>
                        <p>年青人是一样的，他们都是没有伞的孩子，他们喜欢在雨中奔跑。</p>
                        <p>到云栖，一起在雨中奔跑。</p>
                    </div>
                    <div class="message-name">
                        <img src="../assets/img/doctor-name.png" alt="">
                        <span>杭州市云栖科技创新基金会发起人</span>
                        <span>阿里云创始人</span>
                        <span>2018年1月23日凌晨于云栖小镇</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"credit"
    }
</script>
<style lang="scss">
    .message-box-t{
        font-size: 48px;
    }
    .message-para p{
        margin-bottom: 2rem;
        font-size: 24px;
        line-height: 40px;
    }
    .container-fluid{
        height: 100%;
        position: relative;
        padding: 0;
    }
    .container-fluid img{
        position: absolute;
        width: 100%;
        height: auto;
    }
    .container{
        height: 2600px;
        position: absolute;
        background: #fff;
        left: 0;
        right: 0;
        top: 188px;
        margin:auto;
        box-shadow:0 0 65px 4px #818181;
    }
    .message-box{
        padding: 70px 144px 114px 144px;
    }
    .message-box-t:after{
        content: "";
        display: block;
        width: 72px;
        height: 12px;
        background: #5235ad;
        margin-top: 50px;
        margin-bottom:80px;
    }
    .message-name{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-end;
    }
    .message-name img{
        width:inherit;
        height: auto;
        display: block;
    }
    .message-name span:nth-child(2){
        margin-top: 124px;
    }
    .min-bg{
        display: none;
    }
    @media (min-width: 1200px) {
        .container {
            max-width: 1526px;
        }
    }
    @media (max-width: 768px) {
        .message-box-t{
            font-size: 18px;
            padding-left: 5px;
        }
        .message-para p{
            margin-bottom:10px;
            font-size: 12px;
            line-height: 20px;
            padding: 0 7px;
        }
        .message-name span{
            font-size: 14px;
        }
        .container-fluid .min-bg{
            display: block;
        }
        .max-bg{
            display: none;
        }
        .message-box{
            padding:20px 0 0;
        }
        .container{
            width: 300px;
            height:1875px;
            top:70px
        }
        .message-box-t:after{
            width: 28px;
            height: 6px;
            margin-top: 15px;
            margin-bottom: 23px;
        }
        .message-name img{
            width: 105px;
            height: auto;
            margin-top: 12px;
        }
        .message-name span:nth-child(2){
            margin-top: 74px;
        }
        .message-name {
            padding-top: 20px;
            padding-right: 5px;
        }
    }
</style>