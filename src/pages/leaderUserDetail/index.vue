<script setup>

import { tableConfig } from './model'

import ListTitle from '@/components/customTitle'
import Table from '@/components/customLTable'

onLoad((option) => {
  serviceDetail.value = JSON.parse(option.data)
  if (serviceDetail.value.imgs) {
    formatData()
  }

})


const serviceDetail = ref({})

const imgs = ref([])

const formatData = () => {
  serviceDetail.value.imgs.split(',').map(async (item) => {
    const res = await downLoadFile(Number(item))
    let blob = new Blob([res])
    let url = window.URL.createObjectURL(blob)
    imgs.value.push(url)
  })
}


</script>

<template>
  <div class='container padding_all_10'>
    <ListTitle title-text='内容详情'></ListTitle>
    <Table :infoTableHead='tableConfig' :info='serviceDetail'></Table>
    <template v-if='serviceDetail.isEval === 2'>
      <ListTitle title-text='服务评价'></ListTitle>
      <uni-rate :readonly='true' :value='serviceDetail.star' />
    </template>
    <template v-if='imgs.length'>
      <ListTitle title-text='服务图片'></ListTitle>
      <div class='imgs'>
        <image
          v-for='(item,index) in imgs'
          @click='util_previewImage(index,imgs)'
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
