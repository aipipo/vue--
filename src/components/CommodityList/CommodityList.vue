<template>
  <div>
    <div class="commodityList" v-for="(cateL, index) in cateList" :key="index">
    <h2 class="commodity_title">{{cateL.name}}好物</h2>
    <ul class="commodity_ul">
      <li class="commodity_li ellipsis" v-for="(item, i) in cateL.itemList" :key="i" v-if="i<7">
        <div class="li_img">
          <img  v-lazy="item.listPicUrl" alt="">
        </div>

        <div class="li_hint">{{item.simpleDesc}}</div>
        <div class="li_text01">{{item.name}}</div>
        <div class="li_text02">￥ {{item.retailPrice}}</div>
      </li>
      <li class="commodity_li li_more">
         <div class="li_more_center">
           <div class="li_more_div li_more_text"> 更多{{cateL.name}}好物</div>
           <div class="li_more_div li_more_icon"><i class="iconfont icon-gengduo2"></i></div>
         </div>
      </li>



    </ul>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    cateList: Array
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .commodityList
    .commodity_title
       font-size px2rem(20)
       text-align center
       width 100%
       color #333
       height px2rem(76)
       line-height px2rem(76)

    .commodity_ul
      clearFix()
      width 100%
      .commodity_li:nth-child(odd)
        padding 0 px2rem(5) px2rem(15) px2rem(10)
      .commodity_li:nth-child(even)
        padding 0 px2rem(10) px2rem(15) px2rem(5)
      .commodity_li
        float left
        box-sizing border-box
        width 50%
        height px2rem(336)
        .li_img
           display block
           width 100%
           height 70%
           background-color #F4F4F4
           img
             width 100%
             height 100%
        .li_hint
           width 100%
           height 12%
           background #f1ece2
           color #9f8a60
           font-size px2rem(14)
           box-sizing border-box
           padding px2rem(14) px2rem(6)

        .li_text01
           padding-left px2rem(6)
           font-size px2rem(20)
           margin px2rem(10) 0
        .li_text02
          padding-left px2rem(6)
          font-size px2rem(20)
          color #ff0d38
      .li_more
          background-color #F4F4F4
          height px2rem(264)
          font-size px2rem(22)
          text-align center
          .li_more_center
              margin px2rem(70) px2rem(30) 0
              width 80%
              height 50%
              .li_more_div
                  margin-bottom px2rem(30)
                  color #838383
              .li_more_icon
                  .icon-gengduo2
                     font-size px2rem(40)
                     color #959595
</style>
