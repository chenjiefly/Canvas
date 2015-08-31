/**
 * 本demo展示了canvas的高级功能
 */
define('transform', [
    'util',
    'graph',
    'property',
    'text'
    ], function(Util, Graph) {

    return {
        /**
         * [show 展示保存和恢复绘图状态函数]
         * @param {[Object]} [context] [canvas绘图上下文]
         */
        show: function (context) {
            drawText(context, {
                text: '三、变换矩阵', 
                x: 180, 
                y: 20
            });

            _showTranslation(context);  // 展示平移变形
        }
    };

    /**
     * [_showTranslation 展示平移变形]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showTranslation(context) {
        drawText(context, {
            text: '1、展示平移变形', 
            x: 20, 
            y: 60
        });

        // 第1次绘制矩形
        setLineWidth(context, 2);
        setColor(context, 255, 0, 0);

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '原点坐标为(0, 0)', 
            x: 80, 
            y: 100
        });

        // 平移原点坐标
        context.translate(-10, 60);  // x轴向左平移10px，y轴向下平移60px

        // 第2次绘制矩形
        setColor(context, 0, 0, 255);

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '原点坐标为(-10, 60)', 
            x: 80, 
            y: 100
        });

        // 再次平移原点坐标
        context.translate(-10, 60);  // x轴向左平移10px，y轴向下平移60px

        // 第3次绘制矩形
        setColor(context, 0, 255, 0);

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '原点坐标为(-20, 120)', 
            x: 80, 
            y: 100
        });
    }

    
});