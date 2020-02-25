<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  return: {
    deviceWidth: 1024
  },
  methods: {
    getWidth () {
      let setTime, deviceWidth
      const that = this
      clearTimeout(setTime)
      setTime = setInterval(function () {
        clearTimeout(setTime)
        new Promise(resolve => {
          deviceWidth = document.documentElement.clientWidth
          resolve(deviceWidth)
        }).then(res => {
          console.log(res)
          that.deviceWidth = res > deviceWidth ? deviceWidth : res
          that.$store.commit('modifyWidth', that.deviceWidth)
        }
        )
      }, 500)
      window.addEventListener('resize', this.getWidth)
    }

  },
  created () {
    this.getWidth()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
