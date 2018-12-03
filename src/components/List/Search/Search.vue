<template>
  <div class="search">
    <div class="search_input">
       <i class="iconfont icon-sousuo1"></i>
       <span>搜索商品, 共9723款好物</span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .search
      border px2rem(1) solid #eee
      width 100%
      height px2rem(55)
      line-height px2rem(35)
      text-align center
      box-sizing border-box
      padding px2rem(5) 0 0 px2rem(10)
      .search_input
        display flex
        justify-content center
        align-items center
        width 90%
        height 80%
        background-color #EDEDED
        margin px2rem(3) 0 0 px2rem(17)
        i
          font-size px2rem(25)
          display inline-block
          color #666
        span
          font-size px2rem(18)
          display inline-block
          color #666


</style>
