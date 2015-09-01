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
            drawText(context, {
                text: '四、合并', 
                x: 180, 
                y: 20
            });

            _showGlobalAlpha(context);  // 1、展示平移变形

            // 展示globalCompositeOperation
            _showSourceOver(context);        // 2.1、源覆盖于目标之上（默认）
            // _showDestinationOver(context);   // 2.2、目标覆盖于源之上
            // _showSourceAtop(context);        // 2.3、源覆盖于目标之上，重叠区域不透明，其他位置的目标不透明，源透明
            // _showDestinationAtop(context);   // 2.4、目标覆盖于源之上，重叠区域不透明，其他位置的源不透明，目标透明
            // _showSourceIn(context);          // 2.5、重叠区域只绘制源，不重叠部分都透明
            // _showDestinationIn(context);     // 2.6、重叠区域保留目标，不重叠部分都透明
            // _showSourceOut(context);         // 2.7、不重叠部分绘制源，重复部分变成透明
            // _showDestinationOut(context);    // 2.8、不重叠部分保留目标，重复部分变成透明
            // _showLighter(context);           // 2.9、与顺序无关，重叠部分颜色值相加，最大255
            // _showCopy(context);              // 2.10、与顺序无关，只绘制源，覆盖目标
            // _showXor(context);               // 2.11、与顺序无关，只绘制不重叠区域，重叠部分编程透明
        }
    };

    /**
     * [_showGlobalAlpha 展示全局阿尔法值透明度]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showGlobalAlpha(context) {

        // 平移原点坐标
        context.translate(-60, -20);

        drawText(context, {
            text: '1、globalAlpha', 
            x: 80, 
            y: 100
        });

        // 平移原点坐标
        context.translate(60, 40);

        // 第1次绘制矩形
        setColor(context, 63, 169, 245);

        drawRectText(context, '原始矩形');  // 绘制一个矩形和一条注释

        // 平移原点坐标
        context.translate(0, 30);

        // 设置globalAlpha值
        context.globalAlpha = 0.5;

        // 第2次绘制矩形
        setColor(context, 255, 123, 172);

        drawRectText(context, '透明度0.5，且');  // 绘制一个矩形和一条注释

        drawText(context, {
            text: '影响文字透明度', 
            x: 80, 
            y: 120
        });
    }

    /**
     * [_showSourceOver 展示sourse-over]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showSourceOver(context) {
        // 平移原点坐标
        context.translate(100, -60);

        drawText(context, {
            text: '2.1、sourse-over', 
            x: 80, 
            y: 100
        });
    }


    /**
     * [drawRectText 绘制一个矩形和一条注释文本]
     * @param  {[Object]} context [画图绘制上下文]
     * @param  {[String]} text    [注释内容]
     */
    function drawRectText(context, text) {
        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: text, 
            x: 80, 
            y: 100
        });
    }
});