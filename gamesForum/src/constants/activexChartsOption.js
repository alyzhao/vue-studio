var angle = [220, -40];

export const activexChartsOption = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '最外层环仪表盘',
        type: "gauge",
        min: 0,
        max: 1000,
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 20,
        axisLine: {
            lineStyle: {
                color: [
                    [1, "#e0e0e0"]
                ],
                width: 10
            }
        },
        axisTick: {
            lineStyle: {
                color: "#fff",
                width: 2
            },
            length: 0,
            splitNumber: 1
        },
        axisLabel: {
            distance: -40,
            formatter: function(v) {
                if (v == 60) {
                    return '{a|' + v + '}';
                } else if (v == 85) {
                    return '{b|' + v + '}';
                } else {
                    return v;
                };
            },
            textStyle: {
                color: "#bbb"
            },
            rich: {
                a: {
                    color: '#fbe010'
                },
                b: {
                    color: '#3fa7dc'
                }
            }
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: "#1fbcbd",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        },
        detail: {
            formatter: "{value}分",
            offsetCenter: [0, "60%"],
            textStyle: {
                fontSize: 30,
                color: "#fff"
            }
        },
        title: {
            show: false
        },
        pointer: {
            length: '85%'
        },
        data: [{
            value: 0
        }]
    }, {
        name: "内环仪表盘四段颜色",
        type: "gauge",
        min: 0,
        max: 1000,
        radius: '69%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: [
                    [0.6, '#fb5310'],
                    [0.85, '#fbe010'],
                    [1, "#3fa7dc"]
                ],
                width: 15
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            length: 15,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        pointer: {
            length: 0
        },
        detail: {
            show: false
        },
    }]
}
