<template>
  <div class="app">
    <router-view />
    <FooterNav v-if="$route.meta.showFooter"/>
  </div>
</template>
<script>
import FooterNav from './components/FooterNav/FooterNav'
export default {
  components: {
    FooterNav
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './common/stylus/mixins.styl'
  .app
    width 100%
    height 100%
</style>
