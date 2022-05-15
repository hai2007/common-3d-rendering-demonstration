
/*************************** [bundle] ****************************/
// Original file:./examples/begin/painter.html
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>写在前面 / 绘制方法</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/image3d@3\"></script>\n    <!-- 顶点着色器 -->\n    <script type='x-shader/x-vertex' id='vs'>\n        void main(){\n            gl_Position=vec4(0.0,0.0,0.0,1.0);\n            gl_PointSize=100.0;\n        }\n    </script>\n\n    <!-- 片段着色器 -->\n    <script type='x-shader/x-fragment' id='fs'>\n        void main(){\n            gl_FragColor=vec4(0.0,0.0,1.0,1.0);\n        }\n    </script>\n</head>\n\n<body>\n\n    <canvas width=300 height=300>非常抱歉，您的浏览器不支持canvas!</canvas>\n\n    <script>\n\n        // 创建3D对象并配置好画布和着色器\n        var image3d = new image3D(document.getElementsByTagName('canvas')[0], {\n\n            // 着色器是必须传递的\n            \"vertex-shader\": document.getElementById(\"vs\").innerText,\n            \"fragment-shader\": document.getElementById(\"fs\").innerText\n        });\n\n        var painter = image3d.Painter();\n        painter.drawPoint(0, 1);\n\n    </script>\n\n</body>\n\n</html>\n"
  
    return __etcpack__scope_bundle__;
}
