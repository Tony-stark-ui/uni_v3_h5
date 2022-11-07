<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { computed, reactive, ref } from 'vue'

import { formConfig } from './config'
import { codeMsg } from '@/enum/base'
import { getLocalState } from '@/utils/util'


import Form from '@/components/customForm'
import ListTitle from '@/components/customTitle'
import List from '@/components/customList'
import ListItem from '@/components/customList/listItem'

const env = util_useEnv()

onLoad((option) => {
  option.status == 2 && (getChangeList())
  hasChange.value = Number(option.status)
  getDetail(option.enterpriseId)
  formatDisabled()
})

const getDetail = async (id) => {
  const res = await enterpriseDetail(id)
  for (const dataKey in params) {
    params[dataKey] = res.data[dataKey]
  }
}

const form = ref('')

const hasChange = ref('')

const params = reactive({
  address: '',
  companyName: '',
  contacts: '',
  contactsPhone: '',
  id: '',
  info: '',
  uscCode: '',
  x: '',
  y: '',
})

const changeListParams = reactive({
  pageNum: 1,
  pageSize: 10,
  userId: getLocalState('user', 'userId'),
})

const changeList = ref([])
const changeListTotal = ref(0)

const getChangeList = async () => {
  // changeListParams.companyName = info.value.companyName
  const res = await enterpriseChangeList(changeListParams)
  changeList.value.push(...res.data.rows)
  changeListTotal.value = res.data.total
}

const loadMore = () => {
  if (changeListTotal.value >= changeList.value.length) {
    return uni.showToast({
      title: '没有更多数据',
    })
  }
  changeListParams.pageNum++
  getChangeList()
}

const url = ref('')

const locationInfo = ref('')

const isDisabled = computed(() => {
  return hasChange.value === 2
})

const formatDisabled = () => {
  if (isDisabled.value) {
    formConfig.formItems.forEach(item => item.disabled = true)
  }
}

const commitBtnText = computed(() => {
  return hasChange.value === 1 ? '提交' : hasChange.value === 2 ? '审核中' : '变更'
})

const getLocation = () => {
  const mapKey = env.VITE_MAP_KEY
  url.value =
    `https://apis.map.qq.com/tools/locpicker?search=1&type=1&coord=39.90849,116.374328&policy=1&key=${mapKey}&referer=myapp`

  if (window.isListen) {
    return
  }


  window.addEventListener('message', event => {
    let loc = event.data
    if (loc && loc.module == 'locationPicker') {
      if (loc) {
        url.value = ''
        locationInfo.value = loc
        params.x = String(loc.latlng.lat)
        params.y = String(loc.latlng.lng)
        params.address = loc.poiname
      }
    }

    window.isListen = true
    window.removeEventListener('message', () => {
    }, true)
  })
}

const handleCommit = async () => {
  form.value.form.validate().then(res => {
    if (hasChange.value !== 1) {
      change()
    } else {
      commit()
    }
  })

}

const commit = async () => {
  const res = await enterpriseEdit(params)
  if (res.msg === codeMsg.success) {
    uni.showToast({
      title: '操作成功',
    })
    uni.navigateBack()
  }
}

const change = async () => {
  params.targetId = params.id
  params.userId = getLocalState('user', 'userId')
  delete params.id
  const res = await enterpriseChange(params)
  if (res.msg === codeMsg.success) {
    uni.showToast({
      title: '操作成功',
    })
    uni.navigateBack()
  }
}

</script>

<template>
  <div class='enterpriseInfo'>
    <div v-show='!url'>
      <Form ref='form' :form-data='params' :form-config='formConfig'>
        <template #address='{data,item}'>
          <u-input
            v-model='data[item.dataIndex]'
            :placeholder='item.placeholder'
            border='surround'
            disabled
          >
            <template #suffix>
              <u-button
                :disabled='isDisabled'
                type='primary'
                size='mini'
                text='获取位置'
                @click='getLocation'>
              </u-button>
            </template>
          </u-input>
        </template>
      </Form>

      <div class='operationBtn flex-center'>
        <u-button
          :disabled='isDisabled'
          type='primary' size='small'
          :text='commitBtnText'
          @click='handleCommit'>
        </u-button>
      </div>

      <div v-if='isDisabled' class='list'>
        <u-sticky>
          <div class='stickyBox'>
            <ListTitle title-text='企业信息变更列表'></ListTitle>
          </div>
        </u-sticky>
        <List
          class='staticTox'
          :list-data='changeList'
          :total='changeListTotal'
          @handleScrollMore='loadMore'>
          <template #default='{data}'>
            <ListItem :info='data'></ListItem>
          </template>
        </List>
      </div>
    </div>
    <web-view
      v-if='url'
      :src='url'
    >
    </web-view>
  </div>
</template>

<style scoped lang='scss'>
.enterpriseInfo {
  padding: 10px 15px;
}

.list {
  margin-top: 25px;
}

.stickyBox {
  //padding: 4px 0;
  height: 30px;
  z-index: 9;
  background: #dee2e6;

  :deep(.title) {
    height: 30px;
    line-height: 25px;
  }
}
</style>
