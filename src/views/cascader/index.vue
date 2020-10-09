<template>
  <div>
    <el-cascader-panel></el-cascader-panel>
  </div>
</template>
<script>
export default {
    name: 'demo',
    props: {
        sex: String
    },
    data: function () {
        return {
            options: {}
        }
    },
    created () {
        console.log(this)
    },
    computed: {
        tangem () {
            console.log(33)
            return 12
        }
    }
}
</script>
