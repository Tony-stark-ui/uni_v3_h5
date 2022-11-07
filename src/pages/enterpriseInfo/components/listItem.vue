<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  info: Object
})

const { info } = toRefs(props)

</script>

<template>
  <div class='listtItem'>
    <div class='box padding_all_10'>
      <div class='title'>{{ info.companyName }}</div>
      <div class='footer margin-top-20 flex-sb'>
        <div class='address'>{{ info.address }}</div>
        <div class='user'>{{ info.contacts }}-{{ info.contactsPhone }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.listtItem {
  .box {
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: 8px 0;

    .footer {
      color: #aaa;
      font-size: 14px;
    }
  }
}
</style>
