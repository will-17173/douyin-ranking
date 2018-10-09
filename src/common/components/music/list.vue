<template>
    <div class="music-list">
      <div class="list-head">
        <div class="title"><div class="name">音乐</div>64334条</div>
        <div class="time">数据更新时间：2018/04/06 13:36</div>
      </div>
      <Item />
    </div>
</template>

<style lang="scss">
.music-list{
  padding: 0 15px; 
  .list-head{
    padding: 16px 0;
    font-size:12px;
    color:#888888;
    border-bottom: 1px solid #32333c;
    .title{float: left;
      .name{
        font-size:16px;
        line-height: 16px;
        color:#ffffff;
        margin-right: 8px;
        display: inline-block;
      }
    }
    .time{text-align: right;}
  }
}
</style>



<script>
import Item from "./item";
export default {
  components: {
    Item
  }
}
</script>
