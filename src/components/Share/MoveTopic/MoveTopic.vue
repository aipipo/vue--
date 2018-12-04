<template>
  <div class="movetopic">
    <div class="move-header">
      <span>更多精彩</span>
    </div>
    <div class="movetopic_content">
      <div class="item" v-for="(item, index) in yxWeek" :key="index">
        <img v-lazy="item.itemPicUrl" alt="">
        <p>{{item.title}}</p>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    yxWeek: Array
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .movetopic
     box-sizing border-box
     margin-top px2rem(20)
     padding 0 px2rem(20)
     background-color #F4F4F4
     .move-header
       height px2rem(100)
       display flex
       justify-content center
       align-items center

       &:before
          content ''
          width px2rem(150)
          display block
          height px2rem(1)
          background-color #d9d9d9
       &:after
         content ''
         width px2rem(150)
         display block
         height px2rem(1)
         background-color #d9d9d9
       >span
         margin 0 px2rem(10)
         background-color #F4F4F4
         font-size px2rem(18)
         color #333

     .movetopic_content

        .item
            margin-bottom px2rem(20)
            background-color #fff
            width 100%
            padding px2rem(18)
            box-sizing border-box
            height px2rem(316)
            >img
              width 100%
              height 80%
            >p
              height 20%
              font-size px2rem(18)
              margin-top px2rem(20)
</style>
