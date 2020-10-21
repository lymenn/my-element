<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'ElRadioGroup',
    componentName: 'ElRadioGroup',
    components: {}, // 子组件

    computed: {
        radioGroupSize() {
            return this.size
        }
    }, // 计算属性

    watch: {}, // 监听属性

    props: {
        value: {},
        size: String,
        disabled: Boolean
    },

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
