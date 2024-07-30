import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/posts/",
  {
    text: "博文",
    // icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      // },
      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      // },
      { text: "GIS相关", icon: "pen-to-square", link: "/category/linux/" },
      { text: "Linux", icon: "pen-to-square", link: "/category/linux/" },
      // "tomato",
      // "strawberry",
    ],
  },
  {
    text: "时间轴",
    icon: "timeline",
    link: "/timeline/",
  },
  {
    text: "关于我",
    icon: "timeline",
    link: "/intro.html",
  },
]);
