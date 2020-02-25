<template>
  <div class="layout">
    <section class="el-container is-vertical">
      <header class="el-header">

        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-button
              type="primary"
              :class="{'isNone':$unitParams < 450 }"
              :icon="elIconInf.icon"
              @click.capture="emitMessage(true)"
            >
              {{ elIconInf.text }}
            </el-button>
              <el-select
                v-model="value"
                placeholder="类别"
                @change="emitMessage(false, value)"
              >
                <el-option
                  v-for="item in optionsType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-button
                type="primary"
                icon="el-icon-edit"
                @click="setRouter"
              >
                编辑
              </el-button>
            </div>
          </el-col>
        </el-row>
      </header>
      <main class="el-main">
        <!--<router-view></router-view>-->
        <component :is="comname"></component>
      </main>
      <footer class="el-footer" style="height: 60px;">Footer</footer>
    </section>
  </div>
</template>

<script>
import connector from '../unit/connector'
import homeList from './homeList'
import editType from './editType'

export default {
  name: 'HelloWorld',
  data () {
    return {
      optionsType: [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '类别1'
        },
        {
          value: '2',
          label: '类别2'
        },
        {
          value: '3',
          label: '类别3'
        },
        {
          value: '4',
          label: '类别4'
        }
      ],
      comname: 'homeList',
      value: '全部',
      classDrag: false,
      imgAllInfo: [],
      elIconInf: {
        icon: 'el-icon-arrow-up',
        text: '时间倒序'
      }
    }
  },
  components: {
    homeList,
    editType
  },
  created () {
  },
  methods: {
    emitMessage (isSort, value) {
      let that = this
      if (isSort) {
        connector.$emit(
          'sort',
          (function () {
            if (that.elIconInf.text === '时间倒序') {
              that.elIconInf.text = '时间正序'
              that.elIconInf.icon = 'el-icon-arrow-down'
              return true
            } else {
              that.elIconInf.text = '时间倒序'
              that.elIconInf.icon = 'el-icon-arrow-up'
              return false
            }
          })()
        )
        return
      }
      // console.log(value)
      connector.$emit('isType', value)
    },
    setRouter () {
      // this.$router.push('/editType')
      this.comname = (this.comname === 'editType' ? 'homeList' : 'editType')
    }
  }
}
</script>

<style scoped>
  .layout{
    padding-top: 40px;
  }
  .el-main-imgInf {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-main-imgInf > p {
    padding: 10px;
  }

  .el-image {
    width: 200px;
    height: 130px;
  }
.isNone{
  display: none;
}
</style>
