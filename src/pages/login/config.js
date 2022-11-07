import { PatternEnum } from '@/enum/base'

export const formConfig = {
  formItems: [
    {
      renderType: PatternEnum.INPUT,
      placeholder: '请输入账号',
      dataIndex: 'account',
      type: 'text',
    },
    {
      renderType: PatternEnum.PASSWORDINP,
      placeholder: '请输入密码',
      dataIndex: 'password',
      type: 'password',
      isShowPassword: false,
    },
    {
      renderType: PatternEnum.RADIO,
      dataIndex: 'type',
      options: [
        { value: '分包领导', name: '1' },
        { value: '企业用户', name: '2' },
      ],

    },
  ],
  rules: {
    'account': {
      required: true,
      message: '请填写正确的账号',
      trigger: ['blur', 'change'],
    },
    'type': {
      required: true,
      message: '请选择身份',
      trigger: ['change'],
    },
    'password': {
      required: true,
      message: '密码不能为空',
      trigger: ['blur', 'change'],
    },
  },
}
