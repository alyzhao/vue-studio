<template>
    <div class="re-detail">
        <div class="text">
            <h2>{{reuniteDetail.groupName}}</h2>
            <p>{{reuniteDetail.groupWord}}</p>
            <p>{{reuniteDetail.groupDetail}}</p>
            <div class="text-img">
                <img :src="staticImg + reuniteDetail.groupImg1">
            </div>
        </div>
        <div class="text convener">
            <h2>召集人</h2>
            <div class="produce">
                <div class="clear">
                    <div class="produce-img" >
                        <img :src="staticImg + reuniteDetail.convenerImg">
                    </div>
                </div>
                <div class="produce-detail">
                    <h2 class="produce-name">{{reuniteDetail.convenerPosition}}<br/>{{reuniteDetail.convenerName}}</h2>
                    <p class="produce-job">{{reuniteDetail.groupPosition}}</p>
                    <p>{{reuniteDetail.groupLeadword}}</p>
                </div>
            </div>
        </div>
        <div class="text report">
            <!-- <h2>相关报道</h2> -->
            <!--<a href="http://exam.upc.edu.cn/icpc.html">http://exam.upc.edu.cn/icpc.html</a>-->
        </div>
    </div>
</template>
<script>
    const prodUrl = require('constants/config').prodUrl;
    export default{
        data(){
            return {
                reuniteDetail:{},
                staticImg: prodUrl.imgHost
            }
        },
        props:['id'],
        mounted(){
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {
            loadData() {
                var params = new URLSearchParams();
                params.append('groupId', this.id);
                params.append('Language', this.$store.state.lang)

                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineGroup/queryGroupById', params).then(response => {
                    let resData = response.data;
                    this.reuniteDetail = resData;
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
    .re-detail{
        width: 100%;
        padding: 0 20%;
        margin:0 auto;
        padding-top: 40px;
        color: #333;
        .text {
            width: 100%;
            margin-bottom: 40px;
            h2:after {
                content: '';
                display: block;
                width: 40px;
                height: 4px;
                background: #000;
                margin: 20px 0 30px;
            }
            p{
                line-height: 32px;
            }
            .text-img{
                width: 100%;
                margin-top: 40px;
                img{
                    width: 100%;
                }
            }
        }
        .convener{
            .produce{
                width: 100%;
                box-shadow: 0 0 10px #eee;
                overflow: hidden;
                padding: 40px;
                /*display: flex;*/
                /*justify-content:space-between;*/
                .produce-img{
                    float: left;
                    width: 180px;
                    height: 180px;
                    overflow: hidden;
                    margin-top: 20px;
                    img{
                        width: 100%;
                        height: 100%;
                        display: block;
                        border-radius: 50%;
                    }
                }
                .produce-detail{
                    float: left;
                    width: calc(100% - 186px);
                    padding-left: 66px;
                    .produce-name:after{
                        display: none;
                    }
                    .produce-job{
                        margin: 10px 0 14px;
                    }
                }
            }
        }
        .report{
            a{
                display: block;
            }
        }
    }
    @media screen and (max-width: 1200px){
        .re-detail{
            padding: 0 9%;
            padding-top: 40px;
        }
    }
    @media screen and (max-width: 768px){
        .re-detail{
            padding: 0 4%;
            .text {
                margin-bottom: 1rem;
                h2:after {
                    width: 40px;
                    height: 4px;
                    margin:1rem 0 1.5rem;
                }
                p{
                    line-height:24px;
                }
                .text-img{
                    width: 100%;
                    margin-top:1rem;
                    img{
                        width: 100%;
                    }
                }
            }
            .convener{
                .produce{
                    padding: 1rem;
                    .produce-img{
                        margin:10px auto;
                    }
                    .clear{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .produce-detail{
                        width: 100%;
                        padding-left: 0;
                        .produce-name,.produce-job{
                            text-align: center;
                        }
                        .produce-job{
                            margin: 10px 0 14px;
                        }
                    }
                }
            }
        }
    }
</style>