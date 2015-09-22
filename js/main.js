require([
    'base/demo',
    'advanced/demo',
    'img-vedio/demo',
    'animation/demo'
    ], function(base, advanced, imgVedio, animation) {

    // 希望查看某一个demo的演示，就取消对应demo模块的注释
    // base.init();      // 基本功能
    // advanced.init();  // 高级功能
    // imgVedio.init();  // 处理图像和视频
    animation.init(); // 动画
});
