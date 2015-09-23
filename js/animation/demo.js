/**
 * 绘制基本图形模块
 * 绘制矩形、直线、圆弧和圆
 */
define('animation/demo', [
    'animationBase',
    'animationAdvanced'
], function(Base, Advanced) {
    return {
        init: function() {
            Base.init();
            Advanced.init();
        }
    }
});