---
date: 2024-08-12
tag:
  - gdal
category:
  - GIS相关
---

# 关于 gdal 使用的一些总结（代码）

1. 获取 tif 的范围

```kotlin
fun getExtent(path: String) {
            gdal.AllRegister()
            val driver = gdal.GetDriverByName("GTiff")

            val dataset = gdal.Open(path)
            val x = dataset.rasterXSize
            val y = dataset.rasterYSize
            val transforme = dataset.GetGeoTransform()


            val west = transforme[0]
            val dx = transforme[1]
            val north = transforme[3]
            val dy = transforme[5]

            val east = west + dx * x
            val sourth = north + dy * y

            println("${west},${east},${north},${sourth} ")

//            val ds = ogr.Open(path)
//            println(layer.GetExtent())


        }
```

2. 合并多个 tif

```kotlin
      fun union(path0: String, name: String): String {
            gdal.AllRegister()

            val d0 = gdal.Open(path0)
            val d1 = gdal.Open("${base}img_cr/${name}")

            gdal.Warp("${base}union/${name}", listOf<Dataset>(d0, d1).toTypedArray(), null)

            //解决资源占用的问题
            gdal.GDALDestroyDriverManager()
            return "${base}union/${name}"

        }
```

3. 去除 tif 黑边（只能是 tif）

```kotlin
    fun nearBlack(photo: Photo) {
          gdal.AllRegister()
          val data = gdal.Open("${base}tif\\${photo.File}.tif")
          val vector = Vector<String>()
          "-of GTiff -setalpha".split(" ").forEach { vector.add(it) }
          gdal.Nearblack("${base}tif\\${photo.File}.tif", data, NearblackOptions(vector))
      }
```

4. 转为指定坐标系的 wkt

```kotlin
     val proj4_ = "+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs"

     private fun toWKt(feature: Feature): String {
            val geom = feature.GetGeometryRef()
            val proj4 = geom.GetSpatialReference().ExportToProj4()
            if (!proj4.equals(proj4_)) {
                val sp = SpatialReference()
                sp.ImportFromProj4(proj4_)
                geom.TransformTo(sp)
            }
            geom.FlattenTo2D()
            return geom.ExportToWkt()
        }
```

5. 将 tif 转为 rgb 三波段的 tif（可解决 union 时变花的问题）

```kotlin
fun handleListTif2Rgb(z: Int) {

    val vector = Vector<String>()
    vector.addElement("-expand")
    vector.addElement("RGB")

    val parent = "E:\\img2tif\\${z}_tif\\"
    val parent2 = "E:\\img2tif\\${z}_tif_rgb\\"
    for (it in File(parent).list()!!) {
        println("开始 $it")
        val yyy = File(parent + it).list()!!
        val datas = mutableListOf<Dataset>()
        if (!File("${parent2}\\${it}").exists()) File("${parent2}\\${it}").mkdir()
        for (i in yyy.indices) {
            val it2 = yyy[i]
            val outPath = "${parent2}\\${it}\\${it2}"
            if (!File(outPath).exists()) {
                val dsrc = gdal.Open("${parent}${it}\\${it2}")
                gdal.Translate(outPath, dsrc, TranslateOptions(vector))
            }
            datas.add(gdal.Open(outPath))
        }
        gdal.Warp("E:\\img2tif\\14_union\\$it.tif", datas.toTypedArray(), null)
    }
}
```

6. 通过重采样修改 tif 分辨率

- 使用 warp 方法
  > 参考：https://www.jianshu.com/p/821c741ff169

```py
gdal.Warp(tif_out, tif_input, resampleAlg=gdalconst.GRA_NearestNeighbour, xRes=500, yRes=500)
```

- 使用 GeoTransform
  > 引用： https://blog.csdn.net/gisuuser/article/details/106304155

```py
from osgeo import gdal, gdalconst
import os
import numpy as np


def resampling(source_file, target_file, scale=1.0):
    """
    影像重采样
    :param source_file: 源文件
    :param target_file: 输出影像
    :param scale: 像元缩放比例
    :return:
    """
    dataset = gdal.Open(source_file, gdalconst.GA_ReadOnly)
    band_count = dataset.RasterCount  # 波段数

    if band_count == 0 or not scale > 0:
        print("参数异常")
        return

    cols = dataset.RasterXSize  # 列数
    rows = dataset.RasterYSize  # 行数
    cols = int(cols * scale)  # 计算新的行列数
    rows = int(rows * scale)

    geotrans = list(dataset.GetGeoTransform())
    print(dataset.GetGeoTransform())
    print(geotrans)
    geotrans[1] = geotrans[1] / scale  # 像元宽度变为原来的scale倍
    geotrans[5] = geotrans[5] / scale  # 像元高度变为原来的scale倍
    print(geotrans)

    if os.path.exists(target_file) and os.path.isfile(target_file):  # 如果已存在同名影像
        os.remove(target_file)  # 则删除之

    band1 = dataset.GetRasterBand(1)
    data_type = band1.DataType
    target = dataset.GetDriver().Create(target_file, xsize=cols, ysize=rows, bands=band_count,
                                        eType=data_type)
    target.SetProjection(dataset.GetProjection())  # 设置投影坐标
    target.SetGeoTransform(geotrans)  # 设置地理变换参数
    total = band_count + 1
    for index in range(1, total):
        # 读取波段数据
        print("正在写入" + str(index) + "波段")
        data = dataset.GetRasterBand(index).ReadAsArray(buf_xsize=cols, buf_ysize=rows)
        out_band = target.GetRasterBand(index)
        out_band.SetNoDataValue(dataset.GetRasterBand(index).GetNoDataValue())
        out_band.WriteArray(data)  # 写入数据到新影像中
        out_band.FlushCache()
        out_band.ComputeBandStats(False)  # 计算统计信息
    print("正在写入完成")
    del dataset
    del target


if __name__ == "__main__":
    source_file = r"E:\商丘yx\相交4.tiff"
    target_file = r"E:\商丘yx\相交411.tiff"
    resampling(source_file, target_file, scale=1.1)
    target_file = r"E:\商丘yx\相交05.tiff"
    resampling(source_file, target_file, scale=0.5)

```
