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
                text: '二、绘图变形', 
                x: 180, 
                y: 20
            });

            _showTranslation(context);  // 展示平移变形
            _showScale(context);  // 展示缩放变形
            _showRotate(context);  // 展示旋转变形
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

    /**
     * [_showScale 展示平移变形]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showScale(context) {
        context.translate(240, -120);  // 展示到第二列
        setColor(context, 0, 0, 255);
        context.save();

        drawText(context, {
            text: '2、展示缩放变形', 
            x: 20, 
            y: 60
        });

        // 第1次绘制矩形
        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '原始大小', 
            x: 80, 
            y: 100
        });

        // 横向放大两倍，纵向缩小一半
        context.scale(1.5, 0.8);

        // 第2次绘制矩形
        context.translate(0, 80);

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '横向1.5，纵向0.8', 
            x: 80, 
            y: 100
        });
    }

    /**
     * [_showRotate 展示旋转变形]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showRotate(context) {
        context.restore();
        context.translate(-220, 240);  // 展示到第二行，第一列

        drawText(context, {
            text: '3、展示旋转变形', 
            x: 20, 
            y: 60
        });

        // 第1次绘制矩形
        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '未旋转', 
            x: 80, 
            y: 100
        });

        // 第2次绘制矩形
        context.translate(0, 60);

        context.save();
        context.translate(40, 100);  // 将原点平移到待绘制矩形的中心
        context.rotate(Math.PI / 4); // 旋转45°


        Graph.drawRect(context, {
            x: -20,  // 以原点为矩形中心绘制矩形
            y: -20,
            width: 40,
            height: 40
        });

        context.restore();
        drawText(context, {
            text: '旋转45°', 
            x: 80, 
            y: 100
        });
    }
});