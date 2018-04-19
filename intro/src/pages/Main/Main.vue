<template>
    <div>
      <div class="containerTop" ref="containerTop">
        <div class="topdiv" v-if="isshowTop">
          <span class="iconfont icon-cha" @click="cancleTop"></span>
        </div>
        <div class="floatTop" ref="floatTop">
          <div class="indexContent">
            <div class="topDiv">
              <div class="topTwo">
                <div class="OneItem">
                  <a href="###" class="text">
                    <span>狗狗</span>
                    <span>|</span>
                    <span>重庆</span>
                    <div class="Three"></div>
                  </a>
                </div>
                <p class="TwoItem">
                  <a href="">
                    <input type="text" class="toinput" placeholder="搜索商品和品牌">
                    <span class="search">
                      <i class="iconfont icon-search"></i>
                    </span>
                  </a>
                </p>
                <span class="ThreeItem">
                  <i class="iconfont icon-iconfontzhizuobiaozhun023110"></i>
                </span>
              </div>
            </div>
            <div class="bottomDiv wapper">
              <ul class="bottomContainer content">
                <li v-for="(menu,index) in menus.menus" :key="index">
                  <a href="">
                    <span class="spanLi">
                      <span>{{menu.menu_name}}</span>
                      <i class="clickNow activeClass"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="floatWindow"></div>
        </div>
      </div>
      <div class="swiper-container loopContainer">
        <div class="swiper-wrapper loopWrapper">
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img :src="brand.data[1].value[0].image">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img :src="brand.data[1].value[1].image">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img :src="brand.data[1].value[2].image">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img :src="brand.data[1].value[3].image">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img :src="brand.data[1].value[4].image">
            </a>
          </div>
          <div class="swiper-slide loopSlide">
            <a href="javascript:;">
              <img :src="brand.data[1].value[5].image">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="listNav">
        <ul class="listContainer" v-if="menus.datas">
          <li v-for="(menu,index) in menus.datas['1'].menus" :key="index">
            <a href="javascript:;" >
              <img :src="menu.image">
            </a>
          </li>
        </ul>
      </div>
      <div class="registerNew">
        <img :src="brand.data[2438].value[0].image" alt="">
      </div>
      <div class="surpriseDay">
        <div class="surpriseTop">
          <div class="left">
            <img src="./images/everyday.png" alt="">
          </div>
          <div class="middle">
            <span>{{brand.data[3].title}}</span>
            <span>14</span>
            <span>：</span>
            <span>00</span>
          </div>
          <div class="right">
            <img src="./images/more.png" alt="">
          </div>
        </div>
        <div class="surpriseBottom" >
          <div class="surpriseContainer ">
          <ul class="surpriseWrapper ">
            <li class="swiper-slide">
              <div class="image">
                <img :src="brand.data[3].goods[0].image.image" alt="">
              </div>
              <div class="price">￥{{brand.data[3].goods[0].sale_price}}</div>
              <p class="disPrice">{{brand.data[3].goods[0].little_price}}</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img :src="brand.data[3].goods[1].image.image" alt="">
              </div>
              <div class="price">￥{{brand.data[3].goods[1].sale_price}}</div>
              <p class="disPrice">{{brand.data[3].goods[1].little_price}}</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img :src="brand.data[3].goods[2].image.image" alt="">
              </div>
              <div class="price">￥{{brand.data[3].goods[2].sale_price}}</div>
              <p class="disPrice">{{brand.data[3].goods[2].little_price}}</p>
            </li>
            <li class="swiper-slide">
              <div class="image">
                <img :src="brand.data[3].goods[3].image.image" alt="">
              </div>
              <div class="price">￥{{brand.data[3].goods[3].sale_price}}</div>
              <p class="disPrice">{{brand.data[3].goods[3].little_price}}</p>
            </li>
          </ul>
          </div>
        </div>
        <Pageline />
      </div>
      <Pageline/>
      <div class="currentAd" v-if="menus.datas">
        <div class="state"></div>
        <div class="left" v-for="(menu,index) in menus.datas[5].content_images[0]" :key="index">
          <img :src="menu.image">
        </div>
        <div class="right" v-if="menus.datas">
          <div class="bottom top"  v-for="(menu,index) in menus.datas[5].content_images[1]" :key="index">
            <img :src="menu.image">
          </div>
        </div>
      </div>
      <div class="showImg">
        <ImageBig/>
        <Pageline />
      </div>
      <div class="fashionVideo">
        <Imagehaha />
        <VideoImg/>
      </div>
      <div class="allServes">
        <Pageline />
        <div class="currentServes">
          <div class="state"></div>
          <div class="right">
            <div class="top">
              <img :src="brand.data[3110].content_images[0][0].image" alt="">
            </div>
            <div class="bottom">
              <img :src="brand.data[3110].content_images[0][1].image" alt="">
            </div>
          </div>
          <div class="right">
            <div class="top">
              <img :src="brand.data[3110].content_images[1][0].image" alt="">
            </div>
            <div class="bottom">
              <img :src="brand.data[3110].content_images[1][1].image" alt="">
            </div>
          </div>
        </div>
        <Pageline />
      </div>
      <div class="specialCell">
        <ImageSo />
        <ImageCan/>
        <Pageline/>
        <ImagePup/>
        <Pageline/>
        <ImageHalf/>
        <Pageline/>
        <ImageIch/>
        <Pageline/>
        <ImageSan/>
        <Pageline/>
        <ImageNine/>
        <Pageline/>
        <ImageHai/>
        <Pageline/>
        <ImageXiao/>
        <Pageline/>
        <ImageVits/>
        <Pageline/>
        <ImageBayer/>
        <Pageline/>
        <ImageXin/>
        <Pageline/>
        <ImageAl/>
        <Pageline/>
        <ImageJin/>
        <Pageline/>
        <ImageDa/>
      </div>
      <div class="mengzhuass">
        <Pageline/>
        <ImageMeng/>
        <div class="swiper-container mengzhua">
          <div class="swiper-wrapper" v-if="menus.datas">
            <div class="swiper-slide" v-for="(menu,index) in menus.datas[44].value">
              <a href="javascript:;">
                <img :src="menu.image">
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="mengchong">
        <ImageChong/>
        <VideoMiao/>
      </div>
      <div class="xiaojuchang">
        <ImageJu/>
        <VideoLao/>
      </div>
      <footerthank/>
    </div>
