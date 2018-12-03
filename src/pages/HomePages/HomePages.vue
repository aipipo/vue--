<template>
  <div class="homes">
    <div class="homePages">
      <div class="home_content">

        <!--轮播图-->
        <div class="content_carousel">
          <div class="swiper-container" id="swiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(focus, index) in homeData.focusList" :key="index">
                <img v-lazy="focus.picUrl" alt="">
              </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="policy">
          <div class="policylist">
            <span><i class="iconfont icon-duigouzhong"></i></span>
            网易自营品牌
          </div>
          <div class="policylist">
            <span><i class="iconfont icon-duigouzhong"></i></span>
            30天无忧退货
          </div>
          <div class="policylist">
            <span><i class="iconfont icon-duigouzhong"></i></span>
            48小时快速退款
          </div>
        </div>
        <DivLine />
        <Brand :tagList="homeData.tagList"/>
        <NewProduct
          :newItemList="homeData.newItemList"
          :popularItemList="homeData.popularItemList"
        />
        <DivLine />
        <Timer />
        <Sift :topicList="homeData.topicList"/>
        <DivLine />
        <CommodityList :cateList="homeData.cateList"/>
        <DivLine />
        <ContentFooter />
      </div>
    </div>
    <div class="home_header">
      <div class="header_search">
        <div class="header_l header_float">
          网易严选
        </div>
        <div class="header_s header_float">
            <span>
              <i class="iconfont icon-sousuo11"> </i>
              <span >搜索商品, 共19648款好物</span>
            </span>
        </div>
      </div>
      <div class="header_classify" ref="wrapper">
        <ul class="header_ul">
          <li v-for="(cate, index) in navlist" :key="index" @click="selsectClassify(index)" :class="{active: isClick === index}">
             <span>
             {{cate}}
               </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'

import Brand from '../../components/Brand/Brand'
import NewProduct from '../../components/NewProduct/NewProduct'
import Timer from '../../components/Timer/Timer'
import Sift from '../../components/Sify/Sift'
import CommodityList from '../../components/CommodityList/CommodityList'
import ContentFooter from '../../components/ContentFooter/ContentFooter'

export default {
  data () {
    return {
      navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
      isClick: 0
    }
  },
  mounted () {
    this.$store.dispatch('getHomeData', () => {
      this.$nextTick(() => {
        this._initScroll()
      })
    })


  },
  methods: {
    selsectClassify (index) {
      this.isClick = index
    },
    _initScroll () {
      new BScroll('.header_classify', {
        scrollX :true,
        click: true
      })
      new BScroll('.homes', {
        click: true
      })

      new Swiper('#swiper2', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay:true
      })
    }
  },
  computed: {
    ...mapState(['homeData'])
  },
  components: {
    Brand,
    NewProduct,
    Timer,
    Sift,
    CommodityList,
    ContentFooter
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
 .homes
   width 100%
   height 100%
   position relative
   .home_header
     background-color #fff
     position fixed
     z-index 1000
     top 0
     box-sizing border-box
     width 100%
     height px2rem(100)
     padding px2rem(10) px2rem(15) 0
     > div
       widht 100%
       height 50%
     .header_search
       .header_float
         box-sizing border-box
         float left
         height 100%
         text-align center
         line-height px2rem(40)
       .header_l
         width 20%
         font-size px2rem(20)
         font-family: '\6977\4F53';
       .header_s
         height 85%
         width 80%
         font-size px2rem(18)
         background-color #EDEDED
         padding 0 px2rem(20)
         border-radius px2rem(5)
         .icon-sousuo11
           font-size px2rem(18)

   .header_classify
     width 100%
     height 100%
     overflow hidden
     display flex
     flex-direction row
     flex-flow nowrap
     .header_ul
       display flex
       flex-direction row
       flex-wrap nowrap
       justify-content space-between
       li:last-child
         width px2rem(80)
       li
         width px2rem(60)
         display flex
         flex-direction row
         flex-wrap nowrap
         justify-content space-between
         box-sizing border-box
         height 100%
         text-align center
         padding-top px2rem(15)
         span
           font-size px2rem(18)
           margin-left px2rem(15)
       .active
         color #b4282d
         border-bottom px2rem(2) solid #b4282d
   .homePages
     width 100%

     // 中间内容
   .home_content
      padding-top px2rem(100)
      padding-bottom px2rem(70)
      width 100%
      height 100%
      .content_carousel
        background #eee
        width 100%
        height px2rem(250)
        .swiper-container
          width 100%
          height px2rem(250)
          .swiper-slide
            >img
               width 100%
               height 100%
      .policy
        height px2rem(45)
        display flex
        justify-content center
        .policylist
          margin px2rem(15) px2rem(10) 0 0
          font-size px2rem(16)
          i
            font-size px2rem(16)
            color red

</style>
