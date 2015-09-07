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
        }
    };

    // 示例一、保存和恢复绘图状态
    function _demo1() {
        var canvas = $('#advanced8');
        var context = canvas.get(0).getContext('2d');

        Image.show(canvas, context);  // 演示保存和恢复绘图状态
    }
});