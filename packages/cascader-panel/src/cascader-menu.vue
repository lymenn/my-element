<script>
import CascaderNode from './cascader-node'
import Scrollbar from '~/packages/scrollbar'
export default {
    name: 'ElCascaderMenu',
    components: {
        CascaderNode,
        Scrollbar
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
        renderEmptyText() {
            return <div class="el-cascader-menu__empty-text">暂无数据</div>
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
        return (
            <scrollbar
                tag="ul"
                class="el-cascader-menu"
                wrap-class="el-cascader-menu__wrap"
                view-class="el-cascader-menu__list"
            >
                {isEmpty ? this.renderEmptyText() : this.renderNodeList()}
            </scrollbar>
        )
    }
}
</script>