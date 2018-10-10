<template>
    <div class="item" @click="viewDetail(1)">
      <div class="img"><img src="/static/img/6.png" alt="" mode="widthFix"></div>
      <div class="text">
        <div class="title">大镜子的原声</div>
        <p class="">时长：10秒</p>
        <p class="">830人参与</p>
      </div>
    </div>
</template>

<style lang="scss">
.music-list{
  .item{
    border-bottom: 1px solid #32333c;
    padding: 12px 0;
    display: flex;
    .img{
      width: 80px;
      height: 80px;
      border: 1px solid #fff;
      margin-right: 15px;
      border-radius: 4px;
      img{
        width: 80px;
        height: 80px;
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
</style>



<script>
export default {
    methods: {
      viewDetail(id){
        wx.navigateTo({
          url: `/pages/music_details/main?id=${id}`
        })
      }
    }
}
</script>