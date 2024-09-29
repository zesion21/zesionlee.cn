---
date: 2024-08-22
tag:
  - webGL
category:
  - GIS相关
---

# 使用 WebGL 创建 2D 内容

目标：画出一个 2D 正方形

### 引入 glMatrix 库

[glMatrix](https://glmatrix.net/):执行其矩阵操作的库，通过 CDN 形式引入使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <link rel="stylesheet" href="./webgl.css" type="text/css" />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossorigin="anonymous"
      defer
    ></script>
    <script src="webgl-demo.js" type="module" defer></script>
  </head>

  <body>
    <canvas id="glcanvas" width="640" height="480"></canvas>
  </body>
</html>
```

### 渲染场景

虽然我们的例子只是画一个二维物体，但我们仍然是在把它画在一个三维空间里。所以，我们依然需要创建着色器，通过它来渲染我们的简单场景并画出我们的物体。
