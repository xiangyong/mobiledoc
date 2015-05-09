/**
 * Author: humanhuang
 * Date: 14-1-2
 */
/**      status :
 *          1：正在开发
 *          2: 已完成
 *          0：已废弃
 **/
//        [标题，URL，说明，状态]
var data =
    [
        {
            name: 'base',
            list: [
                ['html head', 'header.html', '常用header', 1],
                ['mobile hack', 'hack.html', '常见hack', 1],
                ['reset', 'reset.html', 'reset.css', 1],
                ['常用框架', 'opensource.html', '常用框架集合', 1],
                ['设备版本', 'version.html', '', 1],
                ['todo', 'todo.html', '', 1],
                ['tang', 'tang.html', '语法糖', 1],
                ['opensource', 'opensource.html', '一些框架', 1],
            ]
        },
        {
            name: 'data',
            list: [
                ['data', 'data.html', '数据', 1],
                ['event', 'event.html', '事件相关', 1],
                ['测试ajax接口get', 'http://localhost/www/app/mobile/src/ajax/testCgiGet.html', '测试各种ajax接口', 1],
                ['测试ajax接口post', 'http://localhost/www/app/mobile/src/ajax/testCgiPost.html', '测试各种ajax接口', 1],
            ]
        },
        {
            name: '特性',
            list: [
                ['example page', 'examplePage.html', '样例', 1],
                ['a href=tel:111', 'a.html', '打电话', 1],
                ['移动浏览器新特性', 'es6.html', '', 1],
            ]
        },
        {
            name: 'touch',
            list: [
                ['touch事件', 'touchevent.html', 'touch事件', 1],
                ['touch总结', 'touchconclude.html', 'touch总结', 1],
//                ['test', 'test.html', 'test', 1],
            ]
        },
        {
            name: 'css',
            list: [
                ['border/shadow/radius/gradient', 'border.html', '', 2],
                ['perspective', 'perspective.html', '视点', 2],
                ['scene', 'scene.html', '场景变换', 2],
                ['layout', 'layout.html', '新的布局特性flexbox', 2],
                ['em', 'em.html', 'em/百分比', 2],
                ['lineheight/float/margin', 'lineheight.html', 'lineheight/float/margin', 2],
                ['常用', 'often.html', '常用', 2],
            ]
        },
        {
            name: 'css3',
            list: [
                ['-webkit-filter', 'filter.html', '', 2],
            ]
        },
        {
        name: 'ui',
        list: [
            ['垂直居中问题的几次尝试', 'center.html', 'center', 2],
            ['background新特性', 'bg.html', '', 2],
        ]
    },
        {
            name: 'screen',
            list: [
                ['ard屏幕', 'ard.html', '', 2],
                ['viewport', 'viewport.html', 'layout/visual viewport', 2],
                ['devicePixelRatio', 'devicePixelRatio.html', '高清屏', 2],
                ['iphone尺寸问题', 'iphone.html', 'iphone尺寸', 2],
            ]
        },
        {
            name: 'html5',
            list: [
                ['HTML5-form', 'baseform.html', 'H5表单相关', 2],
                ['jsnew', 'jsnew.html', 'ES6新特性', 2],
                ['图片base64', 'base64.html', '图片base64', 2],
                ['encode', 'encode.html', '编码乱码问题', 2],
                ['object', 'object.html', '', 2],
            ]
        },
        {
            name: 'animate',
            list: [
                ['css动画性能', 'performance.html', '', 2],
                ['keyframe', 'keyframe.html', '', 2],
                ['帧的计算器', 'caculateFrame.html', '', 2],
            ]
        },
        {
            name: 'response',
            list: [
                ['mediaQuery', 'mediaQuery.html', '媒体查询', 2],
            ]
        },
        {
            name: 'performance',
            list: [
                ['timer计时器后台刷新', 'timer.html', 'timer冻结问题', 2],
                ['cssAcculate', 'cssAcculate.html', 'css硬件加速', 2],
                ['defer/async', 'jsscript.html', 'defer/async', 2],
            ]
        },
        {
            name: 'font',
            list: [
                ['font', 'font.html', '字体', 2],
                ['background切图', 'background.html', 'background', 2]
            ]
        },
        {
            name: 'project',
            list: [
                ['base64', 'base64.html', '', 2],
                ['hammerjs', 'hammerjs.html', '', 2],
            ]
        },
        {
            name: 'node',
            list: [
                ['intro', 'intro.html', 'node基础', 2],
                ['debug', 'debug.html', '调试方法', 2],
            ]
        },
        {
            name: '其他工具',
            list: [
                ['mac常用软件', 'macSoftware.html', 'mac常用软件', 2],
                ['alibaba', 'alibaba.html', 'alibaba邮件组', 2],
                ['vm加载流程', 'loader.html', '', 2],
                ['antx-properties', 'antx-properties.html', '', 2],
                ['sofa-config.properties', 'sofa-config.properties.html', '', 2],
                ['server.conf', 'server.conf.html', '', 2],
                ['uri-brokers', 'uri-brokers.html', '', 2],
                ['merge-smvc-scheme-pull.xml', 'merge-smvc-scheme-pull.xml.html', '', 2],
            ]
        },
    ];