<template>
  <div>
    <div class="product ">
      <div class="product_header bgolor1">
      <div class="product_header_text">
        <a class="text_p1">新品首发</a>
        <a class="text_p2">查看全部 ></a>
      </div>
    </div>
      <div class="product_list product_d1">
      <ul class="product_ul">
        <li class="list_single" v-for="(newItem, index) in newItemList" :key="index">
          <div class="product_img">
            <img v-lazy="newItem.primaryPicUrl" alt="">
          </div>
          <p class="list_single_p ellipsis">{{newItem.name}}</p>
          <p class="list_single_p ellipsis single_p2">{{newItem.simpleDesc}}</p>
          <p class="list_single_p ellipsis single_p3">￥{{newItem.retailPrice}}</p>
        </li>
        <li class="list_single">查看全部</li>
      </ul>


    </div>
    </div>
    <DivLine />
    <div class="product ">
      <div class="product_header bgolor2">
        <div class="product_header_text text_on">
          <a class="text_p1 text_a1">人气推荐.好物精选</a>
          <a class="text_p2 text_a2">查看全部 ></a>
        </div>
      </div>
      <div class="product_list product_d2">
        <ul class="product_ul">
          <li class="list_single" v-for="(popularItem, index) in popularItemList" :key="index">
            <div class="product_img">
              <img v-lazy="popularItem.primaryPicUrl" alt="">
            </div>
            <p class="list_single_p ellipsis">{{popularItem.name}}</p>
            <p class="list_single_p ellipsis single_p2">{{popularItem.simpleDesc}}</p>
            <p class="list_single_p ellipsis single_p3">￥{{popularItem.retailPrice}}</p>
          </li>
          <li class="list_single">查看全部</li>
        </ul>


      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    newItemList: Array,
    popularItemList: Array
  },
  watch: {
    newItemList () {
      this.$nextTick(() => {
        new BScroll('.product_d1', {
          click: true,
          scrollX :true
        })
        new BScroll('.product_d2', {
          click: true,
          scrollX :true
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
  .product
     width 100%
     height px2rem(460)
     .bgolor1
       background-color #EEF5FC
     .bgolor2
       background-color #FCF4DE
     .product_header
        box-sizing border-box
        width 100%
        height 35%
        padding-top px2rem(40)

        .product_header_text
          margin auto
          width 35%
          height 60%
          text-align center
          > a
              text-align center
              display block
              width 100%
              height 50%
              font-size px2rem(24)
          .text_p1
            color #707d8b
          .text_p2
            font-size px2rem(20)
            background-color #F4E9CB
            color #707d8b
            line-height px2rem(35)
          .text_a1
            color #aea691
          .text_a2
            width 80%
            color #aea691
            margin-left px2rem(30)
            background-color #F4E9CB
        .text_on
          width 50%
     .product_list
        width 100%
        height 65%
        box-sizing  border-box
        padding px2rem(20) 0
        .product_ul
          padding 0 px2rem(20)
          float left
          ellipsis()
          height 100%
          li:last-child
            width  px2rem(176)
            height  65%
            color #626262
            border px2rem(6) solid #f4f4f4
            text-align center
            font-size px2rem(20)
            padding-top px2rem(70)
            box-sizing border-box
          .list_single
            margin-right px2rem(20)
            height 100%
            display inline-block
            width  px2rem(176)
            vertical-align top
            .product_img
              background #f4f4f4
              width  px2rem(176)
              height  65%
              img
                width 100%
                height 100%
            .list_single_p
               font-size px2rem(16)
               margin-top px2rem(10)
            .single_p2
              color #7f7f7f
            .single_p3
               color red

</style>
