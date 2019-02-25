<template>
    <Container>
      <div slot="self">
        <div class="withdraw-head user-common-flex">
          <span>提取利润</span>
          <span @click="$router.back()">返回</span>
        </div>
        <div class="withdraw-body user-common-flex">
          <ul>
            <li>
              <span class="withdraw-left">账户余额：</span>
              <span class="withdraw-point">6666</span>
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
        <div class="user-common-prompt font-cursive">
          <h2 style="color: #ff8932">温馨提示：</h2>
          <p>提取利润：策略动态资产大于策略金额切持仓为0方可提取利润。</p>
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