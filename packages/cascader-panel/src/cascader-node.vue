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
        }
    },
    methods: {
        handleExpand() {
            console.log(222)
            const { node } = this
            this.panel.handleExpand(node)
        },
        renderContent() {
            const { node } = this
            console.log(node)

            return <span class="el-cascader-node__label">{node.label}</span>
        }
    },
    render(h) {
        const { config } = this
        const { expandTrigger } = config
        const events = { on: {} }
        if (expandTrigger === 'click') {
            events.on.click = this.handleExpand
        }
        return <li {...events}>{this.renderContent()}</li>
    }
}
</script>