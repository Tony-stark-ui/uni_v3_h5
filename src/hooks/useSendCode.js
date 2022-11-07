const useSendCode = async (ref, url) => {
  if (ref.value.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    })
    setTimeout(() => {
      uni.hideLoading()
      // 这里此提示会被this.start()方法中的提示覆盖
      uni.$u.toast('验证码已发送')
      // 通知验证码组件内部开始倒计时
      ref.value.start()
    }, 2000)
  } else {
    uni.$u.toast('倒计时结束后再发送')
  }
}

export { useSendCode }
