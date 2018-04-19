<template>
    <div class="container" >
      <ul class="formContent">
        <li>
          <span class="iconfont icon-yonghu"></span>
          <input type="text" placeholder="手机号/邮箱/用户名" name="username" id="username">
        </li>
      </ul>
      <div class="registerBtn">
        <a href="#">下一步</a>
      </div>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {}
</script>


<style lang="stylus" rel="stylesheet/stylus">
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
  .registerBtn
    width 100%
    height 38px
    a
      display block
      background-color #d7d7d7
      border-radius 20px
      width 85%
      height 85%
      text-align center
      margin 0 auto
      color white
      line-height 30px

</style>
