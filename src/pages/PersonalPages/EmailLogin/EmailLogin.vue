<template>
  <div class="personal_content">
    <div class="img">
      <img src="../images/b78fa3d6c60.png" alt="">
    </div>
    <div class="from1">
      <div class="input01">
        <input v-model="email" type="text" placeholder="邮箱账号">
      </div>
      <div class="input_hr"></div>
      <div class="input01">
        <input v-model="pwd" type="text" placeholder="密码">
      </div>
      <div class="input_hr"></div>
      <div class="input01">
        <input type="text" placeholder="注册账号">
      </div>
      <div class="pwd">忘记密码</div>
    </div>

    <div class="btn">
      <button class="btn_b1 active">
        <span class="sp2" @click="login">登录</span>
      </button>
      <button class="btn_b1">
        <span class="sp2 on" @click="$router.replace('/personal')">其它登录方式</span>
      </button>
    </div>
  </div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
  data () {
    return {
      email: '',
      pwd: ''
    }
  },
  computed: {
    isRightPhone () {
      return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
    }
  },
  methods: {
    login () {
      const {pwd} = this
      if (!this.isRightPhone) {
        return MessageBox.alert('必须指定正确的邮箱')
      }else if (!/^\d{6}$/.test(pwd)) {
        return MessageBox.alert('密码必须是6位数字')
      }else{
        this.$router.replace('/home')
      }
    },
    goto (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
  .personal_content
    padding-top px2rem(40)
    height 100%
    background-color #fff
    .img
      width px2rem(120)
      height px2rem(36)
      margin auto
      margin-bottom px2rem(70)
      >img
        width 100%
        height 100%
    .from1
      position relative
      box-sizing border-box
      margin 0 px2rem(20) 0
      .pwd
        color #333
        position absolute
        bottom px2rem(24)
        right 0
        font-size px2rem(16)
      .input01
        input
          border 0
          outline none
          cyrsor pointer
          width 100%
          height px2rem(60)
          font-size px2rem(17)
      .input_hr
        height px2rem(1)
        background-color #eee
    .btn
      box-sizing border-box
      margin 0 px2rem(20) 0
      .btn_b1
        border px2rem(1) solid #B4282D
        background-color #fff
        position relative
        width 100%
        height px2rem(60)
        margin-bottom px2rem(30)
        border-radius px2rem(5)
        .sp1
          position absolute
          top px2rem(18)
          left px2rem(140)
          .icon-shouji
            font-size px2rem(25)
            color #fff
          .icon-xinfeng1
            color #B4282D
            font-size px2rem(25)
            position absolute
            top px2rem(0)
            left px2rem(-5)
        .sp2
          margin-left px2rem(25)
          font-size px2rem(18)
          color #fff
        .on
          color #B4282D
      .active
        background-color #B4282D


</style>
