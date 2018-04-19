<template>
  <div class="video" v-if="menus.datas">
    <div class="top">
      <a :href="menus.datas[47].value[0].link" class="clickvideo">
        <img :src="menus.datas[47].value[0].cover.image">
        <span class="iconfont icon-shipin"></span>
      </a>
    </div>
    <div class="bottom" v-if="menus.datas">
      <div class="smalltop">
        {{menus.datas[47].value[0].title}}
      </div>
      <div class="smallfont">
        <img :src="menus.datas[47].value[0].visit_img.image" style="width: 15px;height: 13px">
        <span>{{menus.datas[47].value[0].visit}}</span>
        <span>|</span>
        <span>{{menus.datas[47].value[0].time}}</span>
      </div>
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
  .video
    width 100%
    height 268.5px
    overflow hidden
    .top
      height 210px
      width 100%
      position relative
      img
        width 100%
      .icon-shipin
        position absolute
        top 50%
        left 50%
        transform translate3d(-50%,-50%,0)
        color white
        font-size 20px
    .bottom
      font-size 12px
      overflow hidden
      white-space nowrap
      word-wrap normal
      text-overflow ellipsis
      padding 5px
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      width 100%
      height  58px
      .smallfont
        color gray

</style>
