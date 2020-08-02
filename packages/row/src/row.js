export default {
  name: 'ElRow',
  componentName: 'ElRow',
  props: {
    gutter: Number,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    tag: {
      type: String,
      default: 'div'
    },
    type: String

  },
  computed: {
    style: function () {
      const ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  },
  render (h) {
    console.log(this.$slots.default)
    return h(this.tag, {
      class: [
        'el-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        this.type === 'flex' ? 'el-row--flex' : ''
      ],
      style: this.style
    }, this.$slots.default)
  }
}
