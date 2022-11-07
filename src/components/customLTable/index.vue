<script setup>

import { toRefs } from 'vue'

const props = defineProps({
  infoTableHead: Array,
  info: Object,
})

const { infoTableHead, info } = toRefs(props)
</script>

<template>
  <div class='table'>
    <template v-for='(item,index) in infoTableHead' :key='index'>
      <div class='flex'>
        <div class='left'>
          {{ item.label }}
        </div>
        <div class='right'>
          {{ info[item.prop] }}
        </div>
      </div>

    </template>
  </div>
</template>

<style scoped lang='scss'>
.table {
  //display: flex;
  width: 100%;

  .left, .right {
    flex: 1;
    border: 1px solid #ccc;
    padding: 15px;
  }

  .left {

    background: rgba(189, 220, 255, .49);
  }

  .right {
    font-size: 16px;

    //img {
    //  width: 50px;
    //  height: 50px;
    //}
  }
}
</style>
