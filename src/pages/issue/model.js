import { PatternEnum } from '@/enum/base'

export const tabsData = [
  {
    text: '企业列表',
    imgUrl: 'https://jsqapp.nybdr.cn/static/img/u155.ca816e63.png',
    active: 1,
  },
  {
    text: '问题列表',
    imgUrl: 'https://jsqapp.nybdr.cn/static/img/u155.ca816e63.png',
    active: 2,
  },
]

export const formConfig = {
  formItems: [
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入',
      dataIndex: 'title',
      type: 'text',
      label: '服务内容',
      required: true,
    },
    {
      renderType: PatternEnum.TEXTAREA,
      placeholder: '请输入',
      dataIndex: 'content',
      type: 'text',
      label: '过程记录',
      required: true,
    },
    {
      renderType: PatternEnum.SLOT,
      dataIndex: 'imgs',
      label: '图片',
    },
    // {
    //   renderType: PatternEnum.RADIO,
    //   dataIndex: 'type',
    //   label: '类型',
    //   required: true,
    //   options: [
    //     { value: '包企干部', name: '1' },
    //     { value: '企业问题', name: '2' },
    //   ],
    // },

  ],
  rules: {
    'title': {
      required: true,
      message: '请填写服务内容',
      trigger: ['blur', 'change'],
    },
    'content': {
      required: true,
      message: '过程记录不能为空',
      trigger: ['blur', 'change'],
    },
    // 'type': {
    //   required: true,
    //   message: '请选择问题类型',
    //   trigger: ['blur', 'change'],
    // },
  },
}

export const tableColumns = [
  {
    label: '服务内容',
    prop: 'title',
    labelWidth: '90',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '操作',
    prop: 'operation',
    type: 'slot',
  },
]

export const issueDetailTableHead = [
  {
    label: '服务内容',
    prop: 'title',
    labelWidth: '90',
  },
  {
    label: '问题类型',
    prop: 'title',
    labelWidth: '90',
  },
  {
    label: '是否回复',
    prop: 'isReply',
    labelWidth: '90',
  },
  {
    label: '回复内容',
    prop: 'reply',
    labelWidth: '90',
  },
  {
    label: '回复时间',
    prop: 'replyTime',
  },

]
