<template>
  <div class="product">
    <div class="product_header">
      <div class="product_header_text">
        <a class="text_p1">新品首发</a>
        <a class="text_p2">查看全部></a>
      </div>
    </div>
    <div class="product_list">
       <div class="list_single"></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
  .product
     width 100%
     height px2rem(460)
     background-color #eee
     .product_header
        box-sizing border-box
        width 100%
        height 35%
        background-color #EEF5FC
        padding-top px2rem(40)
        .product_header_text
          margin auto
          width 35%
          height 60%
          > a
              text-align center
              display block
              width 100%
              height 50%
              font-size px2rem(20)
          .text_p1
            color #707d8b
          .text_p2
            background-color: #D8E5F1
            color #707d8b
            line-height px2rem(35)


     .product_list
        width 100%
        height 65%
        box-sizing  border-box
        background-color yellow
        padding px2rem(20)
        .list_single
          background-color #7e8c8d
          width  px2rem(176)
          height  px2rem(176)
</style>
