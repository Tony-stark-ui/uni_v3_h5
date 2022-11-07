<script setup>
import { onLoad, onShow } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
import { infoTableHead } from './config'
import { getLocalState } from '@/utils/util'

import ListTitle from '@/components/customTitle'
import Table from './components/Table'
import Tabs from '@/components/customTabs'


onLoad((option) => {
  enterpriseInfo.status = option.status
  enterpriseInfo.id = option.enterpriseId
})

onShow(() => {
  getDetail(enterpriseInfo.id)
})

const enterpriseInfo = reactive({
  id: '',
  status: '',
})
const info = ref({})

const getDetail = async (id) => {
  const res = await enterpriseDetail(id)
  info.value = res.data
}


const tabsData = reactive([
  {
    text: '企业信息',
    imgUrl: 'https://jsqapp.nybdr.cn/static/img/u155.ca816e63.png',
    active: 1,
  },
  {
    text: '信息变更',
    imgUrl: 'https://jsqapp.nybdr.cn/static/img/u155.ca816e63.png',
    active: 2,
  },
  // {
  //   text: '企业信息变更列表',
  //   imgUrl: 'https://jsqapp.nybdr.cn/static/img/u155.ca816e63.png',
  //   active: 3
  // }
])

const tabActive = ref(1)

const handleClick = async (item) => {
  tabActive.value = item.active
  switch (item.active) {
    case 1:
      break
    case 2:
      uni.navigateTo({
        url:
          `/pages/enterpriseInfo/index?status=${info.value.status}&enterpriseId=${info.value.id}&type=1`,
      })
      break

  }
}


</script>

<template>
  <div class='enterpriseInfo'>
    <Tabs :tabs-data='tabsData' @tabItemChange='handleClick'></Tabs>
    <ListTitle title-text='企业信息'></ListTitle>
    <Table :info-table-head='infoTableHead' :info='info'></Table>
    <div class='qrcode margin-top-20'>
      <ListTitle title-text='企业二维码'></ListTitle>
      <img :src='info.qcCode' alt='' />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.enterpriseInfo {
  padding: 10px 15px;
}
</style>
