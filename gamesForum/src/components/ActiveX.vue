<template>
    <div class="activex">
        <div class="content">
            <div class="activex-con" v-if="supportActiveX">
                <div class="fl">
                    <div class="activex-wrap" ref="activex"></div>
                </div>
                <div class="fr">
                    <div class="hardware clearfix">
                        <div class="cell clearfix">
                            <i class="fl cpu fa fa-object-group"></i>
                            <div class="fl info">
                                <div>CPU</div>
                                <div>i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl dashboard fa fa-dashboard"></i>
                            <div class="fl info">
                                <div>主板</div>
                                <div>i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl raw fa fa-sticky-note"></i>
                            <div class="fl info">
                                <div>内存</div>
                                <div>i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl fa fa-hdd-o"></i>
                            <div class="fl info">
                                <div>主硬盘</div>
                                <div>i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl cpu fa  fa-volume-up"></i>
                            <div class="fl info">
                                <div>声卡</div>
                                <div>i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl cpu fa fa-wifi"></i>
                            <div class="fl info">
                                <div>网卡</div>
                                <div>i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500i5-6500</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="no-support" v-else>
                <div>您的浏览器暂不支持跑分, 请使用IE浏览器!</div>
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
                supportActiveX: true
            }
        },
        mounted() {
            this.chartsInit(800);

            try {
                let locator = new ActiveXObject("WbemScripting.SWbemLocator");
            } catch (error) {
                if (error) {
                    console.log(error);
                    this.supportActiveX = false;
                }
            }
            if (this.supportActiveX) {
                var locator = new ActiveXObject("WbemScripting.SWbemLocator");
                console.log(locator);
                var service = locator.ConnectServer(".");
                var properties = service.ExecQuery("SELECT * FROM Win32_Processor");     
                var e = new Enumerator(properties); 
                var info = "";

                for (; !e.atEnd(); e.moveNext ()) {
                    var p = e.item();
                    console.log("CPU型号：" + p.Name);
                    console.log("CPU状态：" + p.CpuStatus);
                    console.log("CUP Level：" + p.Level);

                }
            }

        },
        methods: {
            chartsInit(value) {                
                let activexDom = this.$refs.activex;
                console.log(activexDom);

                let activexCharts = echarts.init(activexDom);
                let option = cloneDeep(activexChartsOption);
                option.series[0].data[0].value = value;   

                activexCharts.setOption(option);

            },
            cpuInfo(service) {
                var properties = service.ExecQuery("SELECT * FROM Win32_Processor");     
                var e = new Enumerator (properties); 
                var info = "";
                for (; !e.atEnd(); e.moveNext ()) {
                    let p = e.item;
                    console.log("CPU型号：" + p.Name + "");
                    console.log("CPU状态：" + p.CpuStatus + "");
                    console.log("CUP Level：" + p.Level + "");

                }
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
            height: 730px;
        }
        .no-support {
            color: #fff;
            font-size: 24px;
            text-align: center;
            padding-top: 300px;
        }
        .hardware {
            width: 668px;
            margin-top: 90px;
            box-shadow: inset 0px 0px 55px rgba(246, 202, 253, 0.3);
            padding: 25px;
            min-height: 500px;
            .cell {
                width: 50%;
                float: left;
                color: #fff;
                font-size: 14px;
                padding: 0 15px 15px 0;
                i {
                    display: block;
                    padding-right: 18px;
                    line-height: 24px;
                    color: #CCCC33;
                    font-size: 16px;
                }
                .info {
                    width: 235px;
                    div {
                        &:first-child {
                            color: #f1f1f1;
                        }
                        &:last-child {
                            color: #b7b7b7;
                            font-size: 12px;
                            height: 36px;
                            overflow: hidden;
                        }
                    }
                }
            }
        }
    }
</style>