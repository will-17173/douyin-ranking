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
            <div class="tab-item active">
              粉丝增量趋势图
            </div>
            <div class="tab-item">
              评论增量趋势图
            </div>
            <div class="tab-item">
              转发增量趋势图
            </div>
          </div>
          <div class="chart-area">

          </div>
        </div>

        <div class="fans-box">
          <div class="fans-title">粉丝画像</div>
          <div class="details-tab">
            <div class="tab-item active">
              性别年龄分布
            </div>
            <div class="tab-item">
              地域分布
            </div>
            <div class="tab-item">
              星座分布
            </div>
          </div>
          <div class="gender-section">
              <div class="section-content">
                  <div class="gender-icons">
                      <div class="text-left">
                          <img src="images/video/male.png" alt="">
                      </div>
                      <div class="text-right">
                          <img src="images/video/female.png" alt="">
                      </div>
                  </div>
                  <div class="scale">
                      <div class="scale-male" style="width: 55.5%;"></div>
                  </div>
                  <div class="gender-text">
                      <div class="">
                          男
                          <br>57.3%
                      </div>
                      <div class="text-right">
                          女
                          <br>57.3%
                      </div>
                  </div>
              </div>
          </div>
        </div>

      </div>
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
  .details-content{
    .details-head{ 
      padding: 15px 0;
      display: flex;
      .head-l{
        width: 128px;
        border-right: 1px solid #32333c;
        text-align: center;
        .img{border:1px solid #ffffff;
          width:70px;
          height:70px;
          border-radius:100%;
          margin: 0 auto 15px;
          img{
            width:70px;
            height:70px;
          }
        }
        .category{
          font-size:11px;
          color:#ffffff;
          padding-bottom: 5px;
          }
        .rank{
          font-size:14px;
          color:#facd13;
          }
      }
      .head-r{
        flex: 1;
        padding:8px 25px 0 25px;
        .title{
          font-size:16px;
          color:#ffffff;
          margin-bottom: 10px;
          .tag{
          border:1px solid #facd13;
          border-radius:2px;
          padding:0 5px;
          font-size:12px;
          color:#facd13;
          line-height: 18px;
          margin-left: 8px;
          }
        }
        .a-info{font-size:11px;
          color:#ffffff;
          line-height:22px;
          margin-bottom: 20px;
          opacity:0.6;
          dd:nth-child(n){
            width: 60%;
            display: inline-block;
          }
          dd:nth-child(2n){
            width:40%;
            display: inline-block;
          }
        }
        .intro{
          font-size:11px;
          color:#ffffff;
        }
      }
    }
    .details-body{
      .info-list{
        border-top: 1px solid #32333c; 
        margin: 0 15px;
        font-size:12px;
        color:#a7a8aa;
        border-bottom: 1px solid #32333c; 
        display: flex;
        padding: 16px 0;
        text-align: left;
        dl{
          dt{ margin-bottom: 8px;}
          dd{ color: #fff;
            .percentage{
              font-size:21px;
              color:#facd13;
              margin-right: 5px;
            }
          }
          &:nth-child(1){ width: 100px;} 
          &:nth-child(2){ flex: 1;}
          &:nth-child(3){ width: 110px;}
        }  
      }
      .info-results{
        border-bottom: 1px solid #32333c; 
        padding: 0 15px;
        font-size: 12px; 
        color:#fff;
        li{
          padding: 10px 0;
          border-bottom: 1px solid #32333c; 
          .numerical{
            font-size:16px;
            margin-right: 5px;
          }
          .results{
            color:#a7a8aa;
            float: right;
          }
          &:last-child{border-bottom: none;}
        }
        
      }
      .details-tab{
        display: flex;
        padding:10px 15px;
        .tab-item{
          text-align: center;
          color: #949596;
          height: 30px;
          line-height: 30px;
          padding-bottom: 5px;
          font-size: 14px;
          &:nth-child(1){ width: 100px;}
          &:nth-child(2){ flex:1;}
          &:nth-child(3){ width: 100px;}
          &.active{
            color:#facd13;
            border-bottom: 2px solid #facd13;
          }
        }
      }
      .chart-area{ height: 200px;}
      .fans-box{ 
        border-bottom: 1px solid #32333c;
        padding: 0 15px;
        .fans-title{
          font-size:16px;
          color:#ffffff;
          &::before{
            background: url(../../common/assets/img/fans-icon.png) no-repeat;
            background-size: 16px 16px;
            width: 16px;
            height: 16px;
            margin-right: 8px;
          }
        }
      }
      .gender-section {
        height: 150px;
        .gender-icons {
          padding-top: 30px;
          margin: 0;
        }
        .scale {
          background: #95de64;
          width: 100%;
          height: 13px;
          margin-top: 20px;
        }
        .scale .scale-male {
          background: #52c41a;
          height: 13px;
          animation: easeHeight 0.8s 0s;
        }
      }
    }
  }
  
}
</style>

<script>

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
