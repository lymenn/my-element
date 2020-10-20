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
}