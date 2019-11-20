var data = {
    axis01: [{
        "name": "10:00",
        "val": 1000
    }, {
        "name": "10:30",
        "val": 2132
    }, {
        "name": "11:00",
        "val": 2215
    }, {
        "name": "11:30",
        "val": 2330
    }, {
        "name": "12:00",
        "val": 1465
    }, {
        "name": "12:30",
        "val": 5420
    }, {
        "name": "13:00",
        "val": 3215
    }, {
        "name": "13:30",
        "val": 1120
    }, {
        "name": "14:00",
        "val": 1230
    }, {
        "name": "14:30",
        "val": 2300
    }, {
        "name": "15:00",
        "val": 1120
    }, {
        "name": "15:30",
        "val": 4620
    }],
    axis02: [{
        "name": "12:30",
        "val": 1233
    }, {
        "name": "13:00",
        "val": 5543
    }, {
        "name": "13:30",
        "val": 2323
    }, {
        "name": "14:00",
        "val": 4010
    }, {
        "name": "14:30",
        "val": 4510
    }, {
        "name": "15:00",
        "val": 6520
    }, {
        "name": "15:30",
        "val": 6655
    }]
};

function contractTrendLineChart(id, data, chooseTheme) {
    var myChart = echarts.init(document.getElementById(id));

    function newArrFn(data, key) {
        var arr = [];
        var len = data.length;
        for (var i = 0; i < len; i++) {
            arr.push(data[i][key])
        }
        return arr;
    }
    var xAxisData = newArrFn(data.axis01, "name");
    var serverData1 = newArrFn(data.axis01, "val");
    var serverData2 = formatterVal(data.axis02, xAxisData);

    function formatterVal(data01, data02) {
        var name = data01[0].name;
        var indexAaxis = 0;
        var arr = [];
        for (var i = 0; i < data02.length; i++) {
            if (name == data02[i]) {
                indexAaxis = i;
            }
        };

        for (var i = 0; i < data01.length; i++) {
            arr.push([indexAaxis + i, data01[i].val])
        }
        return arr;
    }

    var option = {
        title: {
            show: false,
            text: ''
        },
        tooltip: {
            trigger: 'axis',
        },
        color: ['#359bef', '#ff6e54'],
        legend: {
            textStyle: {
                color: chooseTheme.chart.textColor,
                fontSize: 14
            },
            itemHeight: 14,
            itemWidth: 14,
            left: '20%',
            top: "top",
            data: [{
                name: '实际值',
                icon: 'rect',
            }, {
                name: '预测值',
                icon: 'rect',
            }]

        },
        grid: {
            top: 40,
            left: '0%',
            right: '2%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisTick: false,
            splitLine: false,
            axisLine: {
                lineStyle: {
                    color: "#7a7a7a"
                }
            },
            axisLabel: {
                color: chooseTheme.chart.axisLabelColor
            },
            data: xAxisData
        }],
        yAxis: [{
            type: 'value',
            axisTick: false,
            splitLine: false,
            axisLine: {
                lineStyle: {
                    color: "#7a7a7a"
                }
            },
            axisLabel: {
                color: chooseTheme.chart.axisLabelColor
            },
        }],
        series: [{
            name: '实际值',
            symbol: 'emptyCircle',
            itemStyle: {
                // normal: {
                //     color: "#000",
                //     borderColor: '#f58f23',
                //     borderWidth: 1,
                // }
            },
            type: 'line',
            lineStyle: {
                color: '#3799f0' //改变折线颜色
            },
            data: serverData1
        }, {
            name: '预测值',
            symbol: 'emptyCircle',
            itemStyle: {
                // normal: {
                //     color: "#000",
                //     borderColor: '#f58f23',
                //     borderWidth: 1,
                // }
            },
            type: 'line',
            lineStyle: {
                color: '#ff7737' //改变折线颜色 
            },
            data: serverData2
        }]
    };
    myChart.setOption(option);
    return myChart;
}



var chart = contractTrendLineChart('echarts-line', data, chooseTheme);



$("#header .header-right .span1").on("click", function() {
    var isShow = $(this).find(".arrow").hasClass("arrow-down");
    if (!isShow) {
        $("#palette").show().addClass("bounceIn");
        $(this).find(".arrow").addClass("arrow-down").removeClass("arrow-up");
        if (chooseTheme.index) {
            $("#palette .flex .check").removeClass("checked");
            var i = chooseTheme.index - 1;
            $("#palette .flex").eq(i).find(".check").addClass("checked");
        }

    } else {
        $("#palette").hide().removeClass("bounceIn");
        $(this).find(".arrow").removeClass("arrow-down").addClass("arrow-up");
    }
})

$(".cannel-btn").on("click", function() {
    $("#palette").hide();
    $("#header .header-right .span1").find(".arrow").removeClass("arrow-down").addClass("arrow-up");
    chooseTheme = JSON.parse(localStorage.getItem('themeRobot'));
    less.modifyVars(chooseTheme);
})


$(".success-btn").on("click", function() {
    $("#palette").hide();
    $("#header .header-right .span1").find(".arrow").removeClass("arrow-down").addClass("arrow-up");
    localStorage.setItem('themeRobot', JSON.stringify(chooseTheme));
    contractTrendLineChart('echarts-line', data, chooseTheme);
})


$("#palette .flex").on("click", function() {
    $("#palette .flex .check").removeClass("checked");
    $(this).find(".check").addClass("checked");

})

$("#palette .flex1,#palette .flex2").on("click", function() {
    $("#palette .content2 i,#palette .content3 i").css({
        cursor: 'not-allowed'
    })
})

$("#palette .flex1").click(function() {

    // chooseTheme = {...themeConfig.dark
    // };

    // less.modifyVars({
    //     ...chooseTheme
    // });

    chooseTheme = JSON.parse(JSON.stringify(themeConfig.dark));

    less.modifyVars(JSON.parse(JSON.stringify(chooseTheme)));

    chart = contractTrendLineChart('echarts-line', data, chooseTheme);
})

$("#palette .flex2").click(function() {
    // chooseTheme = {...themeConfig.white
    // };
    // less.modifyVars({
    //     ...chooseTheme
    // });

    chooseTheme = JSON.parse(JSON.stringify(themeConfig.white))
    less.modifyVars(JSON.parse(JSON.stringify(chooseTheme)));
    chart = contractTrendLineChart('echarts-line', data, chooseTheme);
});