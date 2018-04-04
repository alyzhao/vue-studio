<template>
    <div class="reunite">
        <router-view></router-view>
        <div class="tj-box" ref="scrollElement">
            <Banner :banner-list="forumBannerList"/>
            <div class="tj-list">
                <ul>
                    <li v-for="item in tjList" :key="item.id">
                        <router-link :to="'/reunite/' + item.id">
                            <div class="img-box">
                                <div class="img">
                                    <img :src="staticImg + item.groupImg1" alt="">
                                    <div class="mask">
                                        <p>{{item.groupWord}}</p>
                                    </div>
                                </div>
                                <div class="tj-title">
                                    <h3>{{item.groupName}}</h3>
                                    <span>{{item.convenerPosition + ' ' + item.convenerName}}</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div v-if="loadingData" class="load-data-loading"><i class="fa fa-spin fa-circle-o-notch"></i>加载中...</div>
            <div v-if="loadAll" class="load-data-loadall">没有更多了...</div>        
        </div>
    </div>
</template>
<script>
    import reunitePcBanner from 'assets/img/tj-banner.png';
    import reuniteMbBanner from 'assets/img/tj-mb-banner.png';

    const prodUrl=require('constants/config').prodUrl;
    import Banner from 'components/Banner';
    export default{
        name: 'tuanju',
        data(){
            return {
                forumBannerList: [{
                    pcBanner: reunitePcBanner,
                    mbBanner: reuniteMbBanner,
                    router: '',
                    link: 'http://cn.mikecrm.com/6hWZ5TL'
                }],
                tjList:[],
                staticImg:prodUrl.imgHost,
                page: 0,
                size: 8,
                loadingData: false,
                loadAll: false                
            }
        },
        mounted(){
            this.$nextTick(function () {
                this.loadData();
                let scrollElement = this.$refs.scrollElement;
                let self = this;
                window.addEventListener('scroll', function() {
                    let winScrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    let winHeight = window.innerHeight || document.body.clientHeight;
                    let offsetTop = scrollElement.offsetTop;
                    if (winScrollTop + winHeight >= offsetTop + scrollElement.clientHeight) {
                        if (!self.loadAll && !self.loadingData) {
                            self.loadData(self.page + 1);                            
                        }
                    }
                })
            })
        },
        methods: {
            loadData(page = this.page, size = this.size) {
                this.loadingData = true;
                var params = new URLSearchParams();
                params.append('pageNumber', page * this.size);
                params.append('pageSize', size);
                params.append('Language', this.$store.state.lang)

                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineGroup/queryGroupList', params).then(response => {
                    this.loadingData = false
                    let resData = response.data;
                    if (resData < this.size) {
                        this.loadAll = true;
                    }
                    this.tjList.push(...resData);
                    this.page = page;
                })
            },
            reLoad() {
                this.forumList = [];
                this.loadAll = false;
                this.loadData(0);
            }
        },
        computed: {
            isZh() {
                return this.$store.state.lang == 'zh';
            },
        },
        watch: {
            isZh() {
                this.reLoad();
            }
        },        
        components:{
            Banner
        }
    }
</script>
<style lang="scss" scoped>
    .banner-wrap {
        margin-top: 0;
    }
    .reunite{
        .re-detail + .tj-box {
            display: none;
        }
    }
    .tj-list {
        width: 100%;
        overflow: hidden;
        ul{
            width: 1200px;
            padding: 0 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 0 auto;
            margin-top: 70px;
            li {
                width: 45%;
                /*height: 360px;*/
                border-radius:10px;
                overflow: hidden;
                position: relative;
                margin-bottom: 45px;
                box-shadow: 0 0 10px #ccc;
                .img-box {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    .img {
                        width: 100%;
                        height: calc(100% - 72px);
                        &:hover .mask {
                            opacity: 1;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                        .mask {
                            border-radius:10px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            background: rgba(255, 204, 0, 0.9);
                            padding: 20px;
                            opacity: 0;
                            transition: all 0.6s;
                            p {
                                font-size: 16px;
                            }
                        }
                    }
                    .tj-title {
                        width: 100%;
                        height: 72px;
                        padding: 0 20px;
                        h3 {
                            padding: 5px 0;
                        }
                        span {
                            display: block;
                            padding-bottom: 10px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .tj-list {
            ul {
                width: 100%;
                li {
                    width: 45%;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .tj-list {
            ul {
                width: 100%;
                li {
                    width: 90%;
                    .img-box .img .mask p {
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>