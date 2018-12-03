<template>
  <div class="headerList">
    <ul class="list ellipsis">
      <li class="item" v-for="(item, index) in column" :key="index">
        <img v-lazy="item.picUrl" alt="">
        <p>{{item.title}}</p>
        <span class="item_span">{{item.articleCount}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    column: Array
  },
  watch: {
    column () {
      this.$nextTick(() => {
        new BScroll('.headerList', {
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
  .headerList
    margin-top px2rem(20)
    padding px2rem(20) 0 px2rem(10) 0
    height px2rem(140)
    .list
      float left
      .item
         margin-right px2rem(20)
         position relative
         box-sizing border-box
         width px2rem(108)
         height px2rem(140)
         display inline-block
         >img
            width 100%
            height 70%
         >p
            width 100%
            height 30%
            line-height px2rem(30)
            text-align center
            font-size px2rem(16)
            color #333
         >.item_span
            position absolute
            top px2rem(4)
            right px2rem(4)
            font-size px2rem(14)
            color #fff
</style>
