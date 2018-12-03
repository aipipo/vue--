<template>
  <div class="brand">
    <div class="brand_header">
      专题精选
      <span><i class="iconfont icon-gengduo2"></i></span>
    </div>
    <div class="brand_content_list">
      <ul>
        <li v-for="(topic,index) in topicList" :key="index">
          <img v-lazy="topic.itemPicUrl" alt="">
          <div class="brand_name">
            <div class="brand_top">
              <span class="brand_top_title">{{topic.title}}</span>
              <span class="brand_top_info">{{topic.priceInfo}}起</span>
            </div>
            <div class="brand_bottom">{{topic.subtitle}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  props: {
    topicList: Array
  },
  watch: {
    topicList () {
      this.$nextTick(() => {
        new BScroll('.brand_content_list', {
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
    .brand_content_list
       box-sizing border-box
       height 80%
       padding-bottom px2rem(5)
       ul
          padding-left px2rem(15)
          float left
          height 100%
          ellipsis()
          li
            display inline-block
            width px2rem(380)
            vertical-align top
            height 100%
            margin-right px2rem(20)
            img
              width 100%
              height 78%
            .brand_name
              .brand_top
                margin-top px2rem(5)
                font-size px2rem(18)
                color: #333
                clearFix()
                .brand_top_title
                  float left
                .brand_top_info
                  color red
                  float right
              .brand_bottom
                margin-top px2rem(8)
                font-size px2rem(14)
                color: #7f7f7f
</style>
