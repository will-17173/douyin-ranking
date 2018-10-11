<template>
  <div class="container">
    <div class="update-time">数据更新时间：2018/04/06 13:36</div>
    <div class="music-details">
      <div class="music-details-hd">
        <div class="item">
          <div class="img"><img src="/static/img/6.png" alt="" mode="widthFix"></div>
          <div class="text">
            <div class="title">大镜子的原声</div>
            <p class="">时长：10秒</p>
            <p class="">830人参与</p>
          </div>
        </div>
      </div>
      <div class="music-details-bd">
        <div class="chart-title">
          每日新增参与人数趋势图
        </div>
        <div class="chart-area">
          <img src="/static/img/7.png" alt="" mode="widthFix">
        </div>
        <div class="chart-title">
          参与人数行业分布图
        </div>
        <div class="chart-area">
          <img src="/static/img/7.png" alt="" mode="widthFix">
        </div>
      </div>

      <VideoWidget />
    </div>
   
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {
  .update-time{
    background:#24252a;
    height:25px;
    line-height: 25px;
    text-align: center;
    font-size:12px;
    color:#ffffff;
    border-bottom: 1px solid #32333c;
    opacity:0.6;
  }
  .music-details{
    .music-details-hd{
      padding: 0 15px;
      .item{
        border-bottom: 1px solid #32333c;
        padding: 12px 0;
        display: flex;
        .img{
          width: 80px;
          height: 80px;
          margin-right: 15px;
          img{
            width: 80px;
            height: 80px;
            border: 1px solid #fff;
            border-radius: 4px;
          }
        }
        .text{
          flex: 1;
          font-size: 12px;
          color:#ffffff;
          padding: 8px 0;
          .title{font-size:16px; padding-bottom: 8px;}
          p{opacity:0.6; padding-bottom: 8px;}
        }
      }
    }
    .music-details-bd{
      .chart-title{
        border-bottom: 1px solid #32333c;
        padding: 15px 0 10px;
        margin: 0 15px;
        font-size:12px;
        color:#ffffff;
      }
      .chart-area{
        min-height: 220px;
        padding: 0 15px;
        img{ width: 350px;
        height: 210px;}
      }
    }

  }
}

@media all and (max-width: 359px){
  .container .navigation .plist .item{
    width: 16.66%;
  }
}
</style>

<script>
import MusicList from '@/common/components/music/list'
import VideoWidget from '@/common/components/video-widget'

export default {
  data() {
    return {

    };
  },

  components: {
    MusicList,
    VideoWidget
  },

  methods: {

  },

  created() {

  },
  mounted() {

  },
};
</script>
