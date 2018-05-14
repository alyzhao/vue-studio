<template>
    <div class="activex">
        <div class="content">
            <div class="fl">
                <div class="activex-wrap" ref="activex">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts';
    import { activexChartsOption } from 'constants/activexChartsOption';
    import { cloneDeep } from 'lodash';

    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.chartsInit(800);
        },
        methods: {
            chartsInit(value) {                
                let activexDom = this.$refs.activex;
                console.log(activexDom);

                let activexCharts = echarts.init(activexDom);
                let option = cloneDeep(activexChartsOption);
                option.series[0].data[0].value = value;   

                activexCharts.setOption(option);
            }
        }
    }
</script>
<style lang="scss">
    .activex {
        height: 730px;
        background-image: linear-gradient(180deg, #6246b9,#9667ff);
        .content {
            height: 100%;
        }
        .activex-wrap {
            width: 500px;
            height: 600px;
        }
    }
</style>