<template>
  <div class="shopCart">
    <!-- 头部 -->
    <div class="header">
      <div class="allBrand_header_left" @click="goback">
        <span>
           <i class="iconfont icon-lock"></i>
        </span>
      </div>
      <div class="allBrand_header_mid">购物车</div>
      <div class="allBrand_header_right" @click="switchOff">
        <span>
          <i class="iconfont icon-lock"></i>
        </span>
      </div>
    </div>
    <!-- 分类 -->
    <transition name="move">
      <div class="allBrand_selection" v-show="isShowSelection">
        <div class="allBrand_selection_inner">
          <div class="emptydiv">

          </div>
          <ul>
            <li>
              <p>
                <i class="iconfont icon-shouyemaichang"></i>
              </p>
              <p>首页</p>
            </li>
            <li>
              <p>
                <i class="iconfont icon-sousuoliebiao"></i>
              </p>
              <p>分类</p>
            </li>
            <li class="cartLi">
              <p>
                <i class="iconfont icon-unie62d"></i>
              </p>
              <span>0</span>
              <p style="font-size: 14px; color: #666">购物车</p>
            </li>
            <li>
              <p>
                <i class="iconfont icon-xiaolian-"></i>
              </p>
              <p>我的E宠</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <!-- 购物车 -->
    <div class="shopCart_container">
      <div class="shopCart_img">
        <div class="shopCart_img_inner">
          <i class="iconfont icon-unie62d"></i>
        </div>
      </div>
      <div class="shopaCart_tip">
        <span>购物车是空的</span>
      </div>
      <div class="shopCart_button">
        <router-link to="/main">去逛逛</router-link>
        <a href="#">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShowSelection:false
      }
    },
    methods:{
      goback(){
        this.$router.back()
      },
      switchOff(){
        this.isShowSelection = !this.isShowSelection
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart
    width 100%
    height 100%
    background #f3f4f5
    .header
      width 100%
      padding 0 10px
      box-sizing border-box
      border-bottom 1px solid #e9e9e9
      display flex
      flex-wrap nowrap
      background #fefefe
      .allBrand_header_left
        width 10%
        height 100%
        line-height 50px
        text-align left
        >span
          >i
            font-size 19px
            font-weight bold
            color #ddd
      .allBrand_header_mid
        width 80%
        height 100%
        line-height 50px
        text-align center
        font-size 18px
      .allBrand_header_right
        width 10%
        height 100%
        line-height 50px
        text-align right
        >span
          >i
            font-size 22px
            font-weight bold
            color #666666
    .allBrand_selection
      width 100%
      height 68px
      border-bottom 1px solid #e9e9e9
      &.move-enter-active, &.move-leave-active
        transition all 1s
      &.move-enter, &.move-leave-to
        height 0
      .allBrand_selection_inner
        width 100%
        height 100%
        overflow hidden
        .emptydiv
          width 100%
          height 18px
        >ul
          overflow hidden
          >li
            width 25%
            float left
            text-align center
            &.cartLi
              position relative
            >p:nth-child(1)
              padding-bottom 5px
              box-sizing border-box
              >i
                font-size 22px
                color #666666
            >p:nth-child(2)
              font-size 14px
              color #666
            >span
              position absolute
              right 25px
              top 0px
              width 15px
              height 15px
              line-height 15px
              text-align center
              background-color red
              color #fff
              border-radius 50%
              font-size 10px

    .shopCart_container
      width 100%
      border-top 1px solid #eee
      background #fefefe
      .shopCart_img
        width 100%
        height 170px
        position relative
        .shopCart_img_inner
          position absolute
          left 50%
          transform translateX(-50%)
          width 100px
          height 100%
          box-sizing border-box
          >i
            display block
            margin 50px 0 20px 0
            font-size 100px
            color #dbdbdb;

      .shopaCart_tip
        text-align center
        >span
          color #dbdbdb;
      .shopCart_button
        width 100%
        margin-top 18px
        text-align center
        >a
          display: inline-block;
          border-radius: 5px;
          border: 1px solid #999;
          height: 40px;
          line-height: 40px;
          width: 100px;
          text-align center
          &.first
            margin-right 8px
</style>
