<template>
    <div class="explore-detail">
        <Banner :banner-list="forumBannerList"/>
        <div class="explore-b">
            <div class="exhibition explore-text">
                <h1>展区规划</h1>
                <p>整个“探索号”飞船即为科技创意展区，在这艘飞船上，兴趣相投的年青人汇集成了一个个各具特色的船舱，炫美舱，未来舱，酷玩舱，世界舱等等。每一个船舱都有诸多展示的空间，围绕在特色互动区域周围，各区域也会有针对性地征集项目展商。此外，我们还为媒体朋友的团聚设立了“中央公园”，成为媒体中心，搭建中央舞台。展区项目负责人可申请到中央舞台进行互动，路演。各区域之间以食品、饮品类赞助商，合作伙伴衔接，为参会人提供丰富的选择。</p>
            </div>
            <div class="invite explore-text">
                <h1>邀约渠道</h1>
                <p>由网络报名，出品人承建，和国家展团三种方式报名申请。</p>
            </div>
            <div class="invited-obj explore-text">
                <h1>邀请对象</h1>
                <p>2050是全球创意“潮”人的聚会，“探索号“飞船也在寻找与团聚主题契合度最高的年青人。我们希望邀请来到空间的探索者酷爱创新(Innovation)，年轻时尚(In-Style)，社交(Interaction) ，国际范(International)。星际委员会（即组委会）也将围绕这四项标准对受邀人进行全方位考量来发放飞船船票。</p>
                <h2>谁可以参加：</h2>
                <p>— 我们欢迎来自世界各地有想法的年青人申请到“探索号”飞船参与展演</p>
                <p>— 我们向各领域有意思有想法的年青人或初创企业发出邀请参与申请。你可以是拥有新能源、人工智能、VR/AR、智能硬件等产品技术的创始人；你也可以是开发研究了音视频娱乐类、文化创意类、竞技体育类、VR/AR游戏、或直播社交类等产品的攻城狮；你还可以是设计、艺术学院的学生，或是新媒体艺术家、甚至是小小科学家，天文学家，以及我们叫不上名字的专业人员……</p>
                <p>— 我们鼓励成立不超过2年的项目团队、个人、或新兴实验室来申请</p>
                <h2>邀请发放基准：</h2>
                <p>Innovation <br>
                — 脑洞大过黑洞，只要你有新颖开拓性的想法，就上飞船分享</p>
                <p>International<br>
                — 世界属于年青人，跨国界还是跨媒介，由你决定</p>
                <p>Interaction<br>
                — 我们有舞台，社交靠你来！用你的社交渠道感染组委会吧<br>
                — 颜值高不是一切，好玩儿才是硬道理，希望不论是申请人还是带来的产品都可以跟其他登船者互动起来</p>
                <p> In-Style<br>
                — 网红还是爆款？Style由你定义；<br>
                — 只要你有追逐早上八点钟太阳的心态，我们不在乎年龄</p>
            </div>
            <div class="channel explore-text">
                <h1>申请渠道</h1>
                <p>三月起期面向世界发出邀请，开通全网申请通道，通过网络报名申请表格直接递交。组委会将对申请人的基本信息及申请信息收集筛选。</p>
            </div>
        </div>
        <div class="explore-button"><a href="http://explorerapplication.mikecrm.com/MMfpWv7" target="_blank">成为探索者</a></div>
    </div>
</template>
<script>
    import explorePcBanner from 'assets/img/explore-banner-pc.png';
    import exploreMbBanner from 'assets/img/explore-banner-mb.png';

    import Banner from 'components/Banner';
    export default{
        data(){
            return{
                forumBannerList: [{
                    pcBanner: explorePcBanner,
                    mbBanner: exploreMbBanner,
                    link: 'http://explorerapplication.mikecrm.com/MMfpWv7',
                    router: ''
                }]
            }
        },
        components:{
            Banner
        }
    }
</script>
<style lang="scss">
    .explore-detail{
        .banner-wrap {
            margin-top: 0;
        }
        .explore-b{
            width: 63.4%;
            margin: 0 auto;
            margin-top: 50px;
            .explore-text{
                margin-bottom: 35px;
                h1:after{
                    content: '';
                    display: block;
                    width: 30px;
                    height: 5px;
                    background: #6c4bcd;
                    margin: 12px 0 20px;
                }
                p{
                    line-height: 30px;
                    color: #333;
                    margin-bottom: 15px;
                }
                h2{
                    font-weight: normal;
                    margin: 10px 0;
                }
            }
        }
        .explore-button {
            margin-top: 60px;
            margin-bottom: 50px;
            a{
                display: block;
                margin: 0 auto;
                width: 400px;
                line-height: 70px;
                background: #ffcc00;
                font-size: 22px;
                text-align: center;
                border-radius: 5px;
            }
        }
    }
    @media screen and (max-width: 1200px){
        .explore-detail{
            .explore-b{
                width: 74.4%;
            }
        }
    }
    @media screen and (max-width: 768px){
        .explore-detail{
            .explore-b{
                width: 88.4%;
                margin-top: 14px;
                .explore-text{
                    p{
                        line-height: 24px;
                    }
                    h1:after{
                        margin: 9px 0 13px;
                    }
                }
            }
            .explore-button{
                a{
                    width: 95%;
                }
            }
        }
    }
</style>