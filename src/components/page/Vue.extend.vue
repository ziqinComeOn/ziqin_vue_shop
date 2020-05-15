<template>
    <div>
        <h1>Vue.extend 扩展实例构造器</h1>
        <hr>
        <!-- <div id='author'></div> -->
        <author></author>
    </div>
</template>
<script>
import Vue from 'vue'
// 第一种 创建 挂载
/* 1、创建注册实例构造器 */
var AuthorURL = Vue.extend({
  template: '<p><a :href="authorURL">{{authorName}}</a></p>',
  data: function () {
    return {
      authorName: 'Ziqin',
      authorURL: 'http://www.baidu.com'
    }
  }
})

/* 2、挂载扩展实例构造器 */
// new AuthorURL().$mount('#author')
/* 第二种：配合全局组件---全局注册组件 */
Vue.component('author', AuthorURL)

export default {
  name: 'Vue.extend',
  data () {
    return {
    }
  },
  beforeCreate: function () {
    console.log(123)
  },
  created: function () {
    console.log('456')
  }
}
</script>
<style scoped>

</style>
