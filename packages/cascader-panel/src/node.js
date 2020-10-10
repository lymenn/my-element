export default class Node {
    constructor(data, config, parentNode) {
        this.data = data
        this.config = config
        this.parent = parentNode || null


        this.initState()
        this.initChildren()
    }
    initState () {

        cosnt { value: valueKey, label: labelKey } = this.config
        this.value = this.data[valueKey]
        this.label = this.data[labelKey]
        this.pathNodes = this.calcalatePathNode()
        this.path = this.pathNodes.map(node => node.value)
        this.pathLabels = this.pathNodes.map(node => node.label)

    }
    initChildren () {
        const { config } = this
        const childrenKey = config.children
        const childrenData = this.data[childrenKey]
        this.hasChildren = Array.isArray(childrenData)
        this.children = (childrenData || []).map(child => new Node(child, config, this))

    }
    calcalatePathNode () {
        let nodes = [this]
        let parent = this.parent
        while (parent) {
            nodes.unshift(parent)
            parent = parent.parent
        }
        return nodes
    }
} 