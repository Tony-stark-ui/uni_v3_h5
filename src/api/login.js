import { useRequest } from '@/hooks/useRequest'

//获取登录url
const login = (enterpriseId = -1) => {
  return useRequest(`/wap/wx/getUrl?enterpriseId=${enterpriseId} GET`)
}

//游客登录
const touristLogin = (data) => {

  return useRequest(`/wap/wx/login POST`, { data })
}


export {
  login,
  touristLogin,
}
