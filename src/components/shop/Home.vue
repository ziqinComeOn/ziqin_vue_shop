<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      sessionStorage.clear() // 清空token
      this.$router.push('/login') // 跳转login页面
    }
  }
}
</script>
<style lang="less" scoped>
</style>
