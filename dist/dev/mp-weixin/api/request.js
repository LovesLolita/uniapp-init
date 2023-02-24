"use strict";
const common_vendor = require("../common/vendor.js");
class Request {
  constructor() {
    this.baseUrl = " https://mock.mengxuegu.com/mock/63efca5cc5a76a117cab1022/myReduxTest";
    this.timeout = 5e3;
  }
  // 封装GET请求
  GET(url, data) {
    return this.request("GET", url, data);
  }
  // 封装POST请求
  POST(url, data) {
    return this.request("POST", url, data);
  }
  // 发起请求的方法
  request(method, url, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        // 拼接完整的请求URL
        url: this.baseUrl + url,
        // 请求方法（GET或POST）
        method,
        // 请求数据
        data,
        // 请求超时时间
        timeout: this.timeout,
        // 请求成功的回调函数
        success: (res) => {
          resolve(res.data);
        },
        // 请求失败的回调函数
        fail: (error) => {
          reject(error);
        }
      });
    });
  }
}
const API = new Request();
exports.API = API;
