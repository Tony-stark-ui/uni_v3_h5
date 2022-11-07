<script setup>
import { getLocalState, uploadFilePromise } from '@/utils/util'
import { formConfig } from './model'
import { codeMsg } from '@/enum/base'

import Form from '@/components/customForm'
import { reactive, ref } from 'vue'
import { addQuestion } from '../../api/enterpriseUser'

const form = ref('')

const addIssueParams = reactive({
  enterpriseId: getLocalState('user', 'enterpriseId'),
  content: '',
  imgs: '',
  title: '',
  type: 1,
  userId: getLocalState('user', 'userId'),
})

const fileList = ref([])

// 删除图片
const deletePic = (event) => {
  fileList.value.splice(event.index, 1)
}
// 新增图片
const afterRead = (event) => {
  let lists = [].concat(event.file)
  let fileListLen = fileList.value.length
  lists.map((item) => {
    fileList.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    })
  })
  lists.forEach(async (item) => {
    const result = await uploadFilePromise(item.url, '/file/upload')
    if (result.statusCode === 200) {
      let res = JSON.parse(result.data)
      let item = fileList.value[fileListLen]
      fileList.value.splice(fileListLen, 1, Object.assign(item, {
        status: 'success',
        message: '',
        id: res.data,
      }))
      fileListLen++
    }
  })
}

const handleCommit = () => {
  addIssueParams.imgs = fileList.value.map(item => item.id).toString()
  form.value.form.validate().then(() => {
    commit()
  })
}

const commit = async () => {
  const res = await addQuestion(addIssueParams)
  if (res.msg === codeMsg.success) {
    uni.showToast({
      title: '提交成功',
    })
    uni.navigateBack()

  }
}
</script>

<template>
  <div class='container padding_all_10'>
    <Form ref='form' :form-data='addIssueParams' :form-config='formConfig'>
      <template #imgs>
        <u-upload
          :file-list='fileList'
          name='1'
          multiple
          capture
          :max-count='10'
          @afterRead='afterRead'
          @delete='deletePic'
        ></u-upload>
      </template>
    </Form>

    <u-button
      type='primary'
      size='small'
      text='提交'
      @click='handleCommit'>
    </u-button>
  </div>
</template>

<style scoped lang='scss'></style>
