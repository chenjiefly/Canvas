/**
 * 属性设置模块
 * 设置颜色和线宽
 */

/**
 * [setColor 设置图形颜色]
 * @param {[Object]}  context   [canvas绘图上下文]
 * @param {[Number]}  red       [RGB通道的红色通道]
 * @param {[Number]}  green     [RGB通道的绿色通道]
 * @param {[Number]}  blue      [RGB通道的蓝色通道]
 * @param {[Boolean]} isStroke  [是否空心图形]
 */
function setColor(context, red, green, blue, isStroke) {
    var style = 'rgb(' + red + ',' + green + ',' + blue + ')';

    if (isStroke) {
        context.strokeStyle = style;
    } else {
        context.fillStyle = style;
    }
}

/**
 * [setLineWidth 设置图形线宽]
 * @param {[Object]} context [canvas绘图上下文]
 * @param {[Number]} width   [待设置的线宽]
 */
function setLineWidth(context, width) {
    context.lineWidth = width;
}
