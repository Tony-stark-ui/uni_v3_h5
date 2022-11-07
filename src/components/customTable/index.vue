<script setup name=''>
import { toRefs } from 'vue'

import { PatternEnum } from '@/enum/base'

const props = defineProps({
  tabHead: Array,
  tabData: Array
})

const { tabHead, tabData } = toRefs(props)
</script>

<template>
  <div class='customTable padding_all_10'>
    <uni-table border stripe empty-text='暂无更多数据'>
      <!-- 表头行 -->
      <uni-tr>
        <template v-for='(item,index) in tabHead' :key='index'>
          <uni-th class='blue' :width='item.labelWidth' align='center'>{{ item.label }}</uni-th>
        </template>
      </uni-tr>
      <!-- 表格数据行 -->
      <template v-for='(item,index) in tabData' :key='index'>
        <uni-tr>
          <template v-for='(iten,indey) in tabHead' :key='indey'>
            <uni-td v-if='iten.type !== PatternEnum.SLOT' align='center'>{{ item[iten.prop]
              }}
            </uni-td>
            <uni-td v-else align='center'>
              <slot :name='iten.prop' :data='item'></slot>
            </uni-td>

          </template>
        </uni-tr>
      </template>

    </uni-table>
  </div>
</template>

<style scoped lang='scss'>
.blue {
  background: rgba(189, 220, 255, .49);
  color: #000;
}
</style>
