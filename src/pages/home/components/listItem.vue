<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  info: Object,
  config: {
    type: Object,
    default: () => ({
      title: 'companyName',
      footLeft: 'address',
      footRight1: 'contacts',
      showFootRight2: true,
      footRight2: 'contactsPhone',
    }),
  },
})

const { info, config } = toRefs(props)

</script>

<template>
  <div class='listtItem'>
    <div class='box padding_all_10'>
      <div class='title'>{{ info[config.title] }}</div>
      <div class='footer margin-top-20 flex-sb'>
        <div class='address'>{{ info[config.footLeft] }}</div>
        <div class='user'>{{ info[config.footRight1] }} <span
          v-if='config.showFootRight2'>
          -{{ info[config.footRight2] }}
        </span></div>
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

      .address, .user {
        flex: 1;
      }

      .user {
        text-align: right;
      }
    }
  }
}
</style>
