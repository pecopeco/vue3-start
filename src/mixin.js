import { computed } from 'vue'
import router from './router'
import store from './store'
import fly from 'flyio'
import dayjs from 'dayjs'
import { Toast } from 'vant'

export default () => {
  
  // api配置
  const config = { api:
    process.env.NODE_ENV === 'development'
    ? '/api'
    : process.env.NODE_ENV === 'test'
    ? 'https://test.baidu.com'
    : 'https://baidu.com'
  }
  
  // 日期处理函数
  const day = dayjs

  // 跳转
  const go = (path) => {
    router.push(path)
  }

  // 返回
  const goBack = (key = -1) => {
    router.go(key)
  }

  // toast
  const toast = (text, delay = 1500) => {
    Toast({message: text, duration: delay})
  }

  // http配置
  const http = (url, form = {}, type, contentType = 'application/json') => {
    url = url.indexOf("http") !== -1 ? url : config.api + url
    if (contentType === 'multipart/form-data') {
      let formData = new FormData()
      for (let key in form) {
        formData.append(key, form[key])
      }
      form = formData
    }
    return fly.request(url, form, {
      method: type,
      'content-type': contentType,
      headers: {
        token: 'xxxxxxxxxxxx'
      },
      timeout: 10000
    }).then((res) => {
      if (res.status === 200) {
        return res.data
      } else {
        toast(`请求错误：${res.message}，状态码：${res.status}`)
      }
    }).catch((err) => {
      toast(`请求错误：${err.message}，状态码：${err.status}`)
    })
  }
  http.get = (url, form, contentType) => http(url, form, 'get', contentType)
  http.post = (url, form, contentType) => http(url, form, 'post', contentType)
  http.delete = (url, form, contentType) => http(url, form, 'delete', contentType)
  http.put = (url, form, contentType) => http(url, form, 'put', contentType)

  // 表单验证
  const validate = (arr) => {
    let err = {}
    arr.some((item) => {
      // 数字转换字符串
      if (typeof (item.key) === 'number') {
        item.key = item.key.toString()
      }
      // 验证非空
      if (!item.key || item.key.match(/^[ ]+$/)) {
        err[item.type] = true
        err.msg = '请填写' + item.name
        return true
      }
      // 验证姓名
      if (item.type === 'name' && (!/^[\u4e00-\u9fa5]+$/.test(item.key) || item.key.length < 2)) {
        err[item.type] = true
        err.msg = '请输入正确的' + item.name
        return true
      }
      // 验证手机号
      if (item.type === 'phone' && !(item.key.length === 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(item.key))) {
        err[item.type] = true
        err.msg = '请输入正确的' + item.name
        return true
      }
      // 验证身份证号
      if (item.type === 'idCard' && !/^\d{6}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(item.key)) {
        err[item.type] = true
        err.msg = '请输入正确的' + item.name
        return true
      }
      // 验证金额
      if (item.type === 'price' && ((!Number.isFinite(Number(item.key)) || Number(item.key) <= 0) || (item.key.split('.')[1] && item.key.split('.')[1].length > 2))) {
        err.msg = '请输入正确的' + item.name
        return true
      }
      // 验证密码必须为数字或字母
      if (item.type === 'password' && (!/^[0-9a-zA-Z]+$/.test(item.key) || item.key.length < 6)) {
        err[item.type] = true
        err.msg = item.key.length < 6 ? '密码至少为6位' : '密码必须包含数字或字母'
        return true
      }
    })
    return err.msg || ''
  }

  // 防抖
  let debounceTimer
  const debounce = function (func, delay = 1000){
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    let callNow = !debounceTimer
    debounceTimer = setTimeout(() => {
      debounceTimer = null
    }, delay)
    if (callNow) {
      func.apply(this, arguments)
    }
  }

  // 获取url参数
  const getQuery = (name, getParam) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let param = getParam || location.search || location.hash
    let r = param.substr(1).match(reg)
    if (param.split(name).length > 2 && r) {
      param = '?' + param.split(r[0])[param.split(r[0]).length - 1]
      // name参数数量仍然大于2，递归
      if (param.split(name).length > 2) {
        return getQuery(name, param)
      }
      r = param.substr(1).match(reg)
    }
    if (r !== null) return unescape(r[2])
    return null
  }

  // 深拷贝
  const cleanCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj))
  }

  // 判断是否是数字
  const isNum = (key) => {
    return typeof key === 'number' && isFinite(key)
  }
  
  // 计算属性
  const userInfo = computed(() => {
    return store.state.userInfo
  })

  return {
    store,
    day,
    config,
    go,
    goBack,
    toast,
    config,
    http,
    validate,
    debounce,
    getQuery,
    cleanCopy,
    isNum,
    userInfo
  }
}