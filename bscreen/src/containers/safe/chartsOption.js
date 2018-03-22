exports.lineChartsOption = {
    title: {
        text: '',
        textStyle: {
            color: '#28d5f3',
            fontSize: 20,
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07', '01/08', '01/09'],
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        },     
        splitLine: {
            lineStyle: {
                color: ['#1d2358']
            }
        },
    },
    series: [{
        data: [80, 50, 10, 30, 20, 40, 90, 60, 70],
        type: 'line',
        itemStyle: {
            color: '#78ffff'
        },
        lineStyle: {
            color: '#177b8b'
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#310352' // 0% 处的颜色
                }, {
                    offset: 1, color: '#0b0b34' // 100% 处的颜色
                }],
            }
        }
    }]
};