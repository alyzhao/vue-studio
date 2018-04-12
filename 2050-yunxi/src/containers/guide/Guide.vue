<template>
    <div class="message guide">
        <!--<div class="m">-->
            <!--<img class="max-bg" src="../assets/img/max-bg.png" alt="">-->
            <!--<img class="min-bg" src="../assets/img/min-bg.png" alt="">-->
            <div class="container">
                <div class="message-box">
                    <h1 class="message-box-t">2050 FAQS</h1>
                    <div class="faq">
                        <div class="faq-cell" v-for="item in faqList" :key="item.id">
                            <div class="question">Q: {{item.question}}</div>
                            <div class="answer">A: {{item.answer}}</div>
                        </div>
                    </div>
                </div>
            </div>
        <!--</div>-->
    </div>
</template>
<script>
    const prodUrl = require('constants/config.js').prodUrl;

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
                this.axios.get(prodUrl.HOST + '/2050webOnline/OnLineParty/queryParty', {params: {
                    LanguageL: this.$store.state.lang
                }}).then(response => {
                    this.faqList = response.data;
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
    .guide {
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
            }
        }
    }
</style>