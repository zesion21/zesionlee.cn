import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://zesionlee.com",

  author: {
    name: "阿琛",
    url: "http://zesionlee.com",
  },

  iconAssets: [
    "https://cdn.zesionlee.com/lib/fontawesome-free-6.6.0/js/solid.min.js",
    "https://cdn.zesionlee.com/lib/fontawesome-free-6.6.0/js/fontawesome.min.js",
    "https://cdn.zesionlee.com/lib/fontawesome-free-6.6.0/js/brands.min.js",
  ],

  logo: "/logo.png",

  repo: "https://github.com/zesion21/zesionlee.com",
  repoDisplay: true,
  docsDir: "src",
  docsBranch: "master",

  // 导航栏
  navbar,

  displayFooter: true,

  // 侧边栏
  sidebar: false,

  editLink: true,
  contributors: true,
  lastUpdated: true,
  pageInfo: [
    "Author",
    "Original",
    "Date",
    "PageView",
    "ReadingTime",
    "Category",
    "Tag",
  ],
  // 页脚
  footer: `<div>备案号: <a href="https://beian.miit.gov.cn/">京ICP备19037274号-1</a> </div>  <div>Copyright &copy 2021-2024 阿琛</div>  <div>Font: <a href="https://hyperos.mi.com/font" target="_blank" >MiSans</a> | Power By: <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a></div>`,
  copyright: ``,

  // 博客相关
  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",

      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",

      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",

      GitHub: "https://github.com/zesion21",
      Gitee: "https://gitee.com/zechen21/",
      Email: "mailto:zechen21@foxmail.com",
      // Gitlab: "https://example.com",
      Gmail: "mailto:zechen321@gmail.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",

      CSDN: {
        link: "https://blog.csdn.net/qq_32259239",
        icon: "http://zesionlee.com/assets/icon/csdn.svg",
      },
      BiliBili: "https://space.bilibili.com/32763783",
      Weibo: "https://weibo.com/u/7273288165",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
    sidebarDisplay: "none",
  },

  // 加密配置
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {},

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    seo: true,
    search: true,
    copyright: false,
    blog: true,
    git: true,
    sitemap: {
      changefreq: "always",
    },
    shiki: {
      themes: {
        dark: "monokai",
        light: "one-light",
      },
    },
    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Giscus",
      repoId: "R_kgDOM4r5hQ",
      repo: "zesion21/zesionlee.com",
      category: "Q&A",
      categoryId: "DIC_kwDOM4r5hc4Ci4z2",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
