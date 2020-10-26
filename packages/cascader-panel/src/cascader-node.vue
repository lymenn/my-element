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
            const { node, config, panel } = this
            if (node.loading) return
            if (config.lazy && !node.loaded) {
                panel.lazyLoad(node, () => {
                    const { isLeaf } = this
                    if (!isLeaf) this.handleExpand()
                })
            } else {
                this.panel.handleExpand(node)
            }
        },
        renderContent() {
            const { node } = this
            return <span class="el-cascader-node__label">{node.label}</span>
        },
        renderExpandIcon() {
            return <i class="el-icon-arrow-right el-cascader-node__postfix"></i>
        },
        renderCheckedIcon() {
            return <i class="el-icon-check el-cascader-node__prefix"></i>
        },
        renderLoadingIcon() {
            return <i class="el-icon-loading el-cascader-node__postfix"></i>
        },
        renderPrefix() {
            const { node, isLeaf, isChecked } = this
            if (isChecked) {
                return this.renderCheckedIcon()
            }
        },
        renderPostfix() {
            const { node, isLeaf } = this

            if (node.loading) {
                return this.renderLoadingIcon()
            } else if (!isLeaf) {
                return this.renderExpandIcon()
            }
            return null
        }
    },
    render(h) {
        const { config, inActivePath, isLeaf, isChecked } = this
        const { expandTrigger } = config
        const events = { on: {} }
        if (expandTrigger === 'click') {
            events.on.click = this.handleExpand
        } else{
            events.on.mouseenter = this.handleExpand
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