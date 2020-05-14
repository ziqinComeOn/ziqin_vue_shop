<template>
  <div id="app">
<!-- 左边导航-->
    <leftNav></leftNav>
<!-- 主文公共区域-->
    <img src="./assets/logo.png">
    <div id="app-vue">
      <router-link to="/">首页</router-link><span>|</span>
      <router-link to="/product">产品</router-link><span>|</span>
      <router-link :to="{name:'product1',params:{username:'ziqin',id:'666'}}">产品1</router-link><span>|</span>
      <router-link to="/product/product2">产品2</router-link><span>|</span>
      <router-link to="/params/888/ziqin">Params</router-link><span>|</span>
      <router-link to="/goBack">返回首页</router-link><span>|</span>
      <router-link to="/goParams/192/ziqina">返回Params页</router-link><span>|</span>
      <router-link to="/ziqin">ziqin</router-link><span>|</span>
      <router-link to="/bbbbbb">我是404预览页</router-link><span>|</span>
      <button @click="goback">后退</button>
      <button @click="gohome">回到首页</button>
      <router-link to="/von">v-on监听事件</router-link><span>|</span>
    </div>
    <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
      <router-view name='left' style="float:left;width:47.5%;height:300px;background-color:#ccc;"></router-view>
      <router-view name="right" style="float:left;width:47.5%;height:300px;background-color:#c0c;"></router-view>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components: {
    leftNav
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  float:left;
  width:95%;
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;

}
#app-vue span{
  margin: 0 10px;
}
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
