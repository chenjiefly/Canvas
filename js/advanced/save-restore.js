/**
 * 本demo展示了canvas的高级功能
 */
define('saveRestore', [
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
                text: '一、保存和恢复绘图状态', 
                x: 180, 
                y: 20
            });

            _showSingleSaveRestore(context);  // 展示保存和恢复单个绘图状态
            _showMultiSaveRestore(context);   // 展示保存和恢复多个绘图状态
        }
    };

    /**
     * [_showSingleSaveRestore 展示保存和恢复单个绘图状态]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showSingleSaveRestore(context) {
        drawText(context, {
            text: '1、保存和恢复单个绘图状态', 
            x: 20, 
            y: 60
        });

        // 第1次绘制矩形，并保存绘图状态
        setLineWidth(context, 2);
        setColor(context, 255, 0, 0, false);

        context.save();  // 保存画布状态

        Graph.drawRect(context, {
            x: 20,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '保存本次绘图状态', 
            x: 80, 
            y: 100
        });

        // 第2次绘制矩形，使用新样式
        setColor(context, 0, 255, 0, false);

        Graph.drawRect(context, {
            x: 20,
            y: 140,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '设置新的绘图样式', 
            x: 80, 
            y: 160
        });

        // 第3次绘制矩形，恢复上一个保存的绘图状态
        context.restore();  // 恢复上一个绘图状态

        Graph.drawRect(context, {
            x: 20,
            y: 200,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '恢复上次绘图状态', 
            x: 80, 
            y: 220
        });
    }

    /**
     * [_showMultiSaveRestore 展示保存和恢复多个绘图状态]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showMultiSaveRestore(context) {
        drawText(context, {
            text: '2、保存和恢复多个绘图状态', 
            x: 240, 
            y: 60
        });

        // 第1次绘制矩形
        setLineWidth(context, 2);

        setColor(context, 255, 0, 0, false);
        context.save();  // 第1次保存画布状态

        Graph.drawRect(context, {
            x: 240,
            y: 80,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '绘图状态第1次入栈', 
            x: 300, 
            y: 100
        });

        // 第2次绘制矩形
        setColor(context, 0, 0, 255, false);
        context.save();  // 第2次保存画布状态

        Graph.drawRect(context, {
            x: 240,
            y: 140,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '绘图状态第2次入栈', 
            x: 300, 
            y: 160
        });

        // 第3次绘制矩形，恢复上一个保存的绘图状态
        context.restore();  // 恢复上一个绘图状态

        Graph.drawRect(context, {
            x: 240,
            y: 200,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '绘图状态第1次出栈', 
            x: 300, 
            y: 220
        });

        // 第4次绘制矩形，恢复上一个保存的绘图状态
        context.restore();  // 恢复上一个绘图状态

        Graph.drawRect(context, {
            x: 240,
            y: 260,
            width: 40,
            height: 40
        });
        drawText(context, {
            text: '绘图状态第2次出栈，栈空', 
            x: 300, 
            y: 280
        });
    }
});