<template>
  <div class="container">
    <div class="update-time">数据更新时间：2018/04/06 13:36</div>
    <div class="details-content">
      <div class="details-head">
        <div class="head-l">
          <div class="img"><img src="/static/img/4.png" mode="widthFix" alt=""></div>
          <div class="category">网红美女排行榜</div>
          <div class="rank">第391名</div>
        </div>
        <div class="head-r">
          <div class="title">大静子<span class="tag">网红美女</span></div>
          <dl class="a-info">
            <dd>抖音ID：143552456</dd>
            <dd>性别：女</dd>
            <dd>地区：河南许昌</dd>
            <dd>年龄：18</dd>
          </dl>
          <div class="intro">简介：本宝宝展示还没有想好个性的签名</div>
        </div>
      </div>

      <div class="details-body">
        <div class="info-list">
          <dl>
            <dt>西瓜指数</dt>
            <dd><span class="percentage">678.7</span></dd>
          </dl>
          <dl>
            <dt>昨日播放排名打败</dt>
            <dd><span class="percentage">36.7%</span>的播主</dd>
          </dl>
          <dl>
            <dt>近一周播放排名打败</dt>
            <dd><span class="percentage">36.7%</span>的播主</dd>
          </dl>
        </div>

        <div class="info-results">
          <ul>
            <li><span class="numerical">35.5w</span> 粉丝   <span class="results">104个作品</span></li>
            <li><span class="numerical">632.5w</span> 总播放  <span class="results">平均作品播放：6.2W</span></li>
            <li><span class="numerical">63.5w</span> 总点赞  <span class="results">平均作品点赞：61k</span></li>
            <li><span class="numerical">17.3w</span> 总评论  <span class="results">平均作品评论：16k</span></li>
          </ul>
        </div>
        
        <div class="chart-box">
          <div class="details-tab">
            <div class="tab-item" :class="{active: chartCurrentTab === 0}" @click="switchChartTab(0)">
              粉丝增量趋势图
            </div>
            <div class="tab-item" :class="{active: chartCurrentTab === 1}" @click="switchChartTab(1)">
              评论增量趋势图
            </div>
            <div class="tab-item" :class="{active: chartCurrentTab === 2}" @click="switchChartTab(2)">
              转发增量趋势图
            </div>
          </div>
          <div class="chart-area">
            <mpvue-echarts :echarts="echarts" :onInit="ecLineInit" canvasId="line" />
          </div>
        </div>

        <div class="fans-box">

          <div class="fans-title">粉丝画像</div>
          <div class="details-tab">
            <div class="tab-item" :class="{active: fansCurrentTab === 0}" @click="switchFansTab(0)">
              性别年龄分布
            </div>
            <div class="tab-item" :class="{active: fansCurrentTab === 1}" @click="switchFansTab(1)">
              地域分布
            </div>
            <div class="tab-item" :class="{active: fansCurrentTab === 2}" @click="switchFansTab(2)">
              星座分布
            </div>
          </div>

          <div class="gender-section" v-if="fansCurrentTab === 0">
            <div class="gender-content">
              <div class="gender-icons">
                  <div class="icons text-left"></div>
                  <div class="icons text-right"></div>
              </div>
              <div class="scale">
                  <div class="scale-male" style="width: 55.5%;"></div>
              </div>
              <div class="gender-text">
                  <div class="text text-left">
                      男
                      <br><span>57.3%</span>
                  </div>
                  <div class="text text-right">
                      女
                      <br><span>57.3%</span>
                  </div>
              </div>
              <div style="height: 200px;">
                <mpvue-echarts :echarts="echarts" :onInit="ecPieInit" canvasId="pie" />
              </div>
            </div>
            <div class="btns-share">生成图片分享到朋友圈</div>
          </div>
          
          <div class="location-section" v-if="fansCurrentTab === 1">
            <table class="location-table">
              <thead>
                <tr>
                    <td>名称</td>
                    <td>占比</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
                <tr>
                    <td>广东</td>
                    <td>10.39%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="zodiac-section" v-if="fansCurrentTab === 2">
            <ul>
              <li>
                <div class="zodiac-name"><span class="icon icon-taurus"></span>金牛座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 100%;"></div>
                </div>
                <div class="zodiac-percent">100.00%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-gemini"></span>双子座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-pisces"></span>双鱼座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-virgo"></span>处女座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-libra"></span>天秤座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-scorpio"></span>天蝎座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-cancer"></span>巨蟹座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-sagittarius"></span>射手座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-capricorn"></span>摩羯座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-aquarius"></span>水瓶座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-Aries"></span>牧羊座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>
              <li>
                <div class="zodiac-name"><span class="icon icon-leo"></span>狮子座</div>
                <div class="zodiac-scale">
                    <div class="scale-inner" style="width: 33%;"></div>
                </div>
                <div class="zodiac-percent">10.39%</div>
              </li>  
            </ul>
          </div>

        </div>
        
        <VideoWidget />

      </div>
      
    </div>
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

