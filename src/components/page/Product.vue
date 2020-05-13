<template>
    <div class="product">
        {{ msg }}
        <router-view></router-view>
        <router-view name='left' style="float:left;width:40%;height:300px;background-color:#ccc;"></router-view>
        <router-view name="right" style="float:left;width:40%;height:300px;background-color:#c0c;"></router-view>
    </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      msg: '我是产品页'
    }
  }
}
</script>

<style scoped>

</style>
