<template>
  <div class="item" @click="viewDetail(1)">
     <div class="index index1">01</div>
     <div class="avatar"><img src="/static/img/4.png" alt="" mode="widthFix"></div>
     <div class="name">❤️会说话的刘二豆❤️</div>
     <div class="rate">91.7</div>
  </div>
</template>

<style lang="scss">
.rank-list{
  .item{
    display: flex;
    border-bottom: 1px solid #32333c;
    padding: 12px 0;
    height: 35px;
    line-height: 35px;
    color: #fff;
    font-size: 12px;
    .index{
      width: 40px;
      color: #fff;
      font-size: 12px;
      font-style: italic;
      &.index1, &.index2, &.index3{
      font-size:18px;
      color:#facd13;
      font-weight: bold;
      }
    }
    .avatar{
      width: 35px;
      margin-right: 10px;
      img{
        width: 35px;
        height: 35px;
      }
    }
    .name{
      flex: 1;
      color: #fff;
      font-size: 12px;
    }
    .rate{
      width:80px;
      font-size: 16px;
      color:#facd13;
      font-weight: bold;
      text-align: right;
      &::before{
        background: url(../../assets/img/hot.png) left center no-repeat;
        background-size: 11px 15px;
        width: 11px;
        height: 15px;
        display:inline-block;
        content: ' ';
        vertical-align:baseline;
        margin-right: 5px;
      }
    }         
  }
}
</style>

<script>
export default {
    methods: {
      viewDetail(id){
        wx.navigateTo({
          url: `/pages/rank_details/main?id=${id}`
        })
      }
    }
}
</script>