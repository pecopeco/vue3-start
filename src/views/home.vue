<template lang="pug">
.home
  img.logo(src="/@/assets/logo.png")
  .msg.gray {{ msg }}
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

.home {
  .logo {
    width 1rem
  }
  .msg {
  }
}
</style>