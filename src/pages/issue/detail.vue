<script setup>

import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { issueDetailTableHead } from './model'
import ListTitle from '@/components/customTitle'
import Table from '../enterpriseInfo/components/Table'


onLoad((option) => {
  data.value = JSON.parse(decodeURIComponent(option.data))
  formatData()
})

const data = ref({})

const imgs = ref([])

const formatData = () => {
  data.value.type === 1 ? data.value.type = '包企领导' : data.value.type = '企业问题'
  data.value.isReply === 1 ? data.value.isReply = '未回复' : data.value.isReply = '已回复'
  if (data.value.imgs) {
    data.value.imgs.split(',').map(async (item) => {
      const res = await downLoadFile(Number(item))
      let blob = new Blob([res])
      let fileReader = new FileReader()
      let url = window.URL.createObjectURL(blob)
      imgs.value.push(url)
    })
  }
}
</script>

<template>
  <div class='container padding_all_10'>
    <ListTitle title-text='问题详情'></ListTitle>
    <Table :info-table-head='issueDetailTableHead' :info='data'></Table>
    <template v-if='data.imgs'>
      <ListTitle title-text='图片'></ListTitle>
      <div class='imgs' v-if='imgs.length'>
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
