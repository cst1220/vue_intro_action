
<template>
    <div class="footerNav">
      <ul class="footerUl">
        <li @click="goTo('/main')" :class="{activeColor:$route.path==='/main'}">
          <span class="item_icon">
            <i class="iconfont icon-shouyemaichang"></i>
          </span>
          <span>首页</span>
        </li>
        <li @click="goTo('/category')" :class="{activeColor:$route.path.substr(0,9)==='/category'}">
          <span class="item_icon">
            <i class="iconfont icon-sousuoliebiao"></i>
          </span>
          <span>分类</span>
        </li>
        <li @click="goTo('/cart')" :class="{activeColor:$route.path==='/cart'}">
          <span class="item_icon">
            <i class="iconfont icon-unie62d"></i>
          </span>
          <span>购物车</span>
        </li>
        <li @click="goTo('/user')" :class="{activeColor:$route.path==='/user'}">
          <span class="item_icon">
            <i class="iconfont icon-xiaolian-"></i>
          </span>
          <span>我的E宠</span>
        </li>
      </ul>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footerNav
     z-index 5000
     height 45px
     width 100%
     box-sizing border-box
     position fixed
     bottom 0
     left 0
     background-color white
     overflow hidden
     .footerUl
      position fixed
      bottom 0
      left 0
      height 45px
      width 100%
      border-top 1px solid #e7e7e7
      color #7e8c8d
      li
         float: left;
         width: 25%;
         height: 40px;
         text-align center
         &.activeColor
           color #3FB37C
          .iconfont
            width 60px
            height 60%
            display block
            margin 0 auto
            font-size 29px
           span
             font-size 12px


</style>
