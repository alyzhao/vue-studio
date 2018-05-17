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
                                <div>{{hardware.CPU}}</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl dashboard fa fa-dashboard"></i>
                            <div class="fl info">
                                <div>主板</div>
                                <div>{{hardware.BaseBoard}}</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl raw fa fa-sticky-note"></i>
                            <div class="fl info">
                                <div>内存</div>
                                <div>{{hardware.Ram}} GB</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl raw fa fa-newspaper-o"></i>
                            <div class="fl info">
                                <div>显卡</div>
                                <div>{{hardware.VideoController}}</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl fa fa-hdd-o"></i>
                            <div class="fl info">
                                <div>主硬盘</div>
                                <div>unslove</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl cpu fa  fa-volume-up"></i>
                            <div class="fl info">
                                <div>声卡</div>
                                <div>unslove</div>
                            </div>
                        </div>
                        <div class="cell clearfix">
                            <i class="fl cpu fa fa-wifi"></i>
                            <div class="fl info">
                                <div>网卡</div>
                                <div>unslove</div>
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
                supportActiveX: true,
                hardware: {}
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
                console.log(this.getHardwareInfo());
                this.hardware = this.getHardwareInfo();
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
            getHardwareInfo() {
                let locator = new ActiveXObject("WbemScripting.SWbemLocator");
                console.log(locator);
                let service = locator.ConnectServer(".");

                let hardware = {};

                // CPU
                let properties = service.ExecQuery("SELECT * FROM Win32_Processor");     
                let e = new Enumerator(properties); 
                for (; !e.atEnd(); e.moveNext ()) {
                    let p = e.item();
                    hardware.CPU = p.Name;
                }

                // 主板
                let properties_BaseBoard = service.ExecQuery("SELECT * FROM Win32_BaseBoard");
                let e_BaseBoard = new Enumerator(properties_BaseBoard);
                for (; !e_BaseBoard.atEnd(); e_BaseBoard.moveNext ()) {
                    let p = e_BaseBoard.item();
                    console.log(p);
                    console.log(p.Name);
                    hardware.BaseBoard = p.Product;
                }

                // 显卡

                let properties_VideoController = service.ExecQuery("SELECT * FROM Win32_VideoController");
                let e_VideoController = new Enumerator(properties_VideoController);
                let video = []
                for(let i = 0; !e_VideoController.atEnd(); e_VideoController.moveNext()) {
                    video[i] = e_VideoController.item().Caption;
                    i++;
                }
                hardware.VideoController = video.join(' + ');

                // 内存
                let system = new Enumerator (service.ExecQuery("SELECT * FROM Win32_ComputerSystem")).item();
                var physicMenCap = Math.ceil(system.TotalPhysicalMemory/1024/1024);
                var memory = new Enumerator (service.ExecQuery("SELECT * FROM Win32_PhysicalMemory"));
                let mem = []
                for (let i = 0; !memory.atEnd(); memory.moveNext()){   
                    mem[i++] = {
                        cap:memory.item().Capacity/1024/1024,
                        speed:memory.item().Speed
                    };  
                }
                let memDX = 0;
                for (var mi = 0; mi < mem.length; mi++){  
                    memDX += mem[mi].cap;
                }

                hardware.Ram = memDX / 1024;

                return hardware;
            },
            baseBoardInfo(service) {
                let properties = service.ExecQuery("SELECT * FROM Win32_BaseBoard");  
                let e = new Enumerator(properties);
                for (; !e.atEnd(); e.moveNext()) {
                    let p = e.item;
                    return p.Product;
                }
            },

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