@keyframes easeHeight {
  0% {
    width: 0;
  }

  100% {
    height: 100%;
  }
}

.container {
  .update-time {
    background: #24252a;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    border-bottom: 1px solid #32333c;
    opacity: 0.6;
  }
  .details-content {
    .details-head {
      padding: 15px 0;
      display: flex;
      .head-l {
        width: 128px;
        border-right: 1px solid #32333c;
        text-align: center;
        .img {
          border: 1px solid #ffffff;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          margin: 0 auto 15px;
          img {
            width: 70px;
            height: 70px;
          }
        }
        .category {
          font-size: 11px;
          color: #ffffff;
          padding-bottom: 5px;
        }
        .rank {
          font-size: 14px;
          color: #facd13;
        }
      }
      .head-r {
        flex: 1;
        padding: 8px 25px 0 25px;
        .title {
          font-size: 16px;
          color: #ffffff;
          margin-bottom: 10px;
          .tag {
            border: 1px solid #facd13;
            border-radius: 2px;
            padding: 0 5px;
            font-size: 12px;
            color: #facd13;
            line-height: 18px;
            margin-left: 8px;
          }
        }
        .a-info {
          font-size: 11px;
          color: #ffffff;
          line-height: 22px;
          margin-bottom: 20px;
          opacity: 0.6;
          dd:nth-child(n) {
            width: 60%;
            display: inline-block;
          }
          dd:nth-child(2n) {
            width: 40%;
            display: inline-block;
          }
        }
        .intro {
          font-size: 11px;
          color: #ffffff;
        }
      }
    }
    .details-body {
      .info-list {
        border-top: 1px solid #32333c;
        margin: 0 15px;
        font-size: 12px;
        color: #a7a8aa;
        border-bottom: 1px solid #32333c;
        display: flex;
        padding: 16px 0;
        text-align: left;
        dl {
          dt {
            margin-bottom: 8px;
          }
          dd {
            color: #fff;
            .percentage {
              font-size: 21px;
              color: #facd13;
              margin-right: 5px;
            }
          }
          &:nth-child(1) {
            width: 100px;
          }
          &:nth-child(2) {
            flex: 1;
          }
          &:nth-child(3) {
            width: 110px;
          }
        }
      }
      .info-results {
        border-bottom: 1px solid #32333c;
        padding: 0 15px;
        font-size: 12px;
        color: #fff;
        li {
          padding: 10px 0;
          border-bottom: 1px solid #32333c;
          .numerical {
            font-size: 16px;
            margin-right: 5px;
          }
          .results {
            color: #a7a8aa;
            float: right;
          }
          &:last-child {
            border-bottom: none;
          }
        }
      }
      .details-tab {
        display: flex;
        padding: 10px 15px;
        .tab-item {
          text-align: center;
          color: #949596;
          height: 30px;
          line-height: 30px;
          padding-bottom: 5px;
          font-size: 14px;
          &:nth-child(1) {
            width: 100px;
          }
          &:nth-child(2) {
            flex: 1;
          }
          &:nth-child(3) {
            width: 100px;
          }
          &.active {
            color: #facd13;
            border-bottom: 2px solid #facd13;
          }
        }
      }
      .chart-area {
        height: 200px;
      }
      .fans-box {
        padding: 0 15px;
        .details-tab {
          padding: 10px 0;
        }
        .fans-title {
          font-size: 16px;
          color: #ffffff;
          border-bottom: 1px solid #32333c;
          padding-bottom: 16px;
          &::before {
            background: url(../../common/assets/img/fans-icon.png) no-repeat;
            background-size: 16px 16px;
            width: 16px;
            height: 16px;
            margin-right: 8px;
          }
        }
      }
      .gender-section {
        padding-top: 20px;
        max-width: 232px;
        margin: 0 auto 25px;
        .gender-content {
          margin-bottom: 20px;
        }
        .gender-icons {
          display: flex;
          .icons {
            flex: 1;
          }
          &::before {
            background: url(../../common/assets/img/male.png) no-repeat;
            background-size: 15px 38px;
            width: 15px;
            height: 38px;
            content: '';
            display: inline-block;
          }
          &::after {
            background: url(../../common/assets/img/female.png) no-repeat;
            background-size: 18px 38px;
            width: 18px;
            height: 38px;
            content: '';
            display: inline-block;
          }
        }
        .scale {
          background: rgba(255, 255, 255, 0.6);
          width: 100%;
          height: 16px;
          margin: 20px 0 6px 0;
        }
        .scale .scale-male {
          background: #facd13;
          height: 16px;
          animation: easeHeight 0.8s 0s;
          position: relative;
          &::after {
            background: #4e4e4e;
            width: 1px;
            height: 30px;
            content: '';
            display: inline-block;
            position: absolute;
            right: 0;
            top: -7px;
          }
        }
        .gender-text {
          font-size: 13px;
          display: flex;
          color: #949596;
          .text {
            flex: 1;
            span {
              font-size: 20px;
            }
          }
          .text-left {
            span {
              color: #facd13;
            }
          }
          .text-right {
            text-align: right;
          }
        }
      }
      .btns-share {
        background: #facd13;
        border: 1px solid rgba(5, 5, 5, 0.08);
        border-radius: 5px;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        margin-bottom: 8px;
      }
      .location-table {
        color: #949596;
        font-size: 12px;
        td {
          text-align: center;
          display: inline-block;
          width: 40%;
          height: 37px;
          line-height: 37px;
          &:first-child {
            color: #fff;
            font-size: 16px;
            text-align: left;
            padding-left: 10%;
          }
          &:last-child {
            text-align: right;
            padding-right: 10%;
          }
        }
        thead tr,
        tbody tr {
          border-bottom: 1px solid #32333c;
        }
      }

      .zodiac-section {
        padding-top: 15px;
        ul li {
          padding: 15px 0;
          display: flex;
          border-bottom: 1px solid #32333c;
          .zodiac-name {
            width: 70px;
            color: #facd13;
            font-size: 14px;
            .icon {
              background: url(../../common/assets/img/icon-zodiac.png) no-repeat;
              background-size: 192px 16px;
              width: 16px;
              height: 16px;
              display: inline-block;
              position: relative;
              top: 3px;
            }
            .icon-taurus {
              background-position: -96px 0;
            }
            .icon-gemini {
              background-position: -112px 0;
            }
            .icon-pisces {
              background-position: -128px 0;
            }
            .icon-virgo {
              background-position: -160px 0;
            }
            .icon-libra {
              background-position: -144px 0;
            }
            .icon-scorpio {
              background-position: -176px 0;
            }
            .icon-cancer {
              background-position: -16px 0;
            }
            .icon-sagittarius {
              background-position: 0 0;
            }
            .icon-capricorn {
              background-position: -32px 0;
            }
            .icon-aquarius {
              background-position: -64px 0;
            }
            .icon-Aries {
              background-position: -80px 0;
            }
            .icon-leo {
              background-position: -64px 0;
            }
          }
          .zodiac-scale {
            flex: 1;
            background: #24252a;
            width: 100%;
            height: 13px;
            margin-top: 5px;
            .scale-inner {
              background: #f9cc31;
              height: 13px;
              animation: easeHeight 0.8s 0s;
            }
          }
          .zodiac-percent {
            width: 60px;
            line-height: 3px;
            text-align: right;
            color: #fff;
            font-size: 12px;
          }
        }
      }


    }
  }
}
</style>

<script>
import * as echarts from '~/js/echarts.simple.min';
import mpvueEcharts from 'mpvue-echarts';
import VideoWidget from '@/common/components/video-widget'

let lineChart, pieChart;

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
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
function getPieOptions() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: '',
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };
}

export default {
  data() {
    return {
      fansCurrentTab: 0,
      chartCurrentTab: 0,
      echarts,
      ecLineInit: function(canvas, width, height) {
        lineChart = echarts.init(canvas, null, {
          width: width,
          height: height,
        });
        canvas.setChart(lineChart);
        lineChart.setOption(getLineOptions());
        return lineChart;
      },
      ecPieInit: function(canvas, width, height) {
        pieChart = echarts.init(canvas, null, {
          width: width,
          height: height,
        });
        canvas.setChart(pieChart);
        pieChart.setOption(getPieOptions());
        return pieChart;
      },
    };
  },

  components: {
    mpvueEcharts,
    VideoWidget
  },

  methods: {
    switchFansTab(i) {
      this.fansCurrentTab = i;
    },
    switchChartTab(i) {
      this.chartCurrentTab = i;
    },
  },

  created() {},
  mounted() {},
};
</script>
