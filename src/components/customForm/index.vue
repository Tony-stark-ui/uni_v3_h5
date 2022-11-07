<script setup>
import { toRefs, getCurrentInstance, computed } from 'vue'
import { PatternEnum, InputTypeEnum } from '@/enum/base'

const proxy = getCurrentInstance()

const props = defineProps({
  formConfig: {
    type: Object,
    default: _ => ({}),
  },
  formData: {
    type: Object,
    default: () => ({}),
  },
  labelPosition: {
    type: String,
    default: 'top',
  },

})

const { formConfig, formData, labelPosition } = toRefs(props)

const form = ref()

const suffix = computed(() => {
  return item => {
    return item.isShowPassword ? 'eye-fill' : 'eye-off'
  }
})

const handleShowPassword = (item) => {
  item.isShowPassword = !item.isShowPassword
  proxy.ctx.$forceUpdate()
}


defineExpose({
  form,
})
</script>

<template>
  <div class='formContent'>
    <u--form
      ref='form'
      error-type='toast'
      :label-position='labelPosition'
      :rules='formConfig.rules'
      label-width='auto'
      :model='formData'
    >
      <template v-for='(item,index) in formConfig.formItems' :key='index'>
        <u-form-item :label='item.label' :prop='item.dataIndex' :required='item.required'>
          <template
            v-if='item.renderType === PatternEnum.INPUT'
          >
            <u--input
              v-model='formData[item.dataIndex]'
              :disabled='item.disabled'
              :placeholder='item.placeholder'
              border='surround'
              clearable
              :type='item.type'
              :suffix-icon='item.suffixIcon'
            ></u--input>
          </template>
          <template v-else-if='item.renderType === PatternEnum.PASSWORDINP'>
            <u-input
              v-model='formData[item.dataIndex]'
              :disabled='item.disabled'
              :placeholder='item.placeholder'
              border='surround'
              :type='item.isShowPassword?"text":"password"'
            >
              <template #suffix>
                <u-icon
                  :name='suffix(item)'
                  @click='handleShowPassword(item)'></u-icon>
              </template>
            </u-input>
          </template>
          <template v-else-if='item.renderType === PatternEnum.RADIO'>
            <u-radio-group
              v-model='formData[item.dataIndex]'
              placement='column'
              :disabled='item.disabled'
            >
              <u-radio
                v-for='(op, opIdx) in item.options'
                :key='opIdx'
                :custom-style="{marginBottom: '8px'}"
                :label='op.value'
                :name='op.name'
              >
              </u-radio>
            </u-radio-group>
          </template>
          <template v-else-if='item.renderType === PatternEnum.DATE_PICKER'>
            <uni-datetime-picker v-model='formData[item.dataIndex]' />
          </template>
          <template v-else-if='item.renderType === PatternEnum.TEXTAREA'>
            <u--textarea
              v-model='formData[item.dataIndex]'
              :placeholder='item.placeholder'
              :disabled='item.disabled'
            >
            </u--textarea>
          </template>
          <template v-else-if='item.renderType === PatternEnum.SLOT'>
            <slot
              :name='item.dataIndex'
              :data='formData'
              :item='item'
            >
            </slot>
          </template>
        </u-form-item>
      </template>
    </u--form>
  </div>
</template>

<style scoped lang='scss'>

</style>
