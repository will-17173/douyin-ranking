<template>
  <div class="hot">
    <Title :icon="iconUrl" :moreUrl="moreUrl">
      <template slot="text">热门视频</template>
    </Title>
    <div class="content">
      <scroll-view scroll-x class="scroll-view">
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
      </scroll-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/scss/style.scss';
.hot {
  padding: 0 0 15px 15px;
  border-bottom: 1px solid #32333c;
  .content{
    padding-top: 15px;
    .scroll-view{
      white-space: nowrap;
      .item{
        display: inline-block;
        margin-right: 15px;
        position: relative;
        .img{
          img{
            width: 84px;
            height: 112px;
            border: 1px solid #fff;
            border-radius: 4px;
          }
        }
        .text{
          padding-top: 5px;
          font-size: 14px;
          color: #fff;
        }
        .tag{
          background:#facd13;
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
          &:before{
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

  }
}
</style>

<script>
import Title from '@/common/components/title'

export default {
  data(){
    return {
      iconUrl: '/static/img/title-video.png',
      moreUrl: '/pages/index/main'
    }
  },
  components: {
    Title
  }
};
</script>