import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Row from './row/index.js'
import Col from './col/index.js'
import Link from './link/index.js'
import Radio from './radio/index.js'
import RadioGroup from './radio-group/index.js'
import RadioButton from './radio-button/index.js'
import Checkbox from './checkbox/index.js'
import CascaderPanel from './cascader-panel/index.js'
import Scrollbar from './scrollbar/index.js'

const components = [
  Scrollbar,
  CascaderPanel,
  Checkbox,
  RadioButton,
  RadioGroup,
  Radio,
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
