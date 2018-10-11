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
            <li class="li-item1">12.1万</li>
            <li class="li-item2">4537</li>
            <li class="li-item3">3632</li>
          </ul>
        </div>
      </div>
      <div class="44">2222</div>
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

    </div>
  </div>
</template>

<style lang="scss">
@import '@/common/scss/style.scss';

.container {
  .video-details-hd{
    background: #1d1e20;
    padding: 20px 15px;
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
          padding: 20px 0 12px;
          &::before{
            background: url(../../common/assets/img/hot-b.png) left center no-repeat;
            background-size: 17px 23px;
            width:17px ;
            height: 23px;
            content: "";
            display: inline-block;
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
            }
            .li-item2::before{
              background: url(../../common/assets/img/icon-02.png) left center no-repeat;
              background-size: 11px 9px;
              width: 11px;
              height: 9px;
              content: "";
              display: inline-block;
            }
            .li-item3::before{
              background: url(../../common/assets/img/icon-03.png) left center no-repeat;
              background-size: 11px 9px;
              width: 11px;
              height: 9px;
              content: "";
              display: inline-block;
            }
          }
        }
      }
    }  
    .hd-tag{
      padding: 16px 0 10px;
      ul li{
        display: inline-block;
        background:#32333c;
        border-radius:2px;
        padding: 0 10px;
        height:20px;
        line-height: 20px;
        color: #fff;
        margin:0 6px 6px 0;
      }
    }   
  }
  .video-details-bd{
    background: #24252a;
    padding: 0 15px;
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
