import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "ch", // 默认语言
  legacy: false, // 使用CompotitionAPI
  messages: {
    globalInjection: true,
    "zh-CN": require("./zh-CN.js"),
    "en-US": require("./en-US.js"),
  },
});
export default i18n;
