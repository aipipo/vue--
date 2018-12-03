<template>
  <div class="share">
    <div class="share_header">
      购物车
    </div>
    <div class="share_content">
      <div class="share_offer">
        <span>
          <i class="iconfont icon-kongxinyuan"></i>
          <span>30天无忧退货</span>
        </span>
        <span>
          <i class="iconfont icon-kongxinyuan"></i>
          <span>48小时快速退款</span>
        </span>
        <span>
          <i class="iconfont icon-kongxinyuan"></i>
          <span>满88元免邮费</span>
        </span>
      </div>
      <div class="share_img">
        <img src="./images/noCart-a8fe3f12e5.png" alt="">
      </div>
      <p class="share_text">去添加点什么吧</p>
      <div class="share_btn">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .share
    width 100%
    height 100%
    .share_header
      height 7%
      text-align center
      font-size px2rem(22)
      line-height px2rem(60)
    .share_content
      background-color: #F4F4F4
      width 100%
      height 93%
      .share_offer
        display flex
        justify-content space-around
        align-items center
        height 6%
        >span
           font-size px2rem(14)
           >i
             width px2rem(25)
             height px2rem(25)
             line-height px2rem(30)
             display inline-block
             font-size px2rem(25)
             vertical-align middle


      .share_img
        margin px2rem(200) 0 0 px2rem(150)
        height px2rem(150)
        >img
          height 100%
      .share_text
        font-size px2rem(18)
        text-align center
        color #999
        margin-bottom px2rem(20)
      .share_btn
        text-align center
        >button
          font-size px2rem(18)
          width px2rem(300)
          height px2rem(55)
          color #fff
          background-color #B4282D
</style>
