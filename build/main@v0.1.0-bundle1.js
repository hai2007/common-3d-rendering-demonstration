
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
    __etcpack__scope_bundle__.default= "<div class='doc-view'>\n    <h2 id='fixed-top'>\n        写在前面\n    </h2>\n    <p>\n        接下来，我们将向大家说明一些常见的3D如何绘制，核心的内容是编程思路的分享，不涉及具体的绘图库。\n    </p>\n    <p>\n        在演示和说明的时候，虽然我们选择基于\n        <a href=\"https://hai2007.gitee.io/image3d\" target=\"_blank\" class='link'>image3D.js</a>\n        来作为依赖库，但由于其朴素的语法几乎和原生WebGL是一致的，因此我们认为这不是一个糟糕的选择。\n    </p>\n    <p class='warn'>\n        温馨提示：如果你有更好的建议，欢迎给我们\n        <a href=\"https://github.com/hai2007/common-3d-rendering-demonstration/issues\" target=\"_blank\"\n            class='link'>留言</a>~\n    </p>\n    <h3 id='fixed-image3d'>\n        绘图对象\n    </h3>\n    <p>\n        现在，我们要绘制一个矩形点，截图如下：\n    </p>\n    <img src=\"./image/begin-painter.png\" alt=\"矩形\" width='200px'>\n    <h4 id='fixed-shader'>\n        着色器\n    </h4>\n    <p>\n        在WebGL中，一切绘图都依赖\n        <span class=\"warn\">着色器</span>\n        。什么是着色器？简单的理解就是：你和GPU的一个桥梁工具。\n    </p>\n    <p>\n        那么，你有什么需要和GPU沟通的？你需要，你绘制图形的时候，图形的每个点位置、大小和颜色，是不是需要告诉GPU?是的，位置和点，由此着色器就有两种，对我们这里而言。\n    </p>\n    <p>\n        第一种：顶多着色器，也就是传递点的位置和大小给GPU的：\n    </p>\n    <pre ui-code>\nvoid main(){\n    gl_Position=vec4(0.0,0.0,0.0,1.0);\n    gl_PointSize=100.0;\n}\n    </pre>\n    <p>\n        第二种：片段着色器（又称片元着色器），也就是传递点的颜色给GPU的：\n    </p>\n    <pre ui-code>\nvoid main(){\n    gl_FragColor=vec4(0.0,0.0,1.0,1.0);\n}\n    </pre>\n    <p>\n        细心的你一定可以发现，三个变量的左边都是\n        <span class=\"warn\">gl_</span>\n        开头的。是的，这三个变量不需要定义，是和GPU约定好的，就分别表示点的位置、大小和颜色。\n    </p>\n    <h4 id='fixed-painter'>\n        绘制画笔\n    </h4>\n    <p>\n        现在，着色器有了，可是，本质上，这只是两段字符串呀！怎么样和GPU进行沟通？\n    </p>\n    <p>\n        哈哈哈，我们这里借助\n        <a href=\"https://hai2007.gitee.io/image3d\" target=\"_blank\" class='link'>image3D.js</a>\n        来完成就很简单了。所以，image3D就是一个打杂的，可是，如果没有它，害，代码写起来就会非常晦涩难懂。\n    </p>\n    <p>\n        一样的，我们需要准备好画布：\n    </p>\n    <pre ui-code=\"html\">\n        <canvas width=300 height=300>非常抱歉，您的浏览器不支持canvas!</canvas>\n    </pre>\n    <p>\n        然后，就非常简单了：\n    </p>\n    <pre ui-code>\n// 创建3D对象并配置好画布和着色器\nvar image3d = new image3D(document.getElementsByTagName('canvas')[0], {\n\n    // 着色器是必须传递的\n    \"vertex-shader\": document.getElementById(\"vs\").innerText,\n    \"fragment-shader\": document.getElementById(\"fs\").innerText\n});\n\nvar painter = image3d.Painter();\npainter.drawPoint(0, 1);\n    </pre>\n    <p>\n        <button ui-goto-example='begin_painter'>查看用例>>></button>\n    </p>\n    <h4 id='fixed-more'>\n        更多\n    </h4>\n    <p>\n        上面只是一个简单的初步演示，可能在后续演示中使用的更多内容，这里不再一一赘述了，如果在后续有不清楚的地方，可以查看\n        <a href=\"https://hai2007.gitee.io/image3d/#/course\" target=\"_blank\" class='link'>教程</a>\n        或\n        <a href=\"https://hai2007.gitee.io/image3d/#/api\" target=\"_blank\" class='link'>接口文档</a>\n        进行学习。\n    </p>\n    <p>\n        不用担心，后续例子等说明，不会涉及太复杂的内容，都比较好理解。\n    </p>\n    <h3 id='fixed-calc'>\n        计算方法\n    </h3>\n    <p>\n        为image3D.js设计开发的三维几何坐标运算库，比如球，每次重新开始编码如果用三角形拼接会非常麻烦，由此进行了封装。\n    </p>\n    <p>\n        具体的请查看\n        <a href=\"https://www.npmjs.com/package/three-geometry\" target=\"_blank\" class='link'>几何体</a>\n        中的说明，我们这里就不再说明了。\n    </p>\n</div>\n"
  
    return __etcpack__scope_bundle__;
}
