<template>
  <div class="footer">
    <div class="footer_home" :class="{active: $route.path==='/home'}" @click="goto('/home')">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="footer_classify" :class="{active: $route.path==='/classify'}" @click="goto('/classify')">
      <span>
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="footer_share" :class="{active: $route.path==='/share'}" @click="goto('/share')">
      <span>
        <i class="iconfont icon-wupin"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="footer_shopping" :class="{active: $route.path==='/shopping'}" @click="goto('/shopping')">
      <span>
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="footer_personal" :class="{active: $route.path==='/personal'}" @click="goto('/personal')">
      <span>
        <i class="iconfont icon-gerenzhongxin1"></i>
      </span>
      <span>个人</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      console.log(path)
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .footer
    position fixed
    bottom 0
    display flex
    justify-content space-around
    width  100%
    height px2rem(70)
    background-color #eee
    font-size px2rem(20)
    > .active
      color red
    div
      width px2rem(48)
      height px3rem(71)
      font-size px2rem(16)
      color #646464
      span:nth-child(1)
        margin px2rem(10) 0
      span
        width 100%
        display inline-block
        text-align center
        font-weight bold
        .iconfont
          font-size px2rem(28)
</style>
