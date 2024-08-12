---
date: 2024-08-12
tags:
  - gdal
categories:
  - GIS相关
---

# 使用 gdal 进行 tif 文件的裁剪

1. 创建 gpkg

```Kotlin

    fun createGpkgByStr(dataPath: String, geojson: String): String {
            val ctm = System.currentTimeMillis()
            val name = "temp$ctm"

            val path = dataPath + File.separator + "tmp" + File.separator + "${name}.gpkg"
            ogr.RegisterAll()

            val ds = ogr.GetDriverByName("GPKG").CreateDataSource(path)

            val sr = SpatialReference()
            sr.ImportFromEPSG(4326)
            val layer = ds.CreateLayer("temp", sr, 3)
            val feature = Feature(layer.GetLayerDefn())
            val geom = Geometry.CreateFromJson(geojson)
            geom.FlattenTo2D()
            feature.SetGeometry(geom)
            layer.CreateFeature(feature)

//            ds.FlushCache()
//            ds.SyncToDisk()
//            gdal.GDALDestroyDriverManager()
            return path
        }

```

2. 使用创建的 gpkg 对 tif 进行裁剪

```kotlin
   fun clipTif(dataPath: String, srcPath: String, destPath: String, geojson: String) {

            gdal.AllRegister()
//            val futureTask1 = FutureTask(CreateGpkgCallable(geojson))
//            val thread1 = Thread(futureTask1)
//            thread1.start()
//            val args = futureTask1.get()
            val args = createGeojsonByStr(dataPath, geojson)

            val vector: Vector<String> = Vector()
            val srcDs: Dataset = gdal.Open(srcPath, gdalconstConstants.GA_ReadOnly)
            "-overwrite  -t_srs EPSG:4326 -of GTiff -cutline $args -cl temp -crop_to_cutline"
                .split(" ").forEach { vector.add(it) }
            gdal.Warp(destPath, arrayOf(srcDs), WarpOptions(vector))
            val f = File(args)
            if (f.exists()) f.delete()
        }
```
