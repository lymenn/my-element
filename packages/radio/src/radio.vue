/* eslint-disable no-debugger */
/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <label
    class="el-radio"
    :class="[
     border && size && `el-radio--${size}`,
     {
       'is-checked': model===label,
       'is-disabled': disabled,
       'is-bordered': border,
     }
  ]"
  >
    <span
      class="el-radio__input"
      :class="{
       'is-checked': model===label,
       'is-disabled': disabled,
     }"
    >
      <span class="el-radio__inner"></span>
      <input
        type="radio"
        class="el-radio__original"
        :value="label"
        v-model="model"
        :checked="model===label"
        :disabled="disabled"
        @change="handleChange"
      />
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '../../../src/mixins/emitter'
export default {
    name: 'ElRadio',
    components: {}, // 子组件
    mixins: [Emitter],
    computed: {
        model: {
            get() {
                return this.isGroup ? this._radioGroup.value : this.value
            },
            set(val) {
                if (this.isGroup) {
                    // eslint-disable-next-line no-debugger
                    this.dispatch('ElRadioGroup', 'input', [val])
                }
                this.$emit('input', val)
            }
        },
        isGroup() {
            // eslint-disable-next-line no-debugger
            let parent = this.$parent
            while (parent) {
                if (parent.$options.name !== 'ElRadioGroup') {
                    parent = parent.$parent
                } else {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this._radioGroup = parent
                    return true
                }
            }

            return false
        }
    }, // 计算属性

    watch: {}, // 监听属性

    props: {
        label: {},
        disabled: Boolean,
        border: Boolean,
        size: String,
        value: {}
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

    methods: {
        handleChange() {
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
