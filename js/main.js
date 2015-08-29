require([
    'base/demo',
    'advanced/demo'
    ], function(base, advanced) {

    base.init();      // 基本功能
    advanced.init();  // 高级功能
});
