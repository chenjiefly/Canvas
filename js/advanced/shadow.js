/**
 * 本demo展示了canvas的高级功能
 */
define('shadow', [
    'util',
    'graph',
    'property',
    'text'
    ], function(Util, Graph) {

    return {
        /**
         * [show 展示阴影函数]
         * @param {[Object]} [context] [canvas绘图上下文]
         */
        show: function (context) {
            drawText(context, {
                text: '五、阴影', 
                x: 180, 
                y: 20
            });

            context.translate(10, 60);

            _showShadow1(context);  // 1、展示阴影效果1
            _showShadow2(context);  // 2、展示阴影效果2
        }
    };

    /**
     * [_showShadow1 展示展示阴影效果1]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showShadow1(context) {

        // 平移原点坐标
        context.translate(-60, -20);

        drawText(context, {
            text: '1、阴影效果1', 
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
        context.save();
        context.shadowBlur = 10;
        context.shadowColor = 'rgb(0, 255, 0)';
        
        drawRectText(context, '带阴影矩形');  // 绘制一个矩形和一条注释
        context.restore();
    }

    /**
     * [_showShadow2 展示展示阴影效果2]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showShadow2(context) {

        // 平移原点坐标
        context.translate(80, -100);

        drawText(context, {
            text: '2、阴影效果2', 
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
        
        drawRectText(context, '带阴影矩形');  // 绘制一个矩形和一条注释
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