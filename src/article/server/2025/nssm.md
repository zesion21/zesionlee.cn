---
title: 在 windows 上使用 nssm 注册服务
date: 2025-08-12
tags:
  - windows
categories:
  - Server
---

### 一、安装 nssm

下载 nssm：[https://nssm.cc/download](https://nssm.cc/download)

### 二、注册服务

```bash
#注册 rclone mount 为服务
nssm install RcloneMount D:\rclone-v1.70.3-windows-amd64\rclone mount minio:back-bucket Y:\  --links --vfs-cache-mode writes

#启动服务
nssm start RcloneMount

#注册geosevrer 为服务
nssm install GeoServer D:\geoserver-2.18.2\bin\start.bat

#启动服务
nssm start GeoServer  #注意使用时将nssm复制一份到geoserver目录下

```

### 三、给服务添加依赖

添加依赖：`nssm set <服务名> DependOnService <依赖服务名>`

```bash
nssm.exe set GeoServer DependOnService RcloneMount
```
