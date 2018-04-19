<template>
    <div class="petcla" v-if="menus.datas">
      <div class="left">
        <img :src=" menus.datas[14].value.left.img.image">
      </div>
      <div class="right">
        <a href="#">
          <img :src="menus.datas[9].value.right.img.image">
        </a>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['menus'])
      },
      mounted() {
        this.$store.dispatch('getMenus')
      }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">
   .petcla
      padding 10px 10px 0 10px
      box-sizing border-box
      width 100%
      height 87px
      background-color white
      overflow hidden
      .left
        width 70%
        height 100%
        float left
        img
         height 100%
      .right
        float left
        height 100%
        width 30%
        img
          width 50%
          display block
          float right


</style>
