<template>
  <div>
    <p>基础用法</p>
    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
    <p>禁用状态</p>
    <el-link disabled>默认链接</el-link>
    <el-link type="primary" disabled>主要链接</el-link>
    <el-link type="success" disabled>成功链接</el-link>
    <el-link type="warning" disabled>警告链接</el-link>
    <el-link type="danger" disabled>危险链接</el-link>
    <el-link type="info" disabled>信息链接</el-link>
    <p>下划线</p>
    <el-link :underline="false">无下划线</el-link>
    <el-link>有下划线</el-link>
    <p>图标</p>
    <el-link icon="el-icon-edit">编辑</el-link>
    <el-link>
      查看
      <i class="el-icon-view el-icon--right"></i>
    </el-link>
  </div>
</template>

<script>
export default {
    components: {}, // 子组件

    computed: {}, // 计算属性

    watch: {}, // 监听属性

    props: {},

    data() {
        return {}
    },

    // 生命周期钩子

    beforeCreate() {},

    created() {},

    beforeMount() {},

    mounted() {},

    beforeUpdate() {},

    updated() {},

    activated() {},

    deactivated() {},

    beforeDestroy() {},

    destroyed() {},

    // 非响应式的属性 (不依赖响应系统的实例属性)

    methods: {}
}
</script>
<style lang='scss' scoped>
</style>
