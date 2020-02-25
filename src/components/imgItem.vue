<template>
  <div class="el-main-imgBox">
    <el-image :src="item.url" class="el-image" lazy></el-image>
    <div class="el-main-imgInf">
      <p>名称:{{ item.name }}</p>
      <p>类别：{{ item.type }}</p>
      <p>创建时间：{{ item.createTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgItem',
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .el-main-imgBox {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .el-image {
      padding: 6px;
      background-color: #fff;
    }

    .el-main-imgInf {
      display: flex;
      justify-content: center;
      overflow: hidden;
      flex-wrap: wrap;

      p {
        padding: 10px;
        font-size 14px
      }

    }

    .el-image {
      max-width: 200px;
      max-height: 130px;
    }
  }
</style>
