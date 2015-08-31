/**
 * 本demo展示了canvas的高级功能
 */
define('combine', [
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
            // 平移原点坐标
            context.translate(60, -20);

            drawText(context, {
                text: '四、合并', 
                x: 180, 
                y: 20
            });

            _showMatrix(context);  // 展示平移变形
        }
    };

    /**
     * [_showMatrix 展示平移变形]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showMatrix(context) {
        var sita = Math.PI / 4;
        var xScale = Math.cos(sita);
        var ySkew = -Math.sin(sita);
        var xSkew = Math.sin(sita);
        var yScale = Math.cos(sita);
        var xTrans = -60;
        var yTrans = 120;

        // 平移原点坐标
        context.translate(150, -20);

        // 第1次绘制矩形
        setColor(context, 0, 255, 0);

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '默认3阶单位变换矩阵', 
            x: 80, 
            y: 100
        });

        // 平移原点坐标
        context.transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans);

        // 第2次绘制矩形
        setColor(context, 0, 0, 255);

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '经过变换矩阵操作', 
            x: 80, 
            y: 100
        });
    }

    
});