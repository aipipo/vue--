<template>
  <div class="timer">
    <div class="timePublic timer_top">
      <p class="timePublic_p">严&nbsp;选&nbsp;限&nbsp;时&nbsp;购</p>
      <p class="timePublic_p timePublic_p2">
        <span>11</span>
        <span>:</span>
        <span>11</span>
        <span>:</span>
        <span>11</span>
      </p>
      <p class="timePublic_p timePublic_p3">下一场 22:00 开始</p>
      <div class="timePublic_img">
        <img src="./images/9f33577957e77.png" alt="">
        <div class="special">
          <p class="special_p special_p1">￥42</p>
          <p class="special_p">￥49</p>
        </div>
      </div>
    </div>
    <DivLine />
    <div class="timePublic timer_bottom">
      <img src="./images/move.a3ea2d1.jpg" alt="">
    </div>
    <DivLine />
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .timer
    font-size px2rem(24)
    .timePublic
      box-sizing border-box
      padding px2rem(10) px2rem(30)
      .timePublic_p
        color: #333;
        margin px2rem(20) 0
      .timePublic_p2
         span:nth-child(odd)
            background-color #000
            color #fff
            display inline-block
            padding px2rem(5)
      .timePublic_p3
          font-size px2rem(16)


    .timer_top
      position relative
      width 100%
      height px2rem(200)
      .timePublic_img
        width px2rem(200)
        height px2rem(200)
        position absolute
        top px2rem(20)
        right px2rem(20)
        img
          width 100%
          height 100%
        .special
          width px2rem(64)
          height px2rem(64)
          background-color #F49422
          position absolute
          bottom px2rem(20)
          right  px2rem(10)
          border-radius 50%
          text-align: center
          .special_p
            color #fff
            font-size px2rem(14)
            margin-top px2rem(2)
          .special_p1
            margin-top px2rem(16)

    .timer_bottom
      height px2rem(190)
      padding 0
      img
        height 100%
        width 100%

</style>
