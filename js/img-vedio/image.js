/**
 * 本demo展示了canvas的高级功能
 */
define('image', [
    'jquery',
    'util',
    'graph',
    'property',
    'text'
    ], function($, Util, Graph) {

    var canvas, context;

    return {
        /**
         * [show 展示处理图像函数]
         * @param {[Object]} [can] [canvas对象]
         * @param {[Object]} [con] [canvas绘图上下文]
         */
        show: function (can, con) {
            canvas = can;
            context = con;

            drawText(context, {
                text: '一、加载图像', 
                x: 180, 
                y: 20
            });

            context.translate(10, 60);

            _showLoadImage();  // 1、展示导出画布为图像，并跳转大小
            _showClipImage();  // 2、调整图像大小
        },
        /**
         * [showOperatePixel 拾色器]
         */
         showOperatePixel: function(can, con) {
            _showReadPixel(can, con);  // 演示读取像素值
            _showDrawImage(can, con);  // 演示绘图
        }
    };

    /**
     * [_showLoadImage 加载图像]
     */
    function _showLoadImage() {
        // 平移原点坐标
        context.translate(0, -20);

        drawText(context, {
            text: '1、加载图像和调整图像大小', 
            x: 0, 
            y: 0
        });

        // 平移原点坐标
        context.translate(0, 10);

        // 加载图像
        var image = new Image();
        image.src = 'media/image.png';
        $(image).load(function () {
            context.drawImage(image, 0, 0, 120, 90);
        });
    }

    /**
     * [_showClipImage 裁剪图像]
     */
    function _showClipImage() {
        // 平移原点坐标
        // context.translate(200, -20);

        drawText(context, {
            text: '2、裁剪图像', 
            x: 180, 
            y: -10
        });

        // 增加阴影模糊
        context.shadowBlur = 20;
        context.shadowColor = 'rgb(0, 0, 0)';

        // 加载图像
        var image1 = new Image();
        image1.src = 'media/image.png';
        $(image1).load(function () {
            context.drawImage(
                image1, 
                180, 0, 60, 45,   // 裁剪框的左上角坐标和尺寸
                180, 0, 120, 90); // 待绘制裁剪图像的左上角坐标和尺寸
        });
    }
    /**
     * [showReadPixel 演示读取像素值]
     * @param  {[Object]} canvas  [canvas对象]
     * @param  {[Object]} context [2D绘制上下文]
     */
    function _showReadPixel(canvas, context) {
        // 平移原点坐标
        context.translate(200, 20);

        drawText(context, {
            text: '二、像素值操作', 
            x: 0, 
            y: 0
        });

        // 平移原点坐标
        context.translate(0, 20);

        drawText(context, {
            text: '1、单击图片读取像素值', 
            x: -180, 
            y: 0
        });

        // 加载图像
        var image1 = new Image();
        image1.src = 'media/colorBar.png';
        $(image1).load(function () {
            context.drawImage(
                image1,
                -180, 20, 120, 90);
        });

        // 绑定事件
        canvas.click(function (ev) {
            var offset = canvas.offset(),
                x = Math.floor(ev.pageX - offset.left),  // 得到鼠标在画布内的横坐标
                y = Math.floor(ev.pageY - offset.top),   // 得到鼠标在画布内的纵坐标
                imageData,
                pixel,
                pixelColor;

                imageData = context.getImageData(x, y, 1, 1);
                pixel = imageData.data;  // 因为只是读取了一个像素，所以数组中只有一个点的4个数据rgba
                pixelColor = 'rgba(' + pixel[0] +', ' + pixel[1] + ', ' + pixel[2] + ', ' + pixel[3] + ')';
            
            $('body').css('backgroundColor', pixelColor);                    
        });
    }
    /**
     * [_showDrawImage 演示绘制图像]
     * @param  {[Object]} canvas  [canvas对象]
     * @param  {[Object]} context [2D绘制上下文]
     */
    function _showDrawImage(canvas, context) {

    }
});