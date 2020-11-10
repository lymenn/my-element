<template>
  <div @click="toggleDropDownVisible" ref="reference" :class="[ 'el-cascader']">
    <el-input v-model="inputValue">
      <template slot="suffix">
        <i :class="[
        'el-input__icon',
        'el-icon-arrow-down',
        ]"></i>
      </template>
    </el-input>
    <div :class="['el-popper', 'el-cascader__dropdown']" v-show="dropDownVisible">
      <el-cascader-panel v-model="checkedValue" :options="options"></el-cascader-panel>
    </div>
  </div>
</template>
<script>
import Popper from '@/utils/vue-popper'
import Emitter from '@/mixins/emitter'
const PopperMixin = {
    props: {
        placement: {
            type: String,
            default: 'bottom-start'
        },
        appendToBody: Popper.props.appendToBody,
        visibleArrow: {
            type: Boolean,
            default: true
        },
        arrowOffset: Popper.props.arrowOffset,
        offset: Popper.props.offset,
        boundariesPadding: Popper.props.boundariesPadding,
        popperOptions: Popper.props.popperOptions
    },
    methods: Popper.methods,
    data: Popper.data,
    beforeDestory: Popper.beforeDestory
}
export default {
    name: 'ElCascader',
    props: {
        value: {},
        options: {}
    },
    mixins: [PopperMixin, Emitter],
    data() {
        return {
            checkedValue: this.value || null,
            inputValue: null,
            dropDownVisible: false
        }
    },
    methods: {
        toggleDropDownVisible(visible) {
            if (visible !== this.dropDownVisible) {
                this.dropDownVisible = visible
                if (visible) {
                    this.$nextTick(() => {
                        this.updatePopper()
                    })
                }
                this.$emit('visible-change', visible)
            }
        }
    }
}
</script>
