import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "sugarの博客",
      description: "",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
