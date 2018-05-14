<template>
    <div class="guide">
        <div class="guide-nav">
            <router-link to="/guide/notice">{{content.guideNav[0]}}<span class="bd"></span></router-link>
            <router-link to="/guide/trip">{{content.guideNav[1]}}<span class="bd"></span></router-link>
            <router-link to="/guide/schedule">{{content.guideNav[2]}}<span class="bd"></span></router-link>
        </div>
        <div class="container">
            <div class="guide-box">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
    import {contentZh, contentEn} from 'constants/guide.js';

    export default {
        computed: {
            isZh() {
                return this.$store.state.lang == 'zh';
            },
            content() {
                return this.isZh ? contentZh : contentEn;
            }
        },
    }
</script>
<style lang="scss">
    .guide {
        background: url('../../assets/img/bg-guide.png');
        background-size: 100% 100%;
        width: 100%;
        padding: 100px 0;
        .guide-nav {
            display: flex;
            justify-content: center;
            padding-bottom: 70px;
            flex-wrap: wrap;
            a {
                display: block;
                padding: 15px 50px;
                border: 3px solid #333;
                margin: 0 75px;
                font-size: 20px;
                font-weight: bold;
                color: #333;
                position: relative;
                .bd {
                    position: absolute;
                    width: 103%;
                    display: block;
                    height: 66px;
                    border: 3px solid;
                    top: 7px;
                    left: 7px;
                    padding: 3px;
                }
                &.is-active {
                    border-color: #5745ab;
                    color: #5745ab;
                }
            }
        }
        .container {
            background: #fff;
            box-shadow: 0 0 65px 4px rgba(129, 129, 129, 0.2);
            margin: 0 9.8%;
            .guide-box {
                padding: 70px 90px 114px;
            }
        }
    }
    @media (max-width: 768px) {
        .guide {
            padding-top: 30px;        
            .container {
                margin: 0 2%;
                .guide-box {
                    padding: 10px;
                }
                .notice .faq {
                    width: 100%;
                    margin-bottom: 10px;
                    .question-wrap {
                        padding: 15px;
                    }
                }
            }
            .guide-nav {
                padding-bottom: 30px;
                a {
                    padding: 10px 25px;
                    margin: 5px 25%;
                    width: 100%;
                    font-size: 18px;
                    text-align: center;
                    .bd {
                        display: none;
                    }
                }
            }
        }
    }
</style>