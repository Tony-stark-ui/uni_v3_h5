<script setup>
import { onMounted } from 'vue'

import { userOperationBtns, userListItemConfig } from './model'

import { getLocalState } from '@/utils/util'

import Banner from './components/banner'
import OperationBtns from './components/operationBtns'
import ListTitle from '@/components/customTitle'
import List from '@/components/customList'
import ListItem from './components/listItem'


const params = reactive({
  enterpriseId: getLocalState('user', 'enterpriseId'),
  pageNum: 1,
  pageSize: 10,
})

const list = ref([])
const total = ref(0)

onMounted(() => {
  refresh()
})

const refresh = () => {
  params.pageNum = 1
  list.value = []
  loadMore()
}

const loadMore = async () => {
  const res = await serviceList(params)
  params.pageNum++
  total.value = res.data.total
  list.value.push(...res.data.rows)
}

const handleToDetail = (data) => {
  uni.navigateTo({
    url: `/pages/leaderUserDetail/index?data=${encodeURIComponent(JSON.stringify(data))}`,
  })
}

</script>

<template>
  <div class='container'>
    <Banner></Banner>
    <OperationBtns :data='userOperationBtns'></OperationBtns>
    <ListTitle title-text='服务内容'></ListTitle>
    <List v-if='total' :total='total' :list-data='list' @handleScrollMore='loadMore'>
      <template #default='{data}'>
        <ListItem :config='userListItemConfig' :info='data'
                  @click='handleToDetail(data)'>
        </ListItem>
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
