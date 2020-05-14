<template>
    <div>
        <img :src="imgSrc" alt="" width="200px">
        <!-- 直接绑定class样式 -->
        <div :class="className">1、绑定classA</div>
        <!-- 绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。 -->
        <div :class="{classA:isOk}">2、绑定class中的判断</div>
        <!-- 绑定class中的数组 -->
        <div :class="[classA,classB]">3、绑定class中的数组</div>
        <!-- 绑定class中使用三元表达式判断 -->
        <div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>
        <!-- 绑定style -->
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">5、绑定style</div>
        <!-- 用对象绑定style样式 -->
        <div :style="styleObject">6、用对象绑定style样式</div>
    </div>
</template>

<script>
export default {
  name: 'Vbind',
  data () {
    return {
      imgSrc: 'https://images.cnblogs.com/cnblogs_com/zmdComeOn/1763683/o_200512143249WechatIMG7749.png',
      className: 'classA',
      isOk: true,
      classA: 'classA',
      classB: 'classB',
      activeColor: '#FF00EF',
      fontSize: '14',
      styleObject: {
        fontSize: '30px',
        color: 'green'
      }
    }
  }
}
</script>
<style>
.classA{
    color:red
}
.classB{
    font-weight: 700;
    font-size: 40px;
}
</style>
