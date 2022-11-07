<script setup name='home'>

import { getLocalState } from '@/utils/util'

import leaderHome from './leaderHome'
import userHome from './userHome'


const comp = computed(() => {
  const userType = getLocalState('user', 'userType')
  if (userType === 1) {
    return leaderHome
  } else {
    return userHome
  }
})

const handleTestQuit = () => {
  uni.redirectTo({
    url: '/pages/login/index',
  })
  uni.removeStorageSync('token')
}

</script>

<template>
  <div class='container padding_all_10'>
    <u-button text='测试按钮(退出登录)' @click='handleTestQuit'></u-button>
    <component :is='comp'></component>
  </div>
</template>

<style scoped lang='scss'></style>
