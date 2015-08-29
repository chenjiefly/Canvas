/**
 * 公共方法模块
 * 重置画布，获取window尺寸，最大化画布尺寸
 */
define('util', [
    'jquery',
    'text'
    ], function($, Text) {
    var $win = $(window);
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
         * [maximizeCanvas 画布尺寸最大化]
         * @param  {[Object]} $canvas [canvas画布的jQuery对象]
         */
        maximizeCanvas: function ($canvas) {
            var winSize = _getWindowSize();

            $canvas.attr('width', winSize.width)
                   .attr('height', winSize.height);
        },
        resizeCanvas: function ($canvas, context) {
            var that = this;

            $win.resize(function() {
                var date = new Date();

                that.maximizeCanvas($canvas);

                drawText(context, {
                    text: '窗口大小变化，重绘Canvas成功！' + date.toLocaleString(), 
                    font: 'ms-yh 58px serif',
                    x: 150, 
                    y: 100,
                    isStroke: true  // 描边
                });
            });
        }
    };

    /**
     * [getWindowSize 获取window窗口尺寸大小]
     * @return {[Object]} [尺寸对象，包含宽高]
     */
    function _getWindowSize () {
        return {
            width : $win.get(0).innerWidth,
            height: $win.get(0).innerHeight
        }
    }
});
