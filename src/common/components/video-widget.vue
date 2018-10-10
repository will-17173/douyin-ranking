<template>
  <div class="viedo-hot">
    <div class="title">
      热门视频
      <span>全部2342</span>
    </div>
    <div class="hot-tab">
      <ul>
        <li :class="{active: currentTab === 0}" @click="switchTab(0)">最热</li>
        <li :class="{active: currentTab === 1}" @click="switchTab(1)">最新</li>
      </ul>
    </div>
    <div class="content">
      <div class="item">
        <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
        <div class="text">10月8日</div>
        <div class="tag">99.9</div>
      </div>
      <div class="item">
        <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
        <div class="text">10月8日</div>
        <div class="tag">99.9</div>
      </div>
      <div class="item">
        <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
        <div class="text">10月8日</div>
        <div class="tag">99.9</div>
      </div>
      <div class="item">
        <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
        <div class="text">10月8日</div>
        <div class="tag">99.9</div>
      </div>
      <div class="item">
        <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
        <div class="text">10月8日</div>
        <div class="tag">99.9</div>
      </div>
      <div class="item">
        <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
        <div class="text">10月8日</div>
        <div class="tag">99.9</div>
      </div>
    </div>
    <div class="more">
      加载更多
    </div>
  </div>
</template>

<style lang="scss" scoped>
.viedo-hot {
  padding: 0 15px;
  .title {
    padding: 15px 0;
    font-size: 16px;
    color: #ffffff;
    border-bottom: 1px solid #32333c;
    &::before {
      background: url(../../common/assets/img/title-music.png) no-repeat;
      background-size: 14px 14px;
      width: 14px;
      height: 14px;
      display: inline-block;
      vertical-align: middle;
      content: '';
    }
    span {
      float: right;
      color: #a1a1a3;
      font-size: 12px;
    }
  }
  .hot-tab {
    padding: 15px 0;
    font-size: 14px;
    color: #a1a2a2;
    margin-bottom: 15px;
    li {
      margin-right: 15px;
      float: left;
      padding-bottom: 8px;
      &.active {
        color: #facd13;
        border-bottom: 2px solid #facd13;
      }
    }
  }
  .content {
    padding-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      display: inline-block;
      margin-bottom: 15px;
      position: relative;
      flex: 0 0 33.33%;
      &:nth-child(3n) {
        .img{
          text-align: right;
        }
      }
      &:nth-child(3n-1) {
        .img{
          text-align: center;
        }
      }


      .img {
        img {
          width: 104px;
          height: 137px;
          border: 1px solid #fff;
          border-radius: 4px;
        }
      }
      .text {
        padding-top: 5px;
        font-size: 14px;
        color: #fff;
      }
      .tag {
        background: #facd13;
        width: 42px;
        height: 18px;
        position: absolute;
        top: 0;
        left: 0;
        border-top-left-radius: 4px;
        border-bottom-right-radius: 4px;
        font-size: 12px;
        color: #fff;
        line-height: 18px;
        padding-left: 14px;
        box-sizing: border-box;
        &:before {
          content: ' ';
          width: 7px;
          height: 10px;
          background: url(../../common/assets/img/fire.png) no-repeat;
          background-size: 7px 10px;
          position: absolute;
          top: 4px;
          left: 4px;
        }
      }
    }
  }
  .more{
    color:#999999;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 14px;
  }
}
</style>

<script>
export default {
  data(){
    return {
      currentTab: 0
    }
  },
  methods: {
    switchTab(i){
      this.currentTab = i;
    }
  }
};
</script>

