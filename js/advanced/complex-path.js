/**
 * 本demo展示了canvas的高级功能
 */
define('complexPath', [
    'util',
    'graph',
    'property',
    'text'
    ], function(Util, Graph) {

    var canvas, context;

    return {
        /**
         * [show 展示复杂路径函数]
         * @param {[Object]} [can] [canvas对象]
         * @param {[Object]} [con] [canvas绘图上下文]
         */
        show: function (can, con) {
            canvas = can;
            context = con;

            drawText(context, {
                text: '七、复杂路径', 
                x: 180, 
                y: 20
            });

            context.translate(10, 60);

            _showPolygon();  // 1、展示线性渐变效果
            _showBezierCurve();  // 2、展示贝塞尔曲线
        }
    };

    /**
     * [_showPolygon 展示多边形]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showPolygon() {
        drawText(context, {
            text: '1、多边形', 
            x: 0, 
            y: 0
        });

        // 平移原点坐标
        context.translate(10, 20);

        // 画一个三角形
        with(context) {
            beginPath();
            moveTo(50, 0);
            lineTo(100, 100);
            lineTo(0, 100);
            closePath();
            stroke();
            fill();
        }
    }

    /**
     * [_showBezierCurve 展示贝塞尔曲线]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showBezierCurve() {

        // 平移原点坐标
        context.translate(140, -20);

        drawText(context, {
            text: '2、二次贝塞尔曲线', 
            x: 0, 
            y: 0
        });

        // 画一个三角形
        with(context) {
            translate(0, 20);  // 平移原点坐标

            lineWidth = 2;

            beginPath();
            moveTo( 0, 50);
            quadraticCurveTo(100, -50, 100, 50);
            stroke();
        }


        // 平移原点坐标
        context.translate(160, -20);

        drawText(context, {
            text: '3、三次贝塞尔曲线', 
            x: 0, 
            y: 0
        });

        // 画一个三角形
        with(context) {
            translate(0, 20);  // 平移原点坐标

            beginPath();
            moveTo( 0, 50);
            bezierCurveTo(25, -25, 75, 125, 100, 50);
            stroke();
        }
    }
});