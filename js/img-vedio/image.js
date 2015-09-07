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

            _showLoadImage();  // 1、展示导出画布为图像，并跳转大小
            _showClipImage();  // 2、调整图像大小
        }
    };

    /**
     * [_showLoadImage 加载图像]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showLoadImage() {
        // 平移原点坐标
        context.translate(0, -20);

        drawText(context, {
            text: '1、加载图像和调整图像大小', 
            x: 0, 
            y: 0
        });

        // 平移原点坐标
        context.translate(0, 10);

        // 加载图像
        var image = new Image();
        image.src = 'media/image.png';
        $(image).load(function () {
            context.drawImage(image, 0, 0, 120, 90);
        });
    }

    /**
     * [_showClipImage 裁剪图像]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showClipImage() {
        // 平移原点坐标
        // context.translate(200, -20);

        drawText(context, {
            text: '2、裁剪图像', 
            x: 180, 
            y: -10
        });

        // 增加阴影模糊
        context.shadowBlur = 20;
        context.shadowColor = 'rgb(0, 0, 0)';

        // 加载图像
        var image1 = new Image();
        image1.src = 'media/image.png';
        $(image1).load(function () {
            context.drawImage(
                image1, 
                180, 0, 60, 45,   // 裁剪框的左上角坐标和尺寸
                180, 0, 120, 90); // 待绘制裁剪图像的左上角坐标和尺寸
        });
    }

    /**
     * [_showTransformImage 图像变形]
     * @param {[Object]} [context] [canvas绘图上下文]
     */
    function _showTransformImage() {
        // 平移原点坐标
        // context.translate(200, -20);

        drawText(context, {
            text: '3、图像变形', 
            x: 200, 
            y: -10
        });

        // 增加阴影模糊
        context.shadowBlur = 20;
        context.shadowColor = 'rgb(0, 0, 0)';

        // 加载图像
        var image1 = new Image();
        image1.src = 'media/image.png';
        $(image1).load(function () {
            context.drawImage(
                image1, 
                200, 0, 60, 45,   // 裁剪框的左上角坐标和尺寸
                200, 0, 120, 90); // 待绘制裁剪图像的左上角坐标和尺寸
        });
    }
});