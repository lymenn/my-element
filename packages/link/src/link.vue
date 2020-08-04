<template>
  <a class="el-link"
  :class="[
  `el-link--${type}`,
  underline && !disabled && 'is-underline',
  disabled && 'is-disabled'
  ]"
  v-bind="$attrs"
  :href="disabled ? null : href"
  @click="handleClick"
  >
  <i v-if="icon" :class="icon"></i>
  <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
  </span>
  </a>
</template>

<script>
export default {
  name: 'ElLink',
  components: {}, // 子组件

  computed: { }, // 计算属性

  watch: { }, // 监听属性

  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },

  data () { return {} },

  // 生命周期钩子

  beforeCreate () {},

  created () {
  },

  beforeMount () {},

  mounted () {},

  beforeUpdate () {},

  updated () {},

  activated () {},

  deactivated () {},

  beforeDestroy () {},

  destroyed () {},

  // 非响应式的属性 (不依赖响应系统的实例属性)

  methods: {
    handleClick (event) {
      if (!this.disabled) {
        if (!this.href) { this.$emit('click', event) }
      }
    }
  }

}

</script>
<style lang='scss' scoped>
</style>
