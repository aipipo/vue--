<template>
  <div class="recommend" v-if="data.name">
      <div class="header">{{data.name}}</div>
      <div class="weini">
        <div class="img">
          <img :src="data.Item[0].picUrl" alt="">
        </div>
        <div class="introduce">
          <div class="introduce_t">
            <div class="left">{{data.Item[0].title}}</div>
            <div class="right">{{data.Item[0].priceInfo}}元起</div>
          </div>
          <div class="introduce_b">{{data.Item[0].subTitle}}</div>
        </div>
      </div>
      <div class="item">
        <div class="item_title">{{data.Item[1].title}}</div>
        <div class="item_content ellipsis">{{data.Item[1].subTitle}}</div>
        <div class="item_img">
          <img :src="data.Item[1].picUrl" alt="">
          <span>{{data.Item[1].typeName}}</span>
        </div>
      </div>
      <div class="item">
        <div class="item_title">{{data.Item[2].title}}</div>
        <div class="item_content ellipsis">{{data.Item[2].subTitle}}</div>
        <div class="item_img">
          <img :src="data.Item[2].picUrl" alt="">
          <span>{{data.Item[2].typeName}}</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .recommend
      margin-bottom px2rem(40)
      width 100%
      .header
         height px2rem(60)
         line-height px2rem(60)
         font-size px2rem(18)
         text-align center
         color #333
      .weini
         border px2rem(1) solid #d9d9d9
         margin px2rem(15) px2rem(16)
         .img
           height px2rem(240)

           >img
             width 100%
             height 100%
         .introduce
            margin px2rem(10) px2rem(16)

            .introduce_t
              clearFix()
              font-size px2rem(24)
              .left
                  float left
                  margin-right px2rem(20)
              .right
                  float right
            .introduce_b
              margin-top px2rem(20)
              font-size px2rem(18)
              color #7f7f7f
              padding-bottom px2rem(20)
      .item
        position relative
        border px2rem(1) solid #d9d9d9
        width 93%
        box-sizing border-box
        margin px2rem(15) px2rem(16)
        height px2rem(170)
        .item_title
           margin px2rem(60) 0 px2rem(20) px2rem(15)
           font-size px2rem(20)
        .item_content
           width px2rem(240)
           font-size px2rem(14)
           color #7f7f7f
           margin 0 0 0 px2rem(15)
        .item_img
          position absolute
          top 0
          right 0

          width px2rem(169)
          height px2rem(169)
          >img
            width 100%
            height 100%
          >span
            position absolute
            top px2rem(6)
            left px2rem(10)
            display inline-block
            padding px2rem(5) px2rem(10)
            border-radius px2rem(15)
            font-size px2rem(14)
            background-color: #FCF8F1

</style>
