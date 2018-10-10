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
      <div class="viedo-hot">
        <div class="title">
          热门视频
          <span>全部2342</span>
        </div>
        <div class="hot-tab">
          <ul>
            <li class="active">最热</li>
            <li>最新</li>
          </ul>
        </div>
        <div class="content">
          <div class="viedo-item">
            <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
            <div class="text">10月8日</div>
            <div class="tag">99.9</div>
          </div>
          <div class="viedo-item">
            <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
            <div class="text">10月8日</div>
            <div class="tag">99.9</div>
          </div>
          <div class="viedo-item">
            <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
            <div class="text">10月8日</div>
            <div class="tag">99.9</div>
          </div>
          <div class="viedo-item">
            <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
            <div class="text">10月8日</div>
            <div class="tag">99.9</div>
          </div>
          <div class="viedo-item">
            <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
            <div class="text">10月8日</div>
            <div class="tag">99.9</div>
          </div>
          <div class="viedo-item">
            <div class="img"><img src="/static/img/1.png" alt="" mode="widthFix"></div>
            <div class="text">10月8日</div>
            <div class="tag">99.9</div>
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
  .music-details{
    padding: 0 15px;
    .music-details-hd{
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
        font-size:12px;
        color:#ffffff;
      }
      .chart-area{
        min-height: 220px;
        img{ width: 350px;
        height: 210px;}
      }
    }
     .viedo-hot {
        
        .title{ padding: 15px 0;
          font-size:16px;
          color:#ffffff;
          border-bottom: 1px solid #32333c;
          &::before{
            background: url(../../common/assets/img/title-music.png) no-repeat;
            background-size: 14px 14px;
            width: 14px;
            height: 14px;
            display: inline-block;
            vertical-align:middle;
            content: "";
            }
          span{
            float: right;
            color: #a1a1a3;
            font-size:12px; 
          }
        }
        .hot-tab{
          padding: 15px 0;
          font-size:14px;
          color:#a1a2a2;
          margin-bottom: 15px;
          li{ margin-right: 15px;
          float: left;
          padding-bottom: 8px;
          &.active{
            color:#facd13;
            border-bottom: 2px solid #facd13;
          }
          }

        }
        .content{
          padding-top: 15px;
          .viedo-item{
            display: inline-block;
            margin:0 15px 15px 0;
            position: relative;
            &:nth-child(3n){ margin-right: 0;}
            .img{
              img{
                width: 104px;
                height: 137px;
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
}

@media all and (max-width: 359px){
  .container .navigation .plist .item{
    width: 16.66%;
  }
}
</style>

<script>
import MusicList from '@/common/components/music/list'

export default {
  data() {
    return {

    };
  },

  components: {
    MusicList
  },

  methods: {

  },

  created() {

  },
  mounted() {

  },
};
</script>