</template>

<script>
  /* eslint-disable */
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll';
  import Swiper from 'swiper';
  import ImageSo from '../../components/image/imagemid.vue'
  import ImageJu from '../../components/image/imageju.vue'
  import ImageCan from '../../components/image/imageC1.vue'
  import ImagePup from '../../components/image/imageC2.vue'
  import ImageHalf from '../../components/image/imageC3.vue'
  import ImageIch from '../../components/image/imageC4.vue'
  import ImageSan from '../../components/image/imageC5.vue'
  import ImageNine from '../../components/image/imageC6.vue'
  import ImageHai from '../../components/image/imageC7.vue'
  import ImageXiao from '../../components/image/imageC8.vue'
  import ImageVits from '../../components/image/imageC9.vue'
  import ImageBayer from '../../components/image/imageC10.vue'
  import ImageXin from '../../components/image/imageC11.vue'
  import ImageAl from '../../components/image/imageC12.vue'
  import ImageJin from '../../components/image/imageC13.vue'
  import ImageDa from '../../components/image/imageC14.vue'
  import ImageMeng from '../../components/image/imagemeng.vue'
  import ImageChong from '../../components/image/imagechong.vue'
  import Pageline from '../../components/Pageline/Pageline.vue'
  import Imagehaha from '../../components/image/image.vue'
  import ImageBig from '../../components/image/imagebig.vue'
  import VideoImg from '../../components/image/video.vue'
  import VideoMiao from '../../components/image/videomiao.vue'
  import VideoLao from '../../components/image/videolao.vue'
  import footerthank from '../../components/image/footerthank.vue'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        isshowTop:true
      }
    },
    computed:{
      ...mapState(['menus','brand'])
    },
    methods:{
      cancleTop(){
        this.isshowTop = false;
        let t=this.$refs.containerTop;
        let f=this.$refs.floatTop;
        t.style.height = 86+'px';
        f.style.top = 0+'px';
      }
    },
    mounted(){
      setTimeout(()=>{
        new BScroll('.wapper', {scrollX: true, click: true})
        new Swiper('.loopContainer',{
          loop:true,autoplay:true,
          pagination: {el:'.swiper-pagination', type: 'bullets'}
        })
        new Swiper('.mengzhua',{
          loop:true,autoplay:true,pagination: {el:'.swiper-pagination', type: 'bullets'}
        })
        new BScroll('.surpriseContainer',{scrollX: true, click: true})
      },500)
      //异步获取menus
      this.$store.dispatch('getMenus')
      this.$store.dispatch('getBrand')
    },
    components:{
      Pageline,
      Imagehaha,
      ImageBig,
      VideoImg,
      footerthank,
      ImageSo,
      ImageCan,
      ImagePup,
      ImageHalf,
      ImageIch,
      ImageSan,
      ImageNine,
      ImageHai,
      ImageXiao,
      ImageVits,
      ImageBayer,
      ImageXin,
      ImageAl,
      ImageJin,
      ImageDa,
      ImageMeng,
      ImageChong,
      VideoMiao,
      ImageJu,
      VideoLao,
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .containerTop
    width 100%
    height 141px
    font-size 13px
    .floatTop
      position fixed
      top 55px
      z-index 3
      width 100%
      height 86px
      .indexContent
        box-sizing border-box
        margin auto
        .topDiv
          padding 5px 10px 5px 10px
          box-sizing border-box
          height 51px
          background-color white
         .topTwo
           margin 8px 0
           position relative
           box-sizing border-box
           clearFix()
           .OneItem
             position relative
             float left
             margin-right 20px
             line-height 23px
             .Three
               height 0
               width 0
               border-top solid #898989 5px
               border-left solid transparent 4px
               border-right solid transparent 4px
               position absolute
               top 9px
               left 67px
           .TwoItem
             float left
             position relative
            .toinput
              width 233px
              height 25px
              border-radius 4px
              background-color #e9e9e9
              text-indent 10px
            .search
              position absolute
              top 4px
              right 10px
              i
               font-size 7px
           .ThreeItem
             display block
             position absolute
             right 8px
             top 4px
             color #333
        .bottomDiv
          width: 100%
          height: 35px
         .bottomContainer
           white-space nowrap
           width 140%
           height 35px
           display flex
           li
            width 74.5px
            white-space nowrap
            a
              display block
              text-align center
              line-height 36px
              font-size 14px
              width 100%
              height 100%
              position relative
              background-color white
              .spanLi
                .clickNow
                  position absolute
                  bottom -2px
                  left 11px
                  width 70%
                  height 2px

                  display block
                  &.activeClass
                    background-color limegreen




    .topdiv
       position fixed
       top 0px
       left 0px
       height 55px
       width 100%
       background-image url("./images/header.jpg")
       background-size 100%
       z-index 9
       span
         line-height 55px
         margin-left 10px
         z-index 6
         color gray

  .swiper-container
    width 100%
    height 160px
    overflow hidden
    .swiper-wrapper
      height 100%
      display flex
      flex-direction row
      .swiper-slide
        width 375px
        height 100%
        a
         display block
         width 100%
         height 100%
         img
           width 100%
           height  100%

  .listNav
    .listContainer
      width 100%
      height 180px
      background-color aquamarine
      overflow hidden
      li
        width 20%
        height 50%
        float left
        background-color #7e8c8d
        a
         display block
         width 100%
         height 100%
         img
           width 100%
           height 100%
  .registerNew
    width 100%
    height 120px
    img
     width 100%
     height 100%

  .surpriseDay
    width 100%
    height 167px
    position relative
    overflow hidden
    .surpriseTop
      width 100%
      height 39px
      background-color white
      font-size 13px
      line-height 39px
      div
        float left
        height 100%
        &.left
          width 47%
          padding 8px 0
          box-sizing border-box
          img
            height 100%
        &.right
          img
            height 100%
    .surpriseBottom
      height 130.5px
      width 100%
      .surpriseContainer
          height 130px
          width 100%
          overflow hidden
          position relative
         .surpriseWrapper
           position absolute
           display flex
           flex-direction row
           overflow hidden
           top 0
           li
              width 98.5px
              height 130px
             .image
               height 75%
               width 100%
               img
                width 100%
             .price
               height 12.5%
               width 100%
               font-size 14px
               color red
               text-align center
             .disPrice
               width 100%
               color #7e8c8d
               text-align center
               font-size 14px
               height 12.5%
  .currentAd
    overflow hidden
    display flex
    flex-direction row
    width 100%
    .left
       width 50%
      img
        width 100%
        height 100%
    .right
       width 50%
       img
        width 100%
    .state
       width 5%
       color white

  .allServes
    .currentServes
      overflow hidden
      display flex
      flex-direction row
      width 100%
      img
        width 100%
        height 100%
      .right
        width 50%
        img
          width 100%
      .state
        width 5%
        color white

</style>
