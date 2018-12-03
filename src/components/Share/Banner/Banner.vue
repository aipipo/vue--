<template>
  <div class="banner">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <a href="javascript:;">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
            <img class="swiper_img" v-lazy="item.picUrl" alt="">
          </a>


        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  props: {
    banner: Array
  },
  watch: {
    banner () {
      this.$nextTick(() => {
          new Swiper('#swiper1', {
            loop: true,
            slidesPerView: 1.15,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
            },
            spaceBetween : 20,

          })

      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .banner
    width 100%
    height px2rem(240)
    box-sizing border-box
    .swiper-container
      box-sizing border-box
      .swiper-slide
        width 100%
        a
          display block
          height px2rem(240)
          img
            width 100%
            height px2rem(240)
            border-radius px2rem(8)
          .content
            position absolute
            top 0
            left 0
            bottom 0
            right 0
            margin auto
            display flex
            align-items center
            justify-content center
            flex-direction column
            width px2rem(290)
            height px2rem(130)
            background-color rgba(255, 255, 255, .9)
            .subTitle
              margin-top px2rem(26)
              position relative
              font-size px2rem(12)
              color #7f7f7f
              /*line-height px2rem(10)*/
              padding  0 px2rem(14)
              &:before,&:after
                content ''
                position absolute
                top 0
                bottom 0
                margin auto
                width px2rem(24)
                height 1px
                background-color #999999
              &:before
                left px2rem(-24)
              &:after
                right px2rem(-24)
            .title
              font-size px2rem(20)
              line-height px2rem(25)
              color #333333
              margin-top px2rem(20)
              font-weight 700
            .desc
              font-size px2rem(16)
              color #333333
              line-height px2rem(36)
</style>
