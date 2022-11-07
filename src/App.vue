<!--
 * @FilePath: \uni-vite-vue3-project-basis-template\src\App.vue
 * @Date: 2022-10-01 21:03:09
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-10-02 07:51:43
 * @Description:
-->
<script setup>

import { onLaunch } from '@dcloudio/uni-app'
import { isHasParamsUrl, getUrlParams, getLocalState } from '@/utils/util'
import { rule } from '@/enum/userRule'

const store = model.user()


onLaunch(() => {
  getUrlLocal('status')
})

const getUrlLocal = async (params) => {
  if (isHasParamsUrl(window.location, params)) {
    getUserInfo()
  } else {
    const { data } = await login()
    // window.location.href = data
  }
}

const getUserInfo = () => {
  let token = getUrlParams(window.location, 'token') || getLocalState('user', 'token') || ''
  let userType = getUrlParams(window.location, 'userType') || getLocalState('user', 'userType') || ''
  let openId = getUrlParams(window.location, 'openId') || getLocalState('user', 'openId') || ''
  let userId = getUrlParams(window.location, 'userId') || getLocalState('user', 'userId') || ''

  store.userInfo = {
    token,
    userType,
    openId,
    userId,
  }

  if (userType === rule.TOURIST && !token) {
    uni.navigateTo({
      url: '/pages/login/index',
    })
  }
}
</script>

<style lang='scss'>
// 全局样式
@import "uview-plus/index.scss";
@import "@/style/index.scss";
</style>
