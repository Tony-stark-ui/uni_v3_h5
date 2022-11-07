<script setup>
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import ListTitle from '@/components/customTitle'
import Tabs from '@/components/customTabs'
import Table from '@/components/customTable'
import Pagination from '@/components/customPagination'

import { getLocalState } from '@/utils/util'
import { tabsData, tableColumns } from './model'


onLoad(() => {
  getServiceLogList()
})

const serviceListParams = reactive({
  pageNum: 1,
  pageSize: 10,
  isEval: 1,
  userId: getLocalState('user', 'userId'),
})

const serviceLogList = ref([])
const serviceLogListTotal = ref(0)

const getServiceLogList = async () => {
  const res = await serveLogList(serviceListParams)
  serviceLogList.value = res.data.rows
  serviceLogListTotal.value = res.data.total
}

const handleClick = (item) => {
  serviceListParams.isEval = item.active
  serviceListParams.pageNum = 1
  serviceLogList.value = []
  getServiceLogList()
}

const handleToDetail = (data) => {
  uni.navigateTo({
    url: `/pages/serveLog/detail?data=${encodeURIComponent(JSON.stringify(data))}`,
  })
}

const pageChange = (type, current) => {
  serviceListParams.pageNum = current
  getServiceLogList()
}
</script>

<template>
  <div class='serveLog'>
    <ListTitle title-text='服务记录'></ListTitle>
    <Tabs :tabs-data='tabsData' @tabItemChange='handleClick'></Tabs>
    <Table :tab-head='tableColumns' :tab-data='serviceLogList'>
      <template #operation='{data}'>
        <button type='primary' size='mini' @click='handleToDetail(data)'>查看</button>
      </template>
    </Table>
    <Pagination :total='serviceLogListTotal' @pageChange='pageChange'></Pagination>
  </div>
</template>

<style scoped lang='scss'></style>
