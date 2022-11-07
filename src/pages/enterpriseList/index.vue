<script setup>
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { tabHead } from './config'
import { getLocalState } from '@/utils/util'

import List from '@/components/customList'
import ListItem from '@/components/customList/listItem'


const params = reactive({
  companyName: '',
  pageNum: 1,
  pageSize: 10,
  status: '',
  uscCode: '',
  userId: getLocalState('user', 'userId'),
})

const total = ref(0)

const tabData = ref([])

onLoad(() => {
  getList()
})

const getList = async () => {
  const res = await enterpriseInfoList(params)
  total.value = res.data.total
  tabData.value.push(...res.data.rows)
}

const loadMore = () => {
  params.pageNum++
  getList()
}

const handleSearch = (val) => {
  params.companyName = val
  params.pageNum = 1
  tabData.value = []
  getList()
}

const handleToEnterprise = (data) => {
  uni.navigateTo({
    url: `/pages/fillServe/scanQrCode`,
  })
}
</script>

<template>
  <div class='container padding_all_10'>
    <u-search
      :show-action='true'
      action-text='搜索'
      :animation='true'
      @search='handleSearch'
      @clear='handleSearch'
      @custom='handleSearch'
    ></u-search>
    <List class='padding_all_10' :total='total' :list-data='tabData' @handleScrollMore='loadMore'>
      <template #default='{data}'>
        <ListItem :info='data' @click='handleToEnterprise(data)'></ListItem>
      </template>

    </List>
  </div>
</template>

<style scoped lang='scss'>

</style>
