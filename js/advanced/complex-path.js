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

            _showLinearGradient();  // 1、展示线性渐变效果
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

    
});