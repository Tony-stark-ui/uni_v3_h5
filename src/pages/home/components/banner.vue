<script setup>
import { ref } from 'vue'

const list = ref(['https://jsqapp.nybdr.cn/static/index/u9.png'])


</script>

<template>
  <div class='banner'>
    <u-swiper
      :list='list'
    ></u-swiper>
  </div>
</template>

<style scoped lang='scss'></style>
