<script setup>
import mumuGetQrcode
  from '@/uni_modules/mumu-getQrcode/components/mumu-getQrcode/mumu-getQrcode.vue'

const qrcodeSucess = (data) => {
  console.log(data)
  uni.showModal({
    title: '成功',
    content: data,
    success: () => {
      uni.navigateTo({
        url:
          `/pages/fillServe/index?enterpriseId=${10005}`,
      })
    },
  })
}

const qrcodeError = (err) => {
  console.log(err)
  uni.showModal({
    title: '摄像头授权失败',
    content: '摄像头授权失败，请检测当前浏览器是否有摄像头权限。',
    success: () => {
      uni.navigateBack()
    },
  })

}
</script>

<template>
  <div class='container'>
    <mumu-get-qrcode @success='qrcodeSucess' @error='qrcodeError'></mumu-get-qrcode>
  </div>
</template>

<style scoped lang='scss'></style>
