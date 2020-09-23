<template lang="pug">
.my
  div my
</template>

<script>
export default {
  name: 'my',
  data() {
    return {
    }
  }
}
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