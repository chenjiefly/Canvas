/**
 * 本demo展示了canvas的高级功能
 */
define('saveRecover', [
    'util',
    'graph',
    'property'
    ], function(Util, Graph) {

    return {
        /**
         * [showSingleSave 展示保存和恢复单个绘图状态]
         * @param {[Object]} [context] [canvas绘图上下文]
         */
        showSingleSave: function (context) {
            drawText(context, {
                text: '1、保存和恢复单个绘图状态', 
                x: 20, 
                y: 20
            });

            // 第1次绘制矩形，并保存绘图状态
            setLineWidth(context, 2);
            setColor(context, 255, 0, 0, false);

            context.save();  // 保存画布状态

            Graph.drawRect(context, {
                x: 20,
                y: 40,
                width: 40,
                height: 40
            });
            drawText(context, {
                text: '保存本次绘图状态', 
                x: 80, 
                y: 60
            });

            // 第2次绘制矩形，使用新样式
            setColor(context, 0, 255, 0, false);

            Graph.drawRect(context, {
                x: 20,
                y: 100,
                width: 40,
                height: 40
            });
            drawText(context, {
                text: '设置新的绘图样式', 
                x: 80, 
                y: 120
            });

            // 第3次绘制矩形，恢复上一个保存的绘图状态
            context.restore();  // 恢复上一个绘图状态

            Graph.drawRect(context, {
                x: 20,
                y: 160,
                width: 40,
                height: 40
            });
            drawText(context, {
                text: '恢复上次绘图状态', 
                x: 80, 
                y: 180
            });
        },
        /**
         * [showMultiSave 展示保存和恢复多个绘图状态]
         * @param {[Object]} [context] [canvas绘图上下文]
         */
        showMultiSave: function (context) {

        }
    };
});