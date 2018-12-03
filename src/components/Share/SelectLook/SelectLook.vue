<template>
  <div class="selectLook">
      <div class="select_header">严选LOOK</div>
      <div class="select_img">
        <img v-lazy="yxLook.picUrl" alt="">
      </div>
      <div class="message">
        <div class="auto">
          <img v-lazy="yxLook.avatar" alt="">
        </div>
        <div class="name">{{yxLook.nickname}}</div>
      </div>
      <div class="message_text">
        {{yxLook.content}}
      </div>
  </div>
</template>
<script>
export default {
  props: {
    yxLook: Object
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .selectLook
     .select_header
        height px2rem(70)
        line-height px2rem(70)
        text-align center
        font-size px2rem(18)
        color #333
     .select_img
        width 100%
        height px2rem(470)
        >img
          width 100%
          height 100%
     .message
        clearFix()
        margin px2rem(10) px2rem(20)
        .auto
          float left
          width px2rem(40)
          height px2rem(40)
          >img
             width 100%
             height 100%
             border-radius 50%
        .name
          float left
          font-size px2rem(12)
          margin-top px2rem(15)
          margin-left px2rem(20)
     .message_text
       font-size px2rem(18)
       line-height px2rem(30)
       margin 0 px2rem(20)
       color #7f7f7f
</style>
