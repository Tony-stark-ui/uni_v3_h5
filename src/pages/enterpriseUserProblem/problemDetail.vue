<script setup>

import Form from '@/components/customForm'
import Title from '@/components/customTitle'
import { problemFormConfig } from './model'

const data = ref({})
const imgs = ref([])

onLoad((option) => {
  data.value = JSON.parse(option.data)
  if (data.value.imgs) {
    formatImg()
  }
})

const formatImg = () => {
  data.value.imgs.split(',').map(async (item) => {
    const res = await downLoadFile(Number(item))
    let blob = new Blob([res])
    let url = window.URL.createObjectURL(blob)
    imgs.value.push(url)
  })
}
</script>

<template>
  <div class='container padding_all_10'>
    <Title title-text='问题详情'></Title>
    <Form :form-data='data' :form-config='problemFormConfig'></Form>
    <template v-if='data.imgs'>
      <Title title-text='图片'></Title>
      <div class='imgs'>
        <image
          v-for='item in imgs'
          :key='item'
          mode='widthFix'
          :src='item'
        ></image>
      </div>
    </template>
  </div>
</template>

<style scoped lang='scss'>
.imgs {
  display: flex;
  flex-wrap: wrap;

  image {
    width: 50px;
    height: 50px;
  }
}
</style>
