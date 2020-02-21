<template>
  <div class="grid-content bg-purple">
    <div class="col-md-3">
      <draggable class="list-group" tag="ul" v-model="list" v-bind="dragOptions" :move="onMove"
                 @start="isDragging=true"
                 @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'" tag="div">
          <img-item v-for="item in  list"
                    :key="item.name"
                    :item="item"
          ></img-item>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import imgItem from '../components/imgItem'

export default {
  name: 'draggableVue',
  data () {
    return {
      imgAllInfo: [],
      // list1: message.map((name, index) => {
      //   return {name, order: index + 1, fixed: false}
      // }),
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    dragOptions: Object
  },
  components: {
    draggable,
    imgItem
  },
  methods: {
    orderList () {
      console.log(this.imgAllInfo)
      this.imgAllInfo.sort((a, b) => {
        return a.createTime > b.createTime ? 1 : -1
      })
      console.log(this.imgAllInfo)
    },
    onMove ({relatedContext, draggedContext}) {
      console.log(relatedContext, draggedContext)
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
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

<style scoped lang="stylus">
  .list-group {
    min-height: 40px;
    padding: 0;
    cursor move;
    background: #5daf34;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i {
    cursor: pointer;
  }
</style>
