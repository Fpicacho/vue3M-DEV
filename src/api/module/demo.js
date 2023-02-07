import fetch from "../fetch.js";
export default {
  // Demo获取一个列表
  getDemoList(params) {
    return fetch.get("/comments", params);
  },
};
