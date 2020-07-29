<template>
  <button
  class="el-button"
  @click="handleClick"
  :class="[
  'el-button--'+type,
  size ? 'el-button--'+size: '',
  {
    'is-plain': plain,
    'is-round': round,
    'is-disabled': disabled,
    'is-loading': loading,
    'is-circle': circle,
  }
  ]"
  >
    <i :class="icon" v-if="icon"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>

</template>

<script>
export default {
  name: 'ElButton',
  props: {
    size: String,
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    circle: Boolean,
    round: Boolean

  },
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {
    console.log(this.size ? 1 : 0)
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="scss" scoped></style>
