<template>
  <div class="login changepwd">
    <div class="login-info">
      <img src="../../assets/images/logo.png">
      <div class="login-flex login-info-container">
        <div class="login-info-input">
          <span>登录账号</span>
          <input type="text" placeholder="请输入账号">
          <span class="login-span"></span>
        </div>
        <div class="login-info-input">
          <span>登录密码</span>
          <input type="text" placeholder="请输入密码">
          <span class="login-span"></span>
        </div>
        <div class="login-info-input">
          <span>登录账号</span>
          <input type="text" placeholder="请再次输入密码">
          <span class="login-span"></span>
        </div>
        <div class="login-info-input">
          <span>验证码</span>
          <input type="text">
          <span to="/findpwd" class="login-span">获取验证码</span>
        </div>
      </div> 
    </div>
    <div class="login-button login-flex">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/css/login.scss';
  .login-info{
    background: url('../../assets/images/login.jpg') no-repeat;
  }
  .changepwd{
      height: 420px;
      .login-info{
          height: 325px;
        .login-info-container{
          top: 100px;
        }
      }
      .login-button{
          height: 95px;
      }

  }
</style>
