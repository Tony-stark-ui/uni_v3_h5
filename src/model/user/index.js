/*
 * @FilePath: \uni-preset-vue-vite\src\model\global\index.js
 * @Date: 2022-10-01 21:51:11
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-10-02 03:30:08
 * @Description: 全局模块
 */

import { reactive } from 'vue'

function setup() {
  const userInfo = reactive({
    userType: '',
    token: '',
    openId: '',
    name: '',
    userId: '',
  })

  return {
    userInfo,
  }
}

const option = {
  // 配置持久化
  persist: {
    //这里存储默认使用的是session
    enabled: true,
    strategies: [
      {
        //key的名称
        key: 'user',
        //更改默认存储，我更改为localStorage
        storage: localStorage,
        // 可以选择哪些进入local存储，这样就不用全部都进去存储了
        // 默认是全部进去存储
        // paths: ['list']
      },
    ],
  },
}

export { setup, option }
