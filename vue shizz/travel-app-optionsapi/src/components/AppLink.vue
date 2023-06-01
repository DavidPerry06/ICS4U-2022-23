<template>
    <a v-if="isExternal" class="external-link" target="_blank" rel="noopener" :href="to"><slot/></a>
    <router-link v-else class="internal-link" v-bind="$props"><slot/></router-link>
</template>

<script>
import {RouterLink} from 'vue-router'
export default{
    props:{
        ...RouterLink.props
    },
    computed:{
        isExternal(){
            return typeof this.to === 'string' && this.to.startsWith('http')
        }
    }
}
</script>