import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  {
    text: "博文",
    icon: "pen-to-square",
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
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
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
