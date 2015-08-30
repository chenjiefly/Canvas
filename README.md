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