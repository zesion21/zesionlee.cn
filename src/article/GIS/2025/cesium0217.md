---
title: cesium学习笔记（二）
date: 2025-02-17
tags:
  - cesium
categories:
  - GIS相关
---

### 添加修改地形

1. 方法 1

```typescript
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: new Cesium.Terrain(
    Cesium.CesiumTerrainProvider.fromUrl("http://data.mars3d.cn/terrain")
  ),
});
```

2. 方法 2

```typescript
viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
  "http://data.mars3d.cn/terrain"
);
```

### 坐标系变换

坐标系分为屏幕坐标、经纬度坐标、笛卡尔坐标系。

`屏幕坐标`：屏幕坐标系，以左下角为原点，x 轴向右，y 轴向下，z 轴向远。

`经纬度坐标`：以 WGS84 坐标系为基准，以度为单位表示。

`笛卡尔坐标系`：以 WGS84 坐标系为基准，以米为单位表示。

Cesium 中坐标系转换的方法：

```ts
// Cesium弧度转角度
const degrees = Cesium.Math.toDegrees(Math.PI);
console.log(degrees);

// Cesium角度转弧度
const radians = Cesium.Math.toRadians(180);
console.log(radians);

// 经纬度转笛卡尔坐标
const position = Cesium.Cartesian3.fromDegrees(116.397477, 39.908692, 10000);
console.log(position);

// 笛卡尔坐标转经纬度
const cartographic = Cesium.Cartographic.fromCartesian(position);
console.log(cartographic);

// 屏幕点转地理点
const ray = viewer.camera.getPickRay(position);
const cartesian = viewer.scene.globe.pick(ray!, viewer.scene);

//地理点转屏幕点
const xy = Cesium.SceneTransforms.worldToWindowCoordinates(viewer.scene, cartesian);
console.log(xy);
```
