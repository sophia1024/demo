<template>
  <div class="demo-image__lazy" v-if="imgAllInfo.length>0">
      <img-item     v-for="item in  changeType(value)"
                    :key="item.url"
                    :item="item"
      ></img-item>
    </div>
  <!--</div>-->
</template>

<script>
import connector from '../unit/connector'
import imgItem from '../components/imgItem'

export default {
  name: 'home',
  data () {
    return {
      isSort: false,
      value: '0',
      imgAllInfo: []
    }
  },
  components: {
    imgItem
  },
  props: {},
  created () {
    this.getImgData()
    let that = this
    connector.$on('sort', function (params) {
      that.sortTime(that.imgAllInfo, params)
    })
    connector.$on('isType', function (value) {
      that.value = value
    })
  },
  methods: {
    getImgData () {
      // 发送请求，获取数据
      this.axios.get('/api/dashboard/img').then(res => {
        this.imgAllInfo = res.data
        this.sortTime(this.imgAllInfo, false)
      })
    },
    // 类型排序
    changeType (type) {
      console.log(type)
      let typeImg
      if (type === '0' || type === undefined) { // 判断是否是全部
        return this.imgAllInfo
      } else {
        typeImg = this.imgAllInfo.filter(item => {
          return item.value === type
        })
        return typeImg
      }
    },
    // 日期排序
    sortTime (arryList, isSort) {
      if (isSort) {
        arryList.sort((a, b) => {
          return a.createTime > b.createTime ? -1 : 1
        })
      } else {
        arryList.sort((a, b) => {
          return a.createTime > b.createTime ? 1 : -1
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
