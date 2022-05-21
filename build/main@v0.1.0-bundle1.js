
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/begin/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['27']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('45');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: []
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/begin/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\r\n    <h2 id='fixed-top'>\r\n        写在前面\r\n    </h2>\r\n    <p>\r\n        接下来，我们将向大家说明一些常见的3D如何绘制，核心的内容是编程思路的分享，不涉及具体的绘图库。\r\n    </p>\r\n    <p>\r\n        在演示和说明的时候，虽然我们选择基于\r\n        <a href=\"https://hai2007.gitee.io/image3d\" target=\"_blank\" class='link'>image3D.js</a>\r\n        来作为依赖库，但由于其朴素的语法几乎和原生WebGL是一致的，因此我们认为这不是一个糟糕的选择。\r\n    </p>\r\n    <p class='warn'>\r\n        温馨提示：如果你有更好的建议，欢迎给我们\r\n        <a href=\"https://github.com/hai2007/common-3d-rendering-demonstration/issues\" target=\"_blank\"\r\n            class='link'>留言</a>~\r\n    </p>\r\n    <h3 id='fixed-image3d'>\r\n        绘图对象\r\n    </h3>\r\n    <p>\r\n        现在，我们要绘制一个矩形点，截图如下：\r\n    </p>\r\n    <img src=\"./image/begin-painter.png\" alt=\"矩形\" width='200px'>\r\n    <h4 id='fixed-shader'>\r\n        着色器\r\n    </h4>\r\n    <p>\r\n        在WebGL中，一切绘图都依赖\r\n        <span class=\"warn\">着色器</span>\r\n        。什么是着色器？简单的理解就是：你和GPU的一个桥梁工具。\r\n    </p>\r\n    <p>\r\n        那么，你有什么需要和GPU沟通的？你需要，你绘制图形的时候，图形的每个点位置、大小和颜色，是不是需要告诉GPU?是的，位置和点，由此着色器就有两种，对我们这里而言。\r\n    </p>\r\n    <p>\r\n        第一种：顶多着色器，也就是传递点的位置和大小给GPU的：\r\n    </p>\r\n    <pre ui-code>\r\nvoid main(){\r\n    gl_Position=vec4(0.0,0.0,0.0,1.0);\r\n    gl_PointSize=100.0;\r\n}\r\n    </pre>\r\n    <p>\r\n        第二种：片段着色器（又称片元着色器），也就是传递点的颜色给GPU的：\r\n    </p>\r\n    <pre ui-code>\r\nvoid main(){\r\n    gl_FragColor=vec4(0.0,0.0,1.0,1.0);\r\n}\r\n    </pre>\r\n    <p>\r\n        细心的你一定可以发现，三个变量的左边都是\r\n        <span class=\"warn\">gl_</span>\r\n        开头的。是的，这三个变量不需要定义，是和GPU约定好的，就分别表示点的位置、大小和颜色。\r\n    </p>\r\n    <h4 id='fixed-painter'>\r\n        绘制画笔\r\n    </h4>\r\n    <p>\r\n        现在，着色器有了，可是，本质上，这只是两段字符串呀！怎么样和GPU进行沟通？\r\n    </p>\r\n    <p>\r\n        哈哈哈，我们这里借助\r\n        <a href=\"https://hai2007.gitee.io/image3d\" target=\"_blank\" class='link'>image3D.js</a>\r\n        来完成就很简单了。所以，image3D就是一个打杂的，可是，如果没有它，害，代码写起来就会非常晦涩难懂。\r\n    </p>\r\n    <p>\r\n        一样的，我们需要准备好画布：\r\n    </p>\r\n    <pre ui-code=\"html\">\r\n        <canvas width=300 height=300>非常抱歉，您的浏览器不支持canvas!</canvas>\r\n    </pre>\r\n    <p>\r\n        然后，就非常简单了：\r\n    </p>\r\n    <pre ui-code>\r\n// 创建3D对象并配置好画布和着色器\r\nvar image3d = new image3D(document.getElementsByTagName('canvas')[0], {\r\n\r\n    // 着色器是必须传递的\r\n    \"vertex-shader\": document.getElementById(\"vs\").innerText,\r\n    \"fragment-shader\": document.getElementById(\"fs\").innerText\r\n});\r\n\r\nvar painter = image3d.Painter();\r\npainter.drawPoint(0, 1);\r\n    </pre>\r\n    <p>\r\n        <button ui-goto-example='begin_painter'>查看用例>>></button>\r\n    </p>\r\n    <h4 id='fixed-more'>\r\n        更多\r\n    </h4>\r\n    <p>\r\n        上面只是一个简单的初步演示，可能在后续演示中使用的更多内容，这里不再一一赘述了，如果在后续有不清楚的地方，可以查看\r\n        <a href=\"https://hai2007.gitee.io/image3d/#/course\" target=\"_blank\" class='link'>教程</a>\r\n        或\r\n        <a href=\"https://hai2007.gitee.io/image3d/#/api\" target=\"_blank\" class='link'>接口文档</a>\r\n        进行学习。\r\n    </p>\r\n    <p>\r\n        不用担心，后续例子等说明，不会涉及太复杂的内容，都比较好理解。\r\n    </p>\r\n    <h3 id='fixed-calc'>\r\n        计算方法\r\n    </h3>\r\n    <p>\r\n        为image3D.js设计开发的三维几何坐标运算库，比如球，每次重新开始编码如果用三角形拼接会非常麻烦，由此进行了封装。\r\n    </p>\r\n    <p>\r\n        具体的请查看\r\n        <a href=\"https://www.npmjs.com/package/three-geometry\" target=\"_blank\" class='link'>几何体</a>\r\n        中的说明，我们这里就不再说明了。\r\n    </p>\r\n</div>\r\n"
  
    return __etcpack__scope_bundle__;
}
