---
title: postgresql 免安装版本 部署
date: 2023-04-20
tags:
  - postgres
categories:
  - 数据库
---

### 一、下载免安装的压缩包

官网地址：[https://www.enterprisedb.com/download-postgresql-binaries](https://www.enterprisedb.com/download-postgresql-binaries)

或者

网盘地址： 「PostgreSQL」

链接：[https://pan.baidu.com/s/1U9ZTYZ1OG2ihFnmLVE6MhQ?pwd=6jx5](https://pan.baidu.com/s/1U9ZTYZ1OG2ihFnmLVE6MhQ?pwd=6jx5)

提取码：6jx5

### 二、解压 zip 包，并创建一个 data 文件用来存放数据

```
D:\tools\postgres\pgsql\data
```

### 三、初始化数据库

以管理员身份运行 cmd，进入 bin 目录

```
 initdb.exe -D D:\tools\postgres\pgsql\data -E UTF-8 --locale=chs -U postgres -W
```

### 四、注册为系统服务

```
pg_ctl.exe register -N pgsql -D D:\tools\postgres\pgsql\data
```

### 五、安装 PostGIS

postgis 地址：[https://www.postgresql.org/ftp/](https://www.postgresql.org/ftp/)
