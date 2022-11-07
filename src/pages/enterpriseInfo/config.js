import { PatternEnum } from '@/enum/base'

export const formConfig = {
  formItems: [
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入或选择企业名称',
      dataIndex: 'companyName',
      type: 'text',
      label: '企业名称',
      required: true
    },
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入',
      dataIndex: 'uscCode',
      type: 'text',
      label: '统一社会信用代码',
      required: true
    },
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入',
      dataIndex: 'contacts',
      type: 'text',
      label: '联系人',
      required: true
    },
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入',
      dataIndex: 'contactsPhone',
      type: 'number',
      label: '联系人电话',
      required: true
    },
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入',
      dataIndex: 'info',
      type: 'text',
      label: '企业简介',
      required: true
    },
    {
      renderType: PatternEnum.SLOT,
      placeholder: '请选择',
      dataIndex: 'address',
      type: 'text',
      label: '地址',
      required: true
    }
  ],
  rules: {
    'companyName': {
      required: true,
      message: '请填写企业名称',
      trigger: ['blur', 'change']
    },
    'uscCode': {
      required: true,
      type: 'number',
      message: '社会信用代码不能为空',
      trigger: ['blur', 'change']
    },
    'contacts': {
      required: true,
      message: '联系人不能为空',
      trigger: ['blur', 'change']
    },
    'contactsPhone': {
      pattern: /^1[3-9][0-9]{9}$/,
      required: true,
      message: '请输入正确的电话',
      trigger: ['blur', 'change']
    },
    'info': {
      required: true,
      message: '简介不能为空',
      trigger: ['blur', 'change']
    },
    'address': {
      required: true,
      message: '获取失败请重新获取',
      trigger: ['blur', 'change']
    }
  }
}

export const infoTableHead = [
  {
    label: '企业名称',
    prop: 'companyName'
  },
  {
    label: '统一社会信用代码',
    prop: 'uscCode'
  },
  {
    label: '联系人',
    prop: 'contacts'
  },
  {
    label: '联系人电话',
    prop: 'contactsPhone'
  },
  {
    label: '企业简介',
    prop: 'info'
  },
  {
    label: '地址',
    prop: 'address'
  }
]
