<template lang="pug">
.about
  div {{msg}}
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const msg = ref('Hello world: about')
    return {
      msg
    }
  }
}
</script>

<style scoped lang="stylus">

.about {
  &:after {
    content ''
    display flex
    width 100%
    height .48rem
  }
}
</style>