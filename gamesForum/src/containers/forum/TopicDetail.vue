<template>
    <div class="create-detail">
        <div class="left">
            <div>
                <h4>{{content.speaker}}</h4>
                <div class="img"><img :src="topicInfo && (staticHost + topicInfo.shareImg)"></div>
                <h1>{{topicInfo && topicInfo.shareName}}</h1>
                <span>{{topicInfo && topicInfo.sharePosition}}</span>
                <p class="intro">{{topicInfo && topicInfo.shareThemeSpecial}}</p>
            </div>
        </div>
        <div class="right">
            <div>
                <h1>{{topicInfo && topicInfo.shareThemeName}}</h1>
                <div>
                    <h3>{{content.forumTitle}}</h3>
                    <p>{{topicInfo && topicInfo.froumName}}</p>
                </div>
<!--                 <div>
                    <h3>时间</h3>
                    <p>{{topicInfo && (new Date(topicInfo.saddTime)).toLocaleString()}}</p>
                </div>
 -->                <div>
                    <h3>{{content.contentIntro}}</h3>
                    <p class="forum-con">{{topicInfo && topicInfo.shareThemeWord}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const prodUrl = require('constants/config.js').prodUrl; 
    import {contentZh, contentEn} from 'constants/forum.js';    
    import qs from 'qs';
    
    export default{
        name:'detail',
        props:{
            topicId: String
        },
        data() {
            return {
                staticHost: prodUrl.imgHost,
                topicInfo: null,
            }
        },
        mounted: function() {
            this.loadData();
        },
        methods: {
            loadData() {
                this.axios.post(prodUrl.HOST + '/2050webOnline/onLineFroum/queryShareById', qs.stringify({
                    shareId: this.topicId,
                    Language: this.$store.state.lang
                })).then(response => {
                    this.topicInfo = response.data;
                })                
            }
        },
        computed: {
            isZh() {
                return this.$store.state.lang == 'zh';
            },
            content() {
                return this.isZh ? contentZh : contentEn;
            }            
        },
        watch: {
            isZh() {
                this.loadData();
            }
        }        
    }
</script>