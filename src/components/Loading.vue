<style lang="less">
.spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin-col {
  position: relative;
  width: 100%;
  height: 500px;

  .spin {
    text-align: center;
  }
}
</style>
<template>
  <div class="spin-col">
    <Spin class="spin" fix>
      <Icon type="ios-loading" size=30 class="spin-icon-load"></Icon>
      <div class="padding-l-10 padding-t-5">Loading...</div>
    </Spin>
  </div>
</template>
<script>
// 部分样式代码冗长，未作展示
export default {};
</script>
