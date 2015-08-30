require([
    'base/demo',
    'advanced/demo'
    ], function(base, advanced) {

    // 希望查看某一个demo的演示，就取消对应demo模块的注释
    // base.init();      // 基本功能
    advanced.init();  // 高级功能
});
