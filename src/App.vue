<template lang="pug">
router-view
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style vars lang="stylus">

backGray = #f6f7f9
borderGray = #eff1f3
shadowGray = #d8d8d8

html,body,#app {
  margin 0
  height 100%
}
#app {
  font-size .14rem
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
}
.bold {
  font-weight bold
}
.gray {
  color #969595
}
img {
  width 100%
}
</style>