<template lang="pug">
.home
  img(alt="Vue logo" src="/@/assets/logo.png")
  .msg {{ msg }}
  button(@click="count++") count is: {{ count }}
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'vue 3',
      count: 0
    }
  }
}
</script>

<style scoped vars lang="stylus">
@import "../color.styl"

.home {
  .msg {
    color theme
  }
}
</style>