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
import { isEqual, isEmpty } from '@/utils/util'
import Store from './store'
import CascaderMenu from './cascader-menu'
const DefaultProps = {
    expandTrigger: 'click',
    children: 'children',
    value: 'value',
    label: 'label',
    leaf: 'leaf',
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
        value:{},
        options: {
            type: Array
        },
        border: {
            type: Boolean,
            default: true
        },
        props: Object
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
            console.log(this.value,66);
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

            if (config.lazy && isEmpty(options)) {
                this.lazyLoad()
            } else {
                this.store = new Store(options, config)
                this.menus = [this.store.getNodes()]
            }
        },
        lazyLoad(node, onFullfiled) {
            const { config } = this
            if (!node) {
                node = node || { root: true, level: 0 }
                this.store = new Store([], config)
                this.menus = [this.store.getNodes()]
            }
            node.loading = true
            const resolve = dataList => {
                const parent = node.root ? null : node
                dataList && dataList.length && this.store.appendNodes(dataList, parent)
                node.loading = false
                node.loaded = true

                onFullfiled && onFullfiled(dataList)
            }
            config.lazyLoad && config.lazyLoad(node, resolve)
        },
        handleCheckChange(value) {
            this.checkedValue = value
        },
        handleExpand(node, silent) {
            const { activePath, menus } = this

            const { level } = node
            let path = activePath.slice(0, level - 1)

            let menu = menus.slice(0, level)
            if (!node.isLeaf) {
                path.push(node)
                menu.push(node.children)
            }
            this.activePath = path
            this.menus = menu

            if (!silent) {
                const pathValues = path.map(node => node.getValue())
                const activePathValues = activePath.map(node => node.getValue())

                if (!isEqual(pathValues, activePathValues)) {
                    this.$emit('expand-change', pathValues)
                }
            }
        }
    }
}
</script>
