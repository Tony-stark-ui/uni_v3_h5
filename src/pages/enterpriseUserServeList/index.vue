<script setup>
import { userListItemConfig } from './model'
import { tabsData } from './model'

import { getLocalState } from '@/utils/util'

import Tabs from '@/components/customTabs'
import ListTitle from '@/components/customTitle'
import List from '@/components/customList'
import ListItem from '@/components/customList/listItem'
import { computed, onMounted } from 'vue'

const params = reactive({
  enterpriseId: getLocalState('user', 'enterpriseId'),
  pageNum: 1,
  pageSize: 10,
  isEval: 1,
})

const list = ref([])
const total = ref(0)

onLoad((option) => {
  isEval.value = option.eval
})

const isEval = ref('')

const titleText = computed(() => {
  return params.isEval === 1 ? '未评价' : '已评价'
})

onShow(() => {
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

const handleClick = (item) => {
  params.isEval = item.active
  params.pageNum = 1
  list.value = []
  loadMore()
}

const handleToDetail = (data) => {
  if (isEval.value) {
    uni.navigateTo({
      url: `/pages/enterpriseUserEval/index?id=${data.id}`,
    })
  } else {
    uni.navigateTo({
      url: `/pages/leaderUserDetail/index?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  }

}
</script>

<template>
  <div class='container padding_all_10'>
    <Tabs v-if='!isEval' :tabs-data='tabsData' @tabItemChange='handleClick'></Tabs>
    <ListTitle :title-text='titleText'></ListTitle>
    <List v-if='total' :total='total' :list-data='list' @handleScrollMore='loadMore'>
      <template #default='{data}'>
        <ListItem :config='userListItemConfig' :info='data'
                  @click='handleToDetail(data)'>
        </ListItem>
      </template>

    </List>
    <u-empty
      v-else
      icon='http://cdn.uviewui.com/uview/empty/data.png'
    >
    </u-empty>
  </div>
</template>

<style scoped lang='scss'></style>
