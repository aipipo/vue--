<template>
  <div class="container">
    <div class="first">
      <img src="./images/first01.jpg" alt="">
    </div>
    <div class="first">
      <img src="./images/first02.jpg" alt="">
    </div>
    <div class="first">
      <img src="./images/first03.jpg" alt="">
      <router-link to="/home" class="goto_home"/>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .container
    width 100%
    height 100%
    background-color #EEE
    .first
      height 33%
    .first:last-child
      position: relative
      top px2rem(-1px)
      .goto_home
        width px2rem(180)
        height px2rem(30)
        position: absolute
        top px2rem(140)
        left px2rem(145)
    img
      width 100%
      height 100%
      vertical-align top
</style>
