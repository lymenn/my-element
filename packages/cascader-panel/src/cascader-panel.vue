<template>
  <div class="el-cascader-panel">hhh</div>
</template>
<script>
import { merge } from '@/utils/merge'

const DefaultProps = {
    expandTrigger: 'click'
}
export default {
    name: 'ElCascaderPanel',
    props:{
        options:{
            type: Array,
        }
    },
    created() {
        console.log(this.options);
    },
    computed: {
        config(){
            return merge({...DefaultProps}, this.props || {})
        }
    },
    methods: {
        initStore(){}    
    },
}
</script>
