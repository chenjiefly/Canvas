## Canvas学习
### 一、学习教材：HTML5 Canvas基础教程
### 二、工程内容：书中的例子
### 三、文件组织：使用了require.js，尝试了不同模块（用或未用define定义）的引用

#### 1、config.js文件为require.js的配置文件

#### 2、main.js为总的入口文件

#### 3、lib文件夹下存放库文件

#### 4、comm文件夹下存放通用文件
* util.js
    * 清除画布，该操作会消除所有属性，如样式和线宽等
    * canvas窗口最大化
    * canvas随window变化而自动重绘

#### 5、base文件夹下为canvas基础应用
* graph：矩形、直线、圆弧、圆的绘制，矩形区域的擦除
* text：文本的绘制
* property：相关属性设置（线宽、颜色、字体等）

#### 6、advanced文件夹下为canvas的高级应用
* save-recover：保存和恢复绘图状态
    * 绘图状态指的是描述某一时刻2D渲染上下文外观的整套属性，从简单的颜色值到复杂的变换矩阵及其他特性
    * 绘图状态的全部属性为：
        * 变换矩阵
        * 裁剪区域（clipping region）
        * global-Alpha
        * globalCompositeOperation
        * strokeStyle
        * fillStyle
        * lineWidth
        * lineCap
        * lineJoin
        * miterLimit
        * shadowOffsetX
        * shadowOffsetY
        * shadowBlur
        * shadoColor
        * font
        * textAlign
        * textBaseline
    * **画布上的当前路径和当前位图（正在显示的内容）并不属于状态**
    * 绘图状态是以**绘图状态栈**的形式保存的
    * context.save()：调用绘图上下文context的save方法可将状态入栈
    * context.restore()：调用绘图上下文context的restore方法可将状态出栈
    * 保存和恢复绘图状态其实就是入栈和出栈的过程，无论是单个还是多个绘图状态的保存和恢复都遵循后入先出原则

* transform：变形
    * 平移
        * 平移的本质是移动画布原点，其默认原点坐标为(0, 0)，当设置为(-10, 60)时，原点向左平移10px，向下平移60px，与图形平移一致
    * 缩放
        * 缩放后可能会导致显示位置不正确，可以采取先平移再缩放的方式来解决
    * 旋转
        * 整个画布按照原点旋转，因此在旋转之后绘图会使图形显示位置偏移，需要校准显示位置
        * 要实现在原位置上对所绘图形进行旋转，需要将原点平移到所绘图形中心，然后做一次旋转，最后以原点为中心绘图，详见_showRotate演示方法
        * 正弧度表示顺时针方向旋转
    * 变换矩阵
        * 在画布中使用的是一个3x3的2D渲染上下文变换矩阵

        *  --      --      --                      --
        * |  a  c  e |    |  x轴缩放  x轴倾斜  x轴平移  |
        * |  b  d  f | == |  y轴倾斜  y轴缩放  y轴平移  |
        * |  0  0  1 |    |    0       0       0     |    -- 这一行不能修改
        *  --      --      --                      --

        * 该矩阵默认值是3阶单位矩阵
        * context.transform(a, b, c, d, e, f)
        * **使用变换矩阵进行旋转是倾斜和缩放的组合效果**，参看例子，只需要一个角度值就可以旋转
    * 合成
        * **修改全局合成属性会影响到修改之后所绘制的全部内容**
        * 全局阿尔法值globalAlpha，取值范围0.0（全透明）到1.0（不透明），默认1.0
        * 局部Alpha值会参照globalAlpha值（充当基数），具体表现为两者相乘后的透明度
        
        * 源：待绘制的图形
        * 目标：已经绘制到画布上的图形

        * source-over：默认值，源绘制在目标之上
        * destination-over：目标绘制在源之上
        * source-atop：源绘制在目标之上，未重合区域的源透明
        * destination-atop：目标绘制在源之上，未重合区域的目标透明
        * source-in：只绘制重合区域的源
        * destination-in：只绘制重合区域的目标
        * source-out：只绘制不重合区域的源
        * destination-out：只绘制不重合区域的目标
        * lighter：与顺序无关，重叠部分颜色相加，最大值为255（白色）
        * copy：与顺序无关，只绘制源，并覆盖目标
        * xor：与顺序无关，绘制不重叠的源和目标，重叠部分透明
