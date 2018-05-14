<template>
    <div class="forum">
        <router-view />
        <div class="forum-wrap">
            <Banner :banner-list="forumBannerList"/>
            <div class="main-content" ref="scrollElement">
                <div class="per">
                    <div class="person-content">
                        <div class="search-wrap">
                            <div class="search-box">
                                <div class="date-wrap" :class="{searching: showSearch}">
                                    <el-date-picker
                                      v-model="selectDate"
                                      type="datetimerange"
                                      range-separator="至"
                                      start-placeholder="开始日期"
                                      end-placeholder="结束日期"
                                      value-format="yyyy-MM-dd HH:mm:ss">
                                    </el-date-picker>
                                </div>
                                <div class="search-con">
                                    <div class="search" :class="{searching: showSearch}">
                                        <input type="text" v-model.trim="keywords">
                                        <i class="fa fa-close" @click="clearSearch()"></i>
                                        <button class="fa fa-search" @click="search()"></button>
                                        <div class="search-split"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell ts clearfix">
                            <div class="c-in clearfix">
                                <div class="items" v-for="item in forumList" :key="item.id">
                                    <router-link :to="'/forum/' + item.id">
                                        <p class="ctt"><a href="" :title="item.forumWord">{{item.forumName}}</a></p>
                                        <p class="ccon"><a href="" :title="item.forumWord">{{item.forumWord}}</a></p>
                                        <div class="peop">
                                            <a class="portrait" href="" target="_blank"><img height="60" width="60" :src="staticHost + item.productsImg"></a>
                                            <div class="productor">
                                                <p class="cp overh">{{content.producer}}:  {{item.products}}</p>
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
    import forumPcBanner_en from 'assets/img/xs-banner_en.png';
    import forumMbBanner from 'assets/img/xs-mb-banner.png';
    import forumMbBanner_en from 'assets/img/xs-mb-banner_en.png';
    import {contentZh, contentEn} from 'constants/forum.js';
    
    import { DatePicker, Button} from 'element-ui';


    import Banner from 'components/Banner';
    import qs from 'qs';

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
                loadAll: false,
                showSearch: false,
                keywords: '',
                selectDate: null
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

                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineFroum/queryFroum', qs.stringify({
                    pageNumber: page * this.size,
                    pageSize: size,
                    Language: this.$store.state.lang
                })).then(response => {
                    this.loadingData = false
                    let resData = response.data;
                    if (resData < this.size) {
                        this.loadAll = true;
                    }
                    this.forumList.push(...resData);
                    this.page = page;
                })

                if (this.isZh) {
                    this.forumBannerList[0].pcBanner = forumPcBanner;
                    this.forumBannerList[0].mbBanner = forumMbBanner;
                } else {
                    this.forumBannerList[0].pcBanner = forumPcBanner_en;
                    this.forumBannerList[0].mbBanner = forumMbBanner_en;                    
                }
            },
            reLoad() {
                this.forumList = [];
                this.loadAll = false;
                this.loadData(0);
            },
            search() {
                if (this.showSearch && (this.keywords !== "" || this.selectDate) ) {
                    console.log(this.keywords);
                    console.log(this.selectDate);       
                    let params = {};
                    if (this.keywords !== "") {
                        params.queryString = this.keywords;
                    }
                    if (this.selectDate && this.selectDate.length) {
                        params.selectStartTime = this.selectDate[0];
                        params.selectEndTime = this.selectDate[1];
                    }
                    this.axios.post(prodUrl.HOST + '/2050webOnline/onLineSelect/selectFroum', qs.stringify(params)).then(response => {
                        let resData = response.data;
                        this.forumList = resData;
                        this.loadAll = true;
                    })
                }
                if (!this.showSearch) {
                    this.showSearch = true;
                }
            },
            clearSearch() {
                this.showSearch = false;
                this.keywords = '';
                this.selectDate = null;
                this.reLoad();
            }
        },
        computed: {
            recordStart() {
                return this.page * this.size;
            },
            isZh() {
                return this.$store.state.lang == 'zh';
            },
            content() {
                return this.isZh ? contentZh : contentEn;
            }

        },
        watch: {
            isZh() {
                this.reLoad();
            }
        },        
        components: {
            Banner,
            ElDatePicker: DatePicker,
            Button            
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
    .per {
        width: 1200px;
        margin: 0 auto;
        .search-wrap {
            .search-box {
                margin: 25px auto 0;
                border-radius: 10px;
                background-color: #fff;
                text-align: center;
                .date-wrap {
                    .el-date-editor {
                        visibility: hidden;
                        opacity: 0;
                        transition: all linear .5s;
                    }
                    &.searching {
                        .el-date-editor {
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                }
                .search {                
                    display: inline-block;
                    border-radius: 32px;
                    box-shadow: 0px 0px 5px #ffcc00;
                    border: 1px solid #ffcc00;
                    margin-top: 20px;
                    padding: 10px;
                    transition: all linear .5s;                    
                    width: 65px;
                    height: 62px;
                    position: relative;
                    .search-split {
                        width: 0;
                        height: 2px;
                        background-color: #ffcc00;
                        position: absolute;
                        bottom: 8px;
                        left: 10px;
                        transition: all linear .5s;
                    }
                    input {
                        display: none;
                        border: none;
                        width: 100%;
                        padding-right: 42px;
                        height: 100%;
                        padding: 5px;
                        color: #ffcc00;
                        font-size: 16px;                 
                        padding-right: 63px;
                        &:focus {
                            outline: none;
                        }
                    }
                    &.searching {
                        width: 450px;
                        border-radius: 5px;
                        input {
                            display: inline-block;
                        }
                        .search-split {
                            width: 383px;
                        }
                        i {
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                    &:hover {
                        box-shadow: 0px 0px 15px #ffcc00;
                    }
                    button {
                        border: none;
                        margin: 0;
                        padding: 10px;
                        background-color: #fff;
                        font-size: 24px;
                        color: #7b7b7b;
                        cursor: pointer;
                        position: absolute;
                        top: 7px;
                        z-index: 111;
                        right: 10px;
                        &:focus {
                            border: none;
                            outline: none;
                        }
                    }
                    i {
                        font-size: 12px;
                        background-color: #dadada;
                        border-radius: 50%;
                        width: 18px;
                        height: 18px;
                        line-height: 18px;
                        text-align: center;
                        color: #fff;
                        position: absolute;
                        right: 53px;
                        top: 20px;
                        cursor: pointer;                        
                        transition: background-color linear .1s, opacity linear .1s;
                        visibility: hidden;
                        opacity: 0;
                        &:hover {
                            background-color: #c3c3c3;
                        }
                    }                   
                }
            }
        }
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
