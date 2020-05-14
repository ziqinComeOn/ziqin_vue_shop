<template>
    <div>
        <h1>v-on 事件监听器</h1>
        <hr>
        <div class="von">
            本场比赛得分：{{count}} <br/>
            <button v-on:click="jiafen">加分</button>
            <button v-on:click="jianfen">减分</button>
            <input type="text" v-on:keyup.enter="onEnter" v-model="secondCount">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Von',
  data () {
    return {
      count: 1,
      secondCount: ''
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
    },
    onEnter: function () {
      this.count = this.count + parseInt(this.secondCount)
    }
  }
}
</script>
<style scoped>

</style>
