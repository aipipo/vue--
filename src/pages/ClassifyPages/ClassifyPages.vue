<template>
  <div class="classify">
    <Search />
    <div class="classify_Content">
        <Options />
        <ListContentShow />
    </div>
  </div>
</template>
<script>
import Search from '../../components/List/Search/Search'
import Options from '../../components/List/Options/Options'
import ListContentShow from  '../../components/List/ListContentShow/ListContentShow'

export default {
  components: {
    Options,
    Search,
    ListContentShow
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .classify
     width 100%
     height 100%
     background #ffffff
     padding-bottom px2rem(100)




</style>
