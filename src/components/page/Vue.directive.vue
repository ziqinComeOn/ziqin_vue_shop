<template>
    <div>
        <h1>Vue.directive 自定义指令</h1>
        <hr>
        <div class="von">
            本场比赛得分：<div v-ziqin="color">{{count}} </div>
            <button v-on:click="jiafen">加分</button>
            <button v-on:click="jianfen">减分</button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('ziqin', { // 五个钩子函数
  bind: function (el, binding) { // 被绑定
    console.log('1 - bind')
    console.log(el)
    console.log(binding)
    console.log(binding.name)
    console.log(binding.value)
    console.log(binding.expression)
    el.style = 'color:' + binding.value
  },
  inserted: function () { // 绑定到节点
    console.log('2 - inserted')
  },
  update: function () { // 组件更新
    console.log('3 - update')
  },
  componentUpdated: function () { // 组件更新完成
    console.log('4 - componentUpdated')
  },
  unbind: function () { // 解绑
    console.log('5 - unbind')
  }
})
export default {
  name: 'Vue.directive',
  data () {
    return {
      count: 1,
      color: 'green'
    }
  },
  methods: {
    jiafen: function () {
      this.count++
    },
    jianfen: function () {
      if (this.count !== 0) {
        this.count--
      }
    }

  }
}
</script>
<style scoped>

</style>
