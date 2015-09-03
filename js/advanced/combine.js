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
         * [show 展示保存和恢复绘图状态，以及合并的函数]
         * @param {[Object]} [context] [canvas绘图上下文]
         */
        show: function (context) {
            drawText(context, {
                text: '四、合并(当前未显示模式需要单独取消代码注释查看)', 
                x: 180, 
                y: 20
            });

            context.translate(10, 60);

            _showGlobalAlpha(context);  // 1、展示平移变形

            // 展示globalCompositeOperation
            _showSourceOver(context);        // 2.1、源覆盖于目标之上（默认）
            _showDestinationOver(context);   // 2.2、目标覆盖于源之上
            _showSourceAtop(context);        // 2.3、源覆盖于目标之上，重叠区域不透明，其他位置的目标不透明，源透明
            // _showDestinationAtop(context);   // 2.4、目标覆盖于源之上，重叠区域不透明，其他位置的源不透明，目标透明
            // _showSourceIn(context);          // 2.5、重叠区域只绘制源，不重叠部分都透明
            // _showDestinationIn(context);     // 2.6、重叠区域保留目标，不重叠部分都透明
            // _showSourceOut(context);         // 2.7、不重叠部分绘制源，重复部分变成透明
            // _showDestinationOut(context);    // 2.8、不重叠部分保留目标，重复部分变成透明
            _showLighter(context);           // 2.9、与顺序无关，重叠部分颜色值相加，最大255
            // _showCopy(context);              // 2.10、与顺序无关，只绘制源，覆盖目标
            _showXor(context);               // 2.11、与顺序无关，只绘制不重叠区域，重叠部分变成透明
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
            x: 60, 
            y: 20
        });

        // 平移原点坐标
        context.translate(60, 40);

        // 第1次绘制矩形
        setBlue(context);

        drawRectText(context, '原始矩形');  // 绘制一个矩形和一条注释

        // 平移原点坐标
        context.translate(0, 30);

        // 设置globalAlpha值
        context.globalAlpha = 0.5;

        // 第2次绘制矩形
        setPink(context);

        drawRectText(context, '透明度0.5，且');  // 绘制一个矩形和一条注释

        drawText(context, {
            text: '影响文字透明度', 
            x: 60, 
            y: 40
        });

        context.globalAlpha = 1;
    }

    /**
     * [_showSourceOver 展示source-over]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showSourceOver(context) {
        // 平移原点坐标
        context.translate(100, -70);

        drawPairRect(context, '2.1、source-over', 'source-over');
    }

    /**
     * [_showSourceOver 展示destination-over]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showDestinationOver(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.2、destination-over', 'destination-over');
    }

    /**
     * [_showSourceAtop 展示source-atop]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showSourceAtop(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.3、source-atop', 'source-atop');
    }

    /**
     * [_showDestinationAtop 展示destination-atop]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showDestinationAtop(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.4、destination-atop', 'destination-atop');
    }

    /**
     * [_showSourceIn 展示source-in]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showSourceIn(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.5、source-in', 'source-in');
    }

    /**
     * [_showDestinationIn 展示destination-in]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showDestinationIn(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.6、destination-in', 'destination-in');
    }

    /**
     * [_showSourceOut 展示source-out]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showSourceOut(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.7、source-out', 'source-out');
    }

    /**
     * [_showDestinationOut 展示destination-out]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showDestinationOut(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.8、destination-out', 'destination-out');
    }

    /**
     * [_showLighter 展示lighter]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showLighter(context) {
        // 平移原点坐标
        context.translate(-580, 70);

        drawPairRect(context, '2.9、lighter', 'lighter');
    }

    /**
     * [_showCopy 展示copy]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showCopy(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.10、copy', 'copy');
    }

    /**
     * [_showXor 展示xor]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showXor(context) {
        // 平移原点坐标
        context.translate(80, -70);

        drawPairRect(context, '2.11、xor', 'xor');
    }





    /**
     * [drawPairRect 绘制一对重叠的示例矩形]
     * @param {[Object]} [context] [canvas绘图上下文]
     * @param {[String]} [title]   [标题字符串]
     * @param {[String]} [type]    [合成类型的字符串]
     */
    function drawPairRect(context, title, type) {
        drawColorText(context, title, 0, 0, 0);

        context.translate(60, 40);
        setBlue(context);
        drawRectText(context, 'destination');

        context.globalCompositeOperation = type;

        context.translate(30, 30);
        setPink(context);
        drawRectText(context, 'source');
    }

    /**
     * [drawRectText 绘制一个矩形和一条注释文本]
     * @param  {[Object]} context [画图绘制上下文]
     * @param  {[String]} text    [注释内容]
     */
    function drawRectText(context, text) {
        Graph.drawRect(context, {
            x: 0,
            y: 0,
            width: 40,
            height: 40
        });

        context.globalCompositeOperation = 'source-over';
        drawText(context, {
            text: text, 
            x: 60, 
            y: 20
        });
    }

    /**
     * [drawColorText 绘制彩色文本]
     * @param  {[Object]} context [2d渲染上下文]
     * @param  {[String]} text    [文本字符串]
     * @param  {[Number]} red     [红色通道值]
     * @param  {[Number]} green   [绿色通道值]
     * @param  {[Number]} blue    [蓝色通道值]
     */
    function drawColorText(context, text, red, green, blue) {
        setColor(context, red, green, blue);

        drawText(context, {
            text: text, 
            x: 60, 
            y: 20
        });
    }

    function setBlue(context) {
        setColor(context, 63, 169, 245);
    }
    function setPink(context) {
        setColor(context, 255, 123, 172);
    }
    function setBlack(context) {
        setColor(context, 0, 0, 0);
    }
});