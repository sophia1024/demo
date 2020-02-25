const getWidth = (that) => {
  let setTime, deviceWidth
  clearTimeout(setTime)
  setTime = setInterval(function () {
    clearTimeout(setTime)
    deviceWidth = document.documentElement.clientWidth
    that.deviceWidth = deviceWidth > 1024 ? deviceWidth : 450
    // that.$store.commit('modifyWidth', that.deviceWidth)
  }
  )
  window.addEventListener('resize', getWidth)
}
export default {
  getWidth
}
