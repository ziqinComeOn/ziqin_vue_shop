<template>
    <div class="pos">
        {{ msg }}--{{ $route.params.username }}--{{ $route.params.id }}
    </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      msg: '我是产品1页面'
    }
  }
}
</script>

<style scoped>

</style>
