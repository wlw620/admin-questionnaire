
<template>
  <div v-if="myDisplay" class="float-layer">
    <div class="float-layer-content">
      <h2 class="float-layer-title">
        <Divider orientation="left"><span>{{ myTitle }}</span></Divider>
      </h2>
      <slot></slot>
    </div>
    <div class="float-layer-mask" @click="closeFloatLayer"></div>
  </div>
</template>

<style lang="less">
  .float-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    .float-layer-title {
      height: 40px;
      line-height: 40px;
      span {
        color: #17233d;
        font-size: 16px;
        font-weight: normal;
      }
    }
    .float-layer-mask {
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }
    .float-layer-content {
      padding: 10px;
      background: #fff;
      box-shadow: -2px 0px 20px rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      padding-top: 60px;
      z-index: 2;
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
    }
  }
</style>

<script>
  export default {
    props: ['title', 'display'],
    computed: {
      myTitle() {
        return this.title
      },
      myDisplay() {
        return this.display
      }
    },

    methods: {
      closeFloatLayer() {
        console.error("eventClose");
        this.$emit('close')
      }
    },
  };
</script>
