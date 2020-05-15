<template>
    <div>
        <h1>Vue.extend 扩展实例构造器</h1>
        <hr>
        <div class="von">
            本场比赛得分：<div>{{inData.count}} </div>
            <ul>
                <li v-for='item in inData.arr' v-bind:key="item">{{item}}</li>
            </ul>
            <button v-on:click="jiafen">加分</button>
            <!-- <button :click="jianfen">减分</button> -->
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
var outData = {
  count: 1,
  arr: ['aaa', 'bbb', 'ccc']
}

export default {
  name: 'Vue.set',
  data () {
    return {
      inData: outData
    }
  },
  methods: {
    jiafen: function () {
      // outData.count++
      // outData.arr[1] = 'ffff'
      // Vue.set(outData, 'count', 2)
      Vue.set(outData.arr, 1, 'fff')
    }
  }
}
</script>
<style scoped>

</style>
