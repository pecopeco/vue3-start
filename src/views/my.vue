<template lang="pug">
.my
  div {{ msg }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'my',
  setup () {
    const msg = ref('Hello world: my')
    return {
      msg
    }
  }
})
</script>

<style scoped vars lang="stylus">

.my {
  &:after {
    content ''
    display flex
    width 100%
    height .48rem
  }
}
</style>