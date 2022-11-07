import config from '@/config'

//判断url中包含某个参数
const isHasParamsUrl = (url, params) => {
  const u = new URL(url)
  return u.searchParams.has(params)
}

//截取url中的某个参数
const getUrlParams = (url, params) => {
  const u = new URL(url)
  return u.searchParams.get(params)
}

//获取本地存储数据
const getLocalState = (key, value) => {
  let data = uni.getStorageSync(key)
  if (value) {
    if (data) {
      return JSON.parse(data)[value]
    }
  } else {
    if (data) {
      return JSON.parse(data)[value]
    }
  }

}

//上传图片
const uploadFilePromise = (locaUrl, serveUrl) => {
  return new Promise((res, rej) => {
    uni.uploadFile({
      url: `${config.VITE_APP_BASE_URL}${serveUrl}`, // 仅为示例，非真实的接口地址
      filePath: locaUrl,
      name: 'file',
      header: {
        token: uni.getStorageSync('token') || '',
      },
      success: (result) => {
        res(result)
      },
    })
  })
}

//图片流转换base64
const baseImg = (data) => {
  let basr64Url = ''
  let blob = new Blob([data])
  basr64Url = window.URL.createObjectURL(blob)
  return basr64Url
}

// 网络请求状态解析
const throwErr = (code, url) => {
  let message = ''
  switch (code) {
    case 400:
      message = '请求错误'
      break
    case 401:
      message = '未授权，请登录'
      break
    case 403:
      message = '拒绝访问'
      break
    case 404:
      message = `请求地址出错: ${url}`
      break
    case 405:
      message = '请求错误'
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器内部错误'
      break
    case 501:
      message = '服务未实现'
      break
    case 502:
      message = '网关错误'
      break
    case 503:
      message = '服务不可用'
      break
    case 504:
      message = '网关超时'
      break
    case 505:
      message = 'HTTP版本不受支持'
      break
    default:
  }
  return message
}

//多张图片预览
const previewImage = (index, image) => {
  let imgList = image.map(item => {
    return item
  })
  uni.previewImage({
    current: index,
    urls: imgList,
  })
}


export {
  isHasParamsUrl,
  getUrlParams,
  getLocalState,
  uploadFilePromise,
  baseImg,
  throwErr,
  previewImage,
}
