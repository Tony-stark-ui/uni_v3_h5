import { useRequest } from '@/hooks/useRequest'

//服务内容列表
const serviceList = (data) => {
  return useRequest(`/wap/enterprise/serviceList POST`, { data })
}

//我提交的问题列表
const myQuestionList = (data) => {
  return useRequest(`/wap/enterprise/myQuestionList POST`, { data })
}

//包企干部信息
const getLeader = (enterpriseId) => {
  return useRequest(`/wap/enterprise/getLeader?enterpriseId=${enterpriseId} GET`)
}

//新增问题
const addQuestion = (data) => {
  return useRequest(`/wap/enterprise/addQuestion POST`, { data })
}

//评价
const handleEval = (data) => {
  return useRequest(`/wap/enterprise/eval POST`, { data })
}

export {
  serviceList,
  myQuestionList,
  getLeader,
  addQuestion,
  handleEval,
}
