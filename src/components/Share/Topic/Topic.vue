<template>
  <div>
    <div class="topic">
      <div class="topic_title">十点一刻</div>
      <div class="carousel">
        <ul class="list ellipsis" >
          <li class="item" v-for="(item, index) in tenfifteen" :key="index">
            <div class="item_text">
              <div class="text_header">
                <span>今日话题</span>
              </div>
              <div class="content_text01">{{item.title}}</div>
              <div class="content_text02">{{item.desc}}</div>
              <div class="content_text03">{{item.participantNum}}人参与话题</div>
            </div>
          </li>
          <li class="item">
              <div class="item_more">查看更多话题 <i class="iconfont icon-gengduo2"></i> </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    tenfifteen: Array
  },
  watch: {
    tenfifteen () {
      this.$nextTick(() => {
        new BScroll('.carousel', {
          click: true,
          scrollX :true
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .topic_title
      height px2rem(70)
      line-height px2rem(70)
      background-color: #eee
      font-size px2rem(18)
      text-align center

  .carousel
    padding px2rem(10)
    clearFix()
    width 100%
    .list
      padding-right px2rem(450)
      float left
      .item
        display inline-block
        box-sizing border-box
        text-align center
        width px2rem(384)
        height px2rem(260)
        .item_text
          background-image url('./images/beijingtupian.png')
          background-repeat no-repeat
          background-position: px2rem(10) 0
          width 100%
          height 100%
          box-sizing border-box
          padding px2rem(20) px2rem(40) px2rem(50)
          .text_header
             display flex
             justify-content center
             align-items center
             margin-top px2rem(5)
             &:before
                content ''
                width px2rem(25)
                height px2rem(1)
                background-color #7f7f7f
                display block
             &:after
               content ''
               width px2rem(25)
               height px2rem(1)
               background-color #7f7f7f
               display block
             >span
               margin 0 px2rem(10)
               font-size px2rem(10)
               color #7f7f7f

          .content_text01
            font-size px2rem(24)
            margin px2rem(30) 0 px2rem(20)
          .content_text02
            font-size px2rem(16)
            margin-bottom px2rem(40)
          .content_text03
            font-size px2rem(12)
      .item:last-child
         position absolute
         top 0
         right px2rem(60)
         height px2rem(240)
         box-sizing border-box
         border px2rem(8) solid #E6E6E6
         font-size px2rem(24)
         .item_more
            margin-top px2rem(100)
            color #999
            .icon-gengduo2
               width px2rem(20)
               height  px2rem(20)
               font-size px2rem(22)
</style>
