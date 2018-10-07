<template>
  <div class="container">
    <div class="search-place">
      <div class="place" @click="gotoSearch">
        搜索播主、视频、音乐
      </div>
    </div>
    <HotVideo />
    <HotMusic />
    <Rank />
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {
  .search-place {
    padding: 30rpx;
    .place {
      padding-left: 30px;
      background:  #ffffff;
      border-radius: 16px;
      width: 100%;
      height: 32px;
      line-height: 32px;
      font-size:14px;
      color:#888888;
      box-sizing: border-box;
      position: relative;
      &:before{
        display: block;
        content: ' ';
        background: url(../../common/assets/img/search-icon.png) no-repeat;
        background-size: 16px 16px;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 8px;
        left: 10px;
      }
    }
  }
}
</style>

<script>
import HotVideo from '@/common/components/hot-video'
import HotMusic from '@/common/components/hot-music'
import Rank from '@/common/components/rank'

export default {
  data() {
    return {};
  },

  components: {
    HotVideo,
    HotMusic,
    Rank
  },

  methods: {
    gotoSearch(){
      wx.navigateTo({
        url: '/pages/search/main'
      })
    }
  },

  created() {},
  mounted() {
    console.log(this.$root.$mp);
  },
};
</script>
