<template>
  <div class="options">
    <div class="inner">
    <ul class="options_list">
      <li class="options_li "
          v-for="(nav, index) in navOptions"
          :key="index"
          @click="getOptionIndex(index)"
          :class="{active: index === navIndex}"
      >{{nav}}</li>

    </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  mounted () {
    this.$store.dispatch('getLiveOptions', () => {
      this.$nextTick(() => {
          new BScroll('.inner', {
            click: true
          })
      })
    })
  },
  methods: {
    getOptionIndex (index) {
        this.$store.dispatch('setOptionIndex', index)
        this.$store.dispatch('getNavList')
    }
  },
  computed: {
    ...mapState(['navOptions','navIndex'])
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .options
     overflow hidden
     position fixed
     left 0
     top px2rem(55)
     bottom 0
     background #fff
     width 20%
     z-index 10
     height 100%
     box-sizing border-box
     border-right px2rem(1) solid #eee
     .inner

       width 100%
       max-height px2rem(710)
       overflow hidden
       .options_list
          padding-bottom px2rem(40)
          width 100%
          box-sizing border-box
          padding-top px2rem(5)
          .options_li
             margin-top px2rem(18)
             border-left px2rem(4) solid #fff
             text-align center
             box-sizing border-box
             font-size px2rem(18)
             width 100%
             height px2rem(50)
             line-height px2rem(50)
          .active
             border-left px2rem(4) solid #b4282d
</style>
