<template lang="pug">
.about
  div about
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped vars lang="stylus">

.about {
  &:after {
    content ''
    display flex
    width 100%
    height .48rem
  }
}
</style>