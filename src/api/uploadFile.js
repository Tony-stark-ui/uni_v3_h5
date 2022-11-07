import { useRequest } from '@/hooks/useRequest'

//通用单文件上传接口
const uoloadFile = (enterpriseId = -1) => {
  return useRequest(`/file/upload POST`)
}

//根据id下载文件
const downLoadFile = (id) => {
  return useRequest(`/file/download?id=${id} GET`, { responseType: 'arraybuffer' },
  )
}


export {
  uoloadFile,
  downLoadFile,
}
