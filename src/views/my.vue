<template lang="pug">
.my
  div {{ msg }}
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const msg = ref('Hello world: my')
    return {
      msg
    }
  }
}
</script>

<style scoped lang="stylus">

.my {
  &:after {
    content ''
    display flex
    width 100%
    height .48rem
  }
}
</style>