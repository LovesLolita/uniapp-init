import  API from './request'

export default {
  // get 请求示例
  getList: (params) => {
    return API.GET(`/getList`,params)
  }
 
}