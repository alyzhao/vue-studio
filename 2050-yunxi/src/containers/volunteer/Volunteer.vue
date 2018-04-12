<template>
    <div class="volunteer">
        <Banner :banner-list="bannerList"/>
        <div class="main-content">            
            <div class="content">
                <div class="people">
                    <div class="title">
                        <p class="pna">志愿发起人</p>
                        <div class="split"></div>
                    </div>
                    <div class="p-wrap">
                        <div class="vol-cell" v-for="item in volunteers" :key="item.id">
                            <div class="avatar"><a class="wrap"><img :src="staticHost + item.votImg" /></a></div>
                            <p class="peo-name">{{item.votName}}</p>
                            <p class="slogan">“{{item.votWord}}”</p>
                            <p class="intro">{{item.votPer}}</p>
                        </div>
                    </div>
                </div>

                <div class="organization">
                    <div class="title">
                        <p class="pna">志愿机构</p>
                        <div class="split"></div>
                    </div>
                    <ul class="org-list clearfix">
                        <li class="mark">
                            <a><img src="../../assets/img/logo1.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo2.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo3.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo17.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo4.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo5.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo6.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo7.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo8.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo9.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo10.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo11.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo12.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo13.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo14.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo16.png"></a>
                        </li>                        
                        <li class="mark">
                            <a><img src="../../assets/img/logo15.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo18.png"></a>
                        </li>
                        <li class="mark">
                            <a><img src="../../assets/img/logo19.png"></a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="volunteer-all" ref="volunteer">
                <div class="side-nav-wrap">
                    <ul class="side-nav" :class="{fixed: sideNavFixed}">
                        <li v-for="(item, key) in volunteerNames" :key="key" @click="goNav(key)">{{key}}</li>
                    </ul>                    
                </div>
                <div class="title">
                    <p class="pna">志愿者</p>
                    <div class="split"></div>
                </div>
                <div class="vol-all">
                    <div class="cell" v-for="(item, key) in volunteerNames" :key="key" :ref="'nav' + key">
                        <p class="initials">{{key}}</p>
                        <div class="con">
                            <a v-for="name in item" :key="name.name" class="na">{{name.name}}</a>                            
                        </div>
                    </div>

                </div>                
            </div>

        </div>
    </div>
