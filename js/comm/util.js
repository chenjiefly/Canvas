/**
 * 公共方法模块
 * 重置画布，获取window尺寸，最大化画布尺寸
 */
define('util', ['jquery'], function($) {
    var $win = $(window)
    return {
        /**
         * [resetCanvas 重置画布，清除所有内容和属性（如样式，线宽等）]
         * @param  {[Object]} $canvas [canvas画布的jQuery对象]
         */
        resetCanvas: function ($canvas) {
            $canvas.attr('width' , $canvas.width())
                   .attr('height', $canvas.height());
        },
        /**
         * [getWindowSize 获取window窗口尺寸大小]
         * @return {[Object]} [尺寸对象，包含宽高]
         */
        getWindowSize: function () {
            return {
                width : $win.get(0).innerWidth,
                height: $win.get(0).innerHeight
            }
        },
        /**
         * [maximizeCanvas 画布尺寸最大化]
         * @param  {[Object]} $canvas [canvas画布的jQuery对象]
         */
        maximizeCanvas: function ($canvas) {
            var winSize = this.getWindowSize();

            $canvas.attr('width', winSize.width)
                   .attr('height', winSize.height);
        }
    };
});
