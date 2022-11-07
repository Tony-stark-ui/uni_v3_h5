<script setup>
import { toRefs } from 'vue'

const emit = defineEmits(['tabItemChange'])

const props = defineProps({
  tabsData: Array
})

const { tabsData } = toRefs(props)

const handleClick = (item) => {
  emit('tabItemChange', item)
}
</script>

<template>
  <div class='tabs'>
    <div v-for='item in tabsData' :key='item.text' class='box' @click='handleClick(item)'>
      <img class='icon margin-bottom-10' :src='item.imgUrl' alt=''>
      <div class='text'>
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .box {
    text-align: center;
    margin: 20px 0;
    font-size: 14px;
    flex: 1;

    .icon {
      width: 50px;
    }
  }
}
</style>
