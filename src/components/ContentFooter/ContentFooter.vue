<template>
  <div class="contentFooter">
     <div class="footer_btn">
       <a href="">下载APP</a>
       <a href="">电脑版</a>
     </div>
     <p class="footer_p">
       <span>网易公司版权所有 © 1997-2018</span>
       <span>食品经营许可证：JY13301080111719</span>
     </p>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
 .contentFooter
     width 100%
     height px2rem(164)
     background-color #414141
     box-sizing border-box
     padding px2rem(30) px2rem(15) px2rem(20)
     text-align center
     .footer_btn
        a
          display inline-block
          width px2rem(100)
          height px2rem(40)
          line-height px2rem(40)
          font-size px2rem(16)
          border px2rem(1) solid #646464
          text-align center
     .footer_p
       font-size px2rem(14)
       padding-top px2rem(20)
       color #999
       line-height px2rem(25)
</style>
