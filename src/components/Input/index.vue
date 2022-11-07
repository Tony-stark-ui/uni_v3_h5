<script setup lang='ts' name='Input'>
import { ref, defineProps, toRefs, watch, defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue'])


const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  isDisabled: Boolean,

})

const { modelValue, placeholder, type, isDisabled } = toRefs(props)

let value = ref('')

watch(() => props.modelValue, (val) => {
    value.value = val
  },
  { deep: true, immediate: true },
)

const handleInputChange = (val) => {
  emit('update:modelValue', val)
}

</script>

<template>
  <div class='container'>
    <u-input
      v-model='value'
      :type='type'
      :disabled='isDisabled'
      :placeholder='placeholder'
      border='surround'
      @change='handleInputChange'
    ></u-input>
  </div>
</template>

<style scoped lang='scss'></style>
