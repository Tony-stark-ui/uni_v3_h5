import { PatternEnum } from '@/enum/base'

export const formConfig = {
  formItems: [
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入服务内容',
      dataIndex: 'content',
      type: 'text',
      label: '服务内容',
      required: true
    },
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入',
      dataIndex: 'questionNum',
      type: 'number',
      label: '解决问题数量',
      required: true
    },
    {
      renderType: PatternEnum.DATE_PICKER,
      dataIndex: 'serviceDate',
      label: '服务日期',
      required: true
    },
    {
      renderType: PatternEnum.SLOT,
      dataIndex: 'imgs',
      label: '图片',
      required: true
    },
    {
      renderType: PatternEnum.SLOT,
      dataIndex: 'realAddress',
      label: '位置',
      required: true
    },
    {
      renderType: PatternEnum.TEXTAREA,
      placeholder: '请输入',
      dataIndex: 'process',
      type: 'text',
      label: '过程记录',
      required: true
    }
  ],
  rules: {
    'content': {
      required: true,
      message: '服务内容不能为空',
      trigger: ['blur', 'change']
    },
    'questionNum': {
      required: true,
      type: 'number',
      message: '解决问题数量不能为空',
      trigger: ['blur', 'change']
    },
    'serviceDate': {
      required: true,
      message: '服务日期不能为空',
      trigger: ['change']
    },
    'imgs': {
      required: true,
      message: '图片不能为空',
      trigger: ['change']
    },
    'realAddress': {
      required: true,
      message: '请选择位置',
      trigger: ['change']
    },
    'process': {
      required: true,
      message: '过程记录不能为空',
      trigger: ['blur', 'change']
    }
  }
}
