<template>
  <div :class="[
    'el-cascader-panel',
    border && 'is-bordered'
  ]">
    <cascader-menu ref="menu" v-for="(menu,index) in menus" :key="index" :nodes="menu"></cascader-menu>
  </div>
</template>
<script>
import merge from '@/utils/merge'
import { isEqual } from '@/utils/util'
import Store from './store'
import CascaderMenu from './cascader-menu'
const DefaultProps = {
    expandTrigger: 'click',
    children: 'children',
    value: 'value',
    label: 'label',
    emitPath: true,
    checkedStrictly: false
}
export default {
    name: 'ElCascaderPanel',
    provide() {
        return {
            panel: this
        }
    },
    components: {
        CascaderMenu
    },
    props: {
        options: {
            type: Array
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            menus: [],
            activePath: [],
            checkedValue: null
        }
    },
    watch: {
        options: {
            handler: function() {
                this.initStore()
            },
            immediate: true
        },
        checkedValue(val) {
            if (!isEqual(val, this.value)) {
                this.$emit('input', val)
                this.$emit('change', val)
            }
        }
    },
    computed: {
        config() {
            return merge({ ...DefaultProps }, this.props || {})
        }
    },
    methods: {
        initStore() {
            const { options, config } = this

            this.store = new Store(options, config)
            this.menus = [this.store.getNodes()]
        },
        handleCheckChange(value) {
            this.checkedValue = value
        },
        handleExpand(node) {
            const { activePath, menus } = this
            const { level } = node
            let path = activePath.splice(0, level - 1)
            let menu = menus.splice(0, level)
            if (!node.isLeaf) {
                path.push(node)
                menu.push(node.children)
            }

            this.activePath = path
            this.menus = menu
        }
    }
}
</script>
