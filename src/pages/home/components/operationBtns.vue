<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  data: Array
})

const { data } = toRefs(props)

const handleClick = (item) => {
  uni.navigateTo({
    url: item.link
  })
}
</script>

<template>
  <div class='container'>
    <div v-for='item in data' :key='item.text' class='box' @click='handleClick(item)'>
      <img class='icon margin-bottom-10' :src='item.imgUrl' alt=''>
      <div class='text'>
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .box {
    text-align: center;
    margin: 20px 0;

    .icon {
      width: 50px;
    }
  }
}

</style>
