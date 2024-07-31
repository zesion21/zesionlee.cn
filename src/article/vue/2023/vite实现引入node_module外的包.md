---
title: vite实现引入node_module外的包
date: 2023-05-08
tags:
  - vue
  - vite
categories:
  - Vue
---

> 参考地址：http://mars3d.cn/doc.html#start/download

#### 步骤

- 新建一个文件夹 `packages`
- 将需要替换的包（这里以 mars3d 为例）从`node_modules/mars3d/`拷贝放在`packages/mars3d/`目录
- 修改`package.json`中 mars3d 包配置为：`"mars3d": "file:packages/mars3d"`,
- 删除`node_modules`重新`npm install`安装依赖

![](http://mars3d.cn/dev/img/guide/start-download-import.jpg)

这样就会在`node_modules`生成一个指向外部文件夹的快捷方式

#### 其他说明

vite 时需要排除（如果已有 packages 可以忽略修改）,如果原有项目有其他配置也不要删除其他值

```js
build: {
  commonjsOptions: {
    //默认内部只处理了node_modules，需要将"packages/"也标识处理
    include: /node_modules|packages/
  },
  //已忽略其他配置
}

```
