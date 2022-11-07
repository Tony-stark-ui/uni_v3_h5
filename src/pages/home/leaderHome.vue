<script setup>

import { ref, reactive, onMounted } from 'vue'

import { leaderOperationBtns } from './model'
import { getLocalState } from '@/utils/util'


import Banner from './components/banner'
import OperationBtns from './components/operationBtns'
import ListTitle from '@/components/customTitle'
import List from '@/components/customList'
import ListItem from './components/listItem'


const listData = ref([])
const total = ref(0)


const params = reactive({
  companyName: '',
  pageNum: 1,
  pageSize: 10,
  status: '',
  uscCode: '',
  userId: getLocalState('user', 'userId'),
})

onMounted(() => {
  refresh()
})

const refresh = () => {
  params.pageNum = 1
  listData.value = []
  loadMore()
}

const loadMore = async () => {
  const res = await enterpriseInfoList(params)
  params.pageNum++
  total.value = res.data.total
  listData.value.push(...res.data.rows)
}

const handleToEnterprise = (data) => {
  uni.navigateTo({
    url: `/pages/enterpriseInfo/${data.status === 1 ? 'index' : 'enterpriseList'
    }?status=${data.status}&enterpriseId=${data.id}`,
  })
}


</script>

<template>
  <div class='container padding_all_10'>
    <Banner></Banner>
    <OperationBtns :data='leaderOperationBtns'></OperationBtns>
    <ListTitle title-text='企业信息'></ListTitle>
    <List v-if='total' :total='total' :list-data='listData' @handleScrollMore='loadMore'>
      <template #default='{data}'>
        <ListItem :info='data' @click='handleToEnterprise(data)'></ListItem>
      </template>

    </List>
    <u-empty
      v-else
      mode='car'
      icon='http://cdn.uviewui.com/uview/empty/data.png'
    >
    </u-empty>
  </div>
</template>

<style scoped lang='scss'></style>
