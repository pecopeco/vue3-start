<template lang="pug">
.home
  img.logo.active(src="@/assets/logo.png")
  .msg {{msg}}
  .btn(@click="go('/detail')") go detail
  .btn(@click="debounce(getData)") 提交
</template>

<script>
import { ref } from 'vue'
import mixin from '@/mixin.js'

export default {
  setup () {
    const { store, day, go, http, userInfo, debounce } = mixin()

    const msg = ref({text: 'Hello world'})

    const getData = async () => {
      await http.get('/hehe')
      store.dispatch('setUser', 'teng')
      console.log('getData', msg.value.text, userInfo.value, day().format('YYYY年MM月DD HH:mm:ss'))
    }
    getData()
    
    return {
      go,
      msg,
      debounce,
      getData
    }
  }
}
</script>

<style scoped lang="stylus">

.home {
  &:after {
    content ''
    display flex
    width 100%
    height .48rem
  }
  .logo {
    width 1rem
  }
  .msg {
    color #008161
  }
}
</style>