<template>
  <div class="login">
    <div class="login-info">
      <img src="../../assets/images/logo.png">
      <div class="login-flex login-info-container">
        <div class="login-info-input">
          <span>登录账号</span>
          <input type="text" placeholder="请输入账号">
          <router-link to="/login" class="login-span">密码登录</router-link>
        </div>
        <div class="login-info-input">
          <span>验证码</span>
          <input type="text" placeholder="请输入密码">
          <span to="/findpwd" class="login-span">获取验证码</span>
        </div>
      </div>
      <div class="login-info-radio">
        <input type="radio" id="remberUser" name="isRember" hidden>
        <label for="remberUser"></label>
        <span>记住账号</span>
        <input type="radio" id="remberPwd" name="isRember" hidden>
        <label for="remberPwd"></label>
        <span>记住密码</span>
      </div>
    </div>
    <div class="login-button login-flex">
      <button>登录</button>
      <p>鸽睿斯证券系统V 1.0.1</p>
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
</style>
