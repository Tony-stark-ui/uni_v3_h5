<script setup>
import { toRefs } from 'vue'

const emit = defineEmits(['pageChange'])

const props = defineProps({
  total: Number
})

const { total } = toRefs(props)

const currentChange = (type, current) => {
  emit('pageChange', type, current)
}
</script>

<template>
  <div class='custonPagination'>
    <uni-pagination title='标题文字' :total='total' @change='currentChange'></uni-pagination>
  </div>
</template>

<style scoped lang='scss'></style>
