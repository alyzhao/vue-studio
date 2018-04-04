<template>
<div class="create-detail">
    <div class="left">
        <div>
            <h4>出品人</h4>
            <div class="img"><img :src="forumInfo && (staticHost + forumInfo.productsImg)" :alt="forumInfo && forumInfo.productsWord"></div>
            <h1>{{forumInfo && forumInfo.products}}</h1>
            <span>{{forumInfo && forumInfo.productsPosition}}</span>
            <p class="intro">{{forumInfo && forumInfo.productsWord}}</p>
        </div>
    </div>
    <div class="right">
        <div>
            <h1>{{forumInfo && forumInfo.forumName}}</h1>
<!--             <div>
                <h3>所属论坛</h3>
                <p>{{forumInfo && forumInfo.forumName}}</p>
            </div>
 --><!--             <div>
                <h3>时间</h3>
                <p>{{forumInfo && forumInfo.forumTime}}</p>
            </div>
 --><!--        <div>
                <h3>地址</h3>
                <p>具体地址</p>
            </div>
-->                <div>
                <h3>内容介绍</h3>
                <p class="forum-con">{{forumInfo && forumInfo.forumWord}}</p>
            </div>
        </div>
        <h3>专题speaker</h3>
        <div class="person-content forum-detail">
            <div class="cell ts clearfix">
                <div class="c-in clearfix">
                    <div class="items" v-for="item in shareList" :key="item.id" @click="goTopic(item.id)">
                        <p class="ctt"><a href="" :title="item.shareThemeName">{{item.shareThemeName}}</a></p>
                        <p class="ccon"><a href="" :title="item.shareThemeWord">{{item.shareThemeWord}}</a></p>
                        <div class="peop">
                            <a class="portrait" href="" target="_blank"><img height="60" width="60" :src="staticHost + item.shareImg"></a>
                            <div>
                                <p class="cp">出品人:  {{item.shareName}}</p>
                                <p class="ct overh"><a href="" :title="item.sharePosition">{{item.sharePosition}}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</div>    
</template>
<script>
    const prodUrl = require('constants/config.js').prodUrl;

    export default {
        props: ['id'],
        data() {
            return {
                shareList: [],
                forumInfo: null,
                staticHost: prodUrl.imgHost,        
            }
        },
        mounted: function () {
            console.log(this.id);
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {
            goTopic(topicId) {
                this.$router.push({path: `/forum/${this.id}/${topicId}`})
            },
            loadData() {
                var params = new URLSearchParams();
                params.append('froumId', this.id);
                params.append('Language', this.$store.state.lang)

                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineFroum/queryByFroumId', params).then(response => {
                    this.forumInfo = response.data;
                })

                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineFroum/queryShare', params).then(response => {
                    this.shareList = response.data;
                })
            }
        },
        computed: {
            isZh() {
                return this.$store.state.lang == 'zh';
            },
        },
        watch: {
            isZh() {
                this.loadData();
            }
        }
    }
</script>
<style lang="scss">
    .create-detail{
        width: 100%;
        padding:50px 120px 50px;
        display: flex;
        margin: 0 auto;
        .left{
            width: 30%;
            text-align: center;
            div{
                background: #fbfbfb;
                box-shadow: 0 0 10px #ccc;
                border-radius: 9px;
                padding: 20px 20px 50px;
                .img{
                    width: 200px;
                    height: 200px;
                    padding: 20px;
                    border-radius: 50%;
                    overflow: hidden;
                    border:1px solid #ccc;
                    margin:0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                h4{
                    margin: 10px 0;
                    color: #5c40b1;
                }
                p{
                    text-align: left;
                    line-height: 28px;
                    font-size: 16px;
                }
                h1,span,p{
                    padding-top: 20px;
                    color: #333;
                }
                span{
                    display: inline-block;
                    font-size: 16px;
                    color: #666;
                }
                .intro {
                    line-height: 30px;
                }
            }
        }
        .right{
            width: 70%;
            padding-left:70px;
            padding-top: 16px;
            color: #333;
            div{
                .forum-con {
                    line-height: 30px;
                }
                h1:after{
                    display: block;
                    content: '';
                    width: 30px;
                    height: 5px;
                    background: #5337ae;
                    margin: 20px 0 40px;
                }
                div{
                    margin-bottom: 20px;
                    h3,p{
                        padding-bottom: 15px;
                    }
                    p{
                        font-size: 16px;
                        line-height: 28px;
                    }
                }
            }
        }
    }

    .forum-detail {
        .cell {
            .c-in {
                .items:nth-child(3n) {
                    margin-right: 37px;
                }
                .ctt, .ccon{
                    padding-bottom: 0;
                }
                .peop {
                    margin-bottom: 0;
                    div {
                        margin-bottom: 0;
                    }
                    p {
                        padding-bottom: 0;
                    }
                }
            }

        }
    }

    @media screen and (max-width: 1200px){
        .create-detail{
            padding: 42px 53px 20px;
            .left{
                width: 40%;
            }
            .right{
                padding-left: 37px;
            }
        }
    }
    @media screen and (max-width: 768px){
        .create-detail{
            padding: 24px 15px 20px;
            display: block;
            .left{
                width: 100%;
                div{
                    h4{
                        font-size:18px;
                    }
                }
            }
            .right{
                width: 100%;
                padding-left: 0;
                div{
                    h1:after{
                        width: 27px;
                        height: 4px;
                        background: #5337ae;
                        margin: 10px 0 18px;
                    }
                }
            }
        }
    }
</style>