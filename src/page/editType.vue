<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button
              type="primary"
              icon="el-icon-arrow-left"
              @click="setRouter"
            >
              返回主页
            </el-button>
          </div>
        </el-col>
      </el-row>
      <div class="panel-heading">
        <h3 class="panel-title">图片类型调整</h3>
      </div>
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable">开启拖放</label>
        </div>
      </div>
    </div>

    <el-row :gutter="20">

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="col-md-3">
            <draggable class="list-group" tag="ul" v-model="list1" v-bind="dragOptions" :move="onMove"
                       @start="isDragging=true"
                       @end="isDragging=false">
              <transition-group type="transition" :name="'flip-list'" tag="div">
                <img-item v-for="item in  list1"
                          :key="item.name"
                          :item="item"
                ></img-item>
              </transition-group>
            </draggable>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="col-md-3">
            <draggable class="list-group" tag="ul" v-model="list2" v-bind="dragOptions" :move="onMove"
                       @start="isDragging=true"
                       @end="isDragging=false">
              <transition-group type="transition" :name="'flip-list'" tag="div">
                <img-item v-for="item in  list2"
                          :key="item.name"
                          :item="item"
                ></img-item>
              </transition-group>
            </draggable>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="col-md-3">
            <draggable class="list-group" tag="ul" v-model="list3" v-bind="dragOptions" :move="onMove"
                       @start="isDragging=true"
                       @end="isDragging=false">
              <transition-group type="transition" :name="'flip-list'" tag="div">
                <img-item v-for="item in  list3"
                          :key="item.name"
                          :item="item"
                ></img-item>
              </transition-group>
            </draggable>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="col-md-3">
            <draggable class="list-group" tag="ul" v-model="list4" v-bind="dragOptions" :move="onMove"
                       @start="isDragging=true"
                       @end="isDragging=false">
              <transition-group type="transition" :name="'flip-list'" tag="div">
                <img-item v-for="item in  list4"
                          :key="item.name"
                          :item="item"
                ></img-item>
              </transition-group>
            </draggable>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import imgItem from '../components/imgItem'

export default {
  name: 'hello',
  components: {
    draggable,
    imgItem
  },
  data () {
    return {
      imgAllInfo: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    setRouter () {
      this.$router.push('/home')
    },
    getImgData () {
      // {params: {type: this.$route.query.type}
      // 发送请求，获取数据
      this.axios.get('/api/dashboard/img').then(res => {
        this.imgAllInfo = res.data
        this.list4 = this.filterImg('4')
        this.list1 = this.filterImg('1')
        this.list2 = this.filterImg('2')
        this.list3 = this.filterImg('3')
        console.log(this.list4)
      })
    },
    filterImg (type) {
      console.log(type)
      return this.imgAllInfo.filter(item => {
        return item.value === type
      })
    },
    orderList () {
      console.log(this.imgAllInfo)
      this.imgAllInfo.sort((a, b) => {
        return a.createTime > b.createTime ? 1 : -1
      })
      console.log(this.imgAllInfo)
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
  },
  created () {
    this.getImgData()
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style>
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .list-group {
    min-height: 40px;
    background: pink;
    cursor: move;
    padding: 10px;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i {
    cursor: pointer;
  }
</style>
