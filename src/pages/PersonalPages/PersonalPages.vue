<template>
  <div class="personal">
    <ShareHeader />
    <router-view />

  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .personal
      padding-top px2rem(50)
      width 100%
      height 100%

</style>
