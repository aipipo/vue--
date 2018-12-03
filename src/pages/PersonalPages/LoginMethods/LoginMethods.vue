<template>
  <div class="personal_content">
    <div class="img">
      <img src="../images/b78fa3d6c60.png" alt="">
    </div>
    <div class="btn">
      <button class="btn_b1 active" @click="$router.replace('/personal/phone')">
        <span class="sp1"><i class="iconfont icon-shouji"></i></span>
        <span class="sp2">手机号码登录</span>
      </button>
      <button class="btn_b1" @click="goto('/personal/email')">
        <span class="sp1 on"><i class="iconfont icon-xinfeng1"></i></span>
        <span class="sp2 on">邮箱账号登录</span>
      </button>
    </div>
    <div class="select">手机号快捷注册 ></div>
    <div class="footer">
      <div class="itemdiv">
        <span><i class="iconfont icon-weixin"></i></span>
        <span>微信</span>
      </div>
      <div class="itemdiv">
        <span><i class="iconfont icon-qq1"></i></span>
        <span>QQ</span>
      </div>
      <div class="itemdiv">
        <span><i class="iconfont icon-weibo"></i></span>
        <span>微博</span>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .personal_content
    padding-top px2rem(90)
    height 100%
    background-color #F2F5F4
    .img
      width px2rem(180)
      height px2rem(66)
      margin auto
      margin-bottom px2rem(100)
      >img
        width 100%
        height 100%
    .btn
      box-sizing border-box
      margin 0 px2rem(20) 0
      .btn_b1
        border px2rem(1) solid #B4282D
        background-color #F2F5F4
        position relative
        width 100%
        height px2rem(60)
        margin-bottom px2rem(30)
        border-radius px2rem(5)
        .sp1
          position absolute
          top px2rem(18)
          left px2rem(140)
          .icon-shouji
            font-size px2rem(25)
            color #fff
          .icon-xinfeng1
            color #B4282D
            font-size px2rem(25)
            position absolute
            top px2rem(0)
            left px2rem(-5)
        .sp2
          margin-left px2rem(25)
          font-size px2rem(18)
          color #fff
        .on
          color #B4282D
      .active
        background-color #B4282D
    .select
      font-size px2rem(18)
      text-align center
    .footer
      position absolute
      bottom px2rem(40)
      left 0
      height px2rem(20)
      line-height px2rem(20)
      box-sizing border-box
      width 100%
      padding 0 px2rem(30)
      .itemdiv
        text-align center
        float left
        width 33%
        border-right px2rem(1) solid #979797
        font-size px2rem(16)
        .iconfont
          font-size px2rem(20)
          color  #979797

      .itemdiv:last-child
        border-right px2rem(1) solid #F2F5F4
</style>
