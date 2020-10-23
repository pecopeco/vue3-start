<template lang="pug">
.nav-bar
  van-nav-bar(:title="title" left-arrow @click-left="goBack()")
</template>

<script>
import { defineComponent } from 'vue'
import mixin from '/@/mixin.js'

export default defineComponent({
  name: 'navBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup () {
    // const { goBack } = mixin()
    // return {
    //   goBack
    // }
  }
})
</script>

<style scoped vars lang="stylus">

.nav-bar {
  height .42rem
  .van-nav-bar {
    position fixed
    width 100%
    height .42rem
    z-index 9
    .van-nav-bar__left {
      display flex
      align-items center
      height 100%
      .van-nav-bar__arrow {
        font-size 22px
        color #000
      }
    }
  }
}
</style>
