"use strict";
const api_request = require("./request.js");
const API = {
  // get 请求示例
  getList: (params) => {
    return api_request.API.GET(`/getList`, params);
  },
  // post 请求
  // get 请求示例
  getLoveList: (params, query) => {
    return api_request.API.POST(`/getLoveList?id=${params.id}`, query);
  }
};
exports.API = API;
