<template>
  <label class="el-checkbox">
      <span class="el-checkbox__input">
          <span class="el-checkbox__inner"></span>
          <input type="checkbox" class="el-checkbox__original">
      </span>
      <span class="el-checkbox__label">
          <slot></slot>
      </span>
  </label>
</template>

<script>
export default {
  name: 'ElCheckbox',
  components: {}, // 子组件

  computed: {}, // 计算属性

  watch: {}, // 监听属性

  props: {},

  data () { return {} },

  // 生命周期钩子

  beforeCreate () {},

  created () {},

  beforeMount () {},

  mounted () {},

  beforeUpdate () {},

  updated () {},

  activated () {},

  deactivated () {},

  beforeDestroy () {},

  destroyed () {},

  // 非响应式的属性 (不依赖响应系统的实例属性)

  methods: {}

}

</script>
<style lang='scss' scoped>
.el-checkbox__original{
    display: none;
}
.el-checkbox__input{
    position: relative;
    vertical-align: middle;
    line-height: 1;
    .el-checkbox__inner{
        display: inline-block;
        background-color: #409eff;
        border-color: #409eff;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        &::after{
            box-sizing: content-box;
            content: "";
            border: 1px solid #fff;
            border-left: 0;
            border-top: 0;
            height: 7px;
            left: 4px;
            position: absolute;
            top: 1px;
            transform: rotate(45deg) scaleY(1);
            width: 3px;
            transition: transform .15s ease-in .05s;
            transform-origin: center;
        }
    }

}
.el-checkbox__label{
        padding-left: 10px;
    }
</style>
