<script setup name='customTitle'>
import { toRefs } from 'vue'

const props = defineProps({
  lineStyle: {
    type: Object,
    default: () => ({
      borderLeft: '4px solid #80bcff',
      paddingLeft: '8px'
    })
  },
  titleText: {
    type: String,
    default: '通知公告'
  }
})
const { lineStyle, lineWidth, titleText } = toRefs(props)
</script>

<template>
  <div class='customTitle'>
    <div class='title' :style='lineStyle'>
      <div class='text'>{{ titleText }}</div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.customTitle {
  margin: 10px 0;
}
</style>
