/**
 * 本demo展示了基本动画
 */
define('animationBase', [
    'jquery',
    'util',
    'graph',
    'property',
    'text'
], function($, Util, Graph) {

    var canvas = $('#animation1'),
        context = canvas.get(0).getContext('2d'),
        playAnimation = false, // 记录动画是否运行的布尔值
        canvasWidth = canvas.width(),
        canvasHeight = canvas.height(),
        startBtn = $('#startAnimation'),
        stopBtn = $('#stopAnimation'),
        x = 0; // 保存runRect正方形的x位置

    return {
        init: function() {
            // 展示demo
            this.showDemo();
        },
        /**
         * [showDemo 展示demo]
         */
        showDemo: function() {
            runRect();
            runShapes();
            runCircle();
            runBounce();
            this.bindEvent();
        },
        /**
         * [bindEvent 事件绑定]
         */
        bindEvent: function() {
            stopBtn.hide();

            startBtn.click(function() {
                $(this).hide();
                stopBtn.show();

                playAnimation = true;
                animate1();
                animate2();
                animate3();
                animate4();
            });

            stopBtn.click(function() {
                $(this).hide();
                startBtn.show();

                playAnimation = false;
            });
        }
    };

    /**
     * [runRect 运动的矩形]
     */
    function runRect() {
        // 平移原点坐标
        context.translate(0, 0);

        drawText(context, {
            text: '1、移动的方块',
            x: 10,
            y: 20
        });

        animate1();
    }

    function animate1() {

        if (playAnimation) {
            x = (++x) % 200;
            context.clearRect(0, 40, canvasWidth / 2, 20);
            context.fillRect(x, 40, 10, 10);
            setTimeout(animate1, 33); // 启动无限循环
        }
    }

    /**
     * [runShapes 运动的多个形状]
     */
    var Shape, shapes;
    function runShapes() {
        Shape = function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        };
        shapes = new Array();

        for (var i = 0; i < 10; i++) {
            var x = Math.random() * 150,
                y = Math.random() * 100,
                width = height = Math.random() * 30;

            shapes.push(new Shape(x, y, width, height));
        }
        

        context.save();

        // 平移原点坐标
        context.translate(0, 80);

        drawText(context, {
            text: '2、移动的多个随机方块',
            x: 10,
            y: 20
        });

        context.restore();

        animate2();
    }

    function animate2() {
        context.save();
        context.translate(0, 120);

        context.clearRect(0, 0, 300, 300);

        var shapesLength = shapes.length;

        for (var i = 0; i < shapesLength; i++) {
            var tmpShape = shapes[i];

            tmpShape.x = (tmpShape.x + 5) % 200;
            tmpShape.y = (tmpShape.y + 1) % 150;
            context.fillRect(tmpShape.x, tmpShape.y, tmpShape.width, tmpShape.height);
        }

        if (playAnimation) {
            setTimeout(animate2, 33);
        }

        context.restore();
    }

    /**
     * [runCircle 圆周运动]
     */
    var CircleShape, circleShapes;
    function runCircle() {
        CircleShape = function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;

            this.radius = Math.random() * 30;
            this.angle = 0;
        };

        circleShapes = new Array();

        for (var i = 0; i < 5; i++) {
            var x = Math.random() * 150,
                y = Math.random() * 100,
                width = height = Math.random() * 20;

            circleShapes.push(new CircleShape(x, y, width, height));
        }
        

        context.save();

        // 平移原点坐标
        context.translate(250, 0);

        drawText(context, {
            text: '3、圆周运动的多个随机方块',
            x: 10,
            y: 20
        });

        context.restore();

        animate3();
    }

    function animate3() {
        context.save();
        context.translate(250, 40);
        setColor(context, 255, 0, 0, false);

        context.clearRect(-20, -20, 250, 300);

        var circleShapesLength = circleShapes.length;

        for (var i = 0; i < circleShapesLength; i++) {
            var tmpShape = circleShapes[i],
                x = tmpShape.x + (tmpShape.radius * Math.cos(tmpShape.angle * (Math.PI / 180))),
                y = tmpShape.y + (tmpShape.radius * Math.sin(tmpShape.angle * (Math.PI / 180)));

            tmpShape.angle = (tmpShape.angle + 5) % 360;

            context.fillRect(x, y, tmpShape.width, tmpShape.height);
        }

        if (playAnimation) {
            setTimeout(animate3, 33);
        }

        context.restore();
    }

    /**
     * [runBounce 圆周运动]
     */
    var BounceShape, bounceShapes;
    function runBounce() {
        BounceShape = function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;

            this.reverseX = false;
            this.reverseY = false;
        };

        bounceShapes = new Array();

        for (var i = 0; i < 5; i++) {
            var x = Math.random() * 150,
                y = Math.random() * 100,
                width = height = Math.random() * 10;

            bounceShapes.push(new BounceShape(x, y, width, height));
        }
        

        context.save();

        // 平移原点坐标
        context.translate(500, 0);

        drawText(context, {
            text: '4、方块反弹运动',
            x: 10,
            y: 20
        });
        context.strokeRect(0, 40, 280, 200);

        context.restore();

        animate4();
    }

    function animate4() {
        context.save();
        context.translate(500, 40);
        setColor(context, 0, 255, 0, false);

        context.clearRect(1, 1, 278, 198);

        var bounceShapesLength = bounceShapes.length;

        for (var i = 0; i < bounceShapesLength; i++) {
            var tmpShape = bounceShapes[i];

            // 改变方向
            if (!tmpShape.reverseX) {
                tmpShape.x += 2;
            } else {
                tmpShape.x -= 2;
            }

            if (!tmpShape.reverseY) {
                tmpShape.y += 2;
            } else {
                tmpShape.y -= 2;
            }

            // 绘制形状
            context.fillRect(tmpShape.x, tmpShape.y, tmpShape.width, tmpShape.height);

            // 检查方向
            if (tmpShape.x < 0) {
                tmpShape.reverseX = false;
            } else if (tmpShape.x + tmpShape.width > 280) {
                tmpShape.reverseX = true;
            }

            if (tmpShape.y < 0) {
                tmpShape.reverseY = false;
            } else if (tmpShape.y + tmpShape.height > 200) {
                tmpShape.reverseY = true;
            }
        }

        if (playAnimation) {
            setTimeout(animate4, 33);
        }

        context.restore();
    }
});