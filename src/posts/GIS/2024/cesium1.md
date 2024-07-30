---
title: cesium相关之创建地球
date: 2024/05/01
tags:
  - cesium
categories:
  - GIS相关
---

> 参考地址： https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/

### 1.设置资源地址

CesiumJS 需要在您的服务器上托管一些静态文件，例如 Web worker 和 SVG 图标。配置您的模块文件夹以复制以下四个目录并将它们作为静态文件

- `node_modules/cesium/Build/Cesium/Workers`
- `node_modules/cesium/Build/Cesium/ThirdParty`
- `node_modules/cesium/Build/Cesium/Assets`
- `node_modules/cesium/Build/Cesium/Widgets`

例如，如果`Assets/Images/cesium_credit.png`的服务地址为：`http：//localhost：8080/static/Cesium/Assets/Images/cesium_credit.png`,那么前置地址是：`/static/Cesium/`，需要如下设置：

```js
window.CESIUM_BASE_URL = "/static/Cesium/";
```

### 2.初始化地图

```ts
const DEFAULT_RECTANGLE = Cesium.Rectangle.fromDegrees(110, 40, 116, 37);
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = DEFAULT_RECTANGLE; //设置初始的相机范围
const viewer = new Cesium.Viewer("container", {
  infoBox: false,
  selectionIndicator: false,
});
//修改相机到天安门
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.39145, 39.907325, 4000),
  duration: 0,
});
```

### 3.运行结果

![cesium](../../img/image.png)
