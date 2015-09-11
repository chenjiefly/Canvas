/**
 * 本demo展示了canvas的处理图像和视频
 */
define('img-vedio/demo', [
    'jquery',
    'util',
    'image'
    ], function(
        $, 
        Util, 
        Image
    ) {
    return {
        init: function () {
            // 浏览器窗口重绘时，重绘canvas
            // Util.resizeCanvas(this.showDemo);

            // 展示demo
            this.showDemo();
        },
        /**
         * [showDemo 展示demo]
         */
        showDemo: function () {
           _demo1();
           _demo2();
        }
    };

    // 示例一、显示加载图像
    function _demo1() {
        var canvas = $('#advanced8');
        var context = canvas.get(0).getContext('2d');

        Image.show(canvas, context);  // 演示加载图像
    }

    // 示例二、显示获得像素颜色值
    function _demo2() {
        var canvas = $('#advanced9');
        var context = canvas.get(0).getContext('2d');

        Image.showGetColor(canvas, context);
    }
});