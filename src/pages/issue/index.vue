<script setup>
import { computed, reactive, ref } from 'vue'

import ListTitle from '@/components/customTitle'
import Tabs from '@/components/customTabs'
import List from '@/components/customList'
import ListItem from '@/components/customList/listItem'
import Table from '@/components/customTable'
import Pagination from '@/components/customPagination'

import { tabsData, tableColumns } from './model'

import { getLocalState } from '@/utils/util'
import { onLoad } from '@dcloudio/uni-app'

onLoad(() => {
  getEnterpriseList()
})

const tabAtive = ref(1)

const enterpriseParams = reactive({
  params: {
    pageNum: 1,
    pageSize: 10,
    userId: getLocalState('user', 'userId'),
  },
  list: [],
  total: 0,
})

const issueParams = reactive({
  params: {
    pageNum: 1,
    pageSize: 10,
    userId: getLocalState('user', 'userId'),
  },
  list: [],
  total: 0,
})

const titleText = computed(() => {
  return tabAtive.value === 1 ? '企业列表' : '问题列表'
})

const loadMore = () => {
  if (tabAtive.value === 1) {
    enterpriseParams.params.pageNum++
    getEnterpriseList()
  } else {
    issueParams.params.pageNum++
    getIssueList()
  }
}

const getEnterpriseList = async () => {
  const res = await enterpriseInfoList(enterpriseParams.params)
  enterpriseParams.list.push(...res.data.rows)
  enterpriseParams.total = res.data.total
}

const getIssueList = async () => {
  const res = await getIssueLists(issueParams.params)
  issueParams.list.push(...res.data.rows)
  issueParams.total = res.data.total
}

const handleTabsClick = (item) => {
  tabAtive.value = item.active
  if (tabAtive.value === 1) {
    enterpriseParams.params.pageNum = 1
    enterpriseParams.list = []
    getEnterpriseList()
  } else {
    issueParams.params.pageNum = 1
    issueParams.list = []
    getIssueList()
  }
}

const handleAddIssue = (id) => {
  uni.navigateTo({
    url: `/pages/issue/addIssue?enterpriseId=${id}`,
  })
}

const handleToDetail = (data) => {
  uni.navigateTo({
    url: `/pages/issue/detail?data=${encodeURIComponent(JSON.stringify(data))}`,
  })
}

const pageChange = (type, current) => {
  issueParams.params.pageNum = current
  getIssueList()
}

</script>

<template>
  <div class='issue padding_all_10'>
    <Tabs :tabs-data='tabsData' @tabItemChange='handleTabsClick' />
    <ListTitle :title-text='titleText' />
    <template v-if='tabAtive === 1'>
      <List
        v-if='enterpriseParams.total'
        total='enterpriseParams.total'
        :list-data='enterpriseParams.list'
        @handleScrollMore='loadMore'
      >
        <template #default='{data}'>
          <ListItem :info='data' @click='handleAddIssue(data.id)'></ListItem>
        </template>
      </List>
      <u-empty
        v-else
        mode='car'
        icon='http://cdn.uviewui.com/uview/empty/data.png'
      >
      </u-empty>
    </template>
    <template v-else>
      <Table :tab-head='tableColumns' :tab-data='issueParams.list'>
        <template #operation='{data}'>
          <button type='primary' size='mini' @click='handleToDetail(data)'>查看</button>
        </template>
      </Table>
      <Pagination :total='issueParams.total' @pageChange='pageChange'></Pagination>
    </template>
  </div>
</template>

<style scoped lang='scss'></style>
