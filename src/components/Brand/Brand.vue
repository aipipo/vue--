<template>
  <div class="brand">
    <div class="brand_header">
      品牌制造商直供
      <span><i class="iconfont icon-gengduo2"></i></span>
    </div>
    <div class="brand_content">
      <ul>
        <li v-for="(tag,index) in tagList" :key="index" v-if="index<4">
          <div class="brand_name">
            <p>{{tag.name}}</p>
            <p>{{tag.floorPrice}}</p>
          </div>
          <img v-lazy="tag.picUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tagList: Array
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .brand
    width 100%
    height px2rem(366)
    .brand_header
      height 20%
      line-height px2rem(70)
      font-size px2rem(22)
      text-align center
      .icon-gengduo2
        font-size px2rem(20)
    .brand_content
       box-sizing border-box
       height 80%

       padding 0 px2rem(10) px2rem(5)
       > ul
          width 100%
          height 100%
          li:nth-child(odd)
            margin-bottom px2rem(5)
            margin-right px2rem(5)
          li:nth-child(even)
            margin-bottom px2rem(5)
          li
            background-color #F4F4F4
            position relative
            float left
            height 49%
            width 49%
            img
              width 100%
              height 100%
            .brand_name
              position absolute
              top px2rem(5)
              left px2rem(5)
              p
                font-size px2rem(18)
                margin-bottom px2rem(5)


</style>
