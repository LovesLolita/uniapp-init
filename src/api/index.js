import  API from './request'

export default {
  // get 请求示例
  getList: (params) => {
    return API.GET(`/getList`,params)
  },
  // post 请求
   // get 请求示例
   getLoveList: (params,query) => {
    return API.POST(`/getLoveList?id=${params.id}`,query)
  }
}