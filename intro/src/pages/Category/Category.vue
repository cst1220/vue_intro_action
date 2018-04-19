<template>

 <div class="category">

      <div class="header">
        <span class="left">
        <router-link class="router" to="/category/sort" :class="{on:$route.path === '/category/sort'}">
          分类
        </router-link>
      </span>
        <span class="right">
          <router-link class="router" to="/category/brand" :class="{on:$route.path === '/category/brand'}">
            品牌
          </router-link>
          <i class="iconfont icon-search"></i>
        </span>
      </div>
    <keep-alive>
    <router-view />
    </keep-alive>
   <div class="line"></div>

 </div>
</template>

<script>

  export default {
    components:{
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .category
    width 100%
    height 100%
    background #eee
    position relative
    .line
      width 100%
      height 12px
    .header
      height 40px
      position fixed
      z-index 100
      left 0
      right 0
      top 0
      padding 0 15px
      box-sizing border-box
      background #fff
      >span
        display inline-block
        width 49%
        height 40px
        line-height 40px
        font-size 13px
        &.left
          padding-right 5%
          box-sizing border-box
          text-align right
        &.right
          padding-left 5%
          box-sizing border-box
          text-align left
          >i
            float right
        .router
          display inline-block
          height 100%
          font-weight 700
          &.on
            border-bottom 2px solid red
</style>
