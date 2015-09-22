/**
 * 本demo展示了矩形、线条、圆弧、圆和文本的绘制及属性操作方法
 */
define('animation/demo', [
    'jquery',
    'util',
    'graph',
    'property',
    'text'
], function($, Util, Graph) {

    var canvas = $('#animation1');
    var context = canvas.get(0).getContext('2d');

    return {
        init: function() {
            // 展示demo
            this.showDemo();
        },
        /**
         * [showDemo 展示demo]
         */
        showDemo: function() {
            var canvasWidth = canvas.width(),
                canvasHeight = canvas.height();

            function animate() {
                setTimeout(animate, 33); // 启动无限循环
            }
        }
    };
});