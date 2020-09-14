/* eslint-disable no-debugger */
/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <label
  class="el-radio-button"
  :class="[
     size && `el-radio-button--${size}`,
     {
       'is-checked': model===label,
       'is-disabled': isDisabled,
       'is-bordered': border,
     }
  ]"
  >
      <input type="radio" class="el-radio-button__orig-radio"
      :value="label"
      v-model="model"
      :checked="model===label"
      :disabled="isDisabled"
      @change="handleChange"
      >
      <span class="el-radio-button__inner">{{label}}</span>
  </label>
</template>

<script>
import Emitter from '../../../src/mixins/emitter'
export default {
  name: 'ElRadioButton',
  components: {}, // 子组件
  mixins: [Emitter],
  computed: {
    isDisabled () {
      console.log(this._radioGroup)
      console.log(this._radioGroup.disabled)
      return this.disabled || (this._radioGroup && this._radioGroup.disabled)
    },
    size () {
      return this._radioGroup.size
    },
    model: {
      get () {
        return this._radioGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this._radioGroup) {
          // eslint-disable-next-line no-debugger
          this._radioGroup.$emit('input', val)
        }
      }
    },
    _radioGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName === 'ElRadioGroup') {
          return parent
        }
        parent = parent.$parent
      }

      return false
    }
  }, // 计算属性

  watch: { }, // 监听属性

  props: {
    label: [String, Number, Boolean],
    disabled: Boolean,
    border: Boolean,
    value: [String, Number, Boolean]

  },

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

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('ElRadioGroup', 'change', [this.model])
      })
    }
  }

}

</script>
<style lang='scss' scoped>
</style>
