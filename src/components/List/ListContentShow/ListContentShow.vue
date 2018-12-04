<template>
  <div class="listContent">
    <div class="listframe">
      <div class="framImg">
        <img v-lazy="navList.wapBannerUrl" :key="navList.wapBannerUrl" alt="">
      </div>
      <div class="framTitile">
        <span class="framtext">
          <span>{{navList.name}}</span><span>分类</span>
        </span>
      </div>
      <div class="framList">
        <ul class="list" >
          <li class="item" v-for="(subCate, index) in navList.subCateList" :key="index">
            <a href="javascript:;">
              <img v-lazy="subCate.wapBannerUrl" :key="subCate.wapBannerUrl" alt="">
              <span>{{subCate.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {

  mounted () {
    this.$store.dispatch('getNavList', () => {
      this.$nextTick(() => {
          new BScroll('.listContent', {
            click: true
          })
      })
    })
  },
  computed: {
    ...mapState(['navList'])
  },

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .listContent
     margin-left px2rem(94)
     height px2rem(700)
     overflow hidden
     .listframe
        padding px2rem(20)
        .framImg
           width 100%
           height px2rem(120)
           background yellow
           img
             width 100%
             height 100%
        .framTitile
           width 100%
           height px2rem(64)
           text-align center
           color #333

           .framtext
             position relative
             font-size 0
             >span
               font-size px2rem(16)
               &:before,&:after
                 position absolute
                 content ''
                 top px2rem(-14)
                 bottom 0
                 margin auto
                 height 1px
                 width px2rem(30)
                 background-color #d9d9d9
               &:before
                 left px2rem(-40)
               &:after
                 right px2rem(-40)


        .framList
           >.list
             clearFix()
             >.item:nth-child(3n)
               margin-right px2rem(-2)
             >.item
               float left
               width 30%
               height px2rem(140)
               margin-right px2rem(16)
               >a
                 display inline-block
                 width 100%
                 height 100%
                 >img
                    width 100%
                    height 60%
                 >span
                    color #000
                    line-height px2rem(25)
                    display block
                    width 100%
                    height 40%
                    text-align center
                    font-size px2rem(16)
</style>