</template>
<script>
    import volunteerPcBanner from 'assets/img/zy-banner.png';
    import volunteerMbBanner from 'assets/img/zy-mb-banner.png';
    const prodUrl = require('constants/config.js').prodUrl;

    import Banner from 'components/Banner';

    export default {
        data() {
            return {
                bannerList: [{
                    pcBanner: volunteerPcBanner,
                    mbBanner: volunteerMbBanner,
                    link: '',
                    router: '/volunteer'
                }],
                staticHost: prodUrl.imgHost,
                volunteerNames: {},
                volunteers: [],
                sideNavFixed: false,
                navSetInterval: null
            }
        },
        mounted: function() {
            this.$nextTick(function () {
                this.loadData();
                window.addEventListener('scroll', this.navigate);
            })
        },
        destroyed: function(){
            window.removeEventListener('scroll', this.navigate);
        },
        methods: {
            loadData() {
                this.axios.get(prodUrl.HOST + '/2050webOnline/onLinevot/queryVot', {params: {
                    Language: this.$store.state.lang
                }}).then(response => {
                    let resData = response.data;
                    this.volunteers = resData;
                })

                this.axios.get(prodUrl.HOST + '/2050webOnline/onLinevot/queryVoters').then(response => {
                    let resData = response.data;
                    let data = {};
                    for ( let p in resData) {
                        if (resData[p].length) {
                            data[p] = resData[p]
                        }
                    }
                    this.volunteerNames = data;
                })
            },
            navigate() {
                let ele_volunteer = this.$refs.volunteer;
                let eleHeight = ele_volunteer.clientHeight;


                let eleOffsetTop = ele_volunteer.offsetTop;     // 获取距离最顶端距离

                let winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;   // 滚动条的 y 轴值

                let windowHeight = window.innerHeight || document.body.clientHeight;            // 获取浏览器视窗高度

                if (winScrollTop > eleOffsetTop - windowHeight / 2 && winScrollTop < eleOffsetTop + eleHeight) {
                    this.sideNavFixed = true;
                } else {
                    this.sideNavFixed = false;
                }
            },
            goNav(initials) {
                let navElement = this.$refs['nav' + initials][0];
                let navOffsetTop = navElement.offsetTop;
                if (this.navSetInterval) {
                    clearInterval(this.navSetInterval);
                }
                let winScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let speed = (navOffsetTop - winScrollTop) / 50;
                if (speed == 0) {
                    return false;
                }
                this.navSetInterval = setInterval(() => {
                    let winScrollTop_now = document.documentElement.scrollTop || document.body.scrollTop;
                    let plusStop = (speed > 0) && ((winScrollTop_now + speed) >= navOffsetTop);
                    let reduceStop = (speed < 0) && ((winScrollTop_now + speed) <= navOffsetTop);
                    if (plusStop || reduceStop) {
                        if (document.body.scrollTop) {
                            document.body.scrollTop = navOffsetTop;
                        } else {
                            document.documentElement.scrollTop = navOffsetTop;
                        }
                        clearInterval(this.navSetInterval);
                    } else {
                        if (document.body.scrollTop) {
                            document.body.scrollTop = winScrollTop_now + speed;
                        } else {
                            document.documentElement.scrollTop = winScrollTop_now + speed;
                        }
                    }
                }, 1)
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
        },
        components: {
            Banner
        }
    }
</script>
<style lang="scss">
    .volunteer {
        color: #333;
        .banner-wrap {
            margin-top: 0;
        }
        .people, .organization, .volunteer-all {
            .title {
                text-align: center;
                .pna {
                    font-size: 24px;
                    text-align: center;
                    font-weight: bold;
                }
                .split {
                    display: inline-block;
                    width: 50px;
                    height: 5px;
                    background-color: #6c4bcd;
                    margin-top: 15px;
                }
            }            
        }
        .people {
            padding-top: 50px;
            .p-wrap {
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
                .vol-cell {
                    width: 240px;
                    height: 360px;
                    border-radius: 3px;
                    padding: 0 20px;
                    margin-bottom: 15px;
                    transition: box-shadow .3s;
                    &:hover {
                        box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.2);
                    }
                    .avatar {
                        padding: 25px 0 5px;
                        text-align: center;
                        position: relative;
                        .wrap {
                            width: 150px;
                            height: 150px;
                            border-radius: 100%;
                            overflow: hidden;
                            display: inline-block;
                            img {
                                width: 150px;
                                height: 150px;
                            }
                        }
                    }
                    .peo-name {
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                    }
                    .slogan {
                       text-align: center;
                        font-size: 16px;
                        color: #6c4bcd;
                        line-height: 28px;
                        margin-top: 5px;
                        max-height: 56px;
                        overflow: hidden;
                    }
                    .intro {
                        font-size: 14px;
                        text-align: center;
                        margin-top: 10px;
                        max-height: 81px;
                        overflow: hidden;
                    }
                }
            }
        }
        .organization {
            margin-top: 25px;
            .org-list {
                padding: 0;
                margin: 0;
                border-left: 1px solid #cacaca;
                border-top: 1px solid #cacaca;
                margin-top: 30px;
                li {
                    float: left;
                    width: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 120px;
                    border-right: 1px solid #cacaca;
                    border-bottom: 1px solid #cacaca;
                    overflow: hidden;
                    img {
                        max-width: 200px;
                        max-height: 110px;
                        display: block;
                    }
                }
            }
        }

        .volunteer-all {
            margin-top: 55px;
            padding-bottom: 50px;
            .initials {
                background-color: #f6f6f6;
                text-align: center;
                font-size: 18px;
                padding: 3px 0;
            }
            .con {
                background-color: #fff;
                width: 1270px;
                margin: 0 auto;
                padding: 10px 0;
                .na {
                    line-height: 48px;
                    display: inline-block;
                    font-size: 16px;
                    padding: 0 35px;
                }
            }
            .vol-all {
                margin-top: 30px;
            }
        }
        .side-nav-wrap {
            position: relative;
            width: 100%;
            .side-nav {
                position: absolute;
                padding: 0;
                margin: 0;
                right: 45px;
                top: 80px;
                &.fixed {
                    position: fixed;
                    top: 50%;
                    transform: translateY(-50%);
                }
                li {
                    border-radius: 100%;
                    font-size: 16px;
                    font-weight: bold;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    margin: 5px;
                    text-align: center;
                    transition: background-color .3s;
                    cursor: pointer;
                    &:hover, &.active {
                        background-color: #ffcc00;
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .volunteer .organization .org-list li {
            width: 50%;
            height: 90px;
            img {
                max-width: 150px;
            }
        }
        .volunteer .side-nav-wrap .side-nav {
            right: 15px;
        }
        .volunteer .volunteer-all .con {
            width: 100%;
        }
        .volunteer .people .title .pna, .volunteer .organization .title .pna, .volunteer .volunteer-all .title .pna {
            font-size: 20px;
        }
        .volunteer .people .p-wrap .vol-cell .peo-name {
            font-size: 20px;
        }
        .volunteer .people .p-wrap .vol-cell {
            height: auto;
            width: 100%;
            padding: 0 10px;
        }
    }
</style>