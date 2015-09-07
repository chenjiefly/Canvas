/**
 * 本demo展示了canvas的高级功能
 */
define('image', [
    'jquery',
    'util',
    'graph',
    'property',
    'text'
    ], function($, Util, Graph) {

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
                text: '九、加载图像', 
                x: 180, 
                y: 20
            });

            context.translate(10, 60);

            _showLoadImage();  // 1、展示导出画布为图像
        }
    };

    /**
     * [_showLoadImage 加载图像]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showLoadImage() {
        var gradient;

        // 平移原点坐标
        context.translate(0, -20);

        drawText(context, {
            text: '1、加载图像', 
            x: 0, 
            y: 0
        });

        // 加载图像
        var image = new Image();
        image.src = 'media/image.png';
        $(image).load(function () {
            context.drawImage(image, 0, 0);
        });

        // 平移原点坐标
        context.translate(0, 10);
    }
});