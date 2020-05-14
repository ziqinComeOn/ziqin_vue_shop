<template>
    <div id="app">
      <p>原始文本信息v-model：{{message}}</p>
      <p>原始文本信息v-model.lazy：{{lazy}}</p>
      <p>原始文本信息v-model.number：{{number}}--数据类型：{{ typeof number}}</p>
      <p>原始文本信息v-model.trim：{{trim}}</p>
      <h3>文本框</h3>
      <p>v-model:<input type="text" v-model="message"></p>
      <p>v-model:<input type="text" v-model.lazy="lazy"></p>
      <p>v-model:<input type="text" v-model.number="number"></p>
      <p>v-model:<input type="text" v-model.trim="trim"></p>
      <textarea cols="30" rows="10" v-model="message"></textarea>
      <h3>多选按钮绑定一个值</h3>
      <input type="checkbox" id="isTrue" v-model="isTrue">
      <label for='isTrue'>{{isTrue}}</label>
      <h3>多选绑定一个数组</h3>
        <p>
          <input type="checkbox" id="JSPang" value="JSPang" v-model="web_Names">
          <label for="JSPang">JSPang</label><br/>
          <input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
          <label for="JSPang">Panda</label><br/>
          <input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
          <label for="JSPang">PanPan</label><br/>
          <span>{{web_Names}}</span>
        </p>
      <h3>单选按钮绑定</h3>
      <input type="radio" id="one" value="男" v-model="sex">
      <label for="one">男</label>
      <input type="radio" id="two" value="女" v-model="sex">
      <label for="one">女</label>
      <p>{{sex}}</p>
  </div>
</template>
<script>
export default {
  name: 'Von',
  data () {
    return {
      message: 'hello Vue!',
      lazy: 'hello Vue1',
      number: 'abc',
      trim: ' hello Vue ',
      isTrue: '',
      web_Names: '',
      sex: ''
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
