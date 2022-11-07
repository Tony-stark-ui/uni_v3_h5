<script setup>
import { reactive, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

import { formConfig } from './model'
import { codeMsg } from '@/enum/base'
import { getLocalState, uploadFilePromise } from '@/utils/util'


import Form from '@/components/customForm'

const env = util_useEnv()

onLoad((option) => {
  enterpriseId.value = option.enterpriseId

})

const enterpriseId = ref('')

const form = ref({})

const params = reactive({
  content: '', //服务内容
  enterpriseId: '', //企业id
  imgs: '', //图片集合
  isLocation: 1, //是否在规定范围内1在2不在
  process: '', //过程记录
  questionNum: '', //解决问题数量
  realAddress: '', //定位地址
  realX: '',
  realY: '',
  serviceDate: '', //服务日期
  userId: getLocalState('user', 'userId'),//用户id
})

const fileList = ref([])

// 删除图片
const deletePic = (event) => {
  fileList.value.splice(event.index, 1)
}
// 新增图片
const afterRead = (event) => {
  console.log(event)
  let lists = [].concat(event.file)
  let fileListLen = fileList.value.length
  lists.map((item) => {
    fileList.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    })
  })
  lists.forEach(async (item) => {
    const result = await uploadFilePromise(item.url, '/file/upload')
    if (result.statusCode === 200) {
      let res = JSON.parse(result.data)
      let item = fileList.value[fileListLen]
      fileList.value.splice(fileListLen, 1, Object.assign(item, {
        status: 'success',
        message: '',
        id: res.data,
      }))
      fileListLen++
    }
  })
}


const handleCommit = () => {
  params.imgs = fileList.value.map(item => item.id).toString()
  params.enterpriseId = enterpriseId.value
  form.value.form.validate().then(() => {
    commit()
  })
}

const commit = async () => {
  const res = await addService(params)
  if (res.msg === codeMsg.success) {
    uni.showToast({
      title: '操作成功',
    })
    setTimeout(function() {
      uni.redirectTo({
        url: '/pages/home/index',
      })
    }, 1000)

  }
}

const url = ref('')


const getLocation = () => {
  let lat = ''
  let lng = ''
  uni.showLoading({
    title: '加载中...',
  })

  uni.getLocation({
    type: 'wgs84',
    success: function(res) {
      lat = res.longitude
      lng = res.latitude
      const mapKey = env.VITE_MAP_KEY
      url.value =
        `https://apis.map.qq.com/tools/locpicker?search=1&type=1&coord=${32.999365},${112.519993}&policy=1&key=${mapKey}&referer=myapp`
      uni.hideLoading()
      if (window.isListen) {
        return
      }


      window.addEventListener('message', event => {
        let loc = event.data
        if (loc && loc.module == 'locationPicker') {
          if (loc) {
            url.value = ''
            params.realX = String(loc.latlng.lat)
            params.realY = String(loc.latlng.lng)
            params.realAddress = loc.poiname
          }
        }

        window.isListen = true
        window.removeEventListener('message', () => {
        }, true)
      })
    },
    fail: (err) => {
      uni.hideLoading()
      console.log(err)

    },
  })
}


</script>

<template>
  <div class='container padding_all_10'>
    <Form ref='form' :form-data='params' :form-config='formConfig'>
      <template #imgs>
        <u-upload
          :file-list='fileList'
          name='1'
          multiple
          capture
          :max-count='10'
          @afterRead='afterRead'
          @delete='deletePic'
        ></u-upload>
      </template>
      <template #realAddress='{data,item}'>
        <u-input
          v-model='data[item.dataIndex]'
          :placeholder='item.placeholder'
          border='surround'
          disabled
        >
          <template #suffix>
            <u-button
              type='primary'
              size='mini'
              text='获取位置'
              @click='getLocation'>
            </u-button>
          </template>
        </u-input>
      </template>
    </Form>

    <u-button
      type='primary'
      size='small'
      text='提交'
      @click='handleCommit'>
    </u-button>

    <web-view
      :src='url'
      v-if='url'
    >
    </web-view>
  </div>
</template>

<style scoped lang='scss'>

</style>
