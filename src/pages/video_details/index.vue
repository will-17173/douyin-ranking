<template>
  <div class="container">
    <div class="video-details-hd">
      <div class="hd-item">
        <div class="img">
          <img src="/static/img/5.png" mode="widthFix" alt="">
        </div>
        <div class="text">
          <div class="text-index">91.7</div>
          <div class="text-title">记住：你是公主殿下、你要是哭了。他们都该死…</div>
          <ul class="text-info">
            <li><span class="li-item1"></span>12.1万</li>
            <li><span class="li-item2"></span>4537</li>
            <li><span class="li-item3"></span>3632</li>
          </ul>
        </div>
      </div>
      <div class="hd-block">
        <div class="btns-play">播放</div>
        <div class="release-time">
          发布时间：2018-04-13  09:49:13<br>
          发布时间：2018-04-13  09:49:13
        </div>
      </div>
      <div class="hd-tag">
        <ul>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
        </ul>
      </div>
    </div>
    <div class="video-details-bd">
      <div class="video-details-t t-caster">播主</div>
      <div class="video-details-c">
        <div class="caster-info vd-c-first">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="info">
            <div class="title">大静子<span class="tag">网红美女</span></div>
            <P>抖音ID：143552456</P>
            <p>12.9w 粉丝</p>
          </div>
        </div>
      </div>
      <div class="video-details-t t-music">音乐</div>
      <div class="video-music-c">
        <div class="music-info">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="info">
            <div class="title">大静子创作的原声</div>
            <p>时长：10秒</p>
            <p>830人参与</p>
          </div>
        </div>
      </div>

      <div class="video-cahrt-t">每日新增参与人数趋势图</div>
      <div class="video-cahrt-c">
         <mpvue-echarts :echarts="echarts" :onInit="ecLineInit" canvasId="line" />
      </div>
      
      <div class="video-comments-t">全部评论  <span>64334条</span></div>
      <div class="video-comments-c">
        <div class="video-comments-item">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="info">
            <div class="name">温好</div>
            <div class="content">好听啊就是不知道歌名叫啥</div>
            <div class="time">2017-07-07  14:41</div>
            <div class="like">9846</div>
          </div>
        </div>
        <div class="video-comments-item">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="info">
            <div class="name">温好</div>
            <div class="content">好听啊就是不知道歌名叫啥</div>
            <div class="time">2017-07-07  14:41</div>
            <div class="like">9846</div>
          </div>
        </div>
        <div class="video-comments-item">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="info">
            <div class="name">温好</div>
            <div class="content">好听啊就是不知道歌名叫啥</div>
            <div class="time">2017-07-07  14:41</div>
            <div class="like">9846</div>
          </div>
        </div>
        <div class="video-comments-item">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="info">
            <div class="name">温好</div>
            <div class="content">好听啊就是不知道歌名叫啥</div>
            <div class="time">2017-07-07  14:41</div>
            <div class="like">9846</div>
          </div>
        </div>
        <div class="more">
          加载更多
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {
  .video-details-hd{
    background: #1d1e20;
    padding: 20px 15px 0;
    .hd-item{
      display: flex;
      margin-bottom: 16px;
      .img{
        width:103px;
        height:137px;
        margin-right: 15px;
        img{border:1px solid #ffffff;
          border-radius:4px;
          width:103px;
          height:137px;
        }
      }
      .text{
        flex: 1;
        font-size:12px;
        color:#999999;
        .text-index{
          font-size:24px;
          color:#facd13;
          padding: 15px 0 12px;
          &::before{
            background: url(../../common/assets/img/hot-b.png) left center no-repeat;
            background-size: 17px 23px;
            width:17px ;
            height: 23px;
            content: "";
            display: inline-block;
            margin-right: 8px;
          }
        }
        .text-title{
          font-size:14px;
          color:#ffffff;
          margin-bottom: 12px;
        }
        .text-info{
          li{ float: left; margin-right: 14px;
            .li-item1::before{
              background: url(../../common/assets/img/icon-01.png) left center no-repeat;
              background-size: 12px 10px;
              width: 12px;
              height: 10px;
              content: "";
              display: inline-block;
              margin-right: 4px;
            }
            .li-item2::before{
              background: url(../../common/assets/img/icon-02.png) left center no-repeat;
              background-size: 12px 10px;
              width: 12px;
              height: 10px;
              content: "";
              display: inline-block;
              margin-right: 4px;
            }
            .li-item3::before{
              background: url(../../common/assets/img/icon-03.png) left center no-repeat;
              background-size: 12px 10px;
              width: 12px;
              height: 10px;
              content: "";
              display: inline-block;
              margin-right: 4px;
            }
          }
        }
      }
    } 
    .hd-block{
      display: flex;
      margin-bottom: 16px;
      .btns-play{
        text-align: center;
        background:#facd13;
        border-radius:4px;
        width:104px;
        height:32px;
        line-height: 32px;
        color:#ffffff;
        font-size: 14px;
        &::before{
          background: url(../../common/assets/img/icon-play.png) left center no-repeat;
          background-size: 14px 15px;
          width: 14px;
          height: 15px;
          content: "";
          display: inline-block;
          margin-right: 6px;
        }
      }
      .release-time{flex: 1;
        padding-left: 15px;
        font-size:12px;
        color:#999999;
        line-height: 16px;
      }
    }
    .hd-tag{
      padding: 16px 0 10px;
      border-top: 1px solid #32333c;
      ul li{
        display: inline-block;
        background:#32333c;
        border-radius:2px;
        padding: 0 10px;
        height:20px;
        line-height: 20px;
        font-size:12px;
        color:#888888;
        margin:0 6px 6px 0;
      }
    }   
  }
  .video-details-bd{
    background: #24252a;
    padding: 0 15px;
    .video-details-t{
      padding: 16px 0;
      font-size:16px;
      color:#ffffff; 
      border-bottom: 1px solid #32333c;
      position: relative;
      &.t-caster::before{
        background: url(../../common/assets/img/title-caster.png) left center no-repeat;
        background-size: 16px 15px;
        width: 16px;
        height: 15px;
        content: "";
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }
      &.t-music::before{
        background: url(../../common/assets/img/title-music.png) left center no-repeat;
        background-size: 16px 16px;
        width: 16px;
        height: 16px;
        content: "";
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }
      &:after{
        background: url(../../common/assets/img/t-arrow.png) left center no-repeat;
        background-size: 6px 10px;
        width: 6px;
        height: 10px;
        content: "";
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        right: 10px;
        top: 19px;
      }
    }
    .video-details-c{
      padding: 16px 0 0;
      .caster-info{
        display: flex;
        .img{
          width:60px;
          height:60px;
          border-radius:100%;
          img{
            border:1px solid #ffffff;
            width:60px;
            height:60px;
            border-radius:100%;
          }
        }
        .info{
          flex: 1;
          padding-left: 15px;
          font-size:11px;
          color:#a7a7a9;
          .title{
            font-size:16px;
            color:#ffffff;
            margin-bottom: 8px;
            .tag{
              border:1px solid #facd13;
              border-radius:2px;
              width:54px;
              height:17px;
              line-height: 17px;
              color: #facd13;
              font-size:11px;
              text-align: center;
              margin-left: 15px;
            }
          }
          p{margin-bottom: 8px;
            &:last-child{
              margin-bottom: 0;
            }
          }
        }
      }
      
    }
    .video-music-c{
      padding: 16px 0;
      .music-info{
        display: flex;
        .img{
          border-radius:4px;
          width:59px;
          height:59px;
          img{
            border:1px solid #ffffff;
            border-radius:4px;
            width:59px;
            height:59px;
          }
        }
        .info{
          flex: 1;
          padding-left: 15px;
          font-size:11px;
          color:#a7a7a9;
          .title{
            font-size:16px;
            color:#ffffff;
            margin-bottom: 8px;
          }
          p{margin-bottom: 8px;
            &:last-child{
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .video-cahrt-t{
      font-size:12px;
      color:#ffffff;
      padding: 16px 0;
      border-bottom: 1px solid #32333c;
      border-top: 1px solid #32333c;
    }
    .video-cahrt-c{
      padding: 16px 0;
      height: 220px;
    }
    .video-comments-t{
      padding: 16px 0;
      font-size:16px;
      color:#ffffff;
      border-bottom: 1px solid #32333c;
      &::before{
        background: url(../../common/assets/img/icon-comments.png) left center no-repeat;
        background-size: 13px 13px;
        width: 13px;
        height: 13px;
        content: "";
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }
      span{
        font-size:12px;
        color:#888888;
        float: right;
      }
    }
    .video-comments-c{
      padding-bottom: 16px;
      .video-comments-item{
        display: flex;
        padding: 16px 0 0 0;
        .img{
          width: 25px;
          height: 25px;
          img{
            width: 25px;
            height: 25px; 
            border-radius: 100%;
          }
        }
        .info{
          flex: 1;
          padding:0 0 16px 9px;
          border-bottom: 1px solid #32333c;
          position: relative;
          .name{
            font-size:14px;
            color:#ffffff;
            margin-bottom: 7px;
            }
          .content{
            font-size:12px;
            color:#ffffff;
            margin-bottom: 7px;
          }
          .time{
            font-size:10px;
            color:#999999;
          }
          .like{
            position: absolute; 
            top: 16px;
            right: 0;
            font-size:10px;
            color:#a7a7a9;
            &::before{
              background: url(../../common/assets/img/icon-01.png) left center no-repeat;
              background-size: 12px 10px;
              width: 12px;
              height: 10px;
              content: "";
              display: inline-block;
              margin-right: 4px;
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
  }
}
</style>

<script>

import * as echarts from '~/js/echarts.simple.min';
import mpvueEcharts from 'mpvue-echarts';

let lineChart;

function getLineOptions() {
  return {
    backgroundColor: '#fff',
    color: ['#37A2DA'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['A商品'],
    },
    grid: {
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07'],
    },
    yAxis: {
      x: 'center',
      type: 'value',
    },
    series: [
      {
        name: 'A商品',
        type: 'line',
        smooth: true,
        data: [18, 36, 65, 30, 78, 40, 33],
      },
    ],
  };
}

export default {
  data() {
    return {};
  },

  components: {
  },

  methods: {
  },

  created() {},
  mounted() {
  },
};
</script>
