<template>
    <div class="message faq-wrap">
        <div class="container">
            <div class="message-box">
                <h1 class="message-box-t">2050 FAQS</h1>
                <div class="faq">
                    <div class="faq-cell" v-for="item in faqList" :key="item.id">
                        <div class="question">Q: {{item.question}}</div>
                        <div class="answer" v-html="'A:' + item.answer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const prodUrl = require('constants/config.js').prodUrl;
    import {faqListZh, faqListEn} from 'constants/faq.js';

    export default{
        data() {
            return {
                faqList: []
            }
        },
        mounted: function() {
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {
            loadData() {
                this.faqList = this.isZh ? faqListZh : faqListEn;
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
    .faq-wrap {
        background: url('../../assets/img/bg-guide.png');
    }
    .faq {
        .faq-cell {
            margin-bottom: 50px;
            .question {
                font-size: 24px;
                margin-bottom: 15px;
            }
            .answer {
                font-size: 18px;
                a {
                    color: #3385ff;
                    text-decoration: underline;
                }
            }
        }
    }
</style>