<template lang="pug">
.tab-bar(v-if="$route.name === 'home' || $route.name === 'about' || $route.name === 'my'")
  van-tabbar(route placeholder active-color="#1296db")
    van-tabbar-item(replace to="/")
      span 首页
      template(#icon="props")
        img(:src="props.active ? '@/assets/home-check.png' : '@/assets/home.png'")
    van-tabbar-item(replace to="/about")
      span 关于
      template(#icon="props")
        img(:src="props.active ? '@/assets/about-check.png' : '@/assets/about.png'")
    van-tabbar-item(replace to="/my")
      span 我的
      template(#icon="props")
        img(:src="props.active ? '@/assets/my-check.png' : '@/assets/my.png'")
</template>

<script>

export default {
  props: {
  },
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped vars lang="stylus">

.tab-bar {
  position fixed
  left 0
  bottom 0
  z-index 9
  min-height auto
  width 100%
  height .48rem
  ::v-deep(.van-tabbar__placeholder) {
    height 100%!important
    .van-tabbar {
      min-height auto
      height .48rem
      z-index 9
      img {
        width .2rem
        height .2rem
      }
      .van-tabbar-item__text {
        margin-top .02rem
      }
    }
  }
}
</style>
