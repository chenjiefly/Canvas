/**
 * 本demo展示了canvas的高级功能
 */
define('advanced/demo', [
    'jquery',
    'util',
    'saveRestore',
    'transform',
    'transformMatrix',
    'combine'
    ], function($, Util, SaveRestore, Transform, TransformMatrix, Combine) {
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
           _demo3();
        }
    };

    // 示例一、保存和恢复绘图状态
    function _demo1() {
        var canvas = $('#advanced1');
        var context = canvas.get(0).getContext('2d');

        SaveRestore.show(context);  // 演示保存和恢复绘图状态
    }

    // 示例二、变形和变换矩阵
    function _demo2() {
        var canvas = $('#advanced2');
        var context = canvas.get(0).getContext('2d');

        Transform.show(context);  // 演示绘图变形
        TransformMatrix.show(context);  // 演示变换矩阵
    }

    // 示例三、合并
    function _demo3() {
        var canvas = $('#advanced3');
        var context = canvas.get(0).getContext('2d');

        Combine.show(context);  // 演示合并
    }
});