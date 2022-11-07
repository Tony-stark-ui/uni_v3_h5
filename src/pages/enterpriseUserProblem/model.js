import { PatternEnum } from '@/enum/base'

export const tabsData = [
  {
    text: '问题列表',
    imgUrl: 'https://jsqapp.nybdr.cn/static/img/u155.ca816e63.png',
    active: 1,
  },
  {
    text: '新增问题',
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

export const problemFormConfig = {
  formItems: [
    {
      renderType: PatternEnum.INPUT,
      dataIndex: 'title',
      type: 'text',
      label: '服务内容',
      disabled: true,
    },
    {
      renderType: PatternEnum.TEXTAREA,
      dataIndex: 'content',
      label: '过程记录',
      disabled: true,
    },
    {
      renderType: PatternEnum.INPUT,
      dataIndex: 'createTime',
      type: 'text',
      label: '创建时间',
      disabled: true,
    },
    {
      renderType: PatternEnum.INPUT,
      dataIndex: 'reply',
      type: 'text',
      label: '问题回复',
      disabled: true,
    },
    {
      renderType: PatternEnum.INPUT,
      dataIndex: 'replyTime',
      type: 'text',
      label: '回复时间',
      disabled: true,
    },
  ],
}

