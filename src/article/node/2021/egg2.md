---
title: Egg 学习笔记（二） 之 运行环境 与 配置
date: 2021-07-29
tags:
  - egg
categories:
  - Node
---

## 运行环境

一个 Web 应用本身应该是无状态的，并拥有根据运行环境设置自身的能力。  
原文档地址：[运行环境](https://eggjs.org/zh-cn/basics/env.html)

## 指定运行环境

通过 `config/env` 文件指定，该文件的内容就是运行环境，如 `prod`。

```
// config/env
prod
```

## 应用内获取运行环境

框架提供了变量`app.config.env`来表示应用当前的运行环境。

## 自定义环境

常规开发流程可能不仅仅只有以上几种环境，Egg 支持自定义环境来适应自己的开发流程。

比如，要为开发流程增加集成测试环境 SIT。将 `EGG_SERVER_ENV` 设置成 sit（并建议设置 N`ODE_ENV = production`），启动时会加载 `config/config.sit.js`，运行环境变量 `app.config.env` 会被设置成 sit。

## Config 配置

框架提供了强大且可扩展的配置功能，可以自动合并应用、插件、框架的配置，按顺序覆盖，且可以根据环境维护不同的配置。合并后的配置可直接从 `app.config` 获取

### 多环境配置

框架支持根据环境来加载配置，定义多个环境的配置文件，具体环境请查看[运行环境配置](https://eggjs.org/zh-cn/basics/env.html)

```
config
|- config.default.js
|- config.prod.js
|- config.unittest.js
`- config.local.js
```

`config.default.js` 为默认的配置文件，所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件。  
当指定 env 时会同时加载默认配置和对应的配置(具名配置)文件，具名配置和默认配置将合并(使用 extend2 深拷贝)成最终配置，具名配置项会覆盖默认配置文件的同名配置。如 `prod` 环境会加载 `config.prod.js` 和 `config.default.js `文件，`config.prod.js` 会覆盖 `config.default.js` 的同名配置。

### 配置写法

配置文件返回的是一个 object 对象，可以覆盖框架的一些配置，应用也可以将自己业务的配置放到这里方便管理。

```js
// 配置 logger 文件的目录，logger 默认配置由框架提供
module.exports = {
  logger: {
    dir: "/home/admin/logs/demoapp",
  },
};
```

配置文件也可以简化的写成 `exports.key = value` 形式

```js
exports.keys = "my-cookie-secret-key";
exports.logger = {
  level: "DEBUG",
};
```

配置文件也可以返回一个 function，可以接受 appInfo 参数

```js
// 将 logger 目录放到代码目录下
const path = require("path");
module.exports = (appInfo) => {
  return {
    logger: {
      dir: path.join(appInfo.baseDir, "logs"),
    },
  };
};
```
