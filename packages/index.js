import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Row from './row/index.js'
import Col from './col/index.js'
import Link from './link/index.js'

const components = [
  Button,
  Link,
  Col,
  ButtonGroup,
  Row
]

const install = function (Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
