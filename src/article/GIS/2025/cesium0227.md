---
title: cesium学习笔记（三）之材质
date: 2025-02-27
tags:
  - cesium
categories:
  - GIS相关
---

材质的主要是通过`fabric`进行配置的

### 关于`fabric`属性

1. uniforms

- 说明： 定义材质的统一变量（Uniforms），通常是材质中需要动态调整的参数。

- 示例：

```ts
uniforms: {
  image: "path/to/texture.jpg", // 纹理图像的路径或 Cesium.Texture 对象
  color: new Cesium.Color(1.0, 0.0, 0.0, 1.0), // 颜色
  speed: 1.0,
}
```

2. materials

- 说明：定义子材质（Sub-materials），用于组合多个材质。 子材质可以通过 type 指定类型（如 BumpMap、DiffuseMap 等）。子材质也可以有自己的 uniforms 和 source。

- 示例：

```ts
materials: {
  bumpMap: {
    type: "BumpMap",
    uniforms: {
      image: "path/to/bumpMap.jpg",
    },
  },
}
```

3. type

- 说明：指定材质的类型，可以是内置的材质类型（如 Color、Image、DiffuseMap 等）或自定义的材质类型。如果未指定 type，则需要通过 source 或 components 定义材质行为。

4. source

- 说明：定义材质的 GLSL 源代码，用于计算材质的最终属性。
- 示例：

```ts
// czm_getMaterial 是必须的函数，用于返回材质属性。
// 可以使用内置的 GLSL 函数和变量（如 czm_material、czm_materialInput 等）。
source: `
  czm_material czm_getMaterial(czm_materialInput materialInput) {
    czm_material material = czm_getDefaultMaterial(materialInput);
    material.diffuse = vec3(1.0, 0.0, 0.0);
    material.alpha = 0.5;
    return material;
  }
`;
```

5. components

- 说明：直接定义材质的各个组件（如漫反射、透明度、法线等），而不需要编写 GLSL 代码。每个组件的值可以是 GLSL 表达式或引用其他材质。
- 示例：

```ts
components: {
  diffuse: "vec3(1.0, 0.0, 0.0)",
  alpha: "0.5",
  specular: "0.5",
  normal: "bumpMap.normal",
}
```

6. translucent

- 说明：指定材质是否为半透明。默认为 false，表示不透明。如果材质包含透明度（alpha 小于 1.0），则需要设置为 true。

7. minificationFilter 和 magnificationFilter

- 说明：指定纹理的缩小和放大滤波器。默认为 Linear，表示使用线性插值。可选值有 Linear、Nearest、MipMapLinearNearest、MipMapLinearLinear 等。
- 示例：

```ts
minificationFilter: Cesium.TextureMinificationFilter.LINEAR,
magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST,
```

8. strict

- 说明：是否严格检查 fabric 对象的属性

9. extensions

- 说明：定义 GLSL 扩展，用于启用特定的 GLSL 扩展。
- 示例：

```ts
extensions: {
  EXT_frag_depth: true,
}
```

10. alphaMode

- 说明：指定材质的透明度模式。可选值有 OPAQUE、TRANSLUCENT、BLEND。默认为 OPAQUE。
- 示例：

```ts
alphaMode: Cesium.AlphaMode.BLEND;
```

#### 参考

[Cesium 官网](https://cesium.com/learn/cesiumjs/ref-doc/Material.html) <br/>
[Deepseek](https://www.deepseek.com/)
