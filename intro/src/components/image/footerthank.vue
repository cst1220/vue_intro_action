<template>
    <div class="warpper" v-if="menus.datas">
      <img :src="menus.datas[52].content_images[0][0].image">
      <div class="zong">
        <div class="top">
          <a href="##" style="color: red">触屏版</a>
          <a href="##">手机客户端</a>
          <a href="#">关于我们</a>
          <a href="#">联系我们</a>
        </div>
        <div class="bottom">
          <a href="#">© wap.epet.com 版权：重庆易宠科技有限公司</a>
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
  .warpper
     width 100%
     height 116px
     margin-bottom 57px
     img
      width 100%
     .zong
       width 100%
       height 86px
       display flex
       justify-content center
       flex-direction column
       align-items center
       .top
         display flex
         flex-direction row
         justify-content center
         width 100%
         height 30%
         a
          color black
          line-height 33px
          font-size 13px
          margin-right 3px
       .bottom
         width 100%
         height 30%
         display flex
         justify-content center
         a
          color black
          line-height 33px
          font-size 13px
          align-items center



</style>
