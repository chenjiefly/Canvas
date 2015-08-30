/**
 * 本demo展示了canvas的高级功能
 */
define('advanced/demo', [
    'jquery',
    'util',
    'saveRecover'
    ], function($, Util, SaveRecover) {

    var canvas = $('#advanced');
    var context = canvas.get(0).getContext('2d');

    return {
        init: function () {
            // 浏览器窗口重绘时，重绘canvas
            Util.resizeCanvas(this.showDemo);

            // 展示demo
            this.showDemo(context);
        },
        /**
         * [showDemo 展示demo]
         */
        showDemo: function () {
            SaveRecover.showSingleSave(context);
        }
    };
});