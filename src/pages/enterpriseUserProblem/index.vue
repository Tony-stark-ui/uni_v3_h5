<script setup>
import { computed, onMounted } from 'vue'

import { tabsData } from './model'

import Tabs from '@/components/customTabs'
import ListTitle from '@/components/customTitle'
import List from '@/components/customList'
import ListItem from '@/components/customList/listItem'

const params = reactive({
  pageNum: 1,
  pageSize: 10,
  enterpriseId: util_getLocalState('user', 'enterpriseId'),
})

const list = ref([])
const total = ref(0)


onMounted(() => {
  refresh()
})

const isReply = computed(() => (type) => {
  return type === 1 ? '未回复' : '已回复'
})

const refresh = () => {
  params.pageNum = 1
  list.value = []
  loadMore()
}

const loadMore = async () => {
  const res = await myQuestionList(params)
  params.pageNum++
  total.value = res.data.total
  list.value.push(...res.data.rows)
}

const handleClick = (item) => {
  if (item.active === 2) {
    uni.navigateTo({
      url: '/pages/enterpriseUserProblem/feedBack',
    })
  }
}

const handleProblemClick = (data) => {
  uni.navigateTo({
    url: `/pages/enterpriseUserProblem/problemDetail?data=${encodeURIComponent(JSON.stringify(data))}`,
  })
}
</script>

<template>
  <div class='container padding_all_10'>
    <Tabs :tabs-data='tabsData' @tabItemChange='handleClick'></Tabs>
    <ListTitle title-text='我提交的问题列表'></ListTitle>
    <List v-if='total' :total='total' :list-data='list' @handleScrollMore='loadMore'>
      <template #default='{data}'>
        <div class='listtItem' @click='handleProblemClick(data)'>
          <div class='box padding_all_10'>
            <div class='title'>{{ data.title }}</div>
            <div class='content textRow2 margin-top-10'>
              {{ data.content }}
            </div>
            <div class='footer margin-top-20 flex-sb'>
              <div class='left' :class='data.isReply===2?"ReplyClass":""'>{{ isReply(data.isReply)
                }}
              </div>
              <div class='right'>{{ data.createTime }}</div>
            </div>
          </div>
        </div>
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

<style scoped lang='scss'>

.box {
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 8px 0;

  .title {
    color: #0079FE;
  }

  .footer {
    color: #aaa;
    font-size: 14px;

    .left, .right {
      flex: 1;
    }

    .right {
      text-align: right;
    }
  }
}

.ReplyClass {
  color: #0079FE;
}
</style>
