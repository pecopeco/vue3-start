<template lang="pug">
.detail
  navBar(title="详情")
  div about
  div {{time}}
  .form
    .item
      .label 用户名
      van-field.input(v-model="name" placeholder="请输入用户名" maxlength="6")
    .item
      .label 密码
      van-field.input(v-model="password" type="password" placeholder="请输入密码" maxlength="12")
  .btn(@click="debounce(submit, 500)") 提交
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import mixin from '/@/mixin.js'

export default defineComponent({
  name: 'detail',
  setup () {
    const { day, toast, http, userInfo, validate, debounce } = mixin()

    const time = ref(day().format('YYYY年MM月DD HH:mm:ss'))
    const name = ref('')
    const password = ref('')

    const submit = async () => {
      let err = validate([
        {key: name.value, type: 'name', name: '姓名'},
        {key: password.value, type: 'password', name: '密码'}
      ])
      if (err) {
        return toast(err)
      }
      let res = await http.get('/hehe')
      console.log(res, userInfo.value)
    }
    
    return {
      time,
      name,
      password,
      debounce,
      submit
    }
  }
})
</script>

<style scoped vars lang="stylus">

.detail {
  .form {
    padding .15rem
    .item {
      display flex
      align-items center
      border-bottom 1px solid #eff1f3
      .label {
        width 1rem
      }
    }
  }
}
</style>