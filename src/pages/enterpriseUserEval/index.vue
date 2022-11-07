<script setup>
import { codeMsg } from '@/enum/base'

import ListTitle from '@/components/customTitle'
import { handleEval } from '../../api/enterpriseUser'

onLoad((option) => {
  params.id = Number(option.id)
})

const params = reactive({
  id: '',
  reply: '',
  star: '',
})

const handleCommit = async () => {
  if (!params.reply || !params.star) {
    return uni.showToast({
      title: '评价内容和评分不能为空',
      icon: 'none',
    })
  }
  const res = await handleEval(params)
  if (res.msg === codeMsg.success) {
    uni.showToast({
      title: '评价成功',
    })
    uni.navigateBack()

  }
}
</script>

<template>
  <div class='container padding_all_10'>
    <ListTitle title-text='评价内容'></ListTitle>
    <u--textarea v-model='params.reply' placeholder='请输入内容' count></u--textarea>
    <div class='star margin-top-20'>
      <ListTitle title-text='服务评分'></ListTitle>
      <u-rate :size='24' :count='5' v-model='params.star'></u-rate>
    </div>
    <u-button class='margin-top-20' @click='handleCommit' type='primary' text='提交'></u-button>
  </div>
</template>

<style scoped lang='scss'></style>
