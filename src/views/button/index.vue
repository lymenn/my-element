<template>
  <div>
      <Button>主要按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">主要按钮</Button>
      <Button type="info">主要按钮</Button>
      <Button type="warning">主要按钮</Button>
      <Button type="danger">主要按钮</Button>
      <br >
      <br >
      <Button plain>朴素按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>主要按钮</Button>
      <Button type="info" plain>主要按钮</Button>
      <Button type="warning" plain>主要按钮</Button>
      <Button type="danger" plain>主要按钮</Button>
       <br >
       <br >
      <Button round>圆角按钮</Button>
      <Button type="primary" round>主要按钮</Button>
      <Button type="success" round>主要按钮</Button>
      <Button type="info" round>主要按钮</Button>
      <Button type="warning" round>主要按钮</Button>
      <Button type="danger" round>主要按钮</Button>
       <br >
       <br >
      <Button circle icon="el-icon-search"></Button>
      <Button type="primary" circle icon="el-icon-edit"></Button>
      <Button type="success" circle icon="el-icon-check"></Button>
      <Button type="info" circle icon="el-icon-message"></Button>
      <Button type="warning" circle icon="el-icon-star-off"></Button>
      <Button type="danger" circle icon="el-icon-delete"></Button>
      <br >
      <br >
      <Button disabled>主要按钮</Button>
      <Button type="primary" disabled>主要按钮</Button>
      <Button type="success" disabled>主要按钮</Button>
      <Button type="info" disabled>主要按钮</Button>
      <Button type="warning" disabled>主要按钮</Button>
      <Button type="danger" disabled>主要按钮</Button>
      <br >
      <br >
      <Button disabled>朴素按钮</Button>
      <Button type="primary" plain disabled>主要按钮</Button>
      <Button type="success" plain disabled>主要按钮</Button>
      <Button type="info" plain disabled>主要按钮</Button>
      <Button type="warning" plain disabled>主要按钮</Button>
      <Button type="danger" plain disabled>主要按钮</Button>

      <br >
      <br >
      <Button type="text">主要按钮</Button>
      <Button type="text" disabled>主要按钮</Button>

      <br >
      <br >
      <Button type="primary" icon="el-icon-edit"></Button>
      <Button type="primary" icon="el-icon-share"></Button>
      <Button type="primary" icon="el-icon-delete"></Button>
      <Button type="primary" icon="el-icon-search">搜索</Button>
      <Button type="primary">上传<i class="el-icon-upload el-icon--right"></i></Button>

      <br >
      <br >
      <Button type="primary" :loading="true">加载中</Button>

      <br >
      <br >
      <Button>主要按钮</Button>
      <Button size="medium">中等按钮</Button>
      <Button size="small">小型按钮</Button>
      <Button size="mini">超小按钮</Button>

      <br >
      <br >
      <button-group>
        <Button type="primary" icon="el-icon-arrow-left">上一页</Button>
        <Button type="primary">下一页 <i class="el-icon-arrow-right"></i> </Button>
      </button-group>

      <button-group>
        <Button type="primary" icon="el-icon-edit"></Button>
        <Button type="primary" icon="el-icon-share"></Button>
        <Button type="primary" icon="el-icon-delete"></Button>
        <Button type="danger" icon="el-icon-delete"></Button>
        <Button type="warning" icon="el-icon-delete"></Button>
        <Button type="primary" icon="el-icon-delete"></Button>
        <Button type="success" icon="el-icon-delete"></Button>
        <Button type="info" icon="el-icon-delete"></Button>
      </button-group>
  </div>
</template>

<script>
import Button from '~/packages/button/src/button'
import ButtonGroup from '~/packages/button/src/button-group'
export default {
  components: { Button, ButtonGroup }, // 子组件

  computed: { }, // 计算属性

  watch: { }, // 监听属性

  props: {},

  data () { return {} },

  // 生命周期钩子

  beforeCreate () {},

  created () {},

  beforeMount () {},

  mounted () {},

  beforeUpdate () {},

  updated () {},

  activated () {},

  deactivated () {},

  beforeDestroy () {},

  destroyed () {},

  // 非响应式的属性 (不依赖响应系统的实例属性)

  methods: {}

}

</script>
<style lang='scss' scoped>
</style>
