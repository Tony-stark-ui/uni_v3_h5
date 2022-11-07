<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { detailTableColumns } from './model'

import ListTitle from '@/components/customTitle'
import Table from '../enterpriseInfo/components/Table'

onLoad((option) => {
  data.value = JSON.parse(decodeURIComponent(option.data))
})

const starCount = 5

const data = ref({})

</script>

<template>
  <div class='container padding_all_10'>
    <ListTitle title-text='服务记录' />
    <Table :info-table-head='detailTableColumns' :info='data'></Table>
    <div v-if='data.isEval === 2' class='rate'>
      <ListTitle title-text='服务评价' />
      <uni-rate :readonly='true' :value='data.star' />
    </div>
  </div>
</template>

<style scoped lang='scss'></style>
