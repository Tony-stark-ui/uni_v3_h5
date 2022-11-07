<script setup name='login'>
import { ref } from 'vue'
import { formConfig } from './config'
import { codeMsg } from '@/enum/base'


import Form from '@/components/customForm'
import { USER } from '@/enum/commonEnum'

const store = model.user()


const form = ref()

const loginParams = reactive({
  account: '',
  type: '',
  openId: store.userInfo.openId,
  password: '',
})

const handleLogin = () => {
  form.value.form.validate().then(async (resolve) => {
    loginParams.type = Number(loginParams.type)
    let { msg, data } = await touristLogin(loginParams)
    if (msg === codeMsg.success) {
      store.$patch({
        userType: data.userType,
        token: data.token,
        userId: data.userId,
        name: data.name,
        enterpriseId: data.enterpriseId || '',
      })
      uni.setStorageSync('token', data.token)
      uni.showToast({
        title: '登录成功',
      })
      uni.redirectTo({
        url: '/pages/home/index',
      })


    }
  })
}


</script>

<template>
  <view class='container'>
    <view class='title'>
      用户登录
    </view>
    <view class='from'>
      <Form ref='form' :form-data='loginParams' :form-config='formConfig'></Form>
      <u-button class='margin-top-20' type='primary' text='登录' @click='handleLogin'></u-button>
    </view>
  </view>
</template>

<style scoped lang='scss'>
.container {
  text-align: center;
  width: 80%;
  margin: 0 auto;

  .title {
    font-size: 22px;
    margin: 50px 0 80px;
  }
}
</style>
