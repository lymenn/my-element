<template>
  <div>
      <el-button>主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">主要按钮</el-button>
      <el-button type="info">主要按钮</el-button>
      <el-button type="warning">主要按钮</el-button>
      <el-button type="danger">主要按钮</el-button>
      <br >
      <br >
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>主要按钮</el-button>
      <el-button type="info" plain>主要按钮</el-button>
      <el-button type="warning" plain>主要按钮</el-button>
      <el-button type="danger" plain>主要按钮</el-button>
       <br >
       <br >
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>主要按钮</el-button>
      <el-button type="info" round>主要按钮</el-button>
      <el-button type="warning" round>主要按钮</el-button>
      <el-button type="danger" round>主要按钮</el-button>
       <br >
       <br >
      <el-button circle icon="el-icon-search"></el-button>
      <el-button type="primary" circle icon="el-icon-edit"></el-button>
      <el-button type="success" circle icon="el-icon-check"></el-button>
      <el-button type="info" circle icon="el-icon-message"></el-button>
      <el-button type="warning" circle icon="el-icon-star-off"></el-button>
      <el-button type="danger" circle icon="el-icon-delete"></el-button>
      <br >
      <br >
      <el-button disabled>主要按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>主要按钮</el-button>
      <el-button type="info" disabled>主要按钮</el-button>
      <el-button type="warning" disabled>主要按钮</el-button>
      <el-button type="danger" disabled>主要按钮</el-button>
      <br >
      <br >
      <el-button disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>主要按钮</el-button>
      <el-button type="info" plain disabled>主要按钮</el-button>
      <el-button type="warning" plain disabled>主要按钮</el-button>
      <el-button type="danger" plain disabled>主要按钮</el-button>

      <br >
      <br >
      <el-button type="text">主要按钮</el-button>
      <el-button type="text" disabled>主要按钮</el-button>

      <br >
      <br >
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>

      <br >
      <br >
      <el-button type="primary" :loading="true">加载中</el-button>

      <br >
      <br >
      <el-button>主要按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>

      <br >
      <br >
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页 <i class="el-icon-arrow-right"></i> </el-button>
      </el-button-group>

      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="danger" icon="el-icon-delete"></el-button>
        <el-button type="warning" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="success" icon="el-icon-delete"></el-button>
        <el-button type="info" icon="el-icon-delete"></el-button>
      </el-button-group>
  </div>
</template>

<script>
export default {

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
