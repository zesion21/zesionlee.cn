---
date: 2024-08-12
tags:
  - gdal
categories:
  - GIS相关
---

# 使用 gdal 进行 png 文件的影像配准

1. 一般图片的配准

```kotlin
// 创建4326坐标系
      private val sp by lazy {
           val sp = SpatialReference()
           sp.ImportFromEPSG(4326)
           sp
       }

       private val basePath: String = "H:\\java\\nrs\\"

// 进行地理配准
       fun handleImg(path: String) {
           gdal.AllRegister()
           val dataset = gdal.Open(path)
           val x = dataset.rasterXSize
           val y = dataset.rasterYSize
           val list = listOf(
               GCP(115.2626, 36.832971, 0.0, 0.0),
               GCP(115.176448, 36.527851, 0.0, y.toDouble()),
               GCP(115.554089, 36.457752, x.toDouble(), y.toDouble()),
               GCP(115.641695, 36.762737, x.toDouble(), 0.0),
           )
           dataset.SetGCPs(list.toTypedArray(), sp.ExportToWkt())
           val vector = Vector<String>()
           // -srcnodata 0  去除黑边
           // -of PNG 设置输出格式
           "-r near -of PNG  -srcnodata 0 -dstalpha".split(" ").forEach { vector.add(it) }
           gdal.Warp("$basePath/test.png", listOf(dataset).toTypedArray(), WarpOptions(vector))
       }


```

2. 3857 坐标下瓦片转 tif

```kotlin
fun handleFile(z: Int, x: Int, y: Int) {

    if (File("E:\\img2tif\\${z}_tif\\${x}\\${y}.tif").exists()) return

    val path = "E:\\img2tif\\${z}\\${x}\\${y}.png"
    val n = (2.0).pow(z)
    val ev = 20037508.34 * 2 / n
    val xStart = -20037508.34 + x * ev
    val yStart = 20037508.34 - y * ev
    val resolution = ev / 256

    val src = gdal.Open(path)
    val driver = gdal.GetDriverByName("GTiff")
    val dest = driver.CreateCopy("E:\\img2tif\\${z}_tif\\${x}\\${y}.tif", src)
    val dstTransform = DoubleArray(6)
    dstTransform[0] = xStart
    dstTransform[1] = resolution
    dstTransform[2] = 0.0
    dstTransform[3] = yStart
    dstTransform[4] = 0.0
    dstTransform[5] = -resolution
    dest.SetGeoTransform(dstTransform)
    val sp = SpatialReference()
    sp.ImportFromEPSG(3857)
    dest.SetSpatialRef(sp)
    dest.FlushCache()
}
```
