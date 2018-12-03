<template>
  <div class="header">
    <span class="spn1" @click="$router.replace('/home')">
      <i class="iconfont icon-shouye"></i>
    </span>
    <span class="spn2">网易严选</span>
    <span class="spn3"><i class="iconfont icon-sousuo1"></i></span>
    <span class="spn4"><i class="iconfont icon-gouwuche"></i></span>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .header
      width 100%
      position absolute
      top 0
      left 0
      z-index 1000
      height px2rem(50)
      padding 0 px2rem(10)
      line-height px2rem(30)
      background-color #FAFAFA
      >span
        font-size px2rem(24)

        >i
          display inline-block
          font-size px2rem(30)
          width px2rem(20)
          height px2rem(20)
      .spn1
         margin-left px2rem(10)
      .spn2
         margin-left px2rem(120)
      .spn3
        margin-left px2rem(90)
        position relative
        >i
          font-size px2rem(35)
          position absolute
          top px2rem(1)
      .spn4
        margin-left px2rem(40)
</style>
