---
date: 2024-08-22
tag:
  - webGL
category:
  - GIS相关
---

# WebGL 学习笔记

### 前言

最近在学习 cesiun，遇到一些基础的理论问题无法解决，于是开始学习 WebGL，打一下基础

### 关于 WebGL

WebGL 使得网页在支持 HTML `<canvas>` 标签的浏览器中，不需要使用任何插件，便可以使用基于 OpenGL ES 2.0 的 API 在 canvas 中进行 3D 渲染。WebGL 程序由 javascript 的控制代码，和在计算机的图形处理单元（GPU, Graphics Processing Unit）中执行的特效代码 (shader code，渲染代码) 组成。WebGL 元素可以和其他 HTML 元素混合，并且会和页面的其他部分或页面背景相合成。

### 初识 WebGL

WebGL 程序包括用 JavaScript 写的控制代码，以及在图形处理单元（GPU, Graphics Processing Unit）中执行的着色代码（GLSL，注：GLSL 为 OpenGL 着色语言），重点学习着色器，方便理解 cesium 纹理

#### 准备 3D 渲染

```html
<body onload="main()">
  <canvas id="glcanvas" width="640" height="480">
    你的浏览器似乎不支持或者禁用了 HTML5 <code>&lt;canvas&gt;</code> 元素。
  </canvas>
</body>
```

```js
// 从这里开始
function main() {
  const canvas = document.querySelector("#glcanvas");
  // 初始化 WebGL 上下文
  const gl = canvas.getContext("webgl");

  // 确认 WebGL 支持性
  if (!gl) {
    alert("无法初始化 WebGL，你的浏览器、操作系统或硬件等可能不支持 WebGL。");
    return;
  }

  // 使用完全不透明的黑色清除所有图像
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 用上面指定的颜色清除缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

如果 WebGL 上下文成功初始化，变量‘gl’会用来引用该上下文。在这个例子里，我们用黑色清除上下文内已有的元素。（用背景颜色重绘 canvas）。

![](<1724297324441(1).png>)
