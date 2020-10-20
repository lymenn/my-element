<template>
  <div class="el-cascader-panel">
    <cascader-menu ref="menu" v-for="(menu,index) in menus" :key="index" :nodes="menu"></cascader-menu>
  </div>
</template>
<script>
import merge from '@/utils/merge'
import Store from './store'
import CascaderMenu from './cascader-menu'
const DefaultProps = {
    expandTrigger: 'click',
    children: 'children',
    label: 'label'
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
        }
    },
    data() {
        return {
            menus: [],
            activePath: []
        }
    },
    watch: {
        options: {
            handler: function() {
                this.initStore()
            },
            immediate: true
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
            console.log(menu, 'menu')
            console.log(path, 'path')
        }
    }
}
</script>
