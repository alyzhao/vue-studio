exports.warningOption = {
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
        data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06', '01/07'],
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
                color: ['#070707']
            }
        },
    },
    series: [{
        data: [820, 932, 901, 300, 1290, 1330, 1320],
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
                    offset: 0, color: 'rgba(21, 122, 140, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(21, 122, 140, .2)' // 100% 处的颜色
                }],
            }
        }
    }]
};

