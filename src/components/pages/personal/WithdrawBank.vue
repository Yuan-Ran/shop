<template>
  <Container>
    <div slot="self">
      <div class="withdraw-head user-common-flex">
        <span>提现</span>
        <span>返回</span>
      </div>
      <div class="withdraw-body user-common-flex">
        <ul>
          <li>
            <span class="withdraw-left">账户余额：</span>
            <span class="withdraw-point">6666</span>
          </li>
          <li>
            <span class="withdraw-left">到账银行：</span>
            <span class="withdraw-point">银行卡</span>
          </li>
          <li>
            <span class="withdraw-left">提现金额：</span>
            <input class="withdraw-rigit" type="text">
          </li>
          <li>
            <span class="withdraw-left">提现密码：</span>
            <input class="withdraw-rigit" type="text">
          </li>
          <li>
            <span class="withdraw-left"></span>
            <button class="withdraw-rigit withdraw-button">确定</button>
          </li>
        </ul>
      </div>
    </div>
   </Container>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
 
</style>