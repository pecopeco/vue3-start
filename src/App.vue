<template lang="pug">
router-view
tabBar
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import tabBar from '/@/components/tabBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    tabBar
  }
})
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
.btn {
  display flex
  align-items center
  justify-content center
  width 2rem
  height .38rem
  margin .5rem auto 0
  padding 0
  line-height inherit
  border-radius 8px
  background #1989fa
  color #fff
  &:active {
    filter grayscale(30%)
  }
}
.active {
  &:active {
    background rgba(0, 0, 0 .1)
  }
}
.iframe-wrap {
  position fixed
  top .42rem
  right 0
  bottom 0
  left 0
  -webkit-overflow-scrolling: touch
  overflow-y scroll
  iframe {
    width 100%
    height 100%
    border none
  }
}
</style>