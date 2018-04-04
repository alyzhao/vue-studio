<template>
    <div class="forum">
        <router-view />
        <div class="forum-wrap">
            <Banner :banner-list="forumBannerList"/>
            <div class="main-content" ref="scrollElement">
                <div class="per">
                    <div class="person-content">
                        <div class="cell ts clearfix">
                            <div class="c-in clearfix">
                                <div class="items" v-for="item in forumList" :key="item.id">
                                    <router-link :to="'/forum/' + item.id">
                                        <p class="ctt"><a href="" :title="item.forumWord">{{item.forumName}}</a></p>
                                        <p class="ccon"><a href="" :title="item.forumWord">{{item.forumWord}}</a></p>
                                        <div class="peop">
                                            <a class="portrait" href="" target="_blank"><img height="60" width="60" :src="staticHost + item.productsImg"></a>
                                            <div class="productor">
                                                <p class="cp">出品人:  {{item.products}}</p>
                                                <p class="ct overh"><a href="" :title="item.productsWord">{{item.productsPosition}}</a></p>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>                                        
                </div>
            </div>
            <div v-if="loadingData" class="load-data-loading"><i class="fa fa-spin fa-circle-o-notch"></i>加载中...</div>
            <div v-if="loadAll" class="load-data-loadall">没有更多了...</div>
        </div>
    </div>
</template>
<script>
    import forumPcBanner from 'assets/img/xs-banner.png';
    import forumMbBanner from 'assets/img/xs-mb-banner.png';

    import Banner from 'components/Banner';


    const prodUrl = require('constants/config.js').prodUrl;
    export default {
        data() {
            return {
                forumList: [],
                forumBannerList: [{
                    pcBanner: forumPcBanner,
                    mbBanner: forumMbBanner,
                    link: 'http://tgonetworks.mikecrm.com/BjHVvZo',
                    router: ''
                }],
                staticHost: prodUrl.imgHost,
                page: 0,
                size: 9,
                loadingData: false,
                loadAll: false
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.loadData();
                let scrollElement = this.$refs.scrollElement;
                let self = this;
                window.addEventListener('scroll', function() {
                    let winScrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    let winHeight = window.innerHeight;
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

                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineFroum/queryFroum', params).then(response => {
                    this.loadingData = false
                    let resData = response.data;
                    if (resData < this.size) {
                        this.loadAll = true;
                    }
                    this.forumList.push(...resData);
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
            recordStart() {
                return this.page * this.size;
            },
            isZh() {
                return this.$store.state.lang == 'zh';
            },
        },
        watch: {
            isZh() {
                this.reLoad();
            }
        },        
        components: {
            Banner,
        }
    }
</script>
<style lang="scss">
    .forum {
        .create-detail + .forum-wrap {
            display: none;
        }
        .banner-wrap {
            margin-top: 0;
        }
    }
    .per{
        width: 1200px;
        margin: 0 auto;
    }
    .load-data-loading {
        padding-bottom: 15px;
        color: #8568dc;
        text-align: center;
        i {
            margin-right: 8px;
        }
    }
    .load-data-loadall {
        font-size: 12px;
        color: #999;
        padding-bottom: 15px;
        text-align: center;
    }
    @media screen and (max-width: 1200px){
        .per{
            width:100%;
        }
    }


    @media (max-width: 1200px) {
        .person-content {
            width: 100%;
            .cell .c-in {
                padding: 0 10px;
                .items {
                    width: 100%;
                    &:nth-child(2n) {
                        margin-right: 0;
                    }
                    &:nth-child(2n - 1) {
                        margin-right: 2%;
                    }
                }
            }
            .cell .c-in .items .ctt {
                width: 100%;
            }
        }
    }

</style>
