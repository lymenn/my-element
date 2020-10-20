<script>
import CascaderNode from './cascader-node'
export default {
    name: 'ElCascaderMenu',
    components: {
        CascaderNode
    },
    props: {
        nodes: Array
    },
    computed: {
        isEmpty() {
            return !this.nodes.length
        }
    },
    methods: {
        renderEmptyText(h) {
            return <div class="el-cascader-menu__empty-text">无数据</div>
        },
        renderNodeList() {
            const nodes = this.nodes.map(node => {
                return <cascader-node node={node}></cascader-node>
            })
            return nodes
        }
    },

    render() {
        const { isEmpty } = this
        return <ul>{isEmpty ? this.renderEmptyText() : this.renderNodeList()}</ul>
    }
}
</script>