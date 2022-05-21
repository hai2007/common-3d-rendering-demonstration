
/*************************** [bundle] ****************************/
// Original file:./examples/begin/painter.html
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>写在前面 / 绘制方法</title>\r\n    <script src=\"https://unpkg.com/image3d@3\"></script>\r\n    <!-- 顶点着色器 -->\r\n    <script type='x-shader/x-vertex' id='vs'>\r\n        void main(){\r\n            gl_Position=vec4(0.0,0.0,0.0,1.0);\r\n            gl_PointSize=100.0;\r\n        }\r\n    </script>\r\n\r\n    <!-- 片段着色器 -->\r\n    <script type='x-shader/x-fragment' id='fs'>\r\n        void main(){\r\n            gl_FragColor=vec4(0.0,0.0,1.0,1.0);\r\n        }\r\n    </script>\r\n</head>\r\n\r\n<body>\r\n\r\n    <canvas width=300 height=300>非常抱歉，您的浏览器不支持canvas!</canvas>\r\n\r\n    <script>\r\n\r\n        // 创建3D对象并配置好画布和着色器\r\n        var image3d = new image3D(document.getElementsByTagName('canvas')[0], {\r\n\r\n            // 着色器是必须传递的\r\n            \"vertex-shader\": document.getElementById(\"vs\").innerText,\r\n            \"fragment-shader\": document.getElementById(\"fs\").innerText\r\n        });\r\n\r\n        var painter = image3d.Painter();\r\n        painter.drawPoint(0, 1);\r\n\r\n    </script>\r\n\r\n</body>\r\n\r\n</html>\r\n"
  
    return __etcpack__scope_bundle__;
}
