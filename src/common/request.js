/*
 * @FilePath: \uni-preset-vue-vite\src\common\request.js
 * @Date: 2022-10-01 23:57:23
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-10-02 02:21:40
 * @Description: 请求封装 https://uniajax.ponjs.com/
 */

import ajax from 'uni-ajax'
import {
  MethodEnum,
  TOKEN,
  whiteList,
} from '@/enum/commonEnum'

const env = util_useEnv()

const request = ajax.create({
  baseURL: env.VITE_BASE_URL,
  timeout: env.VITE_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  dataType: 'json',
  responseType: 'text',
  validateStatus: statusCode => statusCode >= 200 && statusCode < 300,
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log('请求拦截')
    config.header.token = uni.getStorageSync(TOKEN) ?? ''
    if (config.method === MethodEnum.POST) {
      config.header.ContentType = 'application/x-www-form-urlencoded'
    }

    uni.showLoading({
      title: '加载中',
    })
    uni.showNavigationBarLoading()
    return config
  },
  error => {
    console.log(error)
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  res => {
    console.log('响应拦截')
    uni.hideLoading()
    uni.hideNavigationBarLoading()

    let result = res.data

    if (result.code === 401) {
      return uni.redirectTo({
        url: '/pages/login/index',
      })
    }

    /*外层浏览器状态码*/
    if (!whiteList.includes(res.statusCode)) {
      return uni.showToast({
        duration: 2500,
        icon: 'none',
        title: throwErr(res.statusCode, url),
      })
    }

    /*内层服务器状态码*/
    if (result.code !== 0 && result.code !== 200 && result.code) {
      return uni.showToast({
        duration: 2500,
        icon: 'none',
        title: result.msg || result.message,
      })
    }

    // 对响应数据做点什么
    return res.data
  },
  error => {
    // 对响应错误做点什么
    uni.hideLoading()
    uni.hideNavigationBarLoading()
    uni.showToast({
      duration: 2500,
      title: error.errMsg || '出错啦',
      icon: 'none',
    })

    return Promise.reject(error)
  },
)

export { request }
