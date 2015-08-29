/**
 * demo1展示了矩形、线条、圆弧、圆和文本的绘制及属性操作方法
 */
define('base/demo', [
    'jquery',
    'util',
    'graph',
    'property',
    'text'
    ], function($, Util, Graph) {

    var canvas = $('#base');
    var context = canvas.get(0).getContext('2d');

    return {
        showDemo: function () {
            // 绘制矩形
            setLineWidth(context, 4);
            setColor(context, 255, 0, 0, true);
            Graph.drawRect(context, {
                x: 40,
                y: 40,
                width: 80,
                height: 80,
                isStroke: true
            });

            // 绘制直线路径
            setColor(context, 0, 255, 0, true);
            Graph.drawLine(context, {
                x1: 140, 
                y1: 140, 
                x2: 340, 
                y2: 340
            });

            // 绘制圆弧
            setLineWidth(context, 12);
            setColor(context, 0, 0, 255, false);
            Graph.drawArc(context, {
                x: 400, 
                y: 400, 
                radius: 30,
                startAngle: Math.PI / 2,  // 角度都是从X轴正向逆时针开始计的
                endAngle: Math.PI,
                anticlockwise: true,  // 逆时针方向绘制
                isStroke: false
            });

            // 绘制圆形
            setColor(context, 255, 255, 0, true);
            Graph.drawCircle(context, {
                x: 200, 
                y: 200, 
                radius: 30,
                isStroke: true
            });

            // 绘制文本
            setLineWidth(context, 2);
            setColor(context, 0, 255, 255, true);
            drawText(context, {
                text: 'Hello, 陈杰！', 
                font: 'italic 58px serif',
                x: 150, 
                y: 100,
                isStroke: true  // 描边
            });

            // 擦除矩形区域
            Graph.clearRect(context, {
                x: 400,
                y: 400,
                width: 20,
                height: 20
            })

            // 重置canvas画布
            setTimeout(function() {
                Util.resetCanvas(canvas);

                // 画布重置后，所有设置的属性（如样式、宽度等）都会被完全清除
                drawText(context, {
                    text: '画布重置成功', 
                    font: 'ms-yh 58px serif',
                    x: 150, 
                    y: 100,
                    isStroke: true  // 描边
                });
            }, 2000);
        }
    };
});