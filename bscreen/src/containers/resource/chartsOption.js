exports.pieChartsOption = {
	title: {
        text: '数量',
        textStyle: {
            color: '#28d5f3',
            fontSize: 20,
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        // x: 'left',
        bottom: 10,
        itemWidth: 11,
        itemHeight: 11,
        itemGap: 20,
        data:['cpu','内存','oss','rds','eip'],
        textStyle: {
        	color: '#28d5f3',
        	fontSize: 14,
        }
    },
    series: [
        {
            name:'TYPE_S',
            selectedOffset: 500,
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                formatter: ({seriesName, value, percent}) => {
                	console.log(seriesName);
                	console.log(percent);
                	return `${percent}%<br/>seriesName`;
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle: {
            	// color: ['#121165', '#2e65c1', '#1e9dd0', '#31ebf5', '#92faff']
            	// color: '#121165'
            	color: function({seriesIndex, dataIndex, data, value}) {
            		console.log(...[seriesIndex, dataIndex, data, value]);
            		let arrColor = ['#121165', '#2e65c1', '#1e9dd0', '#31ebf5', '#92faff'];
            		return arrColor[dataIndex];
            	}
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'cpu'},
                {value:310, name:'内存'},
                {value:234, name:'oss'},
                {value:135, name:'rds'},
                {value:1548, name:'eip'}
            ]
        }
    ]
}

exports.lineChartsOption = {
    title: {
        text: '增长率',
        textStyle: {
            color: '#28d5f3',
            fontSize: 20,
        }
    },
    legend: {
        orient: 'horizontal',
        // x: 'left',
        bottom: 10,
        itemGap: 20,
        data:['cpu','内存','oss'],
        textStyle: {
        	color: '#28d5f3',
        	fontSize: 14,
        }
    },    
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['cpu','内存','oss']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        axisLine: {
        	lineStyle: {
	        	color: '#20265b'
        	}
        },
        axisTick: {
        	show: false
        },
        axisLabel: {
        	color: '#fff'
        },     
        boundaryGap: false,
        data: ['01/02','01/03','01/04','01/05','01/06','01/07']
    },
    yAxis: {
        type: 'value',
        axisLine: {
        	lineStyle: {
	        	color: '#20265b'
        	}
        },
        axisLabel: {
        	color: '#fff'
        },     
        axisTick: {
        	show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name:'cpu',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'内存',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'oss',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        }
    ]
}

exports.barChartsOption = {
	title: {
        text: '使用率',
        textStyle: {
            color: '#28d5f3',
            fontSize: 20,
        }
    },
    xAxis: {
        data: ['ECS', 'RDS', 'OSS', 'EIP', 'DISK'],
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(17, 16, 43, .5)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [500, 500, 500, 500, 500],
            animation: false
        },
        {
            type: 'bar',
            itemStyle: null,
            data: [220, 182, 191, 234, 290,]
        }
    ]
}