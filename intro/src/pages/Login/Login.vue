<template>
    <div>
      <header>
        <div class="top">
          <span style="margin-left: 4px" class="iconfont icon-jiantou4"></span>
          <span>
            <a href="###" style="color: white">注册</a>
          </span>
        </div>
        <div class="bottom">
          <div class="right" @click="tomessLogin(false)">
            <span>
              <a href="#">
                普通登录
              </a></span>
            <i class="activeClass"></i>
          </div>
          <div class="right" @click="tomessLogin(true)">
            <span>
              <a href="#">手机动态密码登录</a></span>
            <i class="activeClass"></i>
          </div>
        </div>
      </header>
      <footer>
        <div class="container" v-if="type==='userLogin'?true:false">
          <form method="post" class="formContent">
            <ul>
              <li>
                <span class="iconfont icon-yonghu"></span>
                <input type="text" placeholder="手机号/邮箱/用户名" name="username" id="username">
              </li>
              <li>
                <span class="iconfont icon-suo"></span>
                <input type="password" placeholder="输入密码" name="password" id="password">
              </li>
            </ul>
          </form>
          <div class="forgetPwd">
            <span>忘记密码 ?</span>
          </div>
          <div class="loginBtn">
            <a href="##">
              登录
            </a>
          </div>
          <div class="hahaha"></div>
          <div class="letsgo">合作网站登录</div>
          <div class="parenter">
            <a href="##">
              <img src="./image/login_ico4.png" alt="">
            </a>
            <a href="##">
              <img src="./image/login_ico2.png" alt="">
            </a>
          </div>
        </div>
        <div class="container"  v-else>
          <form method="post" class="formContent" style="position: relative;height:138px">
            <ul>
              <li style="height: 33.333%">
                <span class="iconfont icon-iphone"></span>
                <input type="text" placeholder="已注册的手机号" name="phone" id="bdphone">
              </li>
              <li style="height: 33.333%">
                <span class="iconfont icon-suo"></span>
                <input  type="password" placeholder="请输入图片内容" name="varify" id="varify">
                <span style="width:85px;height: 30px;display:block;position: absolute;top:56px;right:0px;">
                  <img style="width:85px;height: 30px" src="share/seccode.html?hash=5157&height=30&width=85" alt="">
                </span>
              </li>
              <li style="height: 33.333%">
                <span class="iconfont icon-suo"></span>
                <input  type="password" placeholder="请输入动态密码" name="changePwd" id="changePwd">
                <a style="width:110px;text-align: center;line-height: 30px;height: 30px;border: 1px red solid;color: red;display:block;position: absolute;top:100px;right:0px;">
                  获取动态验证码
               </a>
              </li>
            </ul>
          </form>
          <div class="forgetPwd">
            <span>忘记密码 ?</span>
          </div>
          <div class="loginBtn">
            <a href="##">
              登录
            </a>
          </div>
          <div class="hahaha" style="height: 110px"></div>
          <div class="letsgo">合作网站登录</div>
          <div class="parenter">
            <a href="##">
              <img src="./image/login_ico4.png" alt="">
            </a>
            <a href="##">
              <img src="./image/login_ico2.png" alt="">
            </a>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    data(){
      return{
        type:"userLogin"
      }
    },
    methods:{
      tomessLogin(boolean){
        if(boolean){
          this.type="messageLogin";
        }else{
          this.type="userLogin";
        }
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  header
    width 100%
    height 180px
    bg_icon("./image/login.png")
    display flex
    flex-direction column
    justify-content space-between
    .top
      color white
      width 100%
      height 60px
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      span
        color white
        display block
        width 60px
        height 30px
        line-height 30px
    .bottom
      width 100%
      height 50px
      display flex
      flex-direction row
      justify-content center
      color white
      .right
        align-items center
        width 50%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        position relative
        background-color rgba(255,255,255,0.2)
        span
          display block
          width 100%
          height 90%
          a
           color white
           display flex
           justify-content center
           align-items center
           width 100%
           height 100%
           line-height 50px
        i
          height 0
          width 0
          border-bottom  solid white 11px
          border-left solid transparent 11px
          border-right solid transparent 11px
          position absolute
          bottom -1px
          left 45%
          display none
          &.activeClass
            display block
  footer
    .container
       display flex
       flex-direction column
       justify-content space-around
       align-items center
      .formContent
          margin  0 auto
          width 333px
          height 92px
          display flex
          flex-direction column
          justify-content center
          align-items center
         ul
          width 100%
          height 100%
          li
            width 100%
            height 50%
            padding 7px
            box-sizing border-box
            display flex
            justify-content center
            align-items center
            border-bottom solid 1px #d0d0d0
            font-family "Microsoft Yahei",tahoma,arial
            font-size 15px
            color #666
            input
              width 303px
              height 21px
              outline none
              &::-webkit-input-placeholder
                color:#d0d0d0
            span
              margin 0 8px
              font-size 23px
      .forgetPwd
         width 100%
         height 23px
         padding 3px
         span
           float right
           margin-right 23px
           margin-top 5px
           color #666
           font-size 14px

      .loginBtn
         width 100%
         height 38px
         a
          display block
          background-color #2ec975
          border-radius 5px
          width 93%
          height 100%
          text-align center
          margin 0 auto
          letter-spacing 15px
          color white
          line-height 38px
      .hahaha
        width 100%
        height 100px
      .letsgo
         width 100%
         height 25px
         text-align center
         color #d7d7d7
      .parenter
         width 100%
         height 95px
         padding 15px
         box-sizing border-box
        a
          display inline-block
          box-sizing border-box
          margin 0 auto
          width 33.3333%
          height 57px
          text-align center
          img
            height  100%

</style>
