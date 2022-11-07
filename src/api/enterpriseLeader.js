import { useRequest } from '@/hooks/useRequest'

//企业信息列表
const enterpriseInfoList = (data) => {
  return useRequest(`/wap/leader/list POST`, { data })
}

//企业信息完善
const enterpriseEdit = (data) => {
  return useRequest(`/wap/leader/edit POST`, { data })
}

//企业信息详情
const enterpriseDetail = (id) => {
  return useRequest(`/wap/leader/detail?id=${id} GET`)
}

//企业信息变更
const enterpriseChange = (data) => {
  return useRequest(`/wap/leader/change POST`, { data })
}

//企业信息变更列表
const enterpriseChangeList = (data) => {
  return useRequest(`/wap/leader/changeList POST`, { data })
}

//服务记录列表
const serveLogList = (data) => {
  return useRequest(`/wap/leader/serviceList POST`, { data })
}

//新增服务内容
const addService = (data) => {
  return useRequest(`/wap/leader/addService POST`, { data })
}

//  新增问题
const addIssue = (data) => {
  return useRequest(`/wap/leader/addQuestion POST`, { data })
}

//  问题列表
const getIssueLists = (data) => {
  return useRequest(`/wap/leader/myQuestionList POST`, { data })
}

export {
  enterpriseInfoList,
  enterpriseEdit,
  enterpriseDetail,
  enterpriseChange,
  enterpriseChangeList,
  serveLogList,
  addService,
  addIssue,
  getIssueLists,
}
