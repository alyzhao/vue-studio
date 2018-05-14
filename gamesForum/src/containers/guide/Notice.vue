<template>
	<div class="notice">
		<div class="faq" v-for="item in faqList" :key="item.id" :class="{showanswer: item.showAnswer}">
			<div class="question-wrap">
				<div class="question" @click="item.showAnswer = !item.showAnswer">
					{{item.question}}<i class="fa fa-caret-down"></i>
				</div>
			</div>
			<div class="answer">
				{{item.answer}}
			</div>
		</div>
	</div>
</template>
<script>
    const prodUrl = require('constants/config.js').prodUrl;

	export default {
		data() {
			return {
				faqList: [],
				showAn: false,
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
                	let resData = response.data;
                	resData.map(item => {
                		item.showAnswer = false
                	})
                    this.faqList = resData;
                    console.log(resData)
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
	.guide .notice {
		display: flex;
		flex-wrap: wrap;
	    justify-content: space-between;
		.faq {
			width: 49%;
			margin-bottom: 25px;
			.question-wrap {
				padding: 30px;
				background-color: #eaeaea;
			}
			.question {
				position: relative;
				padding-right: 10px;
				cursor: pointer;
				i {
					position: absolute;
					right: 0;
					top: 0;
					color: #999;
					font-size: 22px;
					transition: transform .3s ease;
				}
			}
			.answer {
				background-color: #eaeaea;				
				color: #333;
				font-size: 14px;
			    color: #333;
			    font-size: 14px;
			    line-height: 25px;
			    height: 0;
			    overflow: hidden;
			    padding: 0;
			}			
		    &.showanswer .answer {
		    	height: auto;
			    padding: 0 50px 30px 30px;
		    }
		    &.showanswer .question i {		    	
	    	    transform: rotate(180deg);
		    }
		}
	}
</style>