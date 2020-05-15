<template>
    <div>
        <h1>Vue.extend 扩展实例构造器</h1>
        <hr>
        <author></author>
    </div>
</template>
<script>
import Vue from 'vue'
var AuthorURL = Vue.extend({
  template: '<p><a :href="authorURL">{{authorName}}</a></p>',
  data: function () {
    return {
      authorName: 'Ziqin',
      authorURL: 'http://www.baidu.com'
    }
  }
})

new AuthorURL().$mount('author')

export default {
  name: 'Vue.extend',
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
