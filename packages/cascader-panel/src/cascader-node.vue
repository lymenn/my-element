<script>
export default {
    name: 'ElCascaderNode',
    inject: ['panel'],
    props: {
        node: {
            required: true
        }
    },
    computed: {
        config() {
            return this.panel.config
        },
        isLeaf() {
            return this.node.isLeaf
        },
        inActivePath() {
            return this.isInPath(this.panel.activePath)
        },
        value() {
            return this.node.getValueByOption()
        },
        isChecked() {
            return this.node.isSameNode(this.checkedValue)
        },
        checkedValue() {
            return this.panel.checkedValue
        }
    },
    methods: {
        handleCheckChange() {
            const { panel, value } = this

            panel.handleCheckChange(value)
        },
        isInPath(pathNodes) {
            const { node } = this
            const selectedNode = pathNodes[node.level - 1] || {}
            return selectedNode.uid === node.uid
        },
        handleExpand() {
            const { node } = this
            this.panel.handleExpand(node)
        },
        renderContent() {
            const { node } = this

            return <span class="el-cascader-node__label">{node.label}</span>
        },
        renderExpandIcon() {
            return <i class="el-icon-arrow-right el-cascader-node__postfix"></i>
        },
        renderPrefix() {},
        renderPostfix() {
            const { node, isLeaf } = this
            if (!isLeaf) {
                return this.renderExpandIcon()
            }
        }
    },
    render(h) {
        const { config, inActivePath, isLeaf, isChecked } = this
        const { expandTrigger } = config
        const events = { on: {} }
        if (expandTrigger === 'click') {
            events.on.click = this.handleExpand
        }
        if (isLeaf) {
            events.on.click = this.handleCheckChange
        }
        return (
            <li
                class={{
                    'el-cascader-node': true,
                    'in-active-path': inActivePath,
                    'is-active': isChecked
                }}
                {...events}
            >
                {this.renderPrefix()}
                {this.renderContent()}
                {this.renderPostfix()}
            </li>
        )
    }
}
</script>