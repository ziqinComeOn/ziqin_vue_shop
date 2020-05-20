<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- 路由占位符 -->
      <router-view></router-view>
    </transition>
      <router-view name='left' style="float:left;width:47.5%;height:300px;background-color:#ccc;"></router-view>
      <router-view name="right" style="float:left;width:47.5%;height:300px;background-color:#c0c;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    goback () { // 后退
      this.$router.go(-1)
    },
    gohome () { // 回到首页
      this.$router.push('/')
    }
  }
}
</script>

<style>
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
