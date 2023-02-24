class Request {
  constructor() {
    this.baseUrl = ' https://mock.mengxuegu.com/mock/63efca5cc5a76a117cab1022/myReduxTest'; // easy mock 数据
    this.timeout = 5000; // 请求超时时间
  }

  // 封装GET请求
  GET(url, data) {
    return this.request('GET', url, data);
  }

  // 封装POST请求
  POST(url, data) {
    return this.request('POST', url, data);
  }

  // 发起请求的方法
  request(method, url, data) {
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
      uni.request({
        // 拼接完整的请求URL
        url: this.baseUrl + url,
        // 请求方法（GET或POST）
        method: method,
        // 请求数据
        data: data,
        // 请求超时时间
        timeout: this.timeout,
        // 请求成功的回调函数
        success: (res) => {
          // 将请求结果作为Promise的成功值返回
          resolve(res.data);
        },
        // 请求失败的回调函数
        fail: (error) => {
          // 将请求错误作为Promise的失败值返回
          reject(error);
        }
      });
    });
  }
}
export default new Request()