<template>
  <div class="content">
    <div class="leftbox">
      <ul>
        <li :class="{on : index===currentIndex}" @click="showImg(index)" v-for="(sort,index) in intro.categorys" :key="index">
          <a href="#">
            {{sort.name}}
          </a>
        </li>
      </ul>
    </div>
    <div class="rightbox">

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
    data(){
      return{
        currentIndex:0
      }
    },
      methods:{
        showImg(index){
            this.currentIndex = index
        }
      },
      mounted(){
        this.$store.dispatch('getList'),
        () =>{
          this.$nextTick( () => {
            new BScroll('.leftbox',{
              click:true,
              scrollY:true
            })
            new BScroll('.rightbox',{
              click:true,
              scrollY:true
            })
          })
        }
      },
      computed:{
        ...mapState(['intro'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  position relative
  width 100%
  height 100%
  .leftbox
    position absolute
    left 0
    top 40px
    bottom 0
    height 500px
    z-index 10
    >ul
      background #fff
      >li
        padding 15px 0
        box-sizing border-box
        width 70px
        height 50px
        font-size 13px
        border-bottom 1px solid #f3f4f5
        text-align center
        &.on
          background #f3f4f5
          >a
            display block
            width 100%
            height 100%
            color red
  .rightbox
    width 100%
    height 100%
    .classify_main_content_inner
      width 100%
      padding-bottom 90px
      .classify_main_content
        margin-left 75px
        box-sizing border-box
        border-top: 5px solid #f3f4f5;
        background-color #fff
        .classify_main_content_type1
          width 100%
          padding 5px 5px 20px 5px
          box-sizing border-box
          .classify_main_typeText
            width 100%
            height 30px
            >span:nth-child(1)
              display block
              font-size 12px
              color #999
              padding-left 5px
              box-sizing border-box
              margin-top 10px
            >span:nth-child(2)
              display inline-block
              width 45px
              height 10px
              float right
              >img
                display inline-block
                height 100%
                width 100%
                vertical-align top
          .classify_main_img
            display flex
            width 100%
            flex-wrap wrap
            padding-top 5px
            box-sizing border-box
            justify-content center
            >div
              width 32%
              height 116px
              >a
                display block
                width 86px
                height 86px
                >img
                  display block
                  width 100%
                  height 100%
              >span
                display block
                font-size 13px
                text-align center
                padding-top 10px
                box-sizing border-box
        .classify_main_content_type2
          width 100%
          padding 5px 5px 20px 5px
          box-sizing border-box
          border-top 1px solid #f3f4f5
          .classify_main_typeText
            width 100%
            height 30px
            >span:nth-child(1)
              display block
              font-size 12px
              color #999
              padding-left 5px
              box-sizing border-box
              margin-top 10px
            >span:nth-child(2)
              display inline-block
              width 45px
              height 10px
              float right
              >img
                display inline-block
                height 100%
                width 100%
                vertical-align top
          .classify_main_img
            display flex
            width 100%
            flex-wrap wrap
            padding-top 5px
            box-sizing border-box
            justify-content center
            >div
              width 40%
              height 80px
              margin-right 10px
              margin-bottom 10px
              >a
                display block
                width 100%
                height 55px
                padding 4px 22px
                box-sizing border-box
                border 1px solid #f3f4f5
                >img
                  display block
                  width 100%
                  height 100%
              >span
                display block
                font-size 12px
                text-align center
                padding-top 10px
                box-sizing border-box
</style>
