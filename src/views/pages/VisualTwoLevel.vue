<template>
    <div class="wrapbody">
        <section id="main">

            <div class="breadpage">
                <span class="light_bread"><a href="">可视化</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">medicine1</a></span>
            </div>

            <div class="echart-box clearfix">
                <div class="echart-item fl">
                    <span class="title"><i></i>直方图</span>
                    <div class="echart-content" @click="dialogSetOption('直方图')">
                        <swiper-chart class="echart" :values="echartsBarOption"></swiper-chart>
                    </div>
                </div>
                <div class="echart-item fl">
                    <span class="title"><i></i>箱型图</span>
                    <div class="echart-content" @click="dialogSetOption('箱型图')">
                        <swiper-chart class="echart" :values="echartsBoxplotOption"></swiper-chart>
                    </div>
                </div>
                <div class="echart-item fl">
                    <span class="title"><i></i>热力图</span>
                    <div class="echart-content" @click="dialogSetOption('热力图')">
                        <swiper-chart class="echart" :values="echartsHeatMapOption"></swiper-chart>
                    </div>
                </div>



                <div class="echart-item fl">
                    <span class="title"><i></i>雷达图</span>
                    <div class="echart-content" @click="dialogSetOption('雷达图')">
                        <swiper-chart class="echart" :values="echartsRadarOption"></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>关系图</span>
                    <div class="echart-content" @click="dialogSetOption('关系图')">
                        <swiper-chart class="echart" :values="echartsGrapOption"></swiper-chart>
                    </div>
                </div>


                <div class="echart-item fl">
                    <span class="title"><i></i>平行坐标图</span>
                    <div class="echart-content" @click="dialogSetOption('平行坐标图')">
                        <swiper-chart class="echart" :values="echartsParallelOption"></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>散点图</span>
                    <div class="echart-content" @click="dialogSetOption('散点图')">
                        <swiper-chart class="echart" :values="echartsScatterOption" ></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>漏斗图</span>
                    <div class="echart-content" @click="dialogSetOption('漏斗图')">
                        <swiper-chart class="echart echartsFunnel" :values="echartsFunnelOption"></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>分布地图</span>
                    <div class="echart-content" @click="dialogSetOption('分布地图')">
                        <swiper-chart class="echart" :values="echartsMapOption"></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>折线图</span>
                    <div class="echart-content" @click="dialogSetOption('折线图 ')">
                        <swiper-chart class="echart" :values="echartsLinelOption"></swiper-chart>
                    </div>
                </div>
            </div>



        </section>



    <!-- 直方图参数设置弹框  -->
        <div class="alert-box" id="alert-box-setOption">
            <div class="title text-c">
                {{echartsType}}参数设置
                <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p>x轴（可多选）</p>
                <input type="text">
                <p>Y轴</p>
                <input type="text">

                <div class="btn-wrap">
                    <button @click="closeDialog" class="btn btnksh">进行可视化</button>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import echarts from 'echarts'
    import senzhenGEO from '@/until/senzhen.js'
    import swiperChart from '../components/swiperChart'
    echarts.registerMap('sz',senzhenGEO)
    export default  {
        data(){
            return {
                echartsBarOption:{
                        color: ['#3398DB'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",

                        },
                        grid: {
                            left: '20',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['1', '2', '3', '4', '5', '6', '7'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            axisTick:{
                                show:false
                            },
                            axisLabel:{
                                show:false,
                            },
                            axisLine:{
                                show:false
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],
                        series : [
                            {
                                type:'bar',
                                barWidth: '50%',
                                data:[100, 52, 200, 334, 390, 330, 220]
                            }
                        ]
                },
                echartsBoxplotOption:{
                        color: ['#3398DB'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",

                        },
                        grid: {
                            left: '20',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['1', '2', '3', '4', '5', '6', '7'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            axisTick:{
                                show:false
                            },
                            axisLabel:{
                                show:false,
                            },
                            axisLine:{
                              show:false
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],
                        series : [
                            {
                                type:'boxplot',
                                itemStyle:{
                                    borderColor:"#353F7D",
                                    color:"#72EEA8"
                                },
                                data:[
                                    [5, 15, 94, 94, 115],
                                    [1, 10, 64, 64, 95],
                                    [10, 20, 54, 54, 75],
                                    [3, 10, 74, 74, 95],
                                    [6, 15, 88, 88, 105],
                                    [1, 10, 64, 64, 95],
                                    [10, 20, 54, 54, 75]
                                ]
                            }
                        ]
                },
                echartsRadarOption:{
                        color: ['#29BAFD','#7BF7A0'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",
                            data:['雷达图']
                        },
                        grid: {
                            left: '0%',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['0201', '0308', '0323', '0330', '0408', '0418', '0528'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],
                        radar: {
                            indicator: [
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000}
                            ]
                        },
                        series: [{
                            type: 'radar',
                            areaStyle: {},
                            data : [
                                {
                                    value : [32000, 10000, 28000, 35000, 50000, 10000, 28000, 35000, 50000, 19000],
                                },
                                {
                                    value : [5000, 14000, 28000, 31000, 42000, 14000, 28000, 31000, 42000, 21000],
                                }
                            ]
                        }]
                },
                echartsFunnelOption:{
                        color: ['#365cb3','#4f8df2','#69a3f3','#84b6f2','#49689a'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",

                        },
                        grid: {
                            left: '0%',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        series: [
                            {
                                type:'funnel',
                                left: '0%',
                                top: 60,
                                bottom: 60,
                                width: '100%',
                                min: 0,
                                max: 100,
                                minSize: '0%',
                                maxSize: '100%',
                                sort: 'descending',
                                gap: 2,
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                labelLine: {
                                    length: 10,
                                    lineStyle: {
                                        width: 1,
                                        type: 'solid'
                                    }
                                },
                                itemStyle: {
                                    borderColor: '#fff',
                                    borderWidth: 1
                                },
                                data: [
                                    {value: 40},
                                    {value: 40},
                                    {value: 20},
                                    {value: 80},
                                    {value: 100}
                                ]
                            }
                        ]
                },
                echartsLinelOption:{
                    color: ['#3398DB','#00FF90'],
                    legend:{
                        textStyle:{
                            color:"#FFF"
                        },
                        left:'20',
                        top:"10",
                        icon:"circle",

                    },
                    grid: {
                        left: '20',
                        right: '5%',
                        bottom: '0%',
                        top:'15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1', '2', '3', '4', '5', '6', '7'],
                            show:false,
                        }
                    ],
                    yAxis: [{
                        type: 'value',
                        splitNumber: 5,
                        splitArea : {show : false},//去除网格区域
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            show:false,
                        },
                        axisLine:{
                            show:false
                        },
                        splitLine: {
                            show: true,
                            lineStyle:{
                                type:"dotted",
                                color:"#353F7D"
                            }
                        }
                    }],
                    series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                    },{
                        data: [520, 232, 401, 634, 990, 330, 1020],
                        type: 'line',
                    },{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {offset: 0, color: '#3398DB'},
                                        {offset: 1, color: '#1E214E'}
                                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                                )
                            }
                        },
                        barWidth:'15%'
                    }]
                },
                echartsHeatMapOption:(function(){
                    var noise = getNoiseHelper();
                    var xData = [];
                    var yData = [];
                    noise.seed(Math.random());
                    function generateData(theta, min, max) {
                        var data = [];
                        for (var i = 0; i <= 200; i++) {
                            for (var j = 0; j <= 100; j++) {
                                // var x = (max - min) * i / 200 + min;
                                // var y = (max - min) * j / 100 + min;
                                data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
                                // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
                            }
                            xData.push(i);
                        }
                        for (var j = 0; j < 100; j++) {
                            yData.push(j);
                        }
                        return data;
                    }
                    var data = generateData(2, -5, 5);





                    ///////////////////////////////////////////////////////////////////////////
                    // Simplex and perlin noise helper from https://github.com/josephg/noisejs
                    ///////////////////////////////////////////////////////////////////////////
                    function getNoiseHelper(global) {

                        var module = {};

                        function Grad(x, y, z) {
                            this.x = x; this.y = y; this.z = z;
                        }

                        Grad.prototype.dot2 = function(x, y) {
                            return this.x*x + this.y*y;
                        };

                        Grad.prototype.dot3 = function(x, y, z) {
                            return this.x*x + this.y*y + this.z*z;
                        };

                        var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                            new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                            new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

                        var p = [151,160,137,91,90,15,
                            131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
                            190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
                            88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
                            77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
                            102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
                            135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
                            5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
                            223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
                            129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
                            251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
                            49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
                            138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
                        // To remove the need for index wrapping, double the permutation table length
                        var perm = new Array(512);
                        var gradP = new Array(512);

                        // This isn't a very good seeding function, but it works ok. It supports 2^16
                        // different seed values. Write something better if you need more seeds.
                        module.seed = function(seed) {
                            if(seed > 0 && seed < 1) {
                                // Scale the seed out
                                seed *= 65536;
                            }

                            seed = Math.floor(seed);
                            if(seed < 256) {
                                seed |= seed << 8;
                            }

                            for(var i = 0; i < 256; i++) {
                                var v;
                                if (i & 1) {
                                    v = p[i] ^ (seed & 255);
                                } else {
                                    v = p[i] ^ ((seed>>8) & 255);
                                }

                                perm[i] = perm[i + 256] = v;
                                gradP[i] = gradP[i + 256] = grad3[v % 12];
                            }
                        };

                        module.seed(0);

                        /*
                        for(var i=0; i<256; i++) {
                          perm[i] = perm[i + 256] = p[i];
                          gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
                        }*/

                        // Skewing and unskewing factors for 2, 3, and 4 dimensions
                        var F2 = 0.5*(Math.sqrt(3)-1);
                        var G2 = (3-Math.sqrt(3))/6;

                        var F3 = 1/3;
                        var G3 = 1/6;

                        // 2D simplex noise
                        module.simplex2 = function(xin, yin) {
                            var n0, n1, n2; // Noise contributions from the three corners
                            // Skew the input space to determine which simplex cell we're in
                            var s = (xin+yin)*F2; // Hairy factor for 2D
                            var i = Math.floor(xin+s);
                            var j = Math.floor(yin+s);
                            var t = (i+j)*G2;
                            var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
                            var y0 = yin-j+t;
                            // For the 2D case, the simplex shape is an equilateral triangle.
                            // Determine which simplex we are in.
                            var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
                            if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
                                i1=1; j1=0;
                            } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
                                i1=0; j1=1;
                            }
                            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
                            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
                            // c = (3-sqrt(3))/6
                            var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
                            var y1 = y0 - j1 + G2;
                            var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
                            var y2 = y0 - 1 + 2 * G2;
                            // Work out the hashed gradient indices of the three simplex corners
                            i &= 255;
                            j &= 255;
                            var gi0 = gradP[i+perm[j]];
                            var gi1 = gradP[i+i1+perm[j+j1]];
                            var gi2 = gradP[i+1+perm[j+1]];
                            // Calculate the contribution from the three corners
                            var t0 = 0.5 - x0*x0-y0*y0;
                            if(t0<0) {
                                n0 = 0;
                            } else {
                                t0 *= t0;
                                n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
                            }
                            var t1 = 0.5 - x1*x1-y1*y1;
                            if(t1<0) {
                                n1 = 0;
                            } else {
                                t1 *= t1;
                                n1 = t1 * t1 * gi1.dot2(x1, y1);
                            }
                            var t2 = 0.5 - x2*x2-y2*y2;
                            if(t2<0) {
                                n2 = 0;
                            } else {
                                t2 *= t2;
                                n2 = t2 * t2 * gi2.dot2(x2, y2);
                            }
                            // Add contributions from each corner to get the final noise value.
                            // The result is scaled to return values in the interval [-1,1].
                            return 70 * (n0 + n1 + n2);
                        };

                        // 3D simplex noise
                        module.simplex3 = function(xin, yin, zin) {
                            var n0, n1, n2, n3; // Noise contributions from the four corners

                            // Skew the input space to determine which simplex cell we're in
                            var s = (xin+yin+zin)*F3; // Hairy factor for 2D
                            var i = Math.floor(xin+s);
                            var j = Math.floor(yin+s);
                            var k = Math.floor(zin+s);

                            var t = (i+j+k)*G3;
                            var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
                            var y0 = yin-j+t;
                            var z0 = zin-k+t;

                            // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
                            // Determine which simplex we are in.
                            var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
                            var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
                            if(x0 >= y0) {
                                if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
                                else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
                                else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
                            } else {
                                if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
                                else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
                                else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
                            }
                            // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
                            // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
                            // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
                            // c = 1/6.
                            var x1 = x0 - i1 + G3; // Offsets for second corner
                            var y1 = y0 - j1 + G3;
                            var z1 = z0 - k1 + G3;

                            var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
                            var y2 = y0 - j2 + 2 * G3;
                            var z2 = z0 - k2 + 2 * G3;

                            var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
                            var y3 = y0 - 1 + 3 * G3;
                            var z3 = z0 - 1 + 3 * G3;

                            // Work out the hashed gradient indices of the four simplex corners
                            i &= 255;
                            j &= 255;
                            k &= 255;
                            var gi0 = gradP[i+   perm[j+   perm[k   ]]];
                            var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
                            var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
                            var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

                            // Calculate the contribution from the four corners
                            var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
                            if(t0<0) {
                                n0 = 0;
                            } else {
                                t0 *= t0;
                                n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
                            }
                            var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
                            if(t1<0) {
                                n1 = 0;
                            } else {
                                t1 *= t1;
                                n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
                            }
                            var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
                            if(t2<0) {
                                n2 = 0;
                            } else {
                                t2 *= t2;
                                n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
                            }
                            var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
                            if(t3<0) {
                                n3 = 0;
                            } else {
                                t3 *= t3;
                                n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
                            }
                            // Add contributions from each corner to get the final noise value.
                            // The result is scaled to return values in the interval [-1,1].
                            return 32 * (n0 + n1 + n2 + n3);

                        };

                        // ##### Perlin noise stuff

                        function fade(t) {
                            return t*t*t*(t*(t*6-15)+10);
                        }

                        function lerp(a, b, t) {
                            return (1-t)*a + t*b;
                        }

                        // 2D Perlin Noise
                        module.perlin2 = function(x, y) {
                            // Find unit grid cell containing point
                            var X = Math.floor(x), Y = Math.floor(y);
                            // Get relative xy coordinates of point within that cell
                            x = x - X; y = y - Y;
                            // Wrap the integer cells at 255 (smaller integer period can be introduced here)
                            X = X & 255; Y = Y & 255;

                            // Calculate noise contributions from each of the four corners
                            var n00 = gradP[X+perm[Y]].dot2(x, y);
                            var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
                            var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
                            var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

                            // Compute the fade curve value for x
                            var u = fade(x);

                            // Interpolate the four results
                            return lerp(
                                lerp(n00, n10, u),
                                lerp(n01, n11, u),
                                fade(y));
                        };

                        // 3D Perlin Noise
                        module.perlin3 = function(x, y, z) {
                            // Find unit grid cell containing point
                            var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
                            // Get relative xyz coordinates of point within that cell
                            x = x - X; y = y - Y; z = z - Z;
                            // Wrap the integer cells at 255 (smaller integer period can be introduced here)
                            X = X & 255; Y = Y & 255; Z = Z & 255;

                            // Calculate noise contributions from each of the eight corners
                            var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
                            var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
                            var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
                            var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
                            var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
                            var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
                            var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
                            var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

                            // Compute the fade curve value for x, y, z
                            var u = fade(x);
                            var v = fade(y);
                            var w = fade(z);

                            // Interpolate
                            return lerp(
                                lerp(
                                    lerp(n000, n100, u),
                                    lerp(n001, n101, u), w),
                                lerp(
                                    lerp(n010, n110, u),
                                    lerp(n011, n111, u), w),
                                v);
                        };


                        return module;
                    }
                    return {
                        tooltip: {},
                        grid:{
                            left: '20',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            show:false,
                            data: xData
                        },
                        yAxis: {
                            type: 'category',
                            splitArea : {show : false},//去除网格区域
                            axisTick:{
                              show:false
                            },
                            axisLabel:{
                              show:false,
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            },
                            data: yData
                        },
                        visualMap: {
                            show:false,
                            min: 0,
                            max: 1,
                            calculable: true,
                            realtime: false,
                            inRange: {
                                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                            }
                        },
                        series: [{
                            name: 'Gaussian',
                            type: 'heatmap',
                            data: data,
                            itemStyle: {
                                emphasis: {
                                    borderColor: '#333',
                                    borderWidth: 1
                                }
                            },
                            progressive: 1000,
                            animation: false
                        }]
                    };
                })(),
                echartsScatterOption:(function(){
                    var dataBJ = [
                        [1,55,9,56,0.46,18,6,"良"],
                        [2,25,11,21,0.65,34,9,"优"],
                        [3,56,7,63,0.3,14,5,"良"],
                        [4,33,7,29,0.33,16,6,"优"],
                        [5,42,24,44,0.76,40,16,"优"],
                        [6,82,58,90,1.77,68,33,"良"],
                        [7,74,49,77,1.46,48,27,"良"],
                        [8,78,55,80,1.29,59,29,"良"],
                        [9,267,216,280,4.8,108,64,"重度污染"],
                        [10,185,127,216,2.52,61,27,"中度污染"],
                        [11,39,19,38,0.57,31,15,"优"],
                        [12,41,11,40,0.43,21,7,"优"],
                        [13,64,38,74,1.04,46,22,"良"],
                        [14,108,79,120,1.7,75,41,"轻度污染"],
                        [15,108,63,116,1.48,44,26,"轻度污染"],
                        [16,33,6,29,0.34,13,5,"优"],
                        [17,94,66,110,1.54,62,31,"良"],
                        [18,186,142,192,3.88,93,79,"中度污染"],
                        [19,57,31,54,0.96,32,14,"良"],
                        [20,22,8,17,0.48,23,10,"优"],
                        [21,39,15,36,0.61,29,13,"优"],
                        [22,94,69,114,2.08,73,39,"良"],
                        [23,99,73,110,2.43,76,48,"良"],
                        [24,31,12,30,0.5,32,16,"优"],
                        [25,42,27,43,1,53,22,"优"],
                        [26,154,117,157,3.05,92,58,"中度污染"],
                        [27,234,185,230,4.09,123,69,"重度污染"],
                        [28,160,120,186,2.77,91,50,"中度污染"],
                        [29,134,96,165,2.76,83,41,"轻度污染"],
                        [30,52,24,60,1.03,50,21,"良"],
                        [31,46,5,49,0.28,10,6,"优"]
                    ];

                    var dataGZ = [
                        [1,26,37,27,1.163,27,13,"优"],
                        [2,85,62,71,1.195,60,8,"良"],
                        [3,78,38,74,1.363,37,7,"良"],
                        [4,21,21,36,0.634,40,9,"优"],
                        [5,41,42,46,0.915,81,13,"优"],
                        [6,56,52,69,1.067,92,16,"良"],
                        [7,64,30,28,0.924,51,2,"良"],
                        [8,55,48,74,1.236,75,26,"良"],
                        [9,76,85,113,1.237,114,27,"良"],
                        [10,91,81,104,1.041,56,40,"良"],
                        [11,84,39,60,0.964,25,11,"良"],
                        [12,64,51,101,0.862,58,23,"良"],
                        [13,70,69,120,1.198,65,36,"良"],
                        [14,77,105,178,2.549,64,16,"良"],
                        [15,109,68,87,0.996,74,29,"轻度污染"],
                        [16,73,68,97,0.905,51,34,"良"],
                        [17,54,27,47,0.592,53,12,"良"],
                        [18,51,61,97,0.811,65,19,"良"],
                        [19,91,71,121,1.374,43,18,"良"],
                        [20,73,102,182,2.787,44,19,"良"],
                        [21,73,50,76,0.717,31,20,"良"],
                        [22,84,94,140,2.238,68,18,"良"],
                        [23,93,77,104,1.165,53,7,"良"],
                        [24,99,130,227,3.97,55,15,"良"],
                        [25,146,84,139,1.094,40,17,"轻度污染"],
                        [26,113,108,137,1.481,48,15,"轻度污染"],
                        [27,81,48,62,1.619,26,3,"良"],
                        [28,56,48,68,1.336,37,9,"良"],
                        [29,82,92,174,3.29,0,13,"良"],
                        [30,106,116,188,3.628,101,16,"轻度污染"],
                        [31,118,50,0,1.383,76,11,"轻度污染"]
                    ];

                    var dataSH = [
                        [1,91,45,125,0.82,34,23,"良"],
                        [2,65,27,78,0.86,45,29,"良"],
                        [3,83,60,84,1.09,73,27,"良"],
                        [4,109,81,121,1.28,68,51,"轻度污染"],
                        [5,106,77,114,1.07,55,51,"轻度污染"],
                        [6,109,81,121,1.28,68,51,"轻度污染"],
                        [7,106,77,114,1.07,55,51,"轻度污染"],
                        [8,89,65,78,0.86,51,26,"良"],
                        [9,53,33,47,0.64,50,17,"良"],
                        [10,80,55,80,1.01,75,24,"良"],
                        [11,117,81,124,1.03,45,24,"轻度污染"],
                        [12,99,71,142,1.1,62,42,"良"],
                        [13,95,69,130,1.28,74,50,"良"],
                        [14,116,87,131,1.47,84,40,"轻度污染"],
                        [15,108,80,121,1.3,85,37,"轻度污染"],
                        [16,134,83,167,1.16,57,43,"轻度污染"],
                        [17,79,43,107,1.05,59,37,"良"],
                        [18,71,46,89,0.86,64,25,"良"],
                        [19,97,71,113,1.17,88,31,"良"],
                        [20,84,57,91,0.85,55,31,"良"],
                        [21,87,63,101,0.9,56,41,"良"],
                        [22,104,77,119,1.09,73,48,"轻度污染"],
                        [23,87,62,100,1,72,28,"良"],
                        [24,168,128,172,1.49,97,56,"中度污染"],
                        [25,65,45,51,0.74,39,17,"良"],
                        [26,39,24,38,0.61,47,17,"优"],
                        [27,39,24,39,0.59,50,19,"优"],
                        [28,93,68,96,1.05,79,29,"良"],
                        [29,188,143,197,1.66,99,51,"中度污染"],
                        [30,174,131,174,1.55,108,50,"中度污染"],
                        [31,187,143,201,1.39,89,53,"中度污染"]
                    ];

                    var schema = [
                        {name: 'date', index: 0, text: '日'},
                        {name: 'AQIindex', index: 1, text: 'AQI指数'},
                        {name: 'PM25', index: 2, text: 'PM2.5'},
                        {name: 'PM10', index: 3, text: 'PM10'},
                        {name: 'CO', index: 4, text: '一氧化碳（CO）'},
                        {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
                        {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
                    ];

                    var itemStyle = {
                        normal: {
                            opacity: 0.8,
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    };

                    return {
                        color: [
                            '#dd4444', '#fec42c', '#80F1BE'
                        ],
                        legend: {
                            show:false,
                            y: '10',
                            data: ['北京', '上海', '广州'],
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }
                        },
                        grid: {
                            left: '20',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        tooltip: {
                            show:false,
                        },
                        xAxis: {
                            type: 'value',
                            max: 31,
                            show:false,
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#eee'
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            axisTick:{
                                show:false
                            },
                            axisLabel:{
                                show:false,
                            },
                            axisLine:{
                                show:false
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        },
                        visualMap: [
                            {
                                show:false,
                                left: 'right',
                                top: '10%',
                                dimension: 2,
                                min: 0,
                                max: 250,
                                itemWidth: 100,
                                itemHeight: 120,
                                calculable: true,
                                precision: 0.1,
                                text: ['圆形大小：PM2.5'],
                                textGap: 30,
                                textStyle: {
                                    color: '#fff'
                                },
                                inRange: {
                                    symbolSize: [4, 40]
                                },
                                outOfRange: {
                                    symbolSize: [4, 40],
                                    color: ['rgba(255,255,255,.2)']
                                },
                                controller: {
                                    inRange: {
                                        color: ['#c23531']
                                    },
                                    outOfRange: {
                                        color: ['#444']
                                    }
                                }
                            },
                            {
                                left: 'right',
                                show:false,
                                bottom: '5%',
                                dimension: 6,
                                min: 0,
                                max: 50,
                                itemHeight: 120,
                                calculable: true,
                                precision: 0.1,
                                text: ['明暗：二氧化硫'],
                                textGap: 30,
                                textStyle: {
                                    color: '#fff'
                                },
                                inRange: {
                                    colorLightness: [1, 0.5]
                                },
                                outOfRange: {
                                    color: ['rgba(255,255,255,.2)']
                                },
                                controller: {
                                    inRange: {
                                        color: ['#c23531']
                                    },
                                    outOfRange: {
                                        color: ['#444']
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '北京',
                                type: 'scatter',
                                itemStyle: itemStyle,
                                data: dataBJ
                            },
                            {
                                name: '上海',
                                type: 'scatter',
                                itemStyle: itemStyle,
                                data: dataSH
                            },
                            {
                                name: '广州',
                                type: 'scatter',
                                itemStyle: itemStyle,
                                data: dataGZ
                            }
                        ]
                    };
                })(),
                echartsGrapOption:(function(){
                    var categories =[
                        {name:"综合性医院"},
                        {name:"郊区新建医院"},
                        {name:"中医医院"},
                        {name:"妇儿类医院"},
                        {name:"其他专科医院"}
                    ];
                    var nodes =[
                        {
                            name:"市第一人民医院",
                            value:"386583",
                            category:"综合性医院",
                        },
                        {
                            name:"市第六人民医院",
                            value:"370043",
                            category:"综合性医院",
                        },
                        {
                            name:"华东医院",
                            value:"154439",
                            category:"综合性医院",
                        },
                        {
                            name:"市第十人民医院",
                            value:"304221",
                            category:"综合性医院",
                        },
                        {
                            name:"瑞金医院",
                            value:"345439",
                            category:"综合性医院",
                        },
                        {
                            name:"新华医院",
                            value:"329904",
                            category:"综合性医院",
                        },
                        {
                            name:"仁济医院",
                            value:"400024",
                            category:"综合性医院",
                        },
                        {
                            name:"第九人民医院",
                            value:"411510",
                            category:"综合性医院",
                        },
                        {
                            name:"同济医院",
                            value:"213460",
                            category:"综合性医院",
                        },
                        {
                            name:"中山医院",
                            value:"397498",
                            category:"综合性医院",
                        },
                        {
                            name:"华山医院",
                            value:"292608",
                            category:"综合性医院",
                        },
                        {
                            name:"长海医院",
                            value:"295773",
                            category:"综合性医院",
                        },
                        {
                            name:"长征医院",
                            value:"150213",
                            category:"综合性医院",
                        },

                        //郊区医院
                        {
                            name:"市六东院",
                            value:"62690",
                            category:"郊区新建医院",
                        },
                        {
                            name:"仁济南院",
                            value:"110982",
                            category:"郊区新建医院",
                        },
                        {
                            name:"华山北院",
                            value:"83327",
                            category:"郊区新建医院",
                        },
                        {
                            name:"瑞金北院",
                            value:"115099",
                            category:"郊区新建医院",
                        },
                        //中医院

                        {
                            name:"市中医医院",
                            value:"175811",
                            category:"中医医院",
                        },
                        {
                            name:"龙华医院",
                            value:"332354",
                            category:"中医医院",
                        },
                        {
                            name:"曙光医院",
                            value:"337286",
                            category:"中医医院",
                        },
                        {
                            name:"岳阳中西医结合医院",
                            value:"247430",
                            category:"中医医院",
                        },

                        //妇儿类医院
                        {
                            name:"市第一妇婴保健院",
                            value:"156235",
                            category:"妇儿类医院",
                        },
                        {
                            name:"妇产科医院",
                            value:"136482",
                            category:"妇儿类医院",
                        },
                        {
                            name:"国际和平妇幼保健院",
                            value:"110347",
                            category:"妇儿类医院",
                        },
                        {
                            name:"市儿童医院",
                            value:"255756",
                            category:"妇儿类医院",
                        },
                        {
                            name:"上海儿童医学中心",
                            value:"182765",
                            category:"妇儿类医院",
                        },
                        {
                            name:"儿科医院",
                            value:"255815",
                            category:"妇儿类医院",
                        },
                        //其他专科医院
                        {
                            name:"市公共卫生临床中心",
                            value:"38322",
                            category:"其他专科医院",
                        },
                        {
                            name:"胸科医院",
                            value:"66748",
                            category:"其他专科医院",
                        },
                        {
                            name:"肺科医院",
                            value:"110358",
                            category:"其他专科医院",
                        },
                        {
                            name:"市精神卫生中心",
                            value:"90946",
                            category:"其他专科医院",
                        },
                        {
                            name:"市口腔病防治院",
                            value:"51763",
                            category:"其他专科医院",
                        },
                        {
                            name:"市眼病防治中心",
                            value:"15058",
                            category:"其他专科医院",
                        },
                        {
                            name:"市皮肤病医院",
                            value:"77257",
                            category:"其他专科医院",
                        },
                        {
                            name:"肿瘤医院",
                            value:"120156",
                            category:"其他专科医院",
                        },
                        {
                            name:"眼耳鼻喉科医院",
                            value:"204695",
                            category:"其他专科医院",
                        },
                        {
                            name:"东方肝胆医院",
                            value:"31879",
                            category:"其他专科医院",
                        }
                    ];
                    nodes.forEach(function(d, index, array){
                        nodes[index].symbolSize=d.value/50000;
                    });
                    return {
                        title: {
                        },
                        tooltip: {
                            show:false,
                        },
                        legend: {
                            show:false
                        },
                        animationDurationUpdate: 1500,
                        animationEasingUpdate: 'quinticInOut',
                        color:['#24c5eb','#9de7b7','#984e4e','#e25eaf','#ff9f7b'],
                        series : [
                            {
                                name: '互联互通',
                                type: 'graph',
                                layout: 'circular',
                                circular: {
                                    rotateLabel: true
                                },
                                nodeScaleRatio:0.8,
                                // edgeLabel: {
                                //     normal: {
                                //         textStyle: {
                                //             fontSize: 214
                                //         }
                                //     }
                                // },
                                data:nodes,
                                links:[
                                    {source: 1,target: 0},
                                    {source: 1,target: 3},
                                    {source: 1,target: 8},
                                    {source: 1,target: 7},
                                    {source: 1,target: 10},
                                    {source: 1,target: 11},

                                    {source: 2,target: 1},
                                    {source: 2,target: 12},
                                    {source: 2,target: 9},
                                    {source: 2,target: 11},
                                    {source: 2,target: 12},
                                    {source: 2,target: 15},


                                    {source: 3,target: 2},
                                    {source: 3,target: 14},
                                    {source: 3,target: 20},
                                    {source: 3,target: 22},
                                    {source: 3,target: 22},
                                    {source: 3,target: 24},



                                    {source: 4,target: 1},
                                    {source: 4,target: 12},
                                    {source: 4,target: 18},
                                    {source: 4,target: 21},
                                    {source: 4,target: 26},
                                    {source: 4,target: 28},

                                    {source: 5,target: 4},
                                    {source: 5,target: 6},
                                    {source: 5,target: 12},
                                    {source: 5,target: 18},
                                    {source: 5,target: 16},
                                    {source: 5,target: 20},
                                    {source: 5,target: 22},
                                    {source: 5,target: 30},
                                    {source: 5,target: 35},
                                    {source: 6,target: 12},
                                    {source: 6,target: 16},

                                    {source: 7,target: 18},
                                    {source: 7,target: 30},

                                    {source: 8,target: 18},
                                    {source: 8,target: 29},
                                    {source: 8,target: 10},
                                    {source: 8,target: 32},


                                    {source: 9,target: 10},
                                    {source: 9,target: 11},
                                    {source: 9,target: 12},
                                    {source: 9,target: 31},

                                    {source: 10,target: 20},
                                    {source: 10,target: 11},
                                    {source: 10,target: 12},
                                    {source: 10,target: 31},

                                    {source: 11,target: 35},
                                    {source: 11,target: 34},
                                    {source: 11,target: 14},
                                    {source: 11,target: 28},


                                    {source: 12,target: 30},
                                    {source: 12,target: 31},
                                    {source: 12,target: 32},
                                    {source: 12,target: 23},


                                    {source: 13,target: 30},
                                    {source: 13,target: 31},
                                    {source: 13,target: 32},
                                    {source: 13,target: 23},


                                    {source: 14,target: 30},
                                    {source: 14,target: 31},
                                    {source: 14,target: 32},
                                    {source: 14,target: 23},


                                    {source: 15,target: 1},
                                    {source: 15,target: 4},
                                    {source: 15,target: 30},

                                    {source: 16,target: 1},
                                    {source: 16,target: 4},
                                    {source: 16,target: 20},
                                    {source: 16,target: 24},
                                    {source: 16,target: 26},


                                    {source: 17,target: 1},
                                    {source: 17,target: 4},
                                    {source: 17,target: 20},
                                    {source: 17,target: 24},
                                    {source: 17,target: 26},



                                    {source: 18,target: 2},
                                    {source: 18,target: 4},
                                    {source: 18,target: 23},
                                    {source: 18,target: 25},
                                    {source: 19,target: 32},

                                    {source: 19,target: 5},
                                    {source: 19,target: 12},
                                    {source: 19,target: 30},
                                    {source: 19,target: 36},

                                    {source: 20,target: 1},
                                    {source: 20,target: 4},
                                    {source: 20,target: 20},
                                    {source: 20,target: 24},
                                    {source: 20,target: 26},

                                    {source: 21,target: 3},
                                    {source: 21,target: 6},
                                    {source: 21,target: 9},
                                    {source: 21,target: 10},
                                    {source: 21,target: 12},
                                    {source: 21,target: 11},



                                    {source: 22,target: 21},
                                    {source: 22,target: 23},
                                    {source: 22,target: 26},
                                    {source: 22,target: 30},
                                    {source: 22,target: 31},
                                    {source: 22,target: 32},
                                    {source: 23,target: 21},
                                    {source: 23,target: 21},
                                    {source: 24,target: 21},
                                    {source: 25,target: 21},
                                    {source: 25,target: 21},

                                    {source: 26,target: 1},
                                    {source: 26,target: 5},
                                    {source: 26,target: 10},
                                    {source: 26,target: 15},
                                    {source: 26,target: 20},
                                    {source: 26,target: 25},
                                    {source: 26,target: 30},
                                    {source: 26,target: 31},


                                    {source: 27,target: 1},
                                    {source: 27,target: 5},
                                    {source: 27,target: 10},
                                    {source: 27,target: 15},
                                    {source: 27,target: 20},
                                    {source: 27,target: 25},
                                    {source: 27,target: 30},
                                    {source: 27,target: 31},

                                    {source: 28,target: 1},
                                    {source: 28,target: 27},
                                    {source: 28,target: 26},
                                    {source: 28,target: 30},


                                    {source: 29,target: 2},
                                    {source: 29,target: 20},
                                    {source: 29,target: 22},
                                    {source: 29,target: 33},

                                    {source: 30,target:1},
                                    {source: 30,target: 18},
                                    {source: 30,target: 28},
                                    {source: 30,target: 29},

                                    {source: 31,target:1},
                                    {source: 31,target: 18},
                                    {source: 31,target: 28},
                                    {source: 31,target: 29},

                                    {source: 32,target:2},
                                    {source: 32,target: 16},
                                    {source: 32,target: 30},
                                    {source: 32,target: 31},

                                    {source: 33,target:4},
                                    {source: 33,target: 16},
                                    {source: 33,target: 26},
                                    {source: 33,target: 22},

                                    {source: 34,target:6},
                                    {source: 34,target: 17},
                                    {source: 34,target: 28},
                                    {source: 34,target: 30},
                                    {source: 34,target: 32},


                                    {source: 35,target:5},
                                    {source: 35,target: 16},
                                    {source: 35,target: 22},
                                    {source: 35,target: 24},
                                    {source: 35,target: 29},


                                    {source: 36,target:5},
                                    {source: 36,target: 16},
                                    {source: 36,target: 22},
                                    {source: 36,target: 24},
                                    {source: 36,target: 29},

                                    {source: 36,target:5},
                                    {source: 36,target: 16},
                                    {source: 36,target: 22},
                                    {source: 36,target: 24},
                                    {source: 36,target: 29},

                                ],
                                symbolSize: 10,
                                categories: categories,
                                focusNodeAdjacency: false,
                                roam: false,
                                label: {
                                    normal: {
                                        show:false,
                                        position: 'right',
                                        formatter: '{b}',
                                        textStyle:{
                                            fontSize:12
                                        }
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        color: 'source',
                                        curveness: 0.3
                                    }
                                }
                            }
                        ]
                    };
                })(),
                echartsParallelOption:(function(){
                    // Schema:
                    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
                    var dataBJ = [
                        [1,55,9,56,0.46,18,6,"良"],
                        [2,25,11,21,0.65,34,9,"优"],
                        [3,56,7,63,0.3,14,5,"良"],
                        [4,33,7,29,0.33,16,6,"优"],
                        [5,42,24,44,0.76,40,16,"优"],
                        [6,82,58,90,1.77,68,33,"良"],
                        [7,74,49,77,1.46,48,27,"良"],
                        [8,78,55,80,1.29,59,29,"良"],
                        [9,267,216,280,4.8,108,64,"重度污染"],
                        [10,185,127,216,2.52,61,27,"中度污染"],
                        [11,39,19,38,0.57,31,15,"优"],
                        [12,41,11,40,0.43,21,7,"优"],
                        [13,64,38,74,1.04,46,22,"良"],
                        [14,108,79,120,1.7,75,41,"轻度污染"],
                        [15,108,63,116,1.48,44,26,"轻度污染"],
                        [16,33,6,29,0.34,13,5,"优"],
                        [17,94,66,110,1.54,62,31,"良"],
                        [18,186,142,192,3.88,93,79,"中度污染"],
                        [19,57,31,54,0.96,32,14,"良"],
                        [20,22,8,17,0.48,23,10,"优"],
                        [21,39,15,36,0.61,29,13,"优"],
                        [22,94,69,114,2.08,73,39,"良"],
                        [23,99,73,110,2.43,76,48,"良"],
                        [24,31,12,30,0.5,32,16,"优"],
                        [25,42,27,43,1,53,22,"优"],
                        [26,154,117,157,3.05,92,58,"中度污染"],
                        [27,234,185,230,4.09,123,69,"重度污染"],
                        [28,160,120,186,2.77,91,50,"中度污染"],
                        [29,134,96,165,2.76,83,41,"轻度污染"],
                        [30,52,24,60,1.03,50,21,"良"],
                        [31,46,5,49,0.28,10,6,"优"]
                    ];

                    var dataGZ = [
                        [1,26,37,27,1.163,27,13,"优"],
                        [2,85,62,71,1.195,60,8,"良"],
                        [3,78,38,74,1.363,37,7,"良"],
                        [4,21,21,36,0.634,40,9,"优"],
                        [5,41,42,46,0.915,81,13,"优"],
                        [6,56,52,69,1.067,92,16,"良"],
                        [7,64,30,28,0.924,51,2,"良"],
                        [8,55,48,74,1.236,75,26,"良"],
                        [9,76,85,113,1.237,114,27,"良"],
                        [10,91,81,104,1.041,56,40,"良"],
                        [11,84,39,60,0.964,25,11,"良"],
                        [12,64,51,101,0.862,58,23,"良"],
                        [13,70,69,120,1.198,65,36,"良"],
                        [14,77,105,178,2.549,64,16,"良"],
                        [15,109,68,87,0.996,74,29,"轻度污染"],
                        [16,73,68,97,0.905,51,34,"良"],
                        [17,54,27,47,0.592,53,12,"良"],
                        [18,51,61,97,0.811,65,19,"良"],
                        [19,91,71,121,1.374,43,18,"良"],
                        [20,73,102,182,2.787,44,19,"良"],
                        [21,73,50,76,0.717,31,20,"良"],
                        [22,84,94,140,2.238,68,18,"良"],
                        [23,93,77,104,1.165,53,7,"良"],
                        [24,99,130,227,3.97,55,15,"良"],
                        [25,146,84,139,1.094,40,17,"轻度污染"],
                        [26,113,108,137,1.481,48,15,"轻度污染"],
                        [27,81,48,62,1.619,26,3,"良"],
                        [28,56,48,68,1.336,37,9,"良"],
                        [29,82,92,174,3.29,0,13,"良"],
                        [30,106,116,188,3.628,101,16,"轻度污染"],
                        [31,118,50,0,1.383,76,11,"轻度污染"]
                    ];

                    var dataSH = [
                        [1,91,45,125,0.82,34,23,"良"],
                        [2,65,27,78,0.86,45,29,"良"],
                        [3,83,60,84,1.09,73,27,"良"],
                        [4,109,81,121,1.28,68,51,"轻度污染"],
                        [5,106,77,114,1.07,55,51,"轻度污染"],
                        [6,109,81,121,1.28,68,51,"轻度污染"],
                        [7,106,77,114,1.07,55,51,"轻度污染"],
                        [8,89,65,78,0.86,51,26,"良"],
                        [9,53,33,47,0.64,50,17,"良"],
                        [10,80,55,80,1.01,75,24,"良"],
                        [11,117,81,124,1.03,45,24,"轻度污染"],
                        [12,99,71,142,1.1,62,42,"良"],
                        [13,95,69,130,1.28,74,50,"良"],
                        [14,116,87,131,1.47,84,40,"轻度污染"],
                        [15,108,80,121,1.3,85,37,"轻度污染"],
                        [16,134,83,167,1.16,57,43,"轻度污染"],
                        [17,79,43,107,1.05,59,37,"良"],
                        [18,71,46,89,0.86,64,25,"良"],
                        [19,97,71,113,1.17,88,31,"良"],
                        [20,84,57,91,0.85,55,31,"良"],
                        [21,87,63,101,0.9,56,41,"良"],
                        [22,104,77,119,1.09,73,48,"轻度污染"],
                        [23,87,62,100,1,72,28,"良"],
                        [24,168,128,172,1.49,97,56,"中度污染"],
                        [25,65,45,51,0.74,39,17,"良"],
                        [26,39,24,38,0.61,47,17,"优"],
                        [27,39,24,39,0.59,50,19,"优"],
                        [28,93,68,96,1.05,79,29,"良"],
                        [29,188,143,197,1.66,99,51,"中度污染"],
                        [30,174,131,174,1.55,108,50,"中度污染"],
                        [31,187,143,201,1.39,89,53,"中度污染"]
                    ];

                    var schema = [
                        {name: 'date', index: 0, text: '日期'},
                        {name: 'AQIindex', index: 1, text: 'AQI'},
                        {name: 'PM25', index: 2, text: 'PM2.5'},
                        {name: 'PM10', index: 3, text: 'PM10'},
                        {name: 'CO', index: 4, text: ' CO'},
                        {name: 'NO2', index: 5, text: 'NO2'},
                        {name: 'SO2', index: 6, text: 'SO2'},
                        {name: '等级', index: 7, text: '等级'}
                    ];

                    var lineStyle = {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    };
                    var option = {
                        tooltip: {
                          show:false
                        },
                        parallelAxis: [
                            {dim: 0, inverse: true, max: 31, nameLocation: 'start',axisLabel:{show:false,formatter:""}},
                            {dim: 1, axisLabel:{show:false,formatter:""}},
                            {dim: 2, axisLabel:{show:false,formatter:""}},
                            {dim: 3, axisLabel:{show:false,formatter:""}},
                            {dim: 4, axisLabel:{show:false,formatter:""}},
                            {dim: 5, axisLabel:{show:false,formatter:""}},
                            {dim: 6, axisLabel:{show:false,formatter:""}},
                            {dim: 7, type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'],axisLabel:{show:false}}
                        ],
                        visualMap: {
                            show: false,
                            min: 0,
                            max: 150,
                            dimension: 2,
                            inRange: {
                                color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
                                // colorAlpha: [0, 1]
                            }
                        },
                        parallel: {
                            left: '20',
                            right: '20',
                            bottom: 20,
                            parallelAxisDefault: {
                                type: 'value',
                                axisLine: {
                                    lineStyle:{
                                        type:"dotted",
                                        color:"#353F7D"
                                    }
                                },
                                axisTick: {
                                    show:false,
                                    lineStyle: {
                                        color: '#777'
                                    }
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLabel: {
                                    show:false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            }
                        },
                        series: [
                            {
                                name: '北京',
                                type: 'parallel',
                                lineStyle: lineStyle,
                                data: dataBJ
                            },
                            {
                                name: '上海',
                                type: 'parallel',
                                lineStyle: lineStyle,
                                data: dataSH
                            },
                            {
                                name: '广州',
                                type: 'parallel',
                                lineStyle: lineStyle,
                                data: dataGZ
                            }
                        ]
                    };
                    return option;
                })(),
                echartsMapOption:{
                    visualMap: {
                        show: false,
                        min: 60,
                        max: 100,
                        calculable: true,
                        //seriesIndex: [0],
                        inRange: {
                            color: ['#365cb3','#4f8df2','#69a3f3','#84b6f2','#49689a'].reverse() // 蓝绿
                        }
                    },
                    series:[
                        {
                            type: 'map',
                            map: 'sz',
                            label: {
                                show: false,
                            },
                            roam: false,
                            itemStyle: {
                                normal: {
                                    areaColor: '#006d94',
                                    borderColor: '#fff',
                                    borderWidth:1
                                }
                            },
                            animation: false,
                            data: [
                                {
                                    name:"福田区",
                                    value:90,
                                },
                                {
                                    name:"罗湖区",
                                    value:82,
                                },
                                {
                                    name:"盐田区",
                                    value:92,
                                },
                                {
                                    name:"南山区",
                                    value:92,
                                },
                                {
                                    name:"宝安区",
                                    value:85,
                                },
                                {
                                    name:"龙岗区",
                                    value:95,
                                },
                                {
                                    name:"龙华区",
                                    value:93,
                                },
                                {
                                    name:"坪山区",
                                    value:90,
                                },
                                {
                                    name:"光明区",
                                    value:90,
                                },
                                {
                                    name:"大鹏新区",
                                    value:75
                                },
                            ]
                        },
                    ]

                },
                echartsType:''
            }
        },
        components:{swiperChart},
        mounted(){


        },

        methods:{
            dialogSetOption(type){
                this.echartsType = type
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['510px', 1000], //宽高
                    content: $('#alert-box-setOption'),
                });
            },
            closeDialog(){
                layer.closeAll();
            },
        }
    }
</script>
<style scoped>
    .echart-item{
        margin-right:1.5%;
        width: 30%;
        margin-bottom: 40px;
        position: relative;
    }
    .echart-item .title{
        position: absolute;
        top: 10px;
        left: 20px;
        color: #fff;
        font-size: 14px;
    }
    .echart-item .title i{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #6CEC4D;
        float: left;
        margin-right: 5px;
        margin-top: 4px;
    }
    .echart-item .echart-content{
        height: 245px;
        background-color: #1E214E;
        margin-right: 21px;
        border:1px solid rgba(80,91,161,1);
        border-radius:2px;
    }
    .echart-item .echart-content .echart{
        height: 100%;
    }
    .echart-item .echart-content .echartsFunnel{
        width: 50%;
        margin: 0 auto;
    }
</style>
