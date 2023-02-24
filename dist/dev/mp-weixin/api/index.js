"use strict";
const api_request = require("./request.js");
const API = {
  // get 请求示例
  getList: (params) => {
    return api_request.API.GET(`/getList`, params);
  }
};
exports.API = API;
