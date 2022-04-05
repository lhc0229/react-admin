import axios from 'axios'
import { message } from 'antd'
import { store } from '@/store'

// 创建axios实例
const http = axios.create({
  baseURL: '',
  withCredentials: true
})

// request 拦截
http.interceptors.request.use(
  config => {
    config.url = `${process.env.REACT_APP_BASE_API}${config.url}`
    const token = store.getState().user.token
    if (token) {
      config.headers['X-Token'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截
http.interceptors.response.use(
  response => {
    // 下载文件不拦截, 设置返回数据的content-type类型
    const headers = ['application/octet-stream', 'application/x-msdos-program', 'application/x-zip-compressed', 'application/zip', 'text/plain; charset=utf-8']
    if (headers.includes(response.headers['content-type'])) {
      return response.data
    }
    const res = response.data

    if (res.code !== 0) {
      message.error(`抱歉，本次请求出现问题啦，${res.message}` || 'Error')
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    message.error(`抱歉，本次请求出现问题啦，${error.response.data.message}` || 'Error')
    return Promise.reject(error)
  }
)
export default http
