/**
 * 本demo展示了基本动画
 */
define('animationAdvanced', [
    'jquery',
    'util',
    'graph',
    'property',
    'text'
], function($, Util, Graph) {

    var $win = $(window);

    return {
        init: function() {
            // 展示demo
            this.showDemo();
        },
        /**
         * [showDemo 展示demo]
         */
        showDemo: function() {
            runAsteroids();
        }
    };

    /**
     * [runAsteroids 运动的小行星]
     */
    function runAsteroids() {
        var canvas = $('#animation2'),
            context = canvas.get(0).getContext('2d'),
            canvasWidth = canvas.width(),
            canvasHeight = canvas.height(); // 保存runRect正方形的x位置

        // 窗口重绘
        $win.resize(resizeCanvas);

        function resizeCanvas() {
            canvas.attr('width', $win.get(0).innerWidth);
            canvas.attr('height', $win.get(0).innerHeight);
            canvasWidth = canvas.width();
            canvasHeight = canvas.height();
        }

        resizeCanvas();

        // 开始和停止按钮事件绑定
        var playAnimation = true,
            beginBtn = $('#beginButton'),
            endBtn = $('#endButton');

        beginBtn.hide();
        beginBtn.click(function() {
            $(this).hide();
            endBtn.show();
            playAnimation = true;
            animate();
        });

        endBtn.click(function() {
            $(this).hide();
            beginBtn.show();
            playAnimation = false;
        });

        // 小行星对象定义
        var Asteroid = function(x, y, radius, mass, vX, vY, aX, aY) {
            this.x = x;
            this.y = y;
            this.radius = radius;

            this.vX = vX;  // 速度偏移量
            this.vY = vY;

            this.aX = aX;  // 加速度
            this.aY = aY;

            this.mass = mass;  // 动量
        }

        // 实例化小行星对象
        var asteroids = new Array();

        for (var i = 0; i < 10; i++) {
            var x = 20 + (Math.random() * canvasWidth - 40),
                y = 20 + (Math.random() * canvasHeight - 40),
                radius = 5 + Math.random() * 10,
                mass = radius / 2,
                vX = Math.random() * 4 - 2,
                vY = Math.random() * 4 - 2,
                aX = Math.random() * 0.2 - 0.1,
                aY = Math.random() * 0.2 - 0.1;

            asteroids.push(new Asteroid(x, y, radius, mass, vX, vY, aX, aY));
        }

        // 小行星动画方法定义
        function animate() {
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.fillStyle = 'rgb(255, 255, 255)';

            var asteroidsLength = asteroids.length;

            for (var i = 0; i < asteroidsLength; i++) {
                var tmpAsteroid = asteroids[i];

                // 球体碰撞
                for (var j = i+1; j < asteroidsLength; j++) {
                    var tmpAsteroidB = asteroids[j],
                        dX = tmpAsteroidB.x - tmpAsteroid.x;
                        dY = tmpAsteroidB.y - tmpAsteroid.y,
                        distance = Math.sqrt((dX * dX) + (dY * dY));
                    // 判断两个圆是否碰撞
                    if (distance < tmpAsteroid.radius + tmpAsteroidB.radius) {
                        var angle = Math.atan2(dY, dX),
                            sine = Math.sin(angle),
                            cosine = Math.cos(angle);

                        var x = 0, y = 0,
                            xB = dX * cosine + dY * sine,
                            yB = dY * cosine - dX * sine,
                            vX = tmpAsteroid.vX * cosine + tmpAsteroid.vY * sine,
                            vY = tmpAsteroid.vY * cosine + tmpAsteroid.vX * sine,
                            vXb = tmpAsteroidB.vX * cosine + tmpAsteroidB.vY * sine,
                            vYb = tmpAsteroidB.vY * cosine + tmpAsteroidB.vX * sine;

                        // 动量不守恒的情况
                        // vX *= -1;
                        // vXb *= -1;
                        
                        // 动量守恒的情况
                        var vTotal = vX - vXb;

                        vX = ((tmpAsteroid.mass - tmpAsteroidB.mass) * vX + 2 * tmpAsteroidB.mass * vXb) /
                             (tmpAsteroid.mass + tmpAsteroidB.mass);
                        vXb = vTotal + vX;
                        xB = x + (tmpAsteroid.radius + tmpAsteroidB.radius);

                        // 计算两个球的新位置和速度
                        tmpAsteroid.x = tmpAsteroid.x + (x * cosine - y * sine);
                        tmpAsteroid.y = tmpAsteroid.y + (y * cosine + x * sine);

                        tmpAsteroidB.x = tmpAsteroid.x + (xB * cosine - yB * sine);
                        tmpAsteroidB.y = tmpAsteroid.y + (yB * cosine + xB * sine);

                        tmpAsteroid.vX = vX * cosine - vY * sine;
                        tmpAsteroid.vY = vY * cosine + vX * sine;

                        tmpAsteroidB.vX = vXb * cosine - vYb * sine;
                        tmpAsteroidB.vY = vYb * cosine + vXb * sine;
                    }
                }

                // 计算速度
                tmpAsteroid.x += tmpAsteroid.vX;
                tmpAsteroid.y += tmpAsteroid.vY;
                
                // 添加边界
                if (tmpAsteroid.x - tmpAsteroid.radius < 0) {
                    tmpAsteroid.x = tmpAsteroid.radius;
                    tmpAsteroid.vX *= -1;
                } else if (tmpAsteroid.x + tmpAsteroid.radius > canvasWidth) {
                    tmpAsteroid.x = canvasWidth - tmpAsteroid.radius;
                    tmpAsteroid.vX *= -1;
                }
                if (tmpAsteroid.y - tmpAsteroid.radius < 0) {
                    tmpAsteroid.y = tmpAsteroid.radius;
                    tmpAsteroid.vY *= -1;
                } else if (tmpAsteroid.y + tmpAsteroid.radius > canvasHeight) {
                    tmpAsteroid.y = canvasHeight - tmpAsteroid.radius;
                    tmpAsteroid.vY *= -1;
                }

                // 加速度效果
                // if (Math.abs(tmpAsteroid.vX) < 10) {  
                //     tmpAsteroid.vX += tmpAsteroid.aX;
                // }
                // if (Math.abs(tmpAsteroid.vY) < 10) {
                //     tmpAsteroid.vY += tmpAsteroid.aY; 
                // }
                
                // 摩擦力效果效果
                // if (Math.abs(tmpAsteroid.vX) > 0.1) {  
                //     tmpAsteroid.vX *= 0.9;
                // } else {
                //     tmpAsteroid.vX = 0;
                // }
                // if (Math.abs(tmpAsteroid.vY) > 0.1) {
                //     tmpAsteroid.vY *= 0.9;
                // } else {
                //     tmpAsteroid.vY = 0;
                // }

                // 绘制形状
                context.beginPath();
                context.arc(tmpAsteroid.x, tmpAsteroid.y, tmpAsteroid.radius, 0, Math.PI * 2, false);
                context.closePath();
                context.fill();
            }

            if (playAnimation) {
                setTimeout(animate, 33)
            }
        }

        animate();
    }
});