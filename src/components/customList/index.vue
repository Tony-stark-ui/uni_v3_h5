<script setup name='customList'>

const props = defineProps({
  listData: Array,
  total: Number,
})

const emits = defineEmits(['handleScrollMore'])

const { listData, total } = toRefs(props)

const scrolltolower = () => {
  if (listData.value.length >= total.value) {
    uni.showToast({
      title: '已经到底了',
    })
    return
  }
  emits('handleScrollMore')
}
</script>

<template>
  <div class='customList'>
    <u-list
      :scrollable='false'
      @scrolltolower='scrolltolower'
    >
      <u-list-item
        v-for='(item, index) in listData'
        :key='index'
      >
        <slot :data='item'></slot>
      </u-list-item>
    </u-list>
  </div>
</template>

<style scoped lang='scss'></style>
