import { cocerceTruthyValueToArray } from '@/utils/util'
import Node from './node'
export default class Store {
    constructor(data, config) {
        this.config = config
        this.initNodes(data)
    }

    initNodes (data) {
        data = cocerceTruthyValueToArray(data)
        this.nodes = data.map(nodeData => new Node(nodeData, this.config))
    }
    getNodes () {
        return this.nodes
    }
    appendNodes (nodes, parentNode) {
        const nodeList = cocerceTruthyValueToArray(nodes)
        nodeList.forEach(nodeData => this.appendNode(nodeData, parentNode))
    }
    appendNode (nodeData, parentNode) {
        const node = new Node(nodeData, this.config, parentNode)
        const children = parentNode ? parentNode.children : this.nodes
        children.push(node)
    }
}