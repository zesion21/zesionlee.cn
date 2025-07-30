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
        href: "https://www.zesionlee.cn/lib/fonts/MiSans_Latin_VF/result.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://www.zesionlee.cn/lib/fonts/iconfonts/iconfont.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://www.zesionlee.cn/lib/fonts/MiSans_VF/result.css",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://www.zesionlee.cn/lib/fonts/MiSans/style.css",
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
