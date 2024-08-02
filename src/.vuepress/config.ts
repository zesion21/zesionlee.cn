import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "全栈笔记",
  description: "全栈笔记,李泽琛,伶念,blog,博客,zesion,zesionlee",

  theme,
  head: [
    [
      "link",
      {
        href: "https://cdn-font.hyperos.mi.com/font/css?family=MiSans_VF:VF:Chinese_Simplify,Latin&display=swap",
        rel: "stylesheet",
      },
    ],

    [
      "link",
      {
        href: "https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,450,500,600,650,700,900:Chinese_Simplify,Latin&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "全栈笔记,李泽琛,伶念,blog,博客,zesion,zesionlee",
      },
    ],
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
