<template>
  <div class="current" v-if="menus.datas">
    <div class="left">
      <img :src="menus.datas[15].content_images[0][0].image">
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
    computed:{
      ...mapState(['menus'])
      },
      mounted(){
        this.$store.dispatch('getMenus')
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .current
    width 100%
    height 160px
    overflow hidden
    display flex
    flex-direction row
    .left
      height 100%
      width 100%
      img
       width 100%
       height 100%
    .state
      width 15px
      height 15px
      color white


</style>
