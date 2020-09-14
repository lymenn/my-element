export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name
      while (parent && name !== componentName) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        // console.log(parent, [eventName].concat(params))
        parent.$emit.apply(parent, [eventName].concat(params))
        // parent.$emit(eventName, params)
      }
    }
  }
}
