<template>
  <div class="item">
      <div class="img"><img src="/static/img/5.png" alt="" mode="widthFix"></div>
      <div class="text">
        <div class="v-title">记住：你是公主殿下、你要是哭了。他们都该死…</div>
        <div class="v-info">
          <ul>
            <li class="hot">91.7</li>
            <li class="like">12.1万</li>
          </ul>
          23小时前
        </div>
        <ul class="v-tag">
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主公主</li>
          <li>公主</li>
          <li>公主公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
          <li>公主</li>
        </ul>
      </div>
  </div>
</template>

<style lang="scss">
.video-list{
  .list{
    .item{
      padding: 16px 0;
      border-bottom: 1px solid #32333c;
      display: flex;
      .img{
          float: left; 
          margin-right: 12px;
          img{
          width: 84px;
          height: 112px;
          border: 1px solid #fff;
          border-radius: 4px;
          }
      }
      .text{
        flex: 1;
        display: inline-block;
        padding-top: 5px;
        font-size: 14px;
        color: #fff;
        .v-title{
          font-size:14px;
          color:#ffffff;
          margin:-7px 0 8px;
          }
        .v-info{
          margin-bottom: 12px;
          display: block;
          text-align: right;
          color: #888;
          li{
            font-size:16px;
            font-weight: bold;
            color:#999999;
            margin-right: 16px;
            float: left;
            &.hot{color:#facd13;}
            &.hot:before{
              background: url(../../assets/img/hot.png) left center no-repeat;
              background-size: 11px 15px;
              width: 11px;
              height: 15px;
              display:inline-block;
              content: ' ';
              vertical-align:baseline;
              margin-right: 5px;
            }
            &.like:before{
              background: url(../../assets/img/like.png) left center no-repeat;
              background-size: 16px 14px;
              width: 16px;
              height: 14px;
              display:inline-block;
              content: ' ';
              vertical-align:baseline;
              margin-right: 5px;
            }
          }
        }
        .v-tag li{ 
          background:#32333c;
          border-radius:2px;
          padding: 2px 5px;
          margin:0 5px 5px 0;
          float: left;
          font-size:12px;
          color:#888888;
        }
      }
    }
  }
}
</style>

<script>
export default {
    
}
</script>