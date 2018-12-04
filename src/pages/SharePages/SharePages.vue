<template>

  <div class="shareContent">

    <div class="share_cont">
        <Banner :banner="shareData.banner"/>
        <HeaderList :column="shareData.column"/>
        <DivLine />
        <Recommend :data="shareData.recommend"/>
        <DivLine />
        <Topic  :tenfifteen="shareData.tenfifteen"/>
        <DivLine />
        <Recommend :data = "shareData.zhen"/>
        <DivLine />
        <SelectLook :yxLook = "shareData.yxLook"/>
        <MoveTopic :yxWeek = "shareData.yxWeek"/>
    </div>
    <ShareHeader />
  </div>
</template>
<script>
import HeaderList from '../../components/Share/HeaderList/HeaderList'
import Banner from '../../components/Share/Banner/Banner'
import Recommend from '../../components/Share/Recommend/Recommend'
import Topic from '../../components/Share/Topic/Topic'
import SelectLook from '../../components/Share/SelectLook/SelectLook'
import MoveTopic from '../../components/Share/MoveTopic/MoveTopic'

import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  mounted () {
    this.$store.dispatch('getShare', () => {

    })
  },
  methods: {

  },
  watch: {
    shareData () {
      this.$nextTick(() => {
        new BScroll('.shareContent', {
          click: true
        })
      })
    }
  },
  computed: {
    ...mapState(['shareData'])
  },
  components: {
    Banner,
    HeaderList,
    Recommend,
    Topic,
    SelectLook,
    MoveTopic
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .shareContent
     position relative
     width 100%
     height 100%
     .share_cont
        padding-top px2rem(50)
        padding-bottom px2rem(60)
</style>
