import {
    isEqual
} from '@/utils/util'
import {
    isDef
} from '@/utils/shared'
let uid = 0
export default class Node {
    constructor(data, config, parentNode) {
        this.data = data
        this.config = config
        this.parent = parentNode || null
        this.level = !this.parent ? 1 : this.parent.level + 1
        this.uid = uid++
        this.initState()
        this.initChildren()
    }
    initState () {
        const { value: valueKey, label: labelKey } = this.config
        this.value = this.data[valueKey]
        this.label = this.data[labelKey]
        this.pathNodes = this.calcalatePathNode()
        this.path = this.pathNodes.map(node => node.value)

        this.pathLabels = this.pathNodes.map(node => node.label)

        this.loading = false
        this.loaded = false

    }
    initChildren () {
        const { config } = this
        const childrenKey = config.children
        const childrenData = this.data[childrenKey]
        this.hasChildren = Array.isArray(childrenData)
        this.children = (childrenData || []).map(child => new Node(child, config, this))

    }
    get isLeaf () {
        const { hasChildren, children, loaded, data } = this
        const { lazy, leaf: leafKey } = this.config
        if (lazy) {
            const isLeaf = isDef[data[leafKey]] ?
                data[leafKey] : (loaded ? !children.length : false)
            this.hasChildren = !isLeaf
            return isLeaf
        }

        return !hasChildren
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
    isSameNode (checkedValue) {
        const val = this.getValueByOption()

        return isEqual(checkedValue, val)
    }
    getPath () {
        return this.path
    }
    getValue () {
        return this.value
    }
    getValueByOption () {

        return this.config.emitPath ? this.getPath() : this.getValue()
    }
} 