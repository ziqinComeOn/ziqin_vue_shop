<template>
    <div>
      <h1>{{msg}}</h1>
      <p>newsId:{{$route.params.newsId}}</p>
      <p>newsTitle:{{$route.params.newsTitle}}</p>
    </div>
</template>

<script>
export default{
  name: 'Params',
  data () {
    return {
      msg: '我是Params页面'
    }
  },
  beforeRouteEnter: (to, from, next) => { // 写在模板中的钩子函数
    console.log('准备离开路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => { // 写在模板中的钩子函数
    console.log('准备离开路由模板')
    next()
  }
}
</script>
