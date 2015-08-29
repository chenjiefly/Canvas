/**
 * 绘制文本模块
 * 绘制实心或空心文本，可设置字体
 */

/**
 * [drawText 绘制文本]
 * @param  {[Object]} context [canvas绘图上下文]
 * @param  {[String]} cfg.text    [文本字符串]
 * @param  {[Number]} cfg.x       [文本横坐标]
 * @param  {[Number]} cfg.y       [文本纵坐标]
 */
function drawText(context, cfg) {
    context.font = cfg.font;

    if (cfg.isStroke) {
        context.strokeText(cfg.text, cfg.x, cfg.y);
    } else {
        context.fillText(cfg.text, cfg.x, cfg.y);
    }
}