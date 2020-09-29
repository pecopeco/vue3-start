<template lang="pug">
.detail
  nav-bar(title="详情")
  div about
  div {{time}}
  .form
    .item
      .label 用户名
      van-field.input(v-model="name" placeholder="请输入用户名" maxlength="6")
    .item
      .label 密码
      van-field.input(v-model="password" type="password" placeholder="请输入密码" maxlength="12")
  .btn(@click="debounce(submit)") 提交
</template>

<script>

export default {
  name: 'about',
  data() {
    return {
      time: this.day().format('YYYY年MM月DD HH:mm:ss'),
      name: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      let err = this.validate([
        {key: this.name, type: 'name', name: '姓名'},
        {key: this.password, type: 'password', name: '密码'}
      ])
      if (err) {
        return this.toast(err)
      }
      let res = await this.http.get('/hehe')
    }
  },
  mounted () {
  }
}
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