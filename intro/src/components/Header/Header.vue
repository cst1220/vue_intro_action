<template>
  <div class="headbrand">
  <!-- 头部 -->
  <div class="header">
    <div class="allBrand_header_left" @click="goback">
        <span>
           <i class="iconfont icon-lock"></i>
        </span>
    </div>
    <div class="allBrand_header_mid">全部分类</div>
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
  </div>
</template>

<script>
    export default {
      data(){
        return{
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
.headbrand
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
</style>
