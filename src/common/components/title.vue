<template>
  <div class="title">
    <div class="text">
      <i v-if="icon" :style="{'background-image': 'url(' + icon + ')'}"></i> 
      <slot name="text"></slot>
    </div>
    <div class="more" @click="visitMore">
      全部
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    display: flex;
    padding-right: 15px;
    i {
      display: inline-block;
      background-repeat: no-repeat;
      width: 16px;
      height: 16px;
      background-size: 16px 16px;
      position: relative;
      top: 2px;
      margin-right: 5px;
    }
    .text {
      flex: 1;
      color: #fff;
      font-size: 16px;
    }
    .more {
      flex: 1;
      text-align: right;
      color: #888888;
      font-size: 14px;
      background: url(../../common/assets/img/arrow.png) right center no-repeat;
      background-size: 6px 10px;
      padding-right: 10px;
    }
  }
</style>

<script>
export default {
  props: {
    moreUrl: '',
    icon: ''
  },
  methods: {
    visitMore(){
      wx.navigateTo({
        url: this.moreUrl
      })
    }
  },
  mounted(){
    console.log(this.icon)
  }
}
</script>


