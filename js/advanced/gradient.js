/**
 * 本demo展示了canvas的高级功能
 */
define('gradient', [
    'util',
    'graph',
    'property',
    'text'
    ], function(Util, Graph) {

    var canvas, context;

    return {
        /**
         * [show 展示渐变函数]
         * @param {[Object]} [can] [canvas对象]
         * @param {[Object]} [con] [canvas绘图上下文]
         */
        show: function (can, con) {
            canvas = can;
            context = con;

            drawText(context, {
                text: '六、渐变', 
                x: 180, 
                y: 20
            });

            context.translate(10, 60);

            _showLinearGradient();  // 1、展示渐变效果1
            // _showRadialGradient();  // 2、展示渐变效果2
        }
    };

    /**
     * [_showLinearGradient 展示展示渐变效果1]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showLinearGradient() {
        var gradient;

        // 平移原点坐标
        context.translate(-60, -20);

        drawText(context, {
            text: '1、线性渐变效果', 
            x: 60, 
            y: 20
        });

        gradient = context.createLinearGradient(0, 0, 200, 100);
        gradient.addColorStop(0, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.5, 'rgb(0, 255, 0)');
        gradient.addColorStop(1, 'rgb(0, 0, 255)');

        context.fillStyle = gradient;

        context.translate(60, 40);
        context.fillRect(0, 0, 200, 100);
    }

    /**
     * [_showRadialGradient 展示展示放射渐变效果]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showRadialGradient() {

        // 平移原点坐标
        context.translate(80, -100);

        drawText(context, {
            text: '2、放射渐变效果', 
            x: 60, 
            y: 20
        });

        // 平移原点坐标
        context.translate(60, 40);

        // 第1次绘制矩形
        setBlue(context);

        drawRectText(context, '原始矩形');  // 绘制一个矩形和一条注释

        // 平移原点坐标
        context.translate(0, 60);

        // 第2次绘制矩形
        
        context.shadowBlur = 5;
        context.shadowColor = 'rgb(0, 200, 0)';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        
        drawRectText(context, '带渐变矩形');  // 绘制一个矩形和一条注释
    }
});