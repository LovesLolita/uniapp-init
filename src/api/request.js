class Request {
  constructor() {
    this.initRequest()
  }

  initRequest = () => {
    this.baseUrl =
      ' https://mock.mengxuegu.com/mock/63efca5cc5a76a117cab1022/myReduxTest' // easy mock 数据
    this.timeout = 5000 // 请求超时时间
    this.headers = {
      'content-type': 'application/json',
      token: 'default_token'
    }
    // 初始化
    this.interceptors = {
      request: [],
      response: []
    }
  }

  // 封装GET请求
  GET(url, data) {
    return this.request('GET', url, data)
  }

  // 封装POST请求
  POST(url, data) {
    return this.request('POST', url, data)
  }

  // 发起请求的方法
  request(method, url, data) {
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
      // 发送请求前，调用请求拦截器的回调函数
      this.interceptors.request.forEach((interceptor) => {
        console.log(interceptor);
        const { url: interceptorUrl, method: interceptorMethod, data: interceptorData } = interceptor;
        if (!interceptorUrl || interceptorUrl === url) {
          if (!interceptorMethod || interceptorMethod === method) {
            if (!interceptorData || JSON.stringify(interceptorData) === JSON.stringify(data)) {
              ({ url, method, data } = interceptor.callback(url, method, data));
              this.headers = {
                ...this.headers,
                ...interceptor.headers
              };
              console.log(interceptor.headers);
            }
          }
        }
      })
      uni.request({
        // 拼接完整的请求URL
        url: this.baseUrl + url,
        // 请求方法（GET或POST）
        method: method,
        // 请求数据
        data: data,
        // 请求头
        header: this.headers,
        // 请求超时时间
        timeout: this.timeout,
        // 请求成功的回调函数
        success: (res) => {
          this.interceptors.response.forEach((interceptor) => {
            const { statusCode, data: responseData } = res
            if (
              !interceptor.statusCode ||
              interceptor.statusCode === statusCode
            ) {
              if (
                !interceptor.responseData ||
                JSON.stringify(interceptor.responseData) ===
                  JSON.stringify(responseData)
              ) {
                res = interceptor.callback(res)
              }
            }
          })
          if (res.statusCode === 200) {
            resolve(res.data)
          } else {
            reject(res)
          }
        },
        // 请求失败的回调函数
        fail: (error) => {
          // 将请求错误作为Promise的失败值返回
          reject(error)
        }
      })
    })
  }

  // 添加请求拦截器
  addRequestInterceptor(interceptor) {
    this.interceptors.request.push(interceptor)
  }

  // 添加响应拦截器
  addResponseInterceptor(interceptor) {
    this.interceptors.response.push(interceptor)
  }
}
const request = new Request()
// 添加请求拦截器
request.addRequestInterceptor({
  callback: (url, method, data) => {
    return {
      url,
      method,
      data,
      headers: {
        ...request.headers, // 将默认的请求头部信息添加到请求中
        token: 'your_token' // 修改或添加特定的请求头部信息，例如 token
      }
    }
  }
})

// 添加响应拦截器
request.addResponseInterceptor({
  callback: (res) => {
    // 在响应拦截器中，可以对响应进行修改，或者添加响应头等操作
    return res
  }
})

export default request